import * as THREE from 'three';
import { Track, waveHeight } from '../world/Track.js';
import { Water } from '../world/Water.js';
import { Environment } from '../world/Environment.js';
import { RaceObjects } from '../world/RaceObjects.js';
import { JetSki } from './JetSki.js';
import { Player } from './Player.js';
import { Opponent, PROFILES } from './AI.js';
import { Effects } from './Effects.js';
import { AudioEngine } from './Audio.js';
import { Input } from './Input.js';
import { UI } from '../ui/UI.js';
import { Progress } from '../core/Progress.js';
import { PALETTES, clamp, damp, formatTime, lerp, ordinal } from '../core/utils.js';

const UP = new THREE.Vector3(0, 1, 0);
const TMP_A = new THREE.Vector3();
const TMP_B = new THREE.Vector3();
const TMP_C = new THREE.Vector3();

function wrappedCrossed(a, b, target) {
  const forward = ((b - a) % 1 + 1) % 1;
  const toTarget = ((target - a) % 1 + 1) % 1;
  return toTarget > 0 && toTarget <= forward + 0.00001;
}

export class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.progress = new Progress();
    this.state = 'boot';
    this.mode = 'quick';
    this.careerEvent = null;
    this.laps = 3;
    this.rivals = 5;
    this.currentRace = null;
    this.controlScheme = this.progress.settings.control;
    this.quality = this.progress.settings.quality;
    this.worldTime = 0;
    this.menuTime = 0;
    this.raceTime = 0;
    this.lapStart = 0;
    this.lapTimes = [];
    this.timeScale = 1;
    this.slowmoTimer = 0;
    this.shake = 0;
    this.resultDelay = 0;
    this.pendingResult = null;
    this.playerPlace = 1;
    this.hudTimer = 0;
    this.menuLook = new THREE.Vector3();
    this.cameraLook = new THREE.Vector3();
    this.fpsAccum = 0;
    this.fpsFrames = 0;
    this.fps = 60;
    this.pixelRatio = 1;
    this.qualityScale = 1;
    this.startingRace = false;
    this.finishOrbit = 0;

    this.setupRenderer();
    this.setupWorld();
    this.setupRacers();
    this.setupServices();
    this.setupCamera();
    this.setupEvents();

    this.enterMenu(true);
    this.setQuality(this.quality);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && (this.state === 'racing' || this.state === 'countdown')) this.pause();
    });

    this.clock = new THREE.Clock();
    this.startLoop();

    const bar = document.getElementById('loadingBar');
    if (bar) bar.style.width = '100%';
    setTimeout(() => {
      document.getElementById('loading')?.classList.add('hidden');
      this.ui.showMenu();
      this.ui.hideResults();
    }, 550);

    window.__riverRush = this;
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
      alpha: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.04;
    this.renderer.setClearColor('#0a2c27');
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2('#b9dfc6', 0.00165);
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 2400);
  }

  setupWorld() {
    this.track = new Track();
    this.effects = new Effects(this.scene);
    this.water = new Water(this.track);
    this.scene.add(this.water.group);
    this.environment = new Environment(this.scene, this.track);
    this.objects = new RaceObjects(this.scene, this.track);
    this.applyPalette('morning');
  }

  playerModel() {
    const ski = this.progress.selectedJetSki();
    return new JetSki({
      c1: ski.c1,
      c2: ski.c2,
      accent: ski.accent,
      trim: ski.trim,
      rider: true,
      riderColor: ski.c1,
      helmet: '#f8f5e6',
    });
  }

  setupRacers() {
    this.player = new Player(this.track, this.effects);
    this.player.applyPerformance(this.progress.performance());
    this.player.setModel(this.playerModel());
    this.player.model.addTo(this.scene);
    this.player.reset(this.laps);

    this.opponents = [];
    for (let i = 0; i < 5; i++) {
      const p = PROFILES[i];
      const model = new JetSki({
        c1: p.c1, c2: p.c2, accent: p.accent, trim: p.trim,
        rider: true, riderColor: p.riderColor, helmet: p.helmet,
      });
      model.addTo(this.scene);
      model.group.visible = false;
      model.shadow.visible = false;
      const ai = new Opponent(i, this.track, this.effects, model);
      ai.reset(this.laps, 1, i);
      this.opponents.push(ai);
    }
  }

  setupServices() {
    this.input = new Input({ onPause: () => this.pause() });
    this.audio = new AudioEngine(this.progress);
    this.ui = new UI(this);

    this.player.events = {
      onCheckpoint: (n, total) => {
        this.audio.ui();
        this.ui.checkpointToast(`CHECKPOINT ${n}/${total}`);
        this.haptic(10);
      },
      onLap: (lap, lapTime) => {
        if (lap >= this.laps) return;
        this.lapTimes.push(lapTime);
        this.audio.lap();
        this.ui.showRaceMessage(`LAP ${lap + 1}`, `LAP TIME ${formatTime(lapTime)}`, 1500);
      },
      onFinish: (time) => this.finishRace(time),
      onHit: () => {
        this.shake = Math.max(this.shake, 0.7);
        this.haptic([40, 30, 70]);
        this.audio.hit();
        this.ui.showRaceMessage('WIPEOUT', 'SHAKE IT OFF', 900);
      },
      onShieldBreak: () => {
        this.shake = Math.max(this.shake, 0.35);
        this.haptic([20, 25, 20]);
        this.audio.shieldBreak();
        this.ui.showRaceMessage('SHIELD SAVED', 'ONE HIT ABSORBED', 1000);
      },
      onBoost: () => {
        this.audio.boost();
        this.haptic(35);
      },
      onSuperBoost: () => {
        this.audio.boost();
        this.haptic([20, 20, 50]);
        this.ui.showRaceMessage('SUPER BOOST', 'FULL TANK UNLEASHED', 900, true);
      },
      onJump: (big) => {
        this.audio.jump();
        if (big) {
          this.shake = Math.max(this.shake, 0.3);
          this.ui.showRaceMessage('BIG AIR', 'SLOW MOTION', 1100, true);
        }
      },
      onLand: (impact) => {
        this.audio.land(clamp(impact / 8, 0.4, 1.4));
        this.haptic(20);
        this.shake = Math.max(this.shake, clamp(impact * 0.035, 0.1, 0.45));
      },
      onDriftStart: () => {
        this.ui.toast('DRIFT · NITRO CHARGING', 1100);
      },
      onEdge: () => {
        this.haptic(8);
      },
    };
  }

  setupCamera() {
    this.cameraLook.set(0, 0, 0);
    this.fovTarget = 62;
    this.camera.position.set(0, 8, 15);
  }

  setupEvents() {
    const onFirst = () => this.audio.unlock();
    window.addEventListener('pointerdown', onFirst, { once: true, capture: true });
  }

  // ------------------------------------------------------------------
  // State transitions
  // ------------------------------------------------------------------
  async startRace({ mode = 'quick', event = null } = {}) {
    if (this.startingRace) return;
    this.startingRace = true;
    this.audio.unlock();
    this.ui.closePanel();
    this.ui.hideResults();
    this.ui.hidePause();
    this.ui.hideRaceMessage();
    this.mode = mode;
    this.careerEvent = mode === 'career' ? event : null;
    this.currentRace = { mode, event: this.careerEvent };
    this.laps = 3;
    this.rivals = mode === 'time' ? 0 : 5;

    if (this.controlScheme === 'tilt') {
      const ok = await this.input.enableTilt();
      if (!ok) {
        this.controlScheme = 'joystick';
        this.progress.updateSettings({ control: 'joystick' });
        this.input.setControlScheme('joystick');
        this.ui.toast('Motion unavailable — joystick enabled');
      }
    }

    const palette = mode === 'career' && event ? event.palette : mode === 'time' ? 'sunset' : 'morning';
    this.applyPalette(palette);
    this.effects.clear?.();
    this.objects.reset();
    this.lapTimes = [];
    this.raceTime = 0;
    this.lapStart = 0;
    this.lapTimes = [];
    this.slowmoTimer = 0;
    this.timeScale = 1;
    this.shake = 0;
    this.pendingResult = null;
    this.finishOrbit = 0;

    this.player.applyPerformance(this.progress.performance());
    this.player.reset(this.laps);
    this.player.model.group.visible = true;
    this.player.model.shadow.visible = true;
    this.player.model.setTransform(this.player.position, this.player.yaw, waveHeight(this.player.position.x, this.player.position.z, this.worldTime), this.worldTime, { speed: 0, idle: true });

    const difficulty = mode === 'career' && event ? 1.35 + event.palette.length * 0.05 : 1;
    for (let i = 0; i < this.opponents.length; i++) {
      const ai = this.opponents[i];
      ai.reset(this.laps, difficulty, i);
      const show = i < this.rivals;
      ai.model.group.visible = show;
      ai.model.shadow.visible = show;
      if (show) {
        const f = this.track.getFrameAt(ai.startT);
        ai.model.setTransform(ai.position, ai.yaw, waveHeight(ai.position.x, ai.position.z, this.worldTime), this.worldTime, { speed: 0, idle: true });
      }
    }

    this.ui.showRaceHUD(mode, this.laps, this.rivals, this.controlScheme);
    this.ui.showCountdown();
    this.ui.updateHUD(this.buildHUDState());
    this.ui.updateCountdown(3, 'HOLD THE LINE');
    this.environment.setStartLights(3);
    this.input.setControlScheme(this.controlScheme);
    this.input.setEnabled(false);
    this.state = 'countdown';
    this.countdown = 3.55;
    this.countdownStage = 3;
    this.goShown = false;
    this.audio.setPaused(false);
    this.snapCountdownCamera();
    this.startingRace = false;
  }

  beginRace() {
    if (this.state !== 'countdown') return;
    this.state = 'racing';
    this.raceTime = 0;
    this.player.active = true;
    this.player.lapStartTime = 0;
    this.input.reset();
    this.input.setEnabled(true);
    this.environment.setStartLights(0);
    this.ui.updateCountdown('GO!', 'SEND IT');
    this.audio.countdown(0);
    this.haptic([18, 25, 45]);
    this.ui.showRaceMessage('GO!', '', 850, true);
    clearTimeout(this.goTimer);
    this.goTimer = setTimeout(() => this.ui.hideCountdown(), 820);
  }

  pause() {
    if (this.state !== 'racing' && this.state !== 'countdown') return;
    this.pausedFrom = this.state;
    this.state = 'paused';
    this.input.setEnabled(false);
    this.audio.setPaused(true);
    this.ui.showPause();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.pausedFrom || 'racing';
    this.ui.hidePause();
    this.ui.closePanel();
    this.input.setEnabled(this.state === 'racing');
    this.audio.setPaused(false);
    this.clock.getDelta();
  }

  restartRace() {
    const race = this.currentRace;
    this.ui.hidePause();
    this.ui.hideResults();
    if (race) this.startRace(race);
  }

  quitToMenu() {
    clearTimeout(this.goTimer);
    this.state = 'menu';
    this.player.active = false;
    this.player.reset(this.laps);
    this.player.model.group.visible = true;
    this.player.model.shadow.visible = true;
    this.input.setEnabled(false);
    this.input.reset();
    this.ui.hidePause();
    this.ui.hideResults();
    this.ui.hideCountdown();
    this.ui.hideRaceMessage();
    this.ui.showMenu();
    this.ui.closePanel();
    this.ui.hideRaceMessage();
    this.audio.setPaused(false);
    for (const ai of this.opponents) {
      ai.model.group.visible = false;
      ai.model.shadow.visible = false;
    }
    this.environment.setStartLights(0);
    this.applyPalette('morning');
    this.ui.refreshMenu();
    this.menuTime = 0;
    this.scene.fog.density = 0.00165;
  }

  enterMenu(first = false) {
    this.state = 'menu';
    this.input?.setEnabled(false);
    this.player.active = false;
    this.player.reset(this.laps);
    this.player.model.group.visible = true;
    this.player.model.shadow.visible = true;
    for (const ai of this.opponents) {
      ai.model.group.visible = false;
      ai.model.shadow.visible = false;
    }
    this.ui?.showMenu();
    this.applyPalette('morning');
    if (first) {
      this.menuTime = 0;
      this.snapMenuCamera();
    }
  }

  async setControlScheme(scheme) {
    if (scheme === 'tilt') {
      const ok = await this.input.enableTilt();
      if (!ok) {
        this.progress.updateSettings({ control: 'joystick' });
        this.controlScheme = 'joystick';
        this.input.setControlScheme('joystick');
        this.ui.toast('Motion access was not granted — joystick stays on');
        return false;
      }
    }
    this.controlScheme = scheme;
    this.input.setControlScheme(scheme);
    this.progress.updateSettings({ control: scheme });
    this.ui.refreshMenu();
    return true;
  }

  setQuality(q) {
    this.quality = q;
    this.qualityScale = 1;
    this.applyQuality();
  }

  applyQuality() {
    let maxDpr = Math.min(window.devicePixelRatio || 1, 1.75);
    if (this.quality === 'high') maxDpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.quality === 'low') maxDpr = 1;
    this.maxDpr = maxDpr;
    this.pixelRatio = Math.max(0.85, maxDpr * this.qualityScale);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.effects.setPixelScale(105 * Math.min(this.pixelRatio, 1.8));
    this.environment.cloudMesh.count = this.quality === 'low' ? 16 : 46;
    this.scene.fog.density = this.quality === 'low' ? 0.0022 : 0.00165;
    if (this.quality === 'high') this.scene.fog.density = 0.0015;
  }

  resize() {
    this.isPortrait = window.innerHeight > window.innerWidth * 1.02;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.baseFov = this.isPortrait ? 70 : 62;
    this.camera.updateProjectionMatrix();
    this.applyQuality();
    this.ui?.cacheMinimap();
  }

  applyPalette(name) {
    const p = PALETTES[name] || PALETTES.morning;
    this.paletteName = name;
    this.palette = p;
    this.water.applyPalette(p);
    this.environment.applyPalette(name);
    this.scene.fog.color.set(p.fog);
    this.scene.fog.density = this.quality === 'low' ? 0.0022 : 0.00165;
    this.renderer.toneMappingExposure = name === 'sunset' ? 1.11 : name === 'storm' ? 0.94 : 1.04;
  }

  onJetSkiChanged() {
    if (this.player.model) {
      this.player.model.dispose(this.scene);
    }
    const model = this.playerModel();
    model.addTo(this.scene);
    model.group.visible = true;
    model.shadow.visible = true;
    this.player.setModel(model);
    this.player.applyPerformance(this.progress.performance());
    this.player.model.setTransform(this.player.position, this.player.yaw, this.player.waterY, this.worldTime, { speed: 0, idle: this.state === 'menu' });
    this.ui.refreshMenu();
  }

  // ------------------------------------------------------------------
  // HUD state helpers
  // ------------------------------------------------------------------
  getStandings() {
    const list = [this.player, ...this.opponents];
    list.sort((a, b) => {
      const af = a.finished;
      const bf = b.finished;
      if (af && bf) return a.finishTime - b.finishTime;
      if (af) return -1;
      if (bf) return 1;
      return b.raceDist - a.raceDist;
    });
    return list;
  }

  buildHUDState() {
    const standings = this.getStandings();
    this.playerPlace = standings.indexOf(this.player) + 1;
    return {
      player: this.player,
      position: this.playerPlace,
      racers: standings,
      time: this.raceTime,
      lapTime: Math.max(0, this.raceTime - this.player.lapStartTime),
      mode: this.mode,
      boost: this.player.boostVisual,
      slowmo: this.timeScale < 0.8,
    };
  }

  // ------------------------------------------------------------------
  // Game loop
  // ------------------------------------------------------------------
  startLoop() {
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      const raw = Math.min(this.clock.getDelta(), 0.05);
      this.tick(raw);
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  }

  tick(rawDt) {
    this.menuTime += rawDt;
    this.fpsAccum += rawDt;
    this.fpsFrames++;
    if (this.fpsAccum > 2.4) {
      this.fps = this.fpsFrames / this.fpsAccum;
      this.fpsAccum = 0;
      this.fpsFrames = 0;
      if (this.quality === 'auto' && this.state === 'racing') {
        if (this.fps < 48 && this.qualityScale > 0.82) {
          this.qualityScale = Math.max(0.82, this.qualityScale - 0.06);
          this.applyQuality();
        } else if (this.fps > 57 && this.qualityScale < 1) {
          this.qualityScale = Math.min(1, this.qualityScale + 0.04);
          this.applyQuality();
        }
      }
    }

    this.timeScale = this.slowmoTimer > 0
      ? damp(this.timeScale, 0.42, 7, rawDt)
      : damp(this.timeScale, 1, 4, rawDt);
    this.slowmoTimer = Math.max(0, this.slowmoTimer - rawDt);
    const dt = rawDt * this.timeScale;
    this.worldTime += rawDt * (this.slowmoTimer > 0 ? 0.6 : 1);
    this.shake = Math.max(0, this.shake - rawDt * 1.8);

    this.input.update(rawDt);

    if (this.state === 'menu') {
      this.updateMenu(rawDt);
    } else if (this.state === 'countdown') {
      this.updateCountdown(rawDt);
      this.updateWorldIdle(rawDt);
      this.updateCamera(rawDt);
      this.ui.updateHUD(this.buildHUDState());
      this.hudTimer = 0;
      this.audio.update(rawDt, { speed: 0, maxSpeed: this.player.maxSpeed, active: false, opponents: this.opponents, player: this.player });
    } else if (this.state === 'racing') {
      this.updateRace(dt, rawDt);
    } else if (this.state === 'finished') {
      this.updateFinished(rawDt);
    } else if (this.state === 'results') {
      this.updateResults(rawDt);
    } else if (this.state === 'paused') {
      this.water.update(this.worldTime);
    }

    this.effects.update(this.state === 'paused' ? 0 : dt);
  }

  updateMenu(dt) {
    this.water.update(this.worldTime);
    this.environment.update(this.worldTime, dt);
    this.objects.update(dt, this.worldTime);

    const waterY = waveHeight(this.player.position.x, this.player.position.z, this.worldTime);
    this.player.waterY = waterY;
    this.player.model.setTransform(
      this.player.position, this.player.yaw, waterY, this.worldTime,
      { speed: 0, steer: 0, drift: 0, boost: 0, airborne: false, shield: false, stun: 0, idle: true },
    );
    this.updateMenuCamera(dt);
    this.audio.update(dt, { speed: 0, maxSpeed: this.player.maxSpeed, active: false, opponents: [], player: this.player });
  }

  updateCountdown(rawDt) {
    this.countdown -= rawDt;
    const remain = this.countdown;
    let stage = 3;
    if (remain <= 2.55) stage = 2;
    if (remain <= 1.55) stage = 1;
    if (remain <= 0.55) stage = 0;
    if (stage !== this.countdownStage) {
      this.countdownStage = stage;
      if (stage > 0) {
        this.ui.updateCountdown(stage, stage === 1 ? 'HOLD THE LINE' : 'READY');
        this.environment.setStartLights(stage);
        this.audio.countdown(stage);
        this.ui.haptic?.();
      } else {
        this.beginRace();
      }
    }
    if (stage > 0) {
      this.environment.setStartLights(stage);
    }
    this.water.update(this.worldTime);
    this.environment.update(this.worldTime, rawDt);
    this.objects.update(rawDt, this.worldTime);
    this.updateWorldIdle(rawDt);
    // Sparkle the grid with water bob.
    for (let i = 0; i < this.rivals; i++) {
      const ai = this.opponents[i];
      if (!ai.model.group.visible) continue;
      const wy = waveHeight(ai.position.x, ai.position.z, this.worldTime);
      ai.model.setTransform(ai.position, ai.yaw, wy, this.worldTime, { speed: 0, idle: true });
    }
  }

  updateWorldIdle(dt) {
    this.player.model.setTransform(
      this.player.position, this.player.yaw,
      waveHeight(this.player.position.x, this.player.position.z, this.worldTime),
      this.worldTime, { speed: 0, steer: 0, drift: 0, boost: 0, airborne: false, shield: false, stun: 0, idle: true },
    );
  }

  updateRace(dt, rawDt) {
    this.raceTime += rawDt;
    this.water.update(this.worldTime);
    this.environment.update(this.worldTime, rawDt);
    this.objects.update(dt, this.worldTime);

    // Player
    this.player.update(dt, this.input, this.worldTime, this.raceTime);

    // Ramp launches (crossing forward).
    if (this.player.speed > 10 && !this.player.airborne) {
      for (const ramp of this.objects.ramps) {
        if (wrappedCrossed(this.player.prevT, this.player.lastT, ramp.t) && Math.abs(this.player.lateral) < ramp.halfWidth) {
          if (this.player.jump(7.6, true)) {
            this.slowmoTimer = 0.8;
            this.shake = Math.max(this.shake, 0.25);
            this.audio.jump();
            this.haptic(30);
          }
          break;
        }
      }
    }

    // Swipe / space jump.
    if (this.input.consumeJump() && !this.player.airborne) {
      this.player.jump(6.2, false);
    }

    // Obstacle collisions.
    if (!this.player.airborne || this.player.elevation < 1.5) {
      const hit = this.objects.collide(this.player.position, this.player.airborne && this.player.elevation > 1.5);
      if (hit && this.player.invuln <= 0) {
        const result = this.player.hitObstacle(hit);
        if (hit.type === 'whirlpool') {
          this.player.stun = Math.min(this.player.stun, 0.4);
        }
      }
    }

    // Power-ups.
    const pickup = this.objects.collect(this.player.position, 2.6);
    if (pickup) {
      const type = this.player.givePickup(pickup.type);
      this.effects.pickupBurst(pickup.position.x, waveHeight(pickup.position.x, pickup.position.z, this.worldTime) + 1.1, pickup.position.z, pickup.type);
      this.audio.pickup(type);
      this.haptic(type === 'shield' ? [15, 20, 30] : 18);
      if (type === 'nitro') this.ui.toast('NITRO +32', 1000);
      else if (type === 'shield') {
        this.ui.toast('SHIELD · 8 SECONDS', 1200);
        this.haptic(20);
      }
    }

    // Rivals.
    for (let i = 0; i < this.rivals; i++) {
      this.opponents[i].update(dt, this.worldTime, this.player, { time: this.raceTime, objects: this.objects });
    }

    // Nitro-ready cue.
    const full = this.player.nitro >= 99;
    if (full && !this.nitroWasFull) {
      this.audio.tone?.(880, 0.2, 'sine', 0.05, 1200);
      this.ui.toast('NITRO READY · TAP TO UNLEASH', 1300);
    }
    this.nitroWasFull = full;

    this.updateCamera(rawDt);

    this.hudTimer -= rawDt;
    if (this.hudTimer <= 0) {
      this.hudTimer = 1 / 15;
      this.ui.updateHUD(this.buildHUDState());
    }

    this.audio.update(rawDt, {
      speed: this.player.speed,
      maxSpeed: this.player.maxSpeed,
      boosting: this.player.boosting,
      active: true,
      opponents: this.opponents,
      player: this.player,
    });

    if (this.player.finished && this.state === 'racing') this.finishRace(this.player.finishTime);
  }

  updateFinished(rawDt) {
    this.resultDelay -= rawDt;
    this.water.update(this.worldTime);
    this.environment.update(this.worldTime, rawDt);
    this.objects.update(rawDt, this.worldTime);
    this.finishOrbit += rawDt * 0.28;
    this.updateOrbitCamera(this.finishOrbit, false);
    this.audio.update(rawDt, {
      speed: 0, maxSpeed: this.player.maxSpeed, active: false,
      opponents: this.opponents, player: this.player,
    });
    if (this.resultDelay <= 0 && this.state === 'finished') {
      this.state = 'results';
      this.ui.showResults(this.pendingResult);
    }
  }

  updateResults(rawDt) {
    this.water.update(this.worldTime);
    this.environment.update(this.worldTime, rawDt);
    this.objects.update(rawDt, this.worldTime);
    this.finishOrbit += rawDt * 0.18;
    this.updateOrbitCamera(this.finishOrbit, true);
    this.audio.update(rawDt, {
      speed: 0, maxSpeed: this.player.maxSpeed, active: false,
      opponents: this.opponents, player: this.player,
    });
  }

  finishRace(time) {
    if (this.state === 'finished' || this.state === 'results') return;
    this.state = 'finished';
    this.player.active = false;
    this.input.setEnabled(false);
    this.ui.hideRaceMessage();
    this.ui.showRaceMessage('FINISH', '', 1200, true);
    this.resultDelay = 1.75;
    this.slowmoTimer = 0.5;
    this.finishOrbit = 0;

    const standings = this.getStandings();
    let place = standings.indexOf(this.player) + 1;
    if (this.mode === 'time') place = 1;

    const timeSec = time || this.raceTime;
    const bestLap = this.player.bestLap || 0;
    const topSpeed = this.player.topSpeedSeen || 0;
    const coinsCollected = this.player.coins;
    const drift = this.player.driftDistance;
    const boosts = Math.round(this.player.boostCount);
    const jumps = this.player.jumpCount;
    const checkpoints = this.player.checkpoints;

    let prize = 0;
    if (this.mode === 'career' && this.careerEvent) {
      const mult = [0, 1, 0.62, 0.42, 0.28, 0.18, 0.12][place] ?? 0.1;
      prize = Math.round(this.careerEvent.prize * mult);
    } else if (this.mode === 'time') {
      prize = 150;
    } else {
      prize = [0, 240, 170, 120, 90, 65, 45][place] ?? 40;
    }
    const total = prize + coinsCollected;

    const prevBest = this.mode === 'time'
      ? this.progress.save.bestTimes.timeTrial
      : this.mode === 'quick'
        ? this.progress.save.bestTimes.quick
        : this.progress.save.career[this.careerEvent?.id]?.time;
    const newBest = !prevBest || timeSec < prevBest;

    const beforeUnlocked = this.progress.careerUnlockedCount();
    const missionBefore = this.progress.missions.map((m) => m.progress);
    this.progress.recordRace({
      place, time: timeSec, bestLap, topSpeed,
      coinsCollected, drift, boosts, jumps, checkpoints,
      mode: this.mode, eventId: this.careerEvent?.id,
    });
    this.progress.addCoins(total);
    const afterUnlocked = this.progress.careerUnlockedCount();
    const missions = this.progress.missions;
    const changed = missions.filter((m, i) => m.progress > missionBefore[i]).length;
    const ready = missions.filter((m) => !m.claimed && m.progress >= m.target).length;

    let title = 'River champion';
    let sub = 'Untouchable. The current is yours.';
    if (place === 2) { title = 'So close'; sub = 'One better line. One more boost.'; }
    else if (place === 3) { title = 'On the podium'; sub = 'The pack sees your spray now.'; }
    else if (place > 3) { title = 'Keep carving'; sub = 'Study the current. Come back sharper.'; }
    if (this.mode === 'time') {
      title = newBest ? 'New river record' : 'Time logged';
      sub = newBest ? 'Your name is written in the current.' : 'Chase that ghost a little further.';
    }
    if (afterUnlocked > beforeUnlocked) sub += ' Next cup unlocked.';

    this.pendingResult = {
      kicker: this.mode === 'career' && this.careerEvent ? this.careerEvent.name.toUpperCase() : this.mode === 'time' ? 'TIME TRIAL' : 'QUICK RACE',
      place,
      title,
      sub,
      time: timeSec,
      bestLap,
      topSpeed,
      prize: total,
      coins: coinsCollected,
      missionProgress: ready > 0 ? `${ready} READY` : `${changed} TRACKED`,
      total,
      newBest,
    };
    this.ui.refreshMenu();
    this.audio.finish(place === 1);
    this.haptic(place === 1 ? [25, 40, 25, 40, 70] : 30);
    this.raceResult = this.pendingResult;
  }

  haptic(pattern) {
    if (!this.progress.settings.haptics) return;
    if (navigator.vibrate) navigator.vibrate(pattern);
  }

  // ------------------------------------------------------------------
  // Cameras
  // ------------------------------------------------------------------
  menuCameraPose() {
    const f = this.track.getFrameAt(0.985);
    const t = this.menuTime;
    const pos = f.pos.clone()
      .addScaledVector(f.tangent, -8.5 - Math.sin(t * 0.12) * 1.1)
      .addScaledVector(f.left, 8.6 + Math.sin(t * 0.09) * 1.3);
    pos.y = 4.15 + Math.sin(t * 0.16) * 0.25;
    const look = f.pos.clone()
      .addScaledVector(f.tangent, 16)
      .addScaledVector(f.left, this.isPortrait ? 8.5 : 5.0);
    look.y = 1.4;
    return { pos, look };
  }

  snapMenuCamera() {
    const pose = this.menuCameraPose();
    this.camera.position.copy(pose.pos);
    this.cameraLook.copy(pose.look);
    this.camera.lookAt(this.cameraLook);
    this.camera.fov = this.baseFov || 62;
    this.camera.updateProjectionMatrix();
  }

  updateMenuCamera(dt) {
    const pose = this.menuCameraPose();
    const k = 1 - Math.exp(-2.6 * dt);
    this.camera.position.lerp(pose.pos, k);
    this.cameraLook.lerp(pose.look, k);
    this.camera.lookAt(this.cameraLook);
    this.camera.fov = damp(this.camera.fov, (this.baseFov || 62) + 1.5, 2, dt);
    this.camera.updateProjectionMatrix();
  }

  countdownCameraPose() {
    const p = this.player;
    const forward = TMP_A.set(Math.sin(p.yaw), 0, Math.cos(p.yaw));
    const right = TMP_B.set(forward.z, 0, -forward.x);
    const portrait = this.isPortrait;
    const angle = (portrait ? 0.5 : 0.75) + Math.sin(this.menuTime * 0.24) * (portrait ? 0.07 : 0.18);
    const sideDist = portrait ? 5.0 : 7.4;
    const backDist = portrait ? 7.8 : 7.0;
    const pos = p.position.clone()
      .addScaledVector(right, Math.sin(angle) * sideDist)
      .addScaledVector(forward, -Math.cos(angle) * backDist);
    pos.y = (p.waterY || 0) + (portrait ? 3.9 : 3.35);
    const look = p.position.clone().addScaledVector(forward, portrait ? 6.5 : 5.5);
    look.y = (p.waterY || 0) + 1.05;
    return { pos, look };
  }

  snapCountdownCamera() {
    const pose = this.countdownCameraPose();
    this.camera.position.copy(pose.pos);
    this.cameraLook.copy(pose.look);
    this.camera.lookAt(this.cameraLook);
    this.camera.fov = (this.baseFov || 62) - 3;
    this.camera.updateProjectionMatrix();
  }

  updateCamera(dt) {
    if (this.state === 'countdown') {
      const pose = this.countdownCameraPose();
      const k = 1 - Math.exp(-3.2 * dt);
      this.camera.position.lerp(pose.pos, k);
      this.cameraLook.lerp(pose.look, k);
      this.camera.lookAt(this.cameraLook);
      this.camera.fov = damp(this.camera.fov, (this.baseFov || 62) - 2, 2, dt);
      this.camera.updateProjectionMatrix();
      return;
    }
    if (this.state !== 'racing') return;

    const p = this.player;
    const speedN = clamp(p.speed / 40, 0, 1.1);
    const forward = TMP_A.set(Math.sin(p.yaw), 0, Math.cos(p.yaw));
    const right = TMP_B.set(forward.z, 0, -forward.x);
    const portrait = this.isPortrait;
    const dist = (portrait ? 10.2 : 8.7) + speedN * 1.4;
    const height = (portrait ? 4.65 : 3.95) + speedN * 0.45;
    const airLift = p.airborne ? p.elevation * 0.55 : 0;
    const pos = p.position.clone()
      .addScaledVector(forward, -dist)
      .addScaledVector(right, -p.steerVisual * 0.55);
    pos.y = (p.waterY || 0) + height + airLift;
    const look = p.position.clone()
      .addScaledVector(forward, 10 + speedN * 7)
      .addScaledVector(right, p.steerVisual * 0.6);
    look.y = (p.waterY || 0) + 1.15 + (p.airborne ? p.elevation * 0.4 : 0);

    const k = 1 - Math.exp(-6.2 * dt);
    this.camera.position.lerp(pos, k);
    this.cameraLook.lerp(look, 1 - Math.exp(-7.5 * dt));
    if (this.shake > 0.001) {
      const s = this.shake * 0.55;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s * 0.6;
      this.camera.position.z += (Math.random() - 0.5) * s;
      this.cameraLook.y += (Math.random() - 0.5) * s * 0.25;
    }
    this.camera.lookAt(this.cameraLook);
    const fov = (this.baseFov || 62) + speedN * 4 + p.boostVisual * 7;
    this.camera.fov = damp(this.camera.fov, fov, 4, dt);
    this.camera.updateProjectionMatrix();
  }

  updateOrbitCamera(angle, results) {
    const p = this.player;
    const pos = p.position.clone();
    pos.x += Math.sin(angle) * (results ? 8.2 : 9.4);
    pos.z += Math.cos(angle) * (results ? 8.2 : 9.4);
    pos.y = (p.waterY || 0) + (results ? 4.1 : 3.6);
    this.camera.position.lerp(pos, 0.06);
    const look = p.position.clone();
    look.y = (p.waterY || 0) + 1.0;
    this.cameraLook.lerp(look, 0.12);
    this.camera.lookAt(this.cameraLook);
    this.camera.fov = damp(this.camera.fov, (this.baseFov || 62) + 2, 2, 1 / 60);
    this.camera.updateProjectionMatrix();
  }
}
