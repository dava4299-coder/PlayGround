import * as THREE from 'three';

const vert = /* glsl */`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 1.0, 90.0);
  }
`;

const frag = /* glsl */`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.12, d);
    gl_FragColor = vec4(vColor, vAlpha * soft);
  }
`;

class ParticlePool {
  constructor(scene, capacity, blending) {
    this.capacity = capacity;
    this.scene = scene;
    this.cursor = 0;
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.size = new Float32Array(capacity);
    this.alpha = new Float32Array(capacity);
    this.vel = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.gravity = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);
    this.grow = new Float32Array(capacity);
    this.baseAlpha = new Float32Array(capacity);
    this.baseSize = new Float32Array(capacity);
    for (let i = 0; i < capacity; i++) this.alpha[i] = 0;
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.geometry = geo;
    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      blending,
      uniforms: { uScale: { value: 110 } },
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    scene.add(this.points);
  }

  spawn(x, y, z, vx, vy, vz, color, size, life, gravity = 0, drag = 0.6, grow = 0.4, baseAlpha = 0.8) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.capacity;
    const i3 = i * 3;
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z;
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz;
    this.col[i3] = color.r; this.col[i3 + 1] = color.g; this.col[i3 + 2] = color.b;
    this.size[i] = size;
    this.baseSize[i] = size;
    this.alpha[i] = baseAlpha;
    this.baseAlpha[i] = baseAlpha;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.gravity[i] = gravity;
    this.drag[i] = drag;
    this.grow[i] = grow;
  }

  update(dt) {
    for (let i = 0; i < this.capacity; i++) {
      if (this.life[i] <= 0) {
        if (this.alpha[i] !== 0) this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      const i3 = i * 3;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = k * this.baseAlpha[i];
      const dragK = Math.exp(-this.drag[i] * dt);
      this.vel[i3] *= dragK;
      this.vel[i3 + 2] *= dragK;
      this.vel[i3 + 1] = this.vel[i3 + 1] * dragK - this.gravity[i] * dt;
      this.pos[i3] += this.vel[i3] * dt;
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt;
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      this.size[i] = this.baseSize[i] * (1 + (1 - k) * this.grow[i]);
      if (this.life[i] <= 0) this.alpha[i] = 0;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.aColor.needsUpdate = true;
    this.geometry.attributes.aSize.needsUpdate = true;
    this.geometry.attributes.aAlpha.needsUpdate = true;
  }
}

const TMP = new THREE.Vector3();
const FORWARD = new THREE.Vector3();

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.foam = new ParticlePool(scene, 420, THREE.NormalBlending);
    this.spark = new ParticlePool(scene, 340, THREE.AdditiveBlending);
    this.colors = {
      foam: new THREE.Color('#e7f8e3'),
      foamDeep: new THREE.Color('#b7ddc9'),
      spark: new THREE.Color('#ffcf5e'),
      sparkHot: new THREE.Color('#ff7a48'),
      nitro: new THREE.Color('#6ffbe8'),
      shield: new THREE.Color('#ffd356'),
      coin: new THREE.Color('#ffd94f'),
      blue: new THREE.Color('#65cfff'),
    };
    this.trailTimer = 0;
    this.aiTimer = 0;
  }

  emitWake(x, y, z, yaw, speed, width = 1) {
    FORWARD.set(Math.sin(yaw), 0, Math.cos(yaw));
    const right = TMP.set(FORWARD.z, 0, -FORWARD.x);
    const sx = x - FORWARD.x * 1.45;
    const sz = z - FORWARD.z * 1.45;
    const strength = Math.min(1, speed / 28);
    for (const side of [-1, 1]) {
      const px = sx + right.x * side * 0.52;
      const pz = sz + right.z * side * 0.52;
      this.foam.spawn(
        px, y + 0.1, pz,
        (Math.random() - 0.5) * 1.2 + right.x * side * (0.5 + strength),
        0.4 + Math.random() * 0.8,
        (Math.random() - 0.5) * 1.2 + right.z * side * (0.5 + strength),
        this.colors.foam,
        (0.5 + Math.random() * 0.7) * width,
        0.55 + Math.random() * 0.45,
        0.3, 1.2, 2.4, 0.36 + strength * 0.2,
      );
    }
    if (speed > 8) {
      const count = 1 + Math.floor(strength * 3);
      for (let i = 0; i < count; i++) {
        const side = Math.random() < 0.5 ? -1 : 1;
        this.foam.spawn(
          sx + right.x * side * 0.7, y + 0.2, sz + right.z * side * 0.7,
          right.x * side * (1.2 + Math.random() * 2.2) - FORWARD.x * 1.5,
          1.5 + Math.random() * 2.2,
          right.z * side * (1.2 + Math.random() * 2.2) - FORWARD.z * 1.5,
          this.colors.foam,
          0.18 + Math.random() * 0.2,
          0.4 + Math.random() * 0.25,
          7.5, 0.8, -0.4, 0.8,
        );
      }
    }
  }

  driftSparks(x, y, z, yaw, side) {
    FORWARD.set(Math.sin(yaw), 0, Math.cos(yaw));
    const right = TMP.set(FORWARD.z, 0, -FORWARD.x);
    for (let i = 0; i < 2; i++) {
      const col = Math.random() < 0.55 ? this.colors.spark : this.colors.sparkHot;
      this.spark.spawn(
        x + right.x * side * 0.58 - FORWARD.x * 0.9,
        y + 0.25,
        z + right.z * side * 0.58 - FORWARD.z * 0.9,
        right.x * side * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.4,
        1.2 + Math.random() * 2.6,
        right.z * side * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.4,
        col,
        0.13 + Math.random() * 0.12,
        0.25 + Math.random() * 0.3,
        8, 0.5, 0.4, 1,
      );
    }
  }

  boostTrail(x, y, z, yaw) {
    FORWARD.set(Math.sin(yaw), 0, Math.cos(yaw));
    for (let i = 0; i < 3; i++) {
      this.spark.spawn(
        x - FORWARD.x * 1.7 + (Math.random() - 0.5) * 0.5,
        y + 0.15 + (Math.random() - 0.5) * 0.3,
        z - FORWARD.z * 1.7 + (Math.random() - 0.5) * 0.5,
        -FORWARD.x * (4 + Math.random() * 4) + (Math.random() - 0.5) * 2,
        0.4 + Math.random() * 1.6,
        -FORWARD.z * (4 + Math.random() * 4) + (Math.random() - 0.5) * 2,
        Math.random() < 0.5 ? this.colors.nitro : this.colors.blue,
        0.2 + Math.random() * 0.28,
        0.35 + Math.random() * 0.3,
        0, 1.2, 0.8, 0.9,
      );
    }
  }

  splash(x, y, z, strength = 1) {
    const count = Math.floor(22 + strength * 34);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 3.5;
      this.foam.spawn(
        x + Math.cos(a) * Math.random() * 1.2,
        y + 0.15,
        z + Math.sin(a) * Math.random() * 1.2,
        Math.cos(a) * r,
        2.5 + Math.random() * (4.2 * strength),
        Math.sin(a) * r,
        Math.random() < 0.3 ? this.colors.foamDeep : this.colors.foam,
        0.32 + Math.random() * 0.55,
        0.55 + Math.random() * 0.5,
        9.5, 0.55, 0.5, 0.9,
      );
    }
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * Math.PI * 2;
      this.spark.spawn(
        x, y + 0.5, z,
        Math.cos(a) * (2 + Math.random() * 4), 3 + Math.random() * 5, Math.sin(a) * (2 + Math.random() * 4),
        this.colors.foam, 0.15 + Math.random() * 0.2, 0.5 + Math.random() * 0.3, 10, 0.7, 0.4, 0.55,
      );
    }
  }

  pickupBurst(x, y, z, type) {
    const color = type === 'nitro' ? this.colors.nitro : type === 'shield' ? this.colors.shield : this.colors.coin;
    for (let i = 0; i < 20; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 2.5 + Math.random() * 4.5;
      this.spark.spawn(
        x, y, z,
        Math.cos(a) * s, 1 + Math.random() * 3.5, Math.sin(a) * s,
        color, 0.12 + Math.random() * 0.18, 0.45 + Math.random() * 0.35, 2, 1.6, 0.2, 1,
      );
    }
  }

  impact(x, y, z, strength = 1) {
    for (let i = 0; i < 28; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 3 + Math.random() * 6;
      this.spark.spawn(
        x, y + 0.4, z,
        Math.cos(a) * s, 1.5 + Math.random() * 4, Math.sin(a) * s,
        Math.random() < 0.4 ? this.colors.sparkHot : this.colors.spark,
        0.16 + Math.random() * 0.2, 0.35 + Math.random() * 0.3, 9, 1.2, 0.3, 0.9 * strength,
      );
    }
    this.splash(x, y, z, strength * 1.2);
  }

  shieldBreak(x, y, z) {
    for (let i = 0; i < 32; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = Math.random() * Math.PI - Math.PI / 2;
      const s = 3 + Math.random() * 4;
      this.spark.spawn(
        x, y + 0.7, z,
        Math.cos(a) * Math.cos(b) * s, Math.sin(b) * s + 1.5, Math.sin(a) * Math.cos(b) * s,
        this.colors.shield, 0.16 + Math.random() * 0.22, 0.5 + Math.random() * 0.3, 3, 0.8, 0.3, 1,
      );
    }
  }

  update(dt) {
    this.foam.update(dt);
    this.spark.update(dt);
  }

  clear() {
    for (const pool of [this.foam, this.spark]) {
      pool.life.fill(0);
      pool.alpha.fill(0);
      pool.geometry.attributes.aAlpha.needsUpdate = true;
    }
  }

  setPixelScale(scale) {
    this.foam.material.uniforms.uScale.value = scale;
    this.spark.material.uniforms.uScale.value = scale;
  }
}
