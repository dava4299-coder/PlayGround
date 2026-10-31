import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeGlowTexture, makeBannerTexture, makeNoise2D, seededRandom, lerp, clamp, PALETTES } from '../core/utils.js';

const skyVert = /* glsl */`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const skyFrag = /* glsl */`
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uHorizon;
  uniform vec3 uSun;
  uniform vec3 uSunDir;
  varying vec3 vDir;

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.28, h));
    col = mix(col, uTop, smoothstep(0.16, 0.9, h));
    float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSun * pow(sunDot, 1200.0) * 3.4;
    col += uSun * pow(sunDot, 38.0) * 0.22;
    col += uSun * pow(sunDot, 6.0) * 0.05;
    // soft warm haze near the horizon
    col = mix(col, uHorizon, smoothstep(0.12, -0.08, d.y) * 0.45);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const fallVert = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fallFrag = /* glsl */`
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), f.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
  }
  void main() {
    vec2 uv = vUv;
    float n = noise(vec2(uv.x * 10.0, uv.y * 8.0 - uTime * 3.4));
    float n2 = noise(vec2(uv.x * 28.0 + 2.0, uv.y * 26.0 - uTime * 6.0));
    float streak = smoothstep(0.36, 0.72, n * 0.65 + n2 * 0.5);
    float edge = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x);
    float alpha = (0.2 + streak * 0.8) * edge;
    vec3 col = mix(vec3(0.66, 0.84, 0.8), uColor, streak);
    gl_FragColor = vec4(col, alpha * 0.9);
  }
`;

function leafGeometry() {
  const leaves = [];
  const count = 9;
  for (let i = 0; i < count; i++) {
    const g = new THREE.PlaneGeometry(1.15, 3.9, 1, 5);
    g.translate(0, 1.9, 0);
    const pos = g.attributes.position;
    for (let v = 0; v < pos.count; v++) {
      const y = pos.getY(v);
      const f = clamp(y / 3.9, 0, 1);
      pos.setX(v, pos.getX(v) * (1 - f * 0.78));
      pos.setZ(v, -f * f * 0.85);
    }
    g.rotateX(-Math.PI / 2 + 0.38);
    g.rotateY((i / count) * Math.PI * 2 + (i % 2) * 0.12);
    g.translate(0, 0.15 + (i % 3) * 0.1, 0);
    leaves.push(g);
  }
  const merged = mergeGeometries(leaves, false);
  leaves.forEach((g) => g.dispose());
  merged.computeVertexNormals();
  return merged;
}

function broadCanopyGeometry() {
  const parts = [];
  const puffs = [
    [0, 0, 0, 1.0],
    [0.8, 0.35, 0.2, 0.72],
    [-0.65, 0.45, -0.15, 0.68],
    [0.05, 0.7, -0.6, 0.6],
  ];
  for (const [x, y, z, s] of puffs) {
    const g = new THREE.IcosahedronGeometry(1.7, 0);
    g.scale(s, s * 0.75, s);
    g.translate(x, y, z);
    parts.push(g);
  }
  const merged = mergeGeometries(parts, false);
  parts.forEach((g) => g.dispose());
  return merged;
}

const palmLeaves = typeof document !== 'undefined' ? leafGeometry() : null;
const broadCanopy = typeof document !== 'undefined' ? broadCanopyGeometry() : null;
const trunkGeo = (() => {
  const g = new THREE.CylinderGeometry(0.13, 0.32, 1, 6, 2);
  g.translate(0, 0.5, 0);
  return g;
})();
const bushGeo = new THREE.IcosahedronGeometry(1, 0);
const rockGeo = new THREE.DodecahedronGeometry(1, 0);
const cloudGeo = new THREE.IcosahedronGeometry(1, 1);
const hutRoofGeo = new THREE.ConeGeometry(4.4, 2.7, 4);
const hutBaseGeo = new THREE.BoxGeometry(4.4, 2.3, 3.8);

export class Environment {
  constructor(scene, track) {
    this.scene = scene;
    this.track = track;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.noise = makeNoise2D(8421);
    this.rand = seededRandom(777);
    this.time = 0;
    this.clouds = [];
    this.mist = [];
    this.birds = [];
    this.startLightMats = [];
    this.mountainMaterials = [];
    this.palette = PALETTES.morning;

    this.buildLights();
    this.buildSky();
    this.buildTerrain();
    this.buildMountains();
    this.buildClouds();
    this.buildJungle();
    this.buildBanks();
    this.buildStartArch();
    this.buildBridge();
    this.buildVillage();
    this.buildWaterfall();
    this.buildBirds();
    this.applyPalette('morning');
  }

  buildLights() {
    this.hemi = new THREE.HemisphereLight('#bde9e4', '#385b36', 1.15);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff0cf', 2.2);
    this.sun.position.set(-30, 55, 80);
    this.scene.add(this.sun);
    this.fill = new THREE.DirectionalLight('#9be5d1', 0.35);
    this.fill.position.set(40, 20, -60);
    this.scene.add(this.fill);
  }

  buildSky() {
    this.skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVert,
      fragmentShader: skyFrag,
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTop: { value: new THREE.Color('#3f9fd0') },
        uMid: { value: new THREE.Color('#9adbd4') },
        uHorizon: { value: new THREE.Color('#f5e7b8') },
        uSun: { value: new THREE.Color('#fff1c4') },
        uSunDir: { value: new THREE.Vector3(-0.28, 0.52, 0.78).normalize() },
      },
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(1500, 32, 18), this.skyMat);
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    this.group.add(this.sky);

    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture(256),
      color: '#fff2c4',
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      opacity: 0.85,
    }));
    this.sunSprite.scale.setScalar(210);
    this.sunSprite.renderOrder = -9;
    this.group.add(this.sunSprite);
  }

  buildTerrain() {
    const rows = 300;
    const sides = [-1, 1];
    const ringSpecs = [
      { add: 1.8, y: -0.7 },
      { add: 6, y: null },
      { add: 15, y: null },
      { add: 25, y: null },
      { add: 40, y: null },
      { add: 65, y: null },
      { add: 95, y: null },
    ];
    const colors = [new THREE.Color('#d8bd82'), new THREE.Color('#cab373'), new THREE.Color('#a3a463'), new THREE.Color('#79a653'), new THREE.Color('#4f8c47'), new THREE.Color('#427f43'), new THREE.Color('#356d3b')];
    const pos = [];
    const col = [];
    const idx = [];
    for (const side of sides) {
      const base = pos.length / 3;
      for (let j = 0; j <= rows; j++) {
        const t = j / rows;
        const f = this.track.getFrameAt(t);
        const half = f.width / 2;
        for (let r = 0; r < ringSpecs.length; r++) {
          const spec = ringSpecs[r];
          const absLat = half + spec.add;
          const lateral = absLat * side;
          const y = spec.y ?? this.track.bankHeight(t, absLat);
          const wobble = this.noise(t * 35, r * 7.1) - 0.5;
          const x = f.pos.x + f.left.x * lateral;
          const z = f.pos.z + f.left.z * lateral;
          pos.push(x, y + (r > 1 ? wobble * (r - 1) * 0.42 : 0), z);
          const c = colors[r].clone();
          if (r >= 3) {
            const n = this.noise(x * 0.06, z * 0.06);
            c.offsetHSL((n - 0.5) * 0.025, (n - 0.5) * 0.08, (n - 0.5) * 0.1);
          }
          if (r === 1 && this.noise(t * 90, side) > 0.52) c.lerp(colors[2], 0.65);
          if (r === 0) c.set('#c8a96e');
          col.push(c.r, c.g, c.b);
        }
      }
      for (let j = 0; j < rows; j++) {
        for (let r = 0; r < ringSpecs.length - 1; r++) {
          const a = base + j * ringSpecs.length + r;
          const b = a + 1;
          const c = a + ringSpecs.length;
          const d = c + 1;
          if (side === 1) idx.push(a, c, b, b, c, d);
          else idx.push(a, b, c, b, d, c);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    this.terrainMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    this.terrain = new THREE.Mesh(geo, this.terrainMat);
    this.terrain.receiveShadow = false;
    this.group.add(this.terrain);

    // A dark distant floor keeps gaps from showing at the horizon.
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(1400, 32),
      new THREE.MeshLambertMaterial({ color: '#244f36' }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -28;
    this.group.add(floor);
  }

  buildMountains() {
    const geo = new THREE.ConeGeometry(1, 1, 6, 1);
    geo.translate(0, 0.5, 0);
    const mat = new THREE.MeshLambertMaterial({ color: '#4b7c63', flatShading: true });
    this.mountainMaterials.push(mat);
    const count = 22;
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    const rand = seededRandom(909);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + rand() * 0.22;
      const radius = 560 + rand() * 280;
      const width = 90 + rand() * 150;
      const height = 70 + rand() * 170;
      p.set(Math.cos(a) * radius, -12, Math.sin(a) * radius);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * Math.PI * 2);
      s.set(width, height, width * (0.7 + rand() * 0.5));
      m.compose(p, q, s);
      mesh.setMatrixAt(i, m);
    }
    mesh.instanceMatrix.needsUpdate = true;
    this.group.add(mesh);
    this.mountains = mesh;
  }

  buildClouds() {
    const mat = new THREE.MeshBasicMaterial({
      color: '#fffaf0', transparent: true, opacity: 0.7, depthWrite: false, fog: true,
    });
    const count = 46;
    const mesh = new THREE.InstancedMesh(cloudGeo, mat, count);
    const rand = seededRandom(2341);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2;
      const radius = 320 + rand() * 520;
      const p = new THREE.Vector3(Math.cos(a) * radius, 68 + rand() * 85, Math.sin(a) * radius);
      const s = new THREE.Vector3(16 + rand() * 28, 5 + rand() * 8, 12 + rand() * 20);
      q.setFromEuler(new THREE.Euler(rand() * 0.3, rand() * Math.PI, 0));
      m.compose(p, q, s);
      mesh.setMatrixAt(i, m);
      this.clouds.push({ p, s, q, speed: 0.5 + rand() * 0.7, phase: rand() * 10 });
    }
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
    this.cloudMesh = mesh;
  }

  placeInstance(list, t, side, offset, extra = {}) {
    // Keep a scenic clearing around the waterfall so its sightline stays open
    // from the river rather than being walled off by jungle and boulders.
    if (side === -1 && t > 0.472 && t < 0.578 && offset < 58) return;
    const f = this.track.getFrameAt(t);
    const lateral = side * offset;
    const y = this.track.bankHeight(t, offset);
    const pos = new THREE.Vector3(f.pos.x + f.left.x * lateral, y, f.pos.z + f.left.z * lateral);
    list.push({ t, pos, side, offset, ...extra });
  }

  buildJungle() {
    const rand = seededRandom(99123);
    const palms = [];
    const broad = [];
    const bushes = [];
    const rocks = [];
    const canes = [];

    const halfAt = (t) => this.track.getWidth(t) / 2;
    for (let i = 0; i < 270; i++) {
      const t = rand();
      const side = rand() < 0.5 ? -1 : 1;
      const off = halfAt(t) + 14 + rand() * 52;
      this.placeInstance(palms, t, side, off, {
        h: 5.5 + rand() * 7,
        lean: (rand() - 0.5) * 0.22,
        rot: rand() * Math.PI * 2,
        size: 0.82 + rand() * 0.5,
        shade: rand(),
      });
    }
    for (let i = 0; i < 230; i++) {
      const t = rand();
      const side = rand() < 0.5 ? -1 : 1;
      const off = halfAt(t) + 19 + rand() * 62;
      this.placeInstance(broad, t, side, off, {
        h: 5.2 + rand() * 5.8,
        rot: rand() * Math.PI * 2,
        size: 1.45 + rand() * 1.4,
        shade: rand(),
      });
    }
    for (let i = 0; i < 250; i++) {
      const t = rand();
      const side = rand() < 0.5 ? -1 : 1;
      const off = halfAt(t) + 8 + rand() * 60;
      this.placeInstance(bushes, t, side, off, {
        s: 0.55 + rand() * 1.35,
        rot: rand() * Math.PI * 2,
        shade: rand(),
      });
    }
    for (let i = 0; i < 120; i++) {
      const t = rand();
      const side = rand() < 0.5 ? -1 : 1;
      const off = halfAt(t) + 3 + rand() * 42;
      this.placeInstance(rocks, t, side, off, {
        s: 0.5 + rand() * 2.4,
        rot: rand() * Math.PI * 2,
        shade: rand(),
      });
    }
    // Bamboo thickets near the narrow jungle section.
    for (let i = 0; i < 100; i++) {
      const t = 0.16 + rand() * 0.17;
      const side = rand() < 0.5 ? -1 : 1;
      const off = halfAt(t) + 4 + rand() * 18;
      this.placeInstance(canes, t, side, off, {
        h: 4 + rand() * 7,
        rot: rand() * Math.PI * 2,
        lean: (rand() - 0.5) * 0.2,
      });
    }

    const trunkMat = new THREE.MeshLambertMaterial({ color: '#8c6a42', flatShading: true });
    // Instance colours carry the hue, so the base materials stay bright.
    const palmMat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true, side: THREE.DoubleSide });
    const broadMat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true });
    const bushMat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true });
    const rockMat = new THREE.MeshLambertMaterial({ color: '#ffffff', flatShading: true });
    const caneMat = new THREE.MeshLambertMaterial({ color: '#86a94d', flatShading: true });

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const s = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    const color = new THREE.Color();

    // Palm trunks + crowns.
    const palmTrunks = new THREE.InstancedMesh(trunkGeo, trunkMat, palms.length);
    const palmCrowns = new THREE.InstancedMesh(palmLeaves, palmMat, palms.length);
    palms.forEach((p, i) => {
      const leanQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(p.lean, p.rot, p.lean * 0.5));
      q.copy(leanQ);
      v.copy(p.pos);
      s.set(1.1 * p.size, p.h, 1.1 * p.size);
      m.compose(v, q, s);
      palmTrunks.setMatrixAt(i, m);
      const top = new THREE.Vector3(0, p.h, 0).applyQuaternion(q).add(p.pos);
      q.setFromAxisAngle(up, p.rot);
      s.setScalar(0.65 * p.size + p.shade * 0.24);
      m.compose(top, q, s);
      palmCrowns.setMatrixAt(i, m);
      color.setHSL(0.24 + p.shade * 0.05, 0.5 + p.shade * 0.14, 0.44 + p.shade * 0.13);
      palmCrowns.setColorAt(i, color);
    });
    palmTrunks.instanceMatrix.needsUpdate = true;
    palmCrowns.instanceMatrix.needsUpdate = true;
    if (palmCrowns.instanceColor) palmCrowns.instanceColor.needsUpdate = true;
    this.group.add(palmTrunks, palmCrowns);

    const broadTrunks = new THREE.InstancedMesh(trunkGeo, trunkMat, broad.length);
    const broadCrowns = new THREE.InstancedMesh(broadCanopy, broadMat, broad.length);
    broad.forEach((p, i) => {
      q.setFromAxisAngle(up, p.rot);
      v.copy(p.pos);
      s.set(1.8 * p.size / 3, p.h, 1.8 * p.size / 3);
      m.compose(v, q, s);
      broadTrunks.setMatrixAt(i, m);
      const top = p.pos.clone().add(new THREE.Vector3(0, p.h * 0.94, 0));
      q.setFromEuler(new THREE.Euler(0, p.rot, (p.shade - 0.5) * 0.15));
      s.setScalar(p.size);
      m.compose(top, q, s);
      broadCrowns.setMatrixAt(i, m);
      color.setHSL(0.255 + p.shade * 0.045, 0.42 + p.shade * 0.15, 0.36 + p.shade * 0.12);
      broadCrowns.setColorAt(i, color);
    });
    broadTrunks.instanceMatrix.needsUpdate = true;
    broadCrowns.instanceMatrix.needsUpdate = true;
    if (broadCrowns.instanceColor) broadCrowns.instanceColor.needsUpdate = true;
    this.group.add(broadTrunks, broadCrowns);

    const bushMesh = new THREE.InstancedMesh(bushGeo, bushMat, bushes.length);
    bushes.forEach((p, i) => {
      q.setFromEuler(new THREE.Euler(0, p.rot, 0));
      v.set(p.pos.x, p.pos.y + p.s * 0.42, p.pos.z);
      s.set(p.s * 1.3, p.s * 0.65, p.s);
      m.compose(v, q, s);
      bushMesh.setMatrixAt(i, m);
      color.setHSL(0.27 + p.shade * 0.045, 0.4 + p.shade * 0.16, 0.36 + p.shade * 0.12);
      bushMesh.setColorAt(i, color);
    });
    bushMesh.instanceMatrix.needsUpdate = true;
    if (bushMesh.instanceColor) bushMesh.instanceColor.needsUpdate = true;
    this.group.add(bushMesh);

    const rockMesh = new THREE.InstancedMesh(rockGeo, rockMat, rocks.length);
    rocks.forEach((p, i) => {
      q.setFromEuler(new THREE.Euler(p.shade * 0.4, p.rot, p.shade * 0.3));
      v.set(p.pos.x, p.pos.y + p.s * 0.34, p.pos.z);
      s.set(p.s * 1.2, p.s * 0.8, p.s);
      m.compose(v, q, s);
      rockMesh.setMatrixAt(i, m);
      color.setHSL(0.23, 0.06, 0.42 + p.shade * 0.16);
      rockMesh.setColorAt(i, color);
    });
    rockMesh.instanceMatrix.needsUpdate = true;
    if (rockMesh.instanceColor) rockMesh.instanceColor.needsUpdate = true;
    this.group.add(rockMesh);

    const caneGeo = new THREE.CylinderGeometry(0.075, 0.1, 1, 5);
    caneGeo.translate(0, 0.5, 0);
    const caneMesh = new THREE.InstancedMesh(caneGeo, caneMat, canes.length);
    canes.forEach((p, i) => {
      q.setFromEuler(new THREE.Euler(p.lean, p.rot, p.lean * 0.4));
      v.copy(p.pos);
      s.set(1, p.h, 1);
      m.compose(v, q, s);
      caneMesh.setMatrixAt(i, m);
    });
    caneMesh.instanceMatrix.needsUpdate = true;
    this.group.add(caneMesh);

    this.vegetationMeshes = [palmTrunks, palmCrowns, broadTrunks, broadCrowns, bushMesh, rockMesh, caneMesh];
  }

  buildBanks() {
    // Lily pads and driftwood along the shallows.
    const rand = seededRandom(551);
    const pads = [];
    for (let i = 0; i < 90; i++) {
      const t = rand();
      const side = rand() < 0.5 ? -1 : 1;
      const half = this.track.getWidth(t) / 2;
      const lateral = side * (half - 1.4 - rand() * 2.6);
      const f = this.track.getFrameAt(t);
      pads.push({
        p: new THREE.Vector3(f.pos.x + f.left.x * lateral, 0.11, f.pos.z + f.left.z * lateral),
        s: 0.25 + rand() * 0.55,
        rot: rand() * Math.PI,
      });
    }
    const padGeo = new THREE.CircleGeometry(1, 9);
    padGeo.rotateX(-Math.PI / 2);
    const padMat = new THREE.MeshLambertMaterial({ color: '#4f8f43', side: THREE.DoubleSide });
    const mesh = new THREE.InstancedMesh(padGeo, padMat, pads.length);
    const m = new THREE.Matrix4();
    for (let i = 0; i < pads.length; i++) {
      const p = pads[i];
      m.compose(p.p, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), p.rot), new THREE.Vector3(p.s, 1, p.s));
      mesh.setMatrixAt(i, m);
    }
    mesh.instanceMatrix.needsUpdate = true;
    this.group.add(mesh);
  }

  buildStartArch() {
    const group = new THREE.Group();
    const f = this.track.getFrameAt(0);
    group.position.copy(f.pos);
    group.rotation.y = Math.atan2(f.tangent.x, f.tangent.z);
    const half = f.width / 2;
    const bamboo = new THREE.MeshLambertMaterial({ color: '#bea05c', flatShading: true });
    const darkBamboo = new THREE.MeshLambertMaterial({ color: '#7b6738', flatShading: true });
    const poleGeo = new THREE.CylinderGeometry(0.32, 0.42, 7.1, 6);
    for (const side of [-1, 1]) {
      const pole = new THREE.Mesh(poleGeo, bamboo);
      pole.position.set(side * (half + 1.8), 3.55, 0);
      pole.rotation.z = side * -0.03;
      group.add(pole);
      for (let k = 0; k < 3; k++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.055, 4, 8), darkBamboo);
        ring.rotation.x = Math.PI / 2;
        ring.position.set(side * (half + 1.8), 1.6 + k * 2, 0);
        group.add(ring);
      }
    }
    const crossbar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, f.width + 5.4, 6), bamboo);
    crossbar.rotation.z = Math.PI / 2;
    crossbar.position.y = 7.0;
    group.add(crossbar);

    const bannerMat = new THREE.MeshBasicMaterial({
      map: makeBannerTexture('RIVER RUSH', 'START  •  FINISH'),
      side: THREE.DoubleSide, transparent: true,
    });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(f.width + 1.8, 2.9), bannerMat);
    banner.position.set(0, 5.55, 0.08);
    banner.rotation.y = Math.PI;
    group.add(banner);
    const backBanner = banner.clone();
    backBanner.position.z = -0.04;
    group.add(backBanner);

    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: '#22352e' });
      const light = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), mat);
      light.position.set((i - 1) * 2.2, 7.35, 0.3);
      group.add(light);
      this.startLightMats.push(mat);
    }

    // Flags on the top corners.
    const flagMat = new THREE.MeshBasicMaterial({ color: '#d8ff5d', side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9, 3, 1), flagMat);
      flag.position.set(side * (half + 1.8), 7.9, 0.1);
      flag.rotation.y = Math.PI / 2;
      group.add(flag);
    }
    this.group.add(group);
    this.startArch = group;
  }

  buildBridge() {
    const group = new THREE.Group();
    const t = 0.335;
    const f = this.track.getFrameAt(t);
    group.position.copy(f.pos);
    group.rotation.y = Math.atan2(f.tangent.x, f.tangent.z);
    const span = f.width + 22;
    const plankMat = new THREE.MeshLambertMaterial({ color: '#8c6238', flatShading: true });
    const darkWood = new THREE.MeshLambertMaterial({ color: '#5a3f27', flatShading: true });
    const rope = new THREE.MeshLambertMaterial({ color: '#b59a68', flatShading: true });

    const deck = new THREE.Mesh(new THREE.BoxGeometry(span, 0.24, 7.4), darkWood);
    deck.position.y = 6.1;
    group.add(deck);
    const plankCount = 34;
    for (let i = 0; i < plankCount; i++) {
      const x = -span / 2 + (i + 0.5) * (span / plankCount);
      const plank = new THREE.Mesh(new THREE.BoxGeometry(span / plankCount - 0.06, 0.12, 7.7), plankMat);
      plank.position.set(x, 6.25, 0);
      plank.rotation.y = (Math.random() - 0.5) * 0.025;
      group.add(plank);
    }
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(span, 0.18, 0.18), plankMat);
      rail.position.set(0, 7.5, side * 3.5);
      group.add(rail);
      const rail2 = rail.clone();
      rail2.position.y = 7.05;
      group.add(rail2);
      for (let i = 0; i < 9; i++) {
        const x = -span / 2 + i * (span / 8);
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 1.35, 5), darkWood);
        post.position.set(x, 6.85, side * 3.5);
        group.add(post);
      }
      // Abutments sit on the banks, leaving the whole river lane clear.
      for (const x of [-span / 2 + 3, span / 2 - 3]) {
        const support = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 6.2, 6), darkWood);
        support.position.set(x, 3.1, side * 2.6);
        group.add(support);
        const brace = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 4.6, 4), rope);
        brace.position.set(x, 5.0, side * 3.1);
        brace.rotation.z = 0.55 * (x < 0 ? -1 : 1);
        group.add(brace);
      }
    }
    // Hanging vines.
    for (let i = 0; i < 7; i++) {
      const x = -span / 2 + 4 + Math.random() * (span - 8);
      const len = 1 + Math.random() * 2.5;
      const vine = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, len, 4), new THREE.MeshLambertMaterial({ color: '#477a3b' }));
      vine.position.set(x, 6.1 - len / 2, (Math.random() < 0.5 ? -1 : 1) * (3.8 + Math.random() * 0.6));
      group.add(vine);
    }
    this.group.add(group);
    this.bridge = group;
  }

  buildVillage() {
    const hutSpots = [
      [0.365, -1, 22], [0.395, -1, 27], [0.425, -1, 23],
      [0.375, 1, 25], [0.415, 1, 28],
    ];
    for (const [t, side, offset] of hutSpots) {
      const f = this.track.getFrameAt(t);
      const y = this.track.bankHeight(t, f.width / 2 + offset);
      const group = new THREE.Group();
      group.position.set(
        f.pos.x + f.left.x * side * (f.width / 2 + offset),
        y,
        f.pos.z + f.left.z * side * (f.width / 2 + offset),
      );
      group.rotation.y = Math.atan2(f.left.x * side, f.left.z * side) + Math.PI / 2;
      const wood = new THREE.MeshLambertMaterial({ color: '#7f5c39', flatShading: true });
      const wall = new THREE.MeshLambertMaterial({ color: '#b28b5f', flatShading: true });
      const roof = new THREE.MeshLambertMaterial({ color: '#c29c5a', flatShading: true });
      for (const [sx, sz] of [[-1.7, -1.4], [1.7, -1.4], [-1.7, 1.4], [1.7, 1.4]]) {
        const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 2.2, 5), wood);
        stilt.position.set(sx, 1.1, sz);
        group.add(stilt);
      }
      const platform = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.28, 4.6), wood);
      platform.position.y = 2.2;
      group.add(platform);
      const walls = new THREE.Mesh(hutBaseGeo, wall);
      walls.position.y = 3.45;
      group.add(walls);
      const roofMesh = new THREE.Mesh(hutRoofGeo, roof);
      roofMesh.position.y = 5.9;
      roofMesh.rotation.y = Math.PI / 4;
      group.add(roofMesh);
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 0.06), new THREE.MeshLambertMaterial({ color: '#3f2a1d' }));
      door.position.set(0, 3.15, 1.93);
      group.add(door);
      const windowGlow = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.5),
        new THREE.MeshBasicMaterial({ color: '#ffd98a' }),
      );
      windowGlow.position.set(1.35, 3.65, 1.94);
      group.add(windowGlow);
      // Dock reaching toward the river.
      const dock = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.16, 9), wood);
      dock.position.set(0, 1.0, -6.8);
      group.add(dock);
      for (let i = 0; i < 3; i++) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 2.4, 5), wood);
        post.position.set(-0.8, 0.4, -3.5 - i * 3);
        group.add(post);
      }
      const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.18, 7, 5), new THREE.MeshBasicMaterial({ color: '#ffca6b' }));
      lantern.position.set(-0.6, 2.8, 2.25);
      group.add(lantern);
      const lanternGlow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: makeGlowTexture(64), color: '#ffbe5c', transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55,
      }));
      lanternGlow.position.copy(lantern.position);
      lanternGlow.scale.setScalar(1.4);
      group.add(lanternGlow);
      this.group.add(group);
    }
  }

  buildWaterfall() {
    const t = 0.525;
    const f = this.track.getFrameAt(t);
    const side = -1;
    const off = f.width / 2 + 24;
    const base = new THREE.Vector3(
      f.pos.x + f.left.x * side * off,
      this.track.bankHeight(t, off),
      f.pos.z + f.left.z * side * off,
    );
    const g = new THREE.Group();
    g.position.copy(base);
    // Local +Z points at the river, so the cliff sits behind the falling water.
    g.rotation.y = Math.atan2(-f.left.x * side, -f.left.z * side);
    const rand = seededRandom(303);
    const cliffMat = new THREE.MeshLambertMaterial({ color: '#5c705f', flatShading: true });
    const wetRockMat = new THREE.MeshLambertMaterial({ color: '#465b51', flatShading: true });
    const lightRockMat = new THREE.MeshLambertMaterial({ color: '#7b8a70', flatShading: true });

    // Broad cliff mass. It stays well behind the fall so the white water reads
    // clearly from the river instead of being hidden by foreground boulders.
    for (let i = 0; i < 7; i++) {
      const r = new THREE.Mesh(rockGeo, i % 3 === 0 ? lightRockMat : cliffMat);
      const x = -15 + i * 5 + (rand() - 0.5) * 2;
      r.scale.set(4.4 + rand() * 2.4, 8 + rand() * 8, 4 + rand() * 3);
      r.position.set(x, 5.5 + rand() * 3, -3.6 - rand() * 3.5);
      r.rotation.set((rand() - 0.5) * 0.5, rand() * Math.PI, (rand() - 0.5) * 0.4);
      g.add(r);
    }
    // Wet narrow chimney directly behind the cascade.
    const chimney = new THREE.Mesh(rockGeo, wetRockMat);
    chimney.scale.set(6.2, 11.5, 4.2);
    chimney.position.set(0, 9.4, -1.4);
    chimney.rotation.set(0.1, 0.4, 0.06);
    g.add(chimney);

    // Rock shelves flanking the water, framing it without crossing the view.
    for (const sx of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const r = new THREE.Mesh(rockGeo, i === 0 ? lightRockMat : cliffMat);
        r.scale.set(2.4 + rand() * 2.2, 2.8 + rand() * 4.5, 2.4 + rand() * 1.8);
        r.position.set(sx * (5.4 + i * 2.1), 2.2 + i * 3.1, 0.2 + rand() * 2.4);
        r.rotation.set(rand() * 0.7, rand() * Math.PI, rand() * 0.5);
        g.add(r);
      }
    }
    // Top lip.
    const lip = new THREE.Mesh(rockGeo, lightRockMat);
    lip.scale.set(7.5, 2.2, 4.2);
    lip.position.set(0.3, 16.1, 0.3);
    lip.rotation.set(0.2, 0.6, 0.05);
    g.add(lip);

    this.fallMat = new THREE.ShaderMaterial({
      vertexShader: fallVert,
      fragmentShader: fallFrag,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#bfe9e2') },
      },
    });
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(8.6, 14.6), this.fallMat);
    fall.position.set(0.15, 8.8, 1.35);
    g.add(fall);
    const fallBack = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 13.2), this.fallMat);
    fallBack.position.set(-0.2, 8.4, 2.05);
    g.add(fallBack);
    // Thin side trickles.
    for (const sx of [-1, 1]) {
      const trickle = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 9.5), this.fallMat);
      trickle.position.set(sx * 5.5, 6.2, 1.8);
      trickle.rotation.z = sx * 0.03;
      g.add(trickle);
    }

    // Plunge-pool foam.
    for (let i = 0; i < 7; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: makeGlowTexture(128), color: '#f2fff1', transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.4,
      }));
      sprite.position.set((rand() - 0.5) * 9, 0.7 + rand() * 1.5, 2.6 + rand() * 2.6);
      sprite.scale.setScalar(3.4 + rand() * 4);
      g.add(sprite);
      this.mist.push({ sprite, phase: rand() * 6, base: sprite.scale.x, y: sprite.position.y });
    }
    this.group.add(g);
    this.waterfall = g;
  }

  buildBirds() {
    const birdMat = new THREE.MeshBasicMaterial({ color: '#315b5b', side: THREE.DoubleSide, transparent: true, opacity: 0.55 });
    for (let i = 0; i < 8; i++) {
      const g = new THREE.Group();
      for (const side of [-1, 1]) {
        const wing = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.22), birdMat);
        wing.position.x = side * 0.7;
        wing.rotation.z = side * 0.22;
        g.add(wing);
      }
      const angle = Math.random() * Math.PI * 2;
      const radius = 90 + Math.random() * 170;
      g.position.set(Math.cos(angle) * radius, 42 + Math.random() * 35, Math.sin(angle) * radius);
      this.group.add(g);
      this.birds.push({ g, angle, radius, speed: 0.03 + Math.random() * 0.05, y: g.position.y, flap: Math.random() * 10 });
    }
  }

  applyPalette(name) {
    const p = PALETTES[name] || PALETTES.morning;
    this.palette = p;
    const u = this.skyMat.uniforms;
    u.uTop.value.set(p.skyTop);
    u.uMid.value.set(p.skyMid);
    u.uHorizon.value.set(p.horizon);
    u.uSun.value.set(p.sun);
    u.uSunDir.value.set(...p.sunPos).normalize();
    this.sunSprite.material.color.set(p.sun);
    this.sunSprite.position.copy(u.uSunDir.value).multiplyScalar(900);
    this.sunSprite.scale.setScalar(name === 'sunset' ? 280 : 210);
    this.sun.color.set(p.light);
    this.sun.intensity = p.lightIntensity;
    this.sun.position.copy(u.uSunDir.value).multiplyScalar(120);
    this.hemi.color.set(p.hemiSky);
    this.hemi.groundColor.set(p.hemiGround);
    this.hemi.intensity = p.ambience + 0.35;
    this.fill.color.set(p.skyMid);
    this.fill.intensity = 0.3;
    if (this.scene.fog) this.scene.fog.color.set(p.fog);
    if (this.mountainMaterials[0]) this.mountainMaterials[0].color.set(name === 'storm' ? '#436057' : name === 'sunset' ? '#6c7a64' : '#4b7c63');
    if (this.cloudMesh) this.cloudMesh.material.color.set(name === 'storm' ? '#cdd8ce' : '#fffaf0');
    this.scene.background = null;
  }

  setStartLights(n) {
    this.startLightMats.forEach((m, i) => {
      m.color.set(i < n ? '#d8ff5d' : '#22352e');
    });
  }

  update(time, dt) {
    this.time = time;
    if (this.fallMat) this.fallMat.uniforms.uTime.value = time;
    // Clouds drift lazily around the valley.
    if (this.cloudMesh) {
      const m = new THREE.Matrix4();
      const q = this.clouds[0]?.q || new THREE.Quaternion();
      for (let i = 0; i < this.clouds.length; i++) {
        const c = this.clouds[i];
        const angle = Math.atan2(c.p.z, c.p.x) + dt * 0.0008 * c.speed;
        const radius = Math.hypot(c.p.x, c.p.z);
        c.p.x = Math.cos(angle) * radius;
        c.p.z = Math.sin(angle) * radius;
        c.p.y += Math.sin(time * 0.12 + c.phase) * dt * 0.03;
        m.compose(c.p, c.q, c.s);
        this.cloudMesh.setMatrixAt(i, m);
      }
      this.cloudMesh.instanceMatrix.needsUpdate = true;
    }
    for (const m of this.mist) {
      const pulse = 1 + Math.sin(time * 1.3 + m.phase) * 0.1;
      m.sprite.scale.setScalar(m.base * pulse);
      m.sprite.position.y = m.y + Math.sin(time * 0.7 + m.phase) * 0.3;
    }
    for (const b of this.birds) {
      b.angle += dt * b.speed;
      b.g.position.set(Math.cos(b.angle) * b.radius, b.y + Math.sin(time * 0.35 + b.flap) * 2, Math.sin(b.angle) * b.radius);
      b.g.rotation.y = -b.angle + Math.PI / 2;
      const flap = Math.sin(time * 7 + b.flap);
      b.g.children.forEach((wing, i) => {
        wing.rotation.z = (i === 0 ? -1 : 1) * (0.22 + flap * 0.25);
      });
    }
  }
}
