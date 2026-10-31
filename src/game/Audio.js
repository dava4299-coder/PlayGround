import { clamp, lerp } from '../core/utils.js';

const SOUND_SPEED = 343;

export class AudioEngine {
  constructor(progress) {
    this.progress = progress;
    this.ctx = null;
    this.ready = false;
    this.muted = !progress.settings.sound;
    this.paused = false;
    this.noiseBuffer = null;
    this.birdTimer = 6;
    this.boostAmount = 0;
    this.lastSplash = 0;
    this.buildWhenReady = false;
  }

  async unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') await this.ctx.resume().catch(() => {});
      return true;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.5;
    this.master.connect(this.ctx.destination);
    this.makeNoise();
    this.buildEngine();
    this.buildAmbience();
    this.buildOpponent();
    this.buildBoost();
    this.ready = true;
    await this.ctx.resume().catch(() => {});
    return true;
  }

  makeNoise() {
    const len = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;
  }

  makeLoopNoise() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    return src;
  }

  buildEngine() {
    const ctx = this.ctx;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 420;
    this.engineFilter.Q.value = 2.5;
    this.engineGain.connect(this.engineFilter);
    this.engineFilter.connect(this.master);

    this.engineOsc = ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 52;
    this.engineOsc.connect(this.engineGain);

    this.engineSub = ctx.createOscillator();
    this.engineSub.type = 'square';
    this.engineSub.frequency.value = 26;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.35;
    this.engineSub.connect(subGain);
    subGain.connect(this.engineGain);

    this.engineTone = ctx.createOscillator();
    this.engineTone.type = 'triangle';
    this.engineTone.frequency.value = 104;
    const toneGain = ctx.createGain();
    toneGain.gain.value = 0.18;
    this.engineTone.connect(toneGain);
    toneGain.connect(this.engineGain);

    this.engineOsc.start();
    this.engineSub.start();
    this.engineTone.start();

    // Water rush.
    const water = this.makeLoopNoise();
    this.waterFilter = ctx.createBiquadFilter();
    this.waterFilter.type = 'bandpass';
    this.waterFilter.frequency.value = 620;
    this.waterFilter.Q.value = 0.6;
    this.waterGain = ctx.createGain();
    this.waterGain.gain.value = 0.05;
    water.connect(this.waterFilter);
    this.waterFilter.connect(this.waterGain);
    this.waterGain.connect(this.master);
    water.start();
  }

  buildAmbience() {
    const pad = this.ctx.createOscillator();
    pad.type = 'sine';
    pad.frequency.value = 92;
    const pad2 = this.ctx.createOscillator();
    pad2.type = 'sine';
    pad2.frequency.value = 138.5;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.value = 0.022;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 220;
    pad.connect(filter);
    pad2.connect(filter);
    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.master);
    pad.start();
    pad2.start();
  }

  buildOpponent() {
    const ctx = this.ctx;
    this.oppGain = ctx.createGain();
    this.oppGain.gain.value = 0;
    this.oppPan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    this.oppOsc = ctx.createOscillator();
    this.oppOsc.type = 'sawtooth';
    this.oppOsc.frequency.value = 58;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 500;
    this.oppOsc.connect(filter);
    if (this.oppPan) {
      filter.connect(this.oppGain);
      this.oppGain.connect(this.oppPan);
      this.oppPan.connect(this.master);
    } else {
      filter.connect(this.oppGain);
      this.oppGain.connect(this.master);
    }
    this.oppOsc.start();
  }

  buildBoost() {
    const ctx = this.ctx;
    this.boostNoise = this.makeLoopNoise();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 0.9;
    this.boostGain = ctx.createGain();
    this.boostGain.gain.value = 0;
    this.boostNoise.connect(filter);
    filter.connect(this.boostGain);
    this.boostGain.connect(this.master);
    this.boostNoise.start();
    this.boostFilter = filter;
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.5, this.ctx.currentTime, 0.15);
  }

  setPaused(paused) {
    this.paused = paused;
    if (this.ready) {
      const t = this.ctx.currentTime;
      this.engineGain.gain.setTargetAtTime(paused ? 0.02 : 0.12, t, 0.2);
      this.waterGain.gain.setTargetAtTime(paused ? 0.01 : 0.05, t, 0.2);
    }
  }

  update(dt, state) {
    if (!this.ready || !this.ctx) return;
    const { speed = 0, maxSpeed = 38, boosting = false, active = false, opponents, player, camera } = state;
    const rpm = clamp(speed / maxSpeed, 0, 1.2);
    const boost = boosting ? 1 : 0;
    this.boostAmount = lerp(this.boostAmount, boost, 1 - Math.exp(-6 * dt));
    const t = this.ctx.currentTime;
    const engineVol = active && !this.paused ? 0.1 + rpm * 0.12 : 0;
    this.engineGain.gain.setTargetAtTime(engineVol, t, 0.09);
    this.engineFilter.frequency.setTargetAtTime(340 + rpm * 1350 + this.boostAmount * 500, t, 0.09);
    const baseFreq = 48 + rpm * 140 + this.boostAmount * 30;
    this.engineOsc.frequency.setTargetAtTime(baseFreq, t, 0.09);
    this.engineSub.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.1);
    this.engineTone.frequency.setTargetAtTime(baseFreq * 2.02, t, 0.09);
    this.waterGain.gain.setTargetAtTime(active && !this.paused ? 0.05 + rpm * 0.055 : 0.045, t, 0.25);
    this.waterFilter.frequency.setTargetAtTime(470 + rpm * 900, t, 0.2);
    this.boostGain.gain.setTargetAtTime(active && !this.paused ? this.boostAmount * 0.085 : 0, t, 0.08);
    this.boostFilter.frequency.setTargetAtTime(900 + rpm * 1200, t, 0.1);

    // Nearest rival engine, with distance gain, stereo pan and doppler shift.
    if (opponents && player) {
      let nearest = null;
      let best = Infinity;
      for (const o of opponents) {
        if (o.finished) continue;
        const d = o.position.distanceToSquared(player.position);
        if (d < best) { best = d; nearest = o; }
      }
      if (nearest && active && !this.paused) {
        const dist = Math.sqrt(best);
        const gain = clamp(1 - dist / 70, 0, 1) * 0.055;
        this.oppGain.gain.setTargetAtTime(gain, t, 0.15);
        const relX = nearest.position.x - player.position.x;
        const relZ = nearest.position.z - player.position.z;
        const pan = clamp((relX * Math.cos(player.yaw) - relZ * Math.sin(player.yaw)) / Math.max(1, dist), -1, 1);
        this.oppPan?.pan.setTargetAtTime(pan * 0.8, t, 0.15);
        const closing = nearest.speed - player.speed;
        const doppler = clamp(SOUND_SPEED / (SOUND_SPEED - clamp(closing, -20, 20)), 0.88, 1.14);
        this.oppOsc.frequency.setTargetAtTime((55 + clamp(nearest.speed / 40, 0, 1) * 105) * doppler, t, 0.1);
      } else {
        this.oppGain.gain.setTargetAtTime(0, t, 0.2);
      }
    } else {
      this.oppGain?.gain.setTargetAtTime(0, t, 0.2);
    }

    // Occasional tropical bird calls.
    this.birdTimer -= dt;
    if (this.birdTimer <= 0 && active && !this.paused) {
      this.birdTimer = 7 + Math.random() * 12;
      this.chirp();
    }
  }

  tone(freq, dur, type = 'sine', gain = 0.12, slideTo = null, delay = 0) {
    if (!this.ready || this.muted) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.03);
  }

  noiseBurst(dur = 0.3, freq = 900, gain = 0.15, q = 0.8) {
    if (!this.ready || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = freq;
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  chirp() {
    if (!this.ready || this.muted) return;
    const base = 1300 + Math.random() * 900;
    this.tone(base, 0.09, 'sine', 0.018, base * 1.4);
    this.tone(base * 1.2, 0.12, 'sine', 0.012, base * 0.8, 0.1);
  }

  countdown(step) {
    if (step > 0) {
      this.tone(440, 0.16, 'sine', 0.1, 440);
      this.tone(880, 0.08, 'triangle', 0.03);
    } else {
      this.tone(880, 0.35, 'sawtooth', 0.09, 1320);
      this.tone(660, 0.5, 'sine', 0.08);
    }
  }

  splash(amount = 1) {
    this.noiseBurst(0.35 + amount * 0.25, 650, 0.045 + amount * 0.06, 0.6);
  }

  hit() {
    this.noiseBurst(0.28, 220, 0.22, 0.9);
    this.tone(90, 0.25, 'sine', 0.18, 42);
  }

  coin() {
    this.tone(1180, 0.09, 'triangle', 0.06);
    this.tone(1760, 0.12, 'triangle', 0.045, null, 0.06);
  }

  pickup(type) {
    if (type === 'nitro') {
      this.tone(560, 0.16, 'sawtooth', 0.04, 980);
      this.tone(840, 0.2, 'sine', 0.035, 1200, 0.04);
    } else if (type === 'shield') {
      this.tone(520, 0.2, 'triangle', 0.05, 760);
      this.tone(780, 0.3, 'sine', 0.035, 1040, 0.08);
    } else {
      this.coin();
    }
  }

  boost() {
    this.noiseBurst(0.7, 1600, 0.08, 1.2);
    this.tone(130, 0.55, 'sawtooth', 0.06, 280);
  }

  jump() {
    this.tone(240, 0.25, 'triangle', 0.05, 460);
    this.noiseBurst(0.18, 900, 0.03, 0.7);
  }

  land(amount = 1) {
    this.noiseBurst(0.5, 500, 0.07 + amount * 0.04, 0.8);
    this.tone(70, 0.2, 'sine', 0.1, 45);
  }

  lap() {
    this.tone(660, 0.12, 'triangle', 0.06);
    this.tone(880, 0.12, 'triangle', 0.06, null, 0.11);
    this.tone(1100, 0.22, 'sine', 0.05, null, 0.22);
  }

  finish(win = false) {
    const notes = win ? [523, 659, 784, 1046] : [440, 554, 659, 880];
    notes.forEach((n, i) => this.tone(n, 0.5, i === 3 ? 'sine' : 'triangle', 0.06, null, i * 0.13));
  }

  shieldBreak() {
    this.noiseBurst(0.35, 1400, 0.08, 1.2);
    this.tone(900, 0.3, 'triangle', 0.05, 300);
  }

  ui() {
    this.tone(780, 0.06, 'sine', 0.035);
  }

  splashIfReady(amount) {
    const now = performance.now();
    if (now - this.lastSplash > 220) {
      this.lastSplash = now;
      this.splash(amount);
    }
  }
}
