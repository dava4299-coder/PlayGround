import * as THREE from 'three';
import { WAVE } from './Track.js';

const vertexShader = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vWave;
  varying float vViewDist;

  float getWave(vec2 p) {
    return sin(p.x * ${WAVE.ax.toFixed(3)} + uTime * ${WAVE.t1.toFixed(3)}) * ${WAVE.a1.toFixed(3)}
         + sin(p.y * ${WAVE.az.toFixed(3)} - uTime * ${WAVE.t2.toFixed(3)}) * ${WAVE.a2.toFixed(3)}
         + sin((p.x + p.y) * ${WAVE.axz.toFixed(3)} + uTime * ${WAVE.t3.toFixed(3)}) * ${WAVE.a3.toFixed(3)};
  }

  void main() {
    vec3 p = position;
    vUv = uv;
    float h = getWave(p.xz);
    p.y += h;
    vWave = h;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    vec4 mv = viewMatrix * world;
    vViewDist = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */`
  precision highp float;

  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uSky;
  uniform vec3 uSand;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uFog;
  uniform vec3 uTint;

  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vWave;
  varying float vViewDist;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    v += noise(p) * 0.55;
    v += noise(p * 2.03 + 4.7) * 0.28;
    v += noise(p * 4.01 - 8.2) * 0.17;
    return v;
  }

  float waveDerivX(vec2 p) {
    return cos(p.x * ${WAVE.ax.toFixed(3)} + uTime * ${WAVE.t1.toFixed(3)}) * ${(WAVE.a1 * WAVE.ax).toFixed(4)}
         + cos((p.x + p.y) * ${WAVE.axz.toFixed(3)} + uTime * ${WAVE.t3.toFixed(3)}) * ${(WAVE.a3 * WAVE.axz).toFixed(4)};
  }

  float waveDerivZ(vec2 p) {
    return cos(p.y * ${WAVE.az.toFixed(3)} - uTime * ${WAVE.t2.toFixed(3)}) * ${(WAVE.a2 * WAVE.az).toFixed(4)}
         + cos((p.x + p.y) * ${WAVE.axz.toFixed(3)} + uTime * ${WAVE.t3.toFixed(3)}) * ${(WAVE.a3 * WAVE.axz).toFixed(4)};
  }

  void main() {
    vec2 flowUv = vec2(vUv.x, vUv.y);
    float edge = abs(flowUv.x - 0.5) * 2.0;
    float longFlow = vUv.y * 34.0;
    float t = uTime;

    float n1 = fbm(vec2(flowUv.x * 9.0, longFlow - t * 0.55));
    float n2 = fbm(vec2(flowUv.x * 22.0 + 3.0, longFlow * 2.3 - t * 0.95));
    float n3 = fbm(vec2(flowUv.x * 44.0 - 12.0, longFlow * 4.2 - t * 1.55));

    // Analytic surface normal so the water reads smooth even with low-poly geometry.
    vec3 normal = normalize(vec3(
      -waveDerivX(vWorld.xz) - (n2 - 0.5) * 0.10,
      1.0,
      -waveDerivZ(vWorld.xz) - (n1 - 0.5) * 0.10
    ));

    vec3 viewDir = normalize(cameraPosition - vWorld);

    // Depth / distance from bank colour ramp, with brown-green tropical water.
    float shallow = smoothstep(0.35, 1.0, edge + (n1 - 0.5) * 0.28);
    vec3 base = mix(uDeep, uShallow, shallow * 0.72);
    base = mix(base, uSand, smoothstep(0.88, 1.0, edge + (n2 - 0.5) * 0.12) * 0.42);
    base *= 0.93 + n3 * 0.16;

    // Moving current streaks and surface chop.
    float streak = smoothstep(0.58, 0.82, fbm(vec2(flowUv.x * 17.0, longFlow * 1.7 - t * 1.2)));
    base += uShallow * streak * 0.10;

    // Sky reflection.
    float fresnel = pow(1.0 - clamp(dot(normal, viewDir), 0.0, 1.0), 3.2);
    vec3 col = mix(base, uSky, fresnel * 0.52);
    col = mix(col, uTint, 0.08);

    // Shoreline foam: a soft band plus lacy foam pulled along by the current.
    float edgeBand = smoothstep(0.80, 0.995, edge + (n1 - 0.5) * 0.09);
    float lace = smoothstep(0.48, 0.79, fbm(vec2(flowUv.x * 14.0, longFlow * 2.6 - t * 1.9)));
    float bankFoam = edgeBand * (0.35 + lace * 0.65);
    float crest = smoothstep(0.085, 0.12, abs(vWave)) * smoothstep(0.55, 0.9, n2) * 0.28;
    float foam = clamp(bankFoam + crest, 0.0, 1.0);
    vec3 foamColor = uFoam * (0.88 + n3 * 0.16);
    col = mix(col, foamColor, foam * 0.92);

    // Sun specular + sparkle.
    vec3 halfV = normalize(uSunDir + viewDir);
    float spec = pow(max(dot(normal, halfV), 0.0), 140.0);
    col += uSunColor * spec * 1.35;
    float sparkle = step(0.985, hash(floor(vUv * vec2(150.0, 900.0)) + floor(t * 2.0))) * pow(max(dot(normal, halfV), 0.0), 8.0);
    col += vec3(sparkle) * 0.6;

    // Distance haze keeps the horizon soft on mobile.
    float fogF = smoothstep(120.0, 520.0, vViewDist);
    col = mix(col, uFog, fogF);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export class Water {
  constructor(track) {
    this.track = track;
    this.group = new THREE.Group();
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color('#1e4d41') },
        uShallow: { value: new THREE.Color('#748a4f') },
        uFoam: { value: new THREE.Color('#e9f7de') },
        uSky: { value: new THREE.Color('#c4e7d4') },
        uSand: { value: new THREE.Color('#a99c62') },
        uSunDir: { value: new THREE.Vector3(-0.28, 0.52, 0.78).normalize() },
        uSunColor: { value: new THREE.Color('#fff1c4') },
        uFog: { value: new THREE.Color('#b9dfc6') },
        uTint: { value: new THREE.Color('#6f9b64') },
      },
    });
    this.mesh = new THREE.Mesh(this.buildGeometry(), this.material);
    this.mesh.renderOrder = 1;
    this.mesh.frustumCulled = false;
    this.group.add(this.mesh);
  }

  buildGeometry() {
    const cols = 18;
    const rows = 420;
    const positions = new Float32Array((rows + 1) * (cols + 1) * 3);
    const uvs = new Float32Array((rows + 1) * (cols + 1) * 2);
    const indices = [];
    const t = this.track;
    for (let j = 0; j <= rows; j++) {
      const tt = j / rows;
      const f = t.getFrameAt(tt);
      const half = f.width / 2 + 0.15;
      for (let i = 0; i <= cols; i++) {
        const u = i / cols;
        const lateral = (u - 0.5) * 2 * half;
        const x = f.pos.x + f.left.x * lateral;
        const z = f.pos.z + f.left.z * lateral;
        const idx = (j * (cols + 1) + i) * 3;
        positions[idx] = x;
        positions[idx + 1] = 0;
        positions[idx + 2] = z;
        const uvIdx = (j * (cols + 1) + i) * 2;
        uvs[uvIdx] = u;
        uvs[uvIdx + 1] = tt * 19;
      }
    }
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const a = j * (cols + 1) + i;
        const b = a + 1;
        const c = a + cols + 1;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeBoundingSphere();
    return geo;
  }

  update(time) {
    this.material.uniforms.uTime.value = time;
  }

  applyPalette(p) {
    const u = this.material.uniforms;
    u.uDeep.value.set(p.waterDeep);
    u.uShallow.value.set(p.waterShallow);
    u.uFoam.value.set(p.waterFoam);
    u.uSky.value.set(p.waterSky);
    u.uFog.value.set(p.fog);
    u.uSunColor.value.set(p.sun);
    u.uSunDir.value.set(...p.sunPos).normalize();
    u.uSand.value.set('#a99c62');
    u.uTint.value.set(p.waterShallow);
  }
}
