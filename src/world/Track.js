import * as THREE from 'three';
import { clamp, lerp, smoothstep, wrap01, wrapDelta } from '../core/utils.js';

const CONTROL_POINTS = [
  [200, -16], [217, 56], [179, 126], [100, 158], [19, 160], [-56, 158],
  [-139, 143], [-207, 94], [-219, 18], [-186, -48], [-146, -102],
  [-99, -157], [-23, -196], [66, -185], [129, -133], [165, -75],
];

const WAVE = {
  ax: 0.32, az: 0.44, axz: 0.58,
  t1: 1.25, t2: 0.95, t3: 1.8,
  a1: 0.10, a2: 0.07, a3: 0.045,
};

/** Shared CPU/GPU wave height. Keep in sync with Water.js. */
export function waveHeight(x, z, time) {
  return (
    Math.sin(x * WAVE.ax + time * WAVE.t1) * WAVE.a1 +
    Math.sin(z * WAVE.az - time * WAVE.t2) * WAVE.a2 +
    Math.sin((x + z) * WAVE.axz + time * WAVE.t3) * WAVE.a3
  );
}

export class Track {
  constructor() {
    const points = CONTROL_POINTS.map(([x, z]) => new THREE.Vector3(x, 0, z));
    this.curve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
    this.length = this.curve.getLength();
    this.sampleCount = 1200;
    this.pts = [];
    this.tangents = [];
    this.lefts = [];
    this.widths = [];
    for (let i = 0; i < this.sampleCount; i++) {
      const t = i / this.sampleCount;
      const p = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t).setY(0).normalize();
      const left = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      this.pts.push(p);
      this.tangents.push(tan);
      this.lefts.push(left);
      this.widths.push(this.getWidth(t));
    }
    this.gateCount = 8;
    this.gateFractions = Array.from({ length: this.gateCount }, (_, i) => (i + 1) / this.gateCount);
    this.gateDistances = this.gateFractions.map((f) => f * this.length);
    this.rampTs = [0.20, 0.70];
    this.startFrame = this.getFrameAt(0);
  }

  getWidth(t) {
    t = wrap01(t);
    let base = 30 + Math.sin(t * Math.PI * 4 + 0.8) * 2.3 + Math.cos(t * Math.PI * 6 + 1.9) * 1.3;
    const narrow = smoothstep(0.14, 0.20, t) * (1 - smoothstep(0.27, 0.34, t));
    base -= narrow * 5.2;
    const wide = smoothstep(0.62, 0.69, t) * (1 - smoothstep(0.79, 0.87, t));
    base += wide * 4.2;
    return clamp(base, 23.5, 36);
  }

  getFrameAt(t) {
    t = wrap01(t);
    const f = t * this.sampleCount;
    const i0 = Math.floor(f) % this.sampleCount;
    const i1 = (i0 + 1) % this.sampleCount;
    const a = f - Math.floor(f);
    const pos = this.pts[i0].clone().lerp(this.pts[i1], a);
    const tangent = this.tangents[i0].clone().lerp(this.tangents[i1], a).normalize();
    const left = this.lefts[i0].clone().lerp(this.lefts[i1], a).normalize();
    const width = lerp(this.widths[i0], this.widths[i1], a);
    return { t, pos, tangent, left, width, index: i0 };
  }

  offset(t, lateral, y = 0, target = new THREE.Vector3()) {
    const f = this.getFrameAt(t);
    return target.copy(f.pos).addScaledVector(f.left, lateral).setY(y);
  }

  /** Returns nearest point on the centreline, searching near a hint to stay cheap. */
  nearest(position, hint = null, window = 70) {
    let bestIndex = 0;
    let bestDist = Infinity;
    if (hint == null) {
      for (let i = 0; i < this.sampleCount; i += 2) {
        const p = this.pts[i];
        const dx = p.x - position.x;
        const dz = p.z - position.z;
        const d = dx * dx + dz * dz;
        if (d < bestDist) { bestDist = d; bestIndex = i; }
      }
    } else {
      for (let k = -window; k <= window; k++) {
        const i = ((hint + k) % this.sampleCount + this.sampleCount) % this.sampleCount;
        const p = this.pts[i];
        const dx = p.x - position.x;
        const dz = p.z - position.z;
        const d = dx * dx + dz * dz;
        if (d < bestDist) { bestDist = d; bestIndex = i; }
      }
    }
    // Refine around the closest coarse point.
    for (let k = -3; k <= 3; k++) {
      const i = ((bestIndex + k) % this.sampleCount + this.sampleCount) % this.sampleCount;
      const p = this.pts[i];
      const dx = p.x - position.x;
      const dz = p.z - position.z;
      const d = dx * dx + dz * dz;
      if (d < bestDist) { bestDist = d; bestIndex = i; }
    }
    const frame = this.getFrameAt(bestIndex / this.sampleCount);
    const dx = position.x - frame.pos.x;
    const dz = position.z - frame.pos.z;
    const lateral = dx * frame.left.x + dz * frame.left.z;
    return {
      t: bestIndex / this.sampleCount,
      index: bestIndex,
      lateral,
      distance: Math.sqrt(bestDist),
      frame,
    };
  }

  /** Signed shortest delta in t, accounting for the closed loop. */
  deltaT(fromT, toT) {
    return wrapDelta(toT - fromT);
  }

  /** Height of the terrain at a lateral offset, used to place vegetation and props. */
  bankHeight(t, absLateral) {
    const half = this.getWidth(t) / 2;
    if (absLateral <= half - 1) return -0.5;
    if (absLateral < half + 5) return 0.16 + Math.sin(absLateral * 0.5) * 0.04;
    if (absLateral < half + 15) return 0.42;
    if (absLateral < half + 34) {
      return 0.9 + smoothstep(half + 15, half + 34, absLateral) * 2.1 + Math.sin(absLateral * 0.4 + t * 50) * 0.18;
    }
    return 3.2 + (absLateral - half - 34) * 0.105 + Math.sin(absLateral * 0.21 + t * 37) * 0.7;
  }

  waterHeight(position, time) {
    return waveHeight(position.x, position.z, time);
  }

  /** Place a racer safely on the course. */
  gridPosition(row, column) {
    const t = 0.985 - row * 0.0065;
    const lateral = (column - 1) * 7.4 + (row === 1 ? 3.7 : 0);
    const f = this.getFrameAt(t);
    return {
      t,
      position: f.pos.clone().addScaledVector(f.left, lateral),
      tangent: f.tangent.clone(),
      left: f.left.clone(),
      lateral,
      row,
      column,
    };
  }
}

export { WAVE };
