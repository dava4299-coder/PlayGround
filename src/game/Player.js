import * as THREE from 'three';
import { clamp, damp, smoothstep, formatTime } from '../core/utils.js';
import { waveHeight } from '../world/Track.js';

const START_T = 0.981;
const START_LATERAL = 0;

export class Player {
  constructor(track, effects) {
    this.track = track;
    this.effects = effects;
    this.position = new THREE.Vector3();
    this.right = new THREE.Vector3(1, 0, 0);
    this.forward = new THREE.Vector3(0, 0, 1);
    this.events = {};
    this.model = null;
    this.resetStats();
    this.reset(3);
  }

  setModel(model) {
    this.model = model;
  }

  applyPerformance(perf) {
    this.perf = perf;
    this.maxSpeed = 38 * perf.speed;
    this.accel = 13.2 * perf.speed;
    this.turnRate = 1.78 * perf.handling;
    this.boostPower = 10.5 * perf.boost;
  }

  resetStats() {
    this.perf = { speed: 1, handling: 1, boost: 1 };
    this.maxSpeed = 38;
    this.accel = 13.2;
    this.turnRate = 1.78;
    this.boostPower = 10.5;
    this.topSpeedSeen = 0;
  }

  reset(laps = 3) {
    this.laps = laps;
    const f = this.track.getFrameAt(START_T);
    this.position.copy(f.pos).addScaledVector(f.left, START_LATERAL);
    this.yaw = Math.atan2(f.tangent.x, f.tangent.z);
    this.speed = 0;
    this.steerVisual = 0;
    this.raceDist = (START_T - 1) * this.track.length;
    this.lastT = START_T;
    this.prevT = START_T;
    this.lastHint = null;
    this.lateral = START_LATERAL;
    this.lap = 0;
    this.nextGate = 0;
    this.checkpoints = 0;
    this.lastHint = null;
    this.finished = false;
    this.finishTime = 0;
    this.speed = 0;
    this.stun = 0;
    this.invuln = 0;
    this.shieldTimer = 0;
    this.nitro = 12;
    this.boosting = false;
    this.superTimer = 0;
    this.boostVisual = 0;
    this.driftActive = false;
    this.driftAmount = 0;
    this.driftCharge = 0;
    this.driftDistance = 0;
    this.airborne = false;
    this.elevation = 0;
    this.vy = 0;
    this.jumpCooldown = 0;
    this.jumpCount = 0;
    this.boostCount = 0;
    this.coins = 0;
    this.waterY = 0;
    this.time = 0;
    this.trailTimer = 0;
    this.sparkTimer = 0;
    this.boostParticleTimer = 0;
    this.collisionCooldown = 0;
    this.lapStartTime = 0;
    this.bestLap = null;
    this.lastLapTime = null;
    this.edgeTimer = 0;
    this.active = false;
  }

  start() {
    this.active = true;
  }

  get displayLap() {
    return clamp(this.lap + 1, 1, this.laps);
  }

  get speedKmh() {
    return Math.round(this.speed * 3.6);
  }

  get nitroReady() {
    return this.nitro >= 99;
  }

  get shielded() {
    return this.shieldTimer > 0;
  }

  jump(power = 6.4, big = false) {
    if (this.airborne || this.jumpCooldown > 0 || this.speed < 4) return false;
    this.airborne = true;
    this.elevation = 0.15;
    this.vy = power;
    this.jumpCooldown = big ? 1.4 : 0.9;
    if (big) {
      this.jumpCount++;
      this.events.onJump?.(true);
    } else {
      this.events.onJump?.(false);
    }
    return true;
  }

  hitObstacle(obstacle) {
    if (this.invuln > 0 || this.finished) return 'none';
    this.invuln = 1.35;
    if (this.shieldTimer > 0) {
      this.shieldTimer = 0;
      this.effects.shieldBreak(this.position.x, this.waterY, this.position.z);
      this.events.onShieldBreak?.();
      return 'shield';
    }
    this.speed *= 0.32;
    this.stun = 0.82;
    this.driftActive = false;
    this.driftAmount = 0;
    this.nitro = Math.max(0, this.nitro - 8);
    this.effects.impact(this.position.x, this.waterY, this.position.z, 1);
    this.events.onHit?.(obstacle);
    return 'hit';
  }

  givePickup(type) {
    if (type === 'nitro') {
      this.nitro = clamp(this.nitro + 32, 0, 100);
      return 'nitro';
    }
    if (type === 'shield') {
      this.shieldTimer = 8;
      return 'shield';
    }
    this.coins++;
    return 'coin';
  }

  update(dt, input, time, raceTime) {
    if (!this.active) return;
    this.time = time;
    this.jumpCooldown = Math.max(0, this.jumpCooldown - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    this.collisionCooldown = Math.max(0, this.collisionCooldown - dt);
    this.stun = Math.max(0, this.stun - dt);
    this.shieldTimer = Math.max(0, this.shieldTimer - dt);
    this.superTimer = Math.max(0, this.superTimer - dt);

    const canControl = this.stun <= 0 && !this.finished;
    let steer = canControl ? input.steer : 0;
    if (this.airborne) steer *= 0.55;
    this.steerVisual = damp(this.steerVisual, steer, 10, dt);

    // --- Speed / auto throttle ---
    const speedRatio = this.speed / this.maxSpeed;
    let targetSpeed = this.maxSpeed;
    const wantsBoost = canControl && input.nitroHeld && this.nitro > 0.4 && !this.airborne && this.speed > 3;
    let boosting = false;
    if (this.superTimer > 0) {
      targetSpeed += this.boostPower * 1.55;
      boosting = true;
      this.nitro = Math.max(0, this.nitro - 30 * dt);
    } else if (wantsBoost) {
      targetSpeed += this.boostPower;
      boosting = true;
      this.nitro = Math.max(0, this.nitro - 19 * dt);
    }
    if (canControl && input.consumeNitroTap() && this.nitro >= 99) {
      this.superTimer = 1.5;
      // Starting from a normal boost is already counted by the transition below.
      if (this.boosting) this.boostCount += 1;
      this.events.onSuperBoost?.();
    }
    if (boosting && !this.boosting) {
      this.events.onBoost?.();
      this.boostCount += 1;
    }
    this.boosting = boosting;
    this.boostVisual = damp(this.boostVisual, boosting ? 1 : 0, 6, dt);

    if (input.brakeHeld && canControl && !this.airborne) {
      this.speed -= 24 * dt;
      this.speed = Math.max(3, this.speed);
    } else if (this.finished) {
      this.speed = Math.max(0, this.speed - 9 * dt);
    } else if (canControl) {
      const accel = this.accel * (1 + (1 - speedRatio) * 0.28);
      this.speed += accel * dt;
      if (this.speed > targetSpeed) this.speed = damp(this.speed, targetSpeed, 4.5, dt);
    } else {
      this.speed = Math.max(0, this.speed - 7 * dt);
    }
    this.speed = clamp(this.speed, 0, this.maxSpeed + this.boostPower * 1.7);

    // --- Drift ---
    const driftCondition = canControl && !this.airborne && !input.brakeHeld &&
      Math.abs(steer) > 0.58 && this.speed > this.maxSpeed * 0.4;
    this.driftAmount = damp(this.driftAmount, driftCondition ? 1 : 0, 8, dt);
    this.driftActive = driftCondition && this.driftAmount > 0.35;
    if (this.driftActive) {
      this.nitro = clamp(this.nitro + 9.5 * dt, 0, 100);
      this.driftDistance += this.speed * dt;
      this.speed = Math.max(this.maxSpeed * 0.35, this.speed - this.speed * 0.055 * dt);
      this.driftCharge += dt;
      if (this.driftCharge > 0.7 && !this.wasDrifting) this.events.onDriftStart?.();
      this.wasDrifting = true;
      this.sparkTimer -= dt;
      if (this.sparkTimer <= 0) {
        this.sparkTimer = 0.035;
        const f = this.forward;
        this.right.set(f.z, 0, -f.x);
        const side = steer < 0 ? -1 : 1;
        this.effects.driftSparks(
          this.position.x, this.waterY, this.position.z,
          this.yaw, side,
        );
      }
    } else {
      this.wasDrifting = false;
      this.driftCharge = 0;
    }

    // --- Steering ---
    if (canControl && !this.airborne) {
      const highSpeedFactor = 0.72 + 0.28 * (1 - clamp(this.speed / this.maxSpeed, 0, 1));
      const driftTurn = this.driftActive ? 1.12 : 1;
      const brakeTurn = input.brakeHeld ? 1.25 : 1;
      const yawRate = this.turnRate * steer * highSpeedFactor * driftTurn * brakeTurn;
      this.yaw += yawRate * dt;
      if (this.stun > 0) this.yaw += Math.sin(time * 30) * 0.02;
    }

    this.forward.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    this.right.set(this.forward.z, 0, -this.forward.x);

    // --- Integrate ---
    this.position.addScaledVector(this.forward, this.speed * dt);
    if (this.driftActive) {
      this.position.addScaledVector(this.right, -Math.sign(steer) * 1.35 * this.driftAmount * dt);
    }
    // River current: a steady push downstream plus a gentle lateral swirl.
    const hint = this.lastHint;
    const preFrame = this.track.nearest(this.position, hint);
    this.track.nearest(this.position, hint);
    const tNow = preFrame.t;
    const current = 0.85 * clamp(1 - Math.abs(preFrame.lateral) / (preFrame.frame.width * 0.5), 0.2, 1);
    this.position.addScaledVector(preFrame.frame.tangent, current * dt);
    this.position.addScaledVector(preFrame.frame.left, Math.sin(tNow * Math.PI * 8 + time * 0.4) * 0.24 * dt);

    // --- Keep the rider inside the river ---
    const near = this.track.nearest(this.position, this.lastHint);
    this.lastHint = near.index;
    this.lateral = near.lateral;
    const half = near.frame.width / 2;
    const limit = half - 1.0;
    if (Math.abs(near.lateral) > limit) {
      const overshoot = Math.abs(near.lateral) - limit;
      const dir = Math.sign(near.lateral);
      this.position.addScaledVector(near.frame.left, -dir * Math.min(overshoot, 3));
      this.speed *= 1 - Math.min(0.9, overshoot * 0.2 + 0.07) * dt * 6;
      this.edgeTimer -= dt;
      if (this.edgeTimer <= 0 && this.speed > 6) {
        this.edgeTimer = 0.25;
        this.effects.splash(this.position.x, this.waterY, this.position.z, 0.4);
      }
      this.events.onEdge?.(overshoot);
    }

    // --- Track progress & checkpoints ---
    const delta = this.track.deltaT(this.lastT, near.t);
    if (Math.abs(delta) < 0.03) this.raceDist += delta * this.track.length;
    this.prevT = this.lastT;
    this.lastT = near.t;

    const currentLapStart = this.lap * this.track.length;
    while (this.nextGate < this.track.gateCount &&
      this.raceDist >= currentLapStart + this.track.gateDistances[this.nextGate]) {
      this.nextGate++;
      this.checkpoints++;
      this.onCheckpoint();
    }
    if (this.raceDist >= (this.lap + 1) * this.track.length && this.lap < this.laps) {
      if (this.nextGate >= this.track.gateCount) {
        this.lastLapTime = raceTime - this.lapStartTime;
        this.bestLap = this.bestLap == null ? this.lastLapTime : Math.min(this.bestLap, this.lastLapTime);
        this.lap++;
        this.nextGate = 0;
        this.lapStartTime = raceTime;
        this.events.onLap?.(this.lap, this.lastLapTime);
        if (this.lap >= this.laps) {
          this.finished = true;
          this.finishTime = raceTime;
          this.active = false;
          this.events.onFinish?.(raceTime);
        }
      } else {
        // Push back to the line; missing a checkpoint never grants a lap.
        this.raceDist = Math.min(this.raceDist, (this.lap + 1) * this.track.length - 0.5);
      }
    }

    // --- Airborne ---
    this.waterY = waveHeight(this.position.x, this.position.z, time);
    if (this.airborne) {
      this.elevation += this.vy * dt;
      this.vy -= 21 * dt;
      if (this.elevation <= 0) {
        const impact = Math.abs(this.vy);
        this.elevation = 0;
        this.airborne = false;
        this.vy = 0;
        this.effects.splash(this.position.x, this.waterY, this.position.z, clamp(impact / 8, 0.6, 1.6));
        this.events.onLand?.(impact);
        this.nitro = clamp(this.nitro + 4, 0, 100);
      }
    }

    this.topSpeedSeen = Math.max(this.topSpeedSeen, this.speed);

    // --- Visuals & continuous trails ---
    if (this.model) {
      this.model.setTransform(
        this.position, this.yaw, this.waterY, time,
        {
          speed: this.speed,
          steer: this.steerVisual,
          drift: this.driftAmount,
          boost: this.boostVisual,
          airborne: this.airborne,
          shield: this.shieldTimer > 0,
          stun: this.stun,
        },
      );
    }

    this.trailTimer -= dt;
    if (this.speed > 3 && this.trailTimer <= 0) {
      this.trailTimer = 0.055;
      this.effects.emitWake(this.position.x, this.waterY, this.position.z, this.yaw, this.speed, 1);
    }
    this.boostParticleTimer -= dt;
    if (this.boosting && this.boostParticleTimer <= 0) {
      this.boostParticleTimer = 0.035;
      this.effects.boostTrail(this.position.x, this.waterY, this.position.z, this.yaw);
    }
  }

  onCheckpoint() {
    this.events.onCheckpoint?.(this.nextGate, this.track.gateCount);
  }
}
