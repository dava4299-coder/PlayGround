import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/utils.js';
import { waveHeight } from '../world/Track.js';

function wrappedCrossed(a, b, target) {
  const forward = ((b - a) % 1 + 1) % 1;
  const toTarget = ((target - a) % 1 + 1) % 1;
  return toTarget > 0 && toTarget <= forward + 0.00001;
}

const PROFILES = [
  { name: 'Kai', c1: '#ff8a3d', c2: '#c1401b', accent: '#ffd356', trim: '#ffeede', riderColor: '#ffd356', helmet: '#f8f5e6', base: 36.7, lane: -6 },
  { name: 'Maya', c1: '#d8ff5d', c2: '#5c9a1d', accent: '#7af3d5', trim: '#f4ffe2', riderColor: '#16a58e', helmet: '#f8f5e6', base: 37.4, lane: 6 },
  { name: 'Nui', c1: '#ff72b6', c2: '#a22c6b', accent: '#ffe4f0', trim: '#fff4fa', riderColor: '#ff72b6', helmet: '#f8f5e6', base: 36.2, lane: 0 },
  { name: 'Tane', c1: '#8ca7ff', c2: '#344ba8', accent: '#c9f5ff', trim: '#eef4ff', riderColor: '#8ca7ff', helmet: '#f8f5e6', base: 37.0, lane: -3 },
  { name: 'Lani', c1: '#ffc857', c2: '#b97a1e', accent: '#fff3c4', trim: '#fff9ec', riderColor: '#ff7a48', helmet: '#f8f5e6', base: 35.7, lane: 3 },
];

export class Opponent {
  constructor(index, track, effects, model) {
    this.index = index;
    this.profile = PROFILES[index % PROFILES.length];
    this.track = track;
    this.effects = effects;
    this.model = model;
    this.position = new THREE.Vector3();
    this.lane = this.profile.lane;
    this.targetLane = this.lane;
    this.time = 0;
    this.reset(3, 1, 0);
  }

  reset(laps, difficulty = 1, startIndex = 0) {
    // The player lines up on pole at t=0.981, centre lane. Rivals sit
    // slightly behind on the grid so the opening HUD reads 1/6.
    const rows = [
      { t: 0.978, lat: -7.2 },
      { t: 0.978, lat: 7.2 },
      { t: 0.969, lat: 0 },
      { t: 0.969, lat: -7.2 },
      { t: 0.969, lat: 7.2 },
    ];
    const row = rows[startIndex % rows.length];
    this.startT = row.t;
    this.raceDist = (row.t - 1) * this.track.length;
    this.lateral = row.lat;
    this.targetLane = row.lat;
    this.lane = row.lat;
    this.laps = laps;
    this.speed = 0;
    this.baseSpeed = this.profile.base * (0.965 + difficulty * 0.035);
    this.finished = false;
    this.finishTime = 0;
    this.stun = 0;
    this.air = 0;
    this.vy = 0;
    this.airborne = false;
    this.yaw = 0;
    this.steerVisual = 0;
    this.wakeTimer = Math.random() * 0.1;
    this.laneTimer = Math.random() * 4;
    this.laneTarget = row.lat;
    this.bobPhase = Math.random() * 6;
    this.jumpCheck = row.t;
    const f = this.track.getFrameAt(row.t);
    this.position.copy(f.pos).addScaledVector(f.left, row.lat);
    this.yaw = Math.atan2(f.tangent.x, f.tangent.z);
    if (this.model) {
      this.model.setTransform(this.position, this.yaw, 0, 0, { speed: 0 });
    }
  }

  update(dt, time, player, race) {
    this.time = time;
    if (this.finished) {
      this.speed = Math.max(0, this.speed - 5 * dt);
      this.raceDist += this.speed * dt;
    } else {
      const t = ((this.raceDist / this.track.length) % 1 + 1) % 1;
      const f = this.track.getFrameAt(t);
      const ahead = this.track.getFrameAt((t + 0.014) % 1);
      const curvature = Math.acos(clamp(f.tangent.dot(ahead.tangent), -1, 1));
      const curveFactor = clamp(1 - curvature * 0.55, 0.72, 1);
      const diff = (player?.raceDist ?? 0) - this.raceDist;
      let rubber = 0;
      if (diff > 10) rubber = clamp(diff * 0.025, 0, 3.2);
      else if (diff < -15) rubber = -clamp((-diff - 15) * 0.018, 0, 2.2);
      let targetSpeed = this.baseSpeed * curveFactor + rubber;
      targetSpeed = clamp(targetSpeed, 21, 41);

      const accel = this.speed < targetSpeed ? 11 : 16;
      this.speed = damp(this.speed, targetSpeed, this.speed < targetSpeed ? 2.2 : 5.5, dt);
      this.speed = clamp(this.speed, 0, 42);
      this.raceDist += this.speed * dt;

      if (this.raceDist >= this.laps * this.track.length) {
        this.finished = true;
        this.finishTime = race?.time ?? 0;
      }
    }

    const t = ((this.raceDist / this.track.length) % 1 + 1) % 1;
    const f = this.track.getFrameAt(t);
    const half = f.width / 2;

    // Lane changes and simple obstacle avoidance.
    this.laneTimer -= dt;
    if (this.laneTimer <= 0) {
      this.laneTimer = 3.4 + Math.random() * 3;
      this.laneTarget = (Math.random() - 0.5) * (half * 1.15);
    }
    if (race?.objects) {
      const nearby = race.objects.obstacles;
      for (const o of nearby) {
        const aheadT = ((t - o.t + 1) % 1);
        if (aheadT > 0.002 && aheadT < 0.018 && Math.abs(o.lat - this.lateral) < 5.2) {
          this.laneTarget = clamp(o.lat + (o.lat > this.lateral ? -5.5 : 5.5), -half + 2, half - 2);
          break;
        }
      }
    }
    this.laneTarget = clamp(this.laneTarget, -half + 2, half - 2);
    const prevLateral = this.lateral;
    this.lateral = damp(this.lateral, this.laneTarget, 0.85, dt);
    const lateralVel = (this.lateral - prevLateral) / Math.max(dt, 0.0001);
    this.steerVisual = damp(this.steerVisual, clamp(lateralVel * 0.15, -0.45, 0.45), 5, dt);

    const pos = f.pos.clone().addScaledVector(f.left, this.lateral);
    this.position.copy(pos);
    this.yaw = Math.atan2(f.tangent.x, f.tangent.z);

    // Occasional ramp jumps for life. Detect a forward crossing of each ramp.
    if (race?.objects && !this.airborne && this.index % 2 === 0) {
      for (const r of race.objects.ramps) {
        if (wrappedCrossed(this.jumpCheck, t, r.t) && Math.abs(this.lateral) < r.halfWidth) {
          this.airborne = true;
          this.vy = 5.6 + Math.random() * 1.4;
          this.air = 0.2;
          break;
        }
      }
    }
    this.jumpCheck = t;

    let elevation = 0;
    if (this.airborne) {
      this.air += this.vy * dt;
      this.vy -= 20 * dt;
      elevation = Math.max(0, this.air);
      if (this.air <= 0) {
        this.airborne = false;
        this.effects.splash(this.position.x, waveHeight(this.position.x, this.position.z, time), this.position.z, 0.8);
      }
    }

    const waterY = waveHeight(this.position.x, this.position.z, time);
    if (this.model) {
      this.model.setTransform(
        this.position, this.yaw, waterY, time,
        {
          speed: this.speed,
          steer: this.steerVisual,
          drift: 0,
          boost: 0,
          airborne: this.airborne,
          shield: false,
          stun: 0,
        },
      );
    }

    if (this.model) {
      this.model.group.position.y += elevation;
      this.model.shadow.visible = !this.airborne;
    }

    this.wakeTimer -= dt;
    if (this.wakeTimer <= 0 && !this.finished && this.speed > 4) {
      this.wakeTimer = 0.16 + Math.random() * 0.08;
      if (player && this.position.distanceToSquared(player.position) < 150 * 150) {
        this.effects.emitWake(this.position.x, waterY, this.position.z, this.yaw, this.speed, 0.72);
      }
    }
  }

  get displayLap() {
    return clamp(Math.floor(this.raceDist / this.track.length) + 1, 1, this.laps);
  }
}

export { PROFILES };
