import * as THREE from 'three';
import { makeGlowTexture, makeLabelTexture, seededRandom } from '../core/utils.js';
import { waveHeight } from './Track.js';

const glow = typeof document !== 'undefined' ? makeGlowTexture(96) : null;

const ROCK_SPOTS = [
  [0.062, -7.5, 1.7], [0.116, 7.8, 2.0], [0.235, -5.5, 1.5], [0.322, 9.2, 1.8],
  [0.438, -8.2, 2.1], [0.548, 6.4, 1.6], [0.648, -7.4, 1.9], [0.782, 8.4, 1.8],
  [0.894, -6.2, 1.6], [0.952, 5.2, 1.4],
];
const LOG_SPOTS = [
  [0.095, 1.5, 0.2], [0.286, -1.8, -0.3], [0.487, 2.4, 0.5], [0.73, -2.0, -0.1], [0.856, 7.0, 0.4],
];
const WHIRL_SPOTS = [
  [0.205, 5.0], [0.596, -4.0], [0.812, 2.0],
];
const PICKUP_SPOTS = [
  [0.045, 0, 'nitro'], [0.085, -4, 'coin'], [0.105, 4, 'coin'], [0.152, 3, 'shield'],
  [0.184, -5, 'coin'], [0.258, 0, 'nitro'], [0.305, -6, 'coin'], [0.352, 5, 'coin'],
  [0.402, -3, 'shield'], [0.46, 4, 'nitro'], [0.515, -2, 'coin'], [0.575, 5, 'coin'],
  [0.622, -5, 'shield'], [0.685, 2, 'nitro'], [0.745, -4, 'coin'], [0.795, 4, 'coin'],
  [0.848, 0, 'nitro'], [0.915, -4, 'shield'], [0.946, 4, 'coin'],
];

function canvasChecker() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 128;
  const ctx = c.getContext('2d');
  const cell = 32;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 16; x++) {
      ctx.fillStyle = (x + y) % 2 ? 'rgba(9,40,34,.55)' : 'rgba(245,252,235,.9)';
      ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.set(4, 1);
  return tex;
}

export class RaceObjects {
  constructor(scene, track) {
    this.scene = scene;
    this.track = track;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.obstacles = [];
    this.pickups = [];
    this.ramps = [];
    this.whirls = [];
    this.flags = [];
    this.rand = seededRandom(613);
    this.checkerTex = canvasChecker();
    this.buildCheckpoints();
    this.buildStartLine();
    this.buildObstacles();
    this.buildPickups();
    this.buildRamps();
    this.buildBuoys();
  }

  buildCheckpoints() {
    const bambooMat = new THREE.MeshLambertMaterial({ color: '#b79a55', flatShading: true });
    const flagMats = [
      new THREE.MeshBasicMaterial({ color: '#ff8a3d', side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: '#d8ff5d', side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ color: '#7af3d5', side: THREE.DoubleSide }),
    ];
    for (let i = 0; i < this.track.gateCount; i++) {
      const t = this.track.gateFractions[i];
      const f = this.track.getFrameAt(t);
      const group = new THREE.Group();
      group.position.copy(f.pos);
      group.rotation.y = Math.atan2(f.tangent.x, f.tangent.z);
      const half = f.width / 2;
      for (const side of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 4.4, 5), bambooMat);
        pole.position.set(side * (half + 0.7), 2.0, 0);
        group.add(pole);
        const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.85, 3, 1), flagMats[i % flagMats.length]);
        flag.position.set(side * (half + 0.7) + side * 0.78, 3.85, 0);
        flag.rotation.y = Math.PI / 2;
        group.add(flag);
        this.flags.push({ mesh: flag, phase: i * 1.1 + (side > 0 ? 0.5 : 0), side });
        const buoy = new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 8, 6),
          new THREE.MeshLambertMaterial({ color: i === this.track.gateCount - 1 ? '#d8ff5d' : '#ff8a3d' }),
        );
        buoy.position.set(side * (half - 1.3), 0.25, 0);
        group.add(buoy);
      }
      const number = new THREE.Sprite(new THREE.SpriteMaterial({
        map: makeLabelTexture(String(i + 1), 'rgba(7,40,35,.82)', '#d8ff5d', 160),
        transparent: true, depthWrite: false,
      }));
      number.position.set(0, 5.4, 0);
      number.scale.setScalar(1.15);
      group.add(number);
      this.group.add(group);
    }
  }

  buildStartLine() {
    const f = this.track.getFrameAt(0);
    const geo = new THREE.PlaneGeometry(f.width + 1, 3.4);
    const mat = new THREE.MeshBasicMaterial({
      map: this.checkerTex, transparent: true, depthWrite: false, opacity: 0.92,
      side: THREE.DoubleSide,
    });
    const line = new THREE.Mesh(geo, mat);
    line.rotation.x = -Math.PI / 2;
    line.rotation.z = -Math.atan2(f.tangent.x, f.tangent.z);
    line.position.set(f.pos.x, 0.14, f.pos.z);
    line.renderOrder = 3;
    this.group.add(line);
  }

  buildObstacles() {
    const rockMat = new THREE.MeshStandardMaterial({ color: '#7d8875', roughness: 0.93, flatShading: true });
    const mossMat = new THREE.MeshLambertMaterial({ color: '#4a7e3d', flatShading: true });
    const logMat = new THREE.MeshStandardMaterial({ color: '#6b4b2c', roughness: 0.9, flatShading: true });
    const darkLog = new THREE.MeshLambertMaterial({ color: '#4b331e', flatShading: true });

    for (const [t, lat, scale] of ROCK_SPOTS) {
      const f = this.track.getFrameAt(t);
      const pos = f.pos.clone().addScaledVector(f.left, lat);
      const group = new THREE.Group();
      group.position.copy(pos);
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 0), rockMat);
      rock.scale.set(scale * 1.15, scale * 0.82, scale * 1.05);
      rock.position.y = scale * 0.16;
      rock.rotation.set(this.rand() * 2, this.rand() * 3, this.rand() * 2);
      group.add(rock);
      const moss = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), mossMat);
      moss.scale.set(scale * 0.66, scale * 0.25, scale * 0.58);
      moss.position.set(scale * 0.1, scale * 0.55, -scale * 0.1);
      group.add(moss);
      const foam = new THREE.Mesh(
        new THREE.RingGeometry(scale * 0.9, scale * 1.55, 18),
        new THREE.MeshBasicMaterial({ color: '#eaffdf', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
      );
      foam.rotation.x = -Math.PI / 2;
      foam.position.y = 0.06;
      group.add(foam);
      this.group.add(group);
      this.obstacles.push({
        type: 'rock', group, position: pos.clone(), t, lat, radius: scale * 1.25 + 0.5,
        baseY: 0, hit: false,
      });
    }

    for (const [t, lat, rot] of LOG_SPOTS) {
      const f = this.track.getFrameAt(t);
      const pos = f.pos.clone().addScaledVector(f.left, lat);
      const group = new THREE.Group();
      group.position.copy(pos);
      group.rotation.y = Math.atan2(f.tangent.x, f.tangent.z) + rot;
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 6.2, 7), logMat);
      log.rotation.z = Math.PI / 2;
      log.position.y = 0.36;
      group.add(log);
      for (let i = 0; i < 3; i++) {
        const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 1.7, 5), darkLog);
        branch.position.set(-2.2 + i * 2.1, 0.68, (i % 2 ? 0.55 : -0.5));
        branch.rotation.z = Math.PI / 2 + (i - 1) * 0.45;
        branch.rotation.y = i * 0.8;
        group.add(branch);
      }
      // Root tangle on one end.
      const root = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 0), darkLog);
      root.scale.set(1.2, 0.8, 1.4);
      root.position.set(3.1, 0.5, 0.2);
      group.add(root);
      this.group.add(group);
      this.obstacles.push({
        type: 'log', group, position: pos.clone(), t, lat, radius: 3.6, baseY: 0, hit: false, phase: this.rand() * 6,
      });
    }

    const whirlMat = new THREE.MeshBasicMaterial({
      color: '#183e38', transparent: true, opacity: 0.52, side: THREE.DoubleSide, depthWrite: false,
    });
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#c7f5e4', transparent: true, opacity: 0.34, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    for (const [t, lat] of WHIRL_SPOTS) {
      const f = this.track.getFrameAt(t);
      const pos = f.pos.clone().addScaledVector(f.left, lat);
      const group = new THREE.Group();
      group.position.copy(pos);
      const disc = new THREE.Mesh(new THREE.CircleGeometry(3.5, 24), whirlMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.y = 0.08;
      group.add(disc);
      const rings = [];
      for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.4 + i * 0.85, 1.6 + i * 0.85, 24), ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.1 + i * 0.02;
        group.add(ring);
        rings.push({ mesh: ring, speed: 0.5 + i * 0.25 });
      }
      const foamSprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glow, color: '#d9fff3', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.25,
      }));
      foamSprite.scale.setScalar(7);
      foamSprite.position.y = 0.4;
      group.add(foamSprite);
      this.group.add(group);
      this.whirls.push({ group, rings, speed: 1.2, phase: this.rand() * 5 });
      this.obstacles.push({
        type: 'whirlpool', group, position: pos.clone(), t, lat, radius: 3.9, baseY: 0, hit: false,
      });
    }
  }

  buildPickups() {
    const nitroMat = new THREE.MeshStandardMaterial({ color: '#5fe9ff', emissive: '#1b9ab5', emissiveIntensity: 0.8, roughness: 0.25 });
    const shieldMat = new THREE.MeshStandardMaterial({ color: '#ffd356', emissive: '#b07c0a', emissiveIntensity: 0.65, roughness: 0.3 });
    const coinMat = new THREE.MeshStandardMaterial({ color: '#ffcf4d', emissive: '#a06b05', emissiveIntensity: 0.55, roughness: 0.22, metalness: 0.65 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: '#f4fff8', roughness: 0.35 });
    const coinGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.12, 18);
    coinGeo.rotateX(Math.PI / 2);
    const coinRim = new THREE.TorusGeometry(0.52, 0.06, 6, 18);
    const capsule = new THREE.CapsuleGeometry(0.22, 0.45, 4, 8);

    for (const [t, lat, type] of PICKUP_SPOTS) {
      const f = this.track.getFrameAt(t);
      const pos = f.pos.clone().addScaledVector(f.left, lat);
      const group = new THREE.Group();
      group.position.copy(pos);
      const spin = new THREE.Group();
      group.add(spin);
      let color = '#7af3d5';
      if (type === 'nitro') {
        const bottle = new THREE.Mesh(capsule, nitroMat);
        bottle.position.y = 0.05;
        spin.add(bottle);
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.18, 7), whiteMat);
        cap.position.y = 0.44;
        spin.add(cap);
        color = '#5fe9ff';
      } else if (type === 'shield') {
        const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 1), shieldMat);
        spin.add(s);
        const wire = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.68, 1),
          new THREE.MeshBasicMaterial({ color: '#ffe7a1', wireframe: true, transparent: true, opacity: 0.35 }),
        );
        spin.add(wire);
        color = '#ffd356';
      } else {
        const coin = new THREE.Mesh(coinGeo, coinMat);
        spin.add(coin);
        const rim = new THREE.Mesh(coinRim, coinMat);
        rim.position.z = 0;
        spin.add(rim);
        color = '#ffd94f';
      }
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glow, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.7,
      }));
      halo.scale.setScalar(type === 'coin' ? 2.2 : 2.7);
      halo.position.y = 0.05;
      group.add(halo);
      this.group.add(group);
      this.pickups.push({
        type, group, spin, halo, position: pos.clone(), t, lat, active: true, cooldown: 0, baseY: 1.25,
      });
    }
  }

  buildRamps() {
    const plankMat = new THREE.MeshLambertMaterial({ color: '#a37643', flatShading: true });
    const darkMat = new THREE.MeshLambertMaterial({ color: '#644426', flatShading: true });
    const stripeMat = new THREE.MeshBasicMaterial({ color: '#d8ff5d' });
    const warnMat = new THREE.MeshBasicMaterial({ color: '#ff7a48' });
    for (const t of this.track.rampTs) {
      const f = this.track.getFrameAt(t);
      const group = new THREE.Group();
      group.position.copy(f.pos);
      group.rotation.y = Math.atan2(f.tangent.x, f.tangent.z);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(10, 0.32, 12), plankMat);
      deck.position.set(0, 0.78, 0);
      deck.rotation.x = -0.23;
      group.add(deck);
      const back = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.24, 3.2), darkMat);
      back.position.set(0, 0.32, -5.4);
      back.rotation.x = -0.23;
      group.add(back);
      for (const side of [-1, 1]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 12), darkMat);
        rail.position.set(side * 4.9, 1.25, 0);
        rail.rotation.x = -0.23;
        group.add(rail);
        const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3.4, 5), darkMat);
        flagPole.position.set(side * 4.6, 1.9, 4.6);
        group.add(flagPole);
        const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.6), stripeMat);
        flag.position.set(side * 5.2, 3.2, 4.6);
        flag.rotation.y = Math.PI / 2;
        group.add(flag);
      }
      for (let i = 0; i < 5; i++) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.035, 0.34), i % 2 ? warnMat : stripeMat);
        stripe.position.set(0, 0.96 + 0.03, -4.2 + i * 1.8);
        stripe.rotation.x = -0.23;
        group.add(stripe);
      }
      this.group.add(group);
      this.ramps.push({ t, group, lateral: 0, halfWidth: 5.4, length: 12 });
    }
  }

  buildBuoys() {
    const count = 46;
    const geo = new THREE.SphereGeometry(0.32, 7, 5);
    geo.scale(1, 1.35, 1);
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.05 });
    const mesh = new THREE.InstancedMesh(geo, mat, count * 2);
    const m = new THREE.Matrix4();
    const c = new THREE.Color();
    let idx = 0;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const f = this.track.getFrameAt(t);
      for (const side of [-1, 1]) {
        const lat = side * (f.width / 2 - 1.1);
        const p = f.pos.clone().addScaledVector(f.left, lat);
        p.y = waveHeight(p.x, p.z, 0) + 0.16;
        m.compose(p, new THREE.Quaternion(), new THREE.Vector3(1, 1, 1));
        mesh.setMatrixAt(idx, m);
        c.set(i % 2 ? '#ff8a3d' : '#d8ff5d');
        mesh.setColorAt(idx, c);
        idx++;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    this.group.add(mesh);
    this.buoys = mesh;
  }

  reset() {
    for (const p of this.pickups) {
      p.active = true;
      p.cooldown = 0;
      p.group.visible = true;
    }
    for (const o of this.obstacles) o.hit = false;
  }

  update(dt, time) {
    for (const p of this.pickups) {
      if (!p.active) {
        p.cooldown -= dt;
        if (p.cooldown <= 0) {
          p.active = true;
          p.group.visible = true;
        }
        continue;
      }
      const y = waveHeight(p.position.x, p.position.z, time) + p.baseY + Math.sin(time * 2.2 + p.t * 17) * 0.16;
      p.group.position.set(p.position.x, y, p.position.z);
      p.spin.rotation.y += dt * 1.6;
      p.spin.rotation.x = Math.sin(time * 1.2 + p.t * 9) * 0.12;
      p.halo.material.opacity = 0.55 + Math.sin(time * 3 + p.t * 20) * 0.15;
    }
    for (const o of this.obstacles) {
      if (o.type === 'log') {
        o.group.position.y = Math.sin(time * 1.25 + o.phase) * 0.12;
        o.group.rotation.z = Math.sin(time * 1.05 + o.phase) * 0.035;
      } else if (o.type === 'rock') {
        o.group.position.y = Math.sin(time * 0.9 + o.t * 30) * 0.05;
      }
    }
    for (const w of this.whirls) {
      w.group.rotation.y += dt * w.speed;
      w.rings.forEach((r, i) => {
        r.mesh.scale.setScalar(1 + Math.sin(time * 1.7 + i + w.phase) * 0.06);
      });
    }
    for (const f of this.flags) {
      f.mesh.rotation.z = Math.sin(time * 4 + f.phase) * 0.12;
    }
  }

  collect(position, radius = 2.3) {
    for (const p of this.pickups) {
      if (!p.active) continue;
      const dx = position.x - p.position.x;
      const dz = position.z - p.position.z;
      if (dx * dx + dz * dz < radius * radius) {
        p.active = false;
        p.cooldown = 13;
        p.group.visible = false;
        return p;
      }
    }
    return null;
  }

  collide(position, airborne = false) {
    for (const o of this.obstacles) {
      if (o.type === 'rock' && airborne) continue;
      const dx = position.x - o.position.x;
      const dz = position.z - o.position.z;
      const r = o.radius + 0.8;
      if (dx * dx + dz * dz < r * r) return o;
    }
    return null;
  }

  rampAt(t, lateral) {
    for (const r of this.ramps) {
      const diff = Math.abs(((t - r.t + 1.5) % 1) - 0.5);
      if (diff < 0.008 && Math.abs(lateral) < r.halfWidth) return r;
    }
    return null;
  }
}
