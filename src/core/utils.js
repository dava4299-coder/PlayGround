import * as THREE from 'three';

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const wrap01 = (v) => ((v % 1) + 1) % 1;
export const wrapDelta = (v) => {
  if (v > 0.5) return v - 1;
  if (v < -0.5) return v + 1;
  return v;
};
export const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
export const formatTime = (seconds, tenths = true) => {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const t = Math.floor((seconds % 1) * 10);
  return tenths ? `${m}:${String(s).padStart(2, '0')}.${t}` : `${m}:${String(s).padStart(2, '0')}`;
};
export const formatNumber = (n) => Math.round(n).toLocaleString('en-US');

export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function makeNoise2D(seed = 1) {
  const rand = seededRandom(seed);
  const table = new Float32Array(256);
  for (let i = 0; i < 256; i++) table[i] = rand();
  const hash = (x, y) => table[((x * 73856093) ^ (y * 19349663)) & 255];
  return (x, y) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi);
    const b = hash(xi + 1, yi);
    const c = hash(xi, yi + 1);
    const d = hash(xi + 1, yi + 1);
    return lerp(lerp(a, b, u), lerp(c, d, u), v);
  };
}

export function makeGlowTexture(size = 128, inner = '#ffffff', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.22, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.18)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeSoftTexture(size = 64) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.45, 'rgba(255,255,255,.8)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeBannerTexture(text, sub = 'START • FINISH', bg = '#0b5147', accent = '#d8ff5d') {
  const w = 1024, h = 160;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  // checker band
  const band = 20;
  for (let x = 0; x < w; x += band) {
    for (let y = 0; y < h; y += band) {
      if (((x / band) + (y / band)) % 2 === 0) {
        ctx.fillStyle = y === 0 || y + band >= h ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.04)';
        ctx.fillRect(x, y, band, band);
      }
    }
  }
  ctx.fillStyle = 'rgba(5,38,32,.86)';
  ctx.fillRect(0, band + 8, w, h - band * 2 - 16);
  ctx.fillStyle = accent;
  ctx.fillRect(26, h / 2 - 2, w - 52, 4);
  ctx.font = '900 52px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#f8f5e6';
  ctx.fillText(text, w / 2, h / 2 - 8);
  ctx.font = '800 17px Outfit, sans-serif';
  ctx.fillStyle = accent;
  ctx.letterSpacing = '8px';
  ctx.fillText(sub, w / 2, h / 2 + 36);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeLabelTexture(text, bg = '#d8ff5d', color = '#0a3029', size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.roundRect(14, 14, size - 28, size - 28, 50);
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = 'rgba(255,255,255,.75)';
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = `900 ${size * 0.47}px Outfit, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size / 2, size / 2 + 4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function isPortrait() {
  return window.innerHeight > window.innerWidth * 1.05;
}

export function shortAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export const PALETTES = {
  morning: {
    name: 'Morning',
    skyTop: '#3f9fd0',
    skyMid: '#9adbd4',
    horizon: '#f5e7b8',
    fog: '#b9dfc6',
    sun: '#fff1c4',
    sunPos: [-0.28, 0.52, 0.78],
    light: '#fff0cf',
    lightIntensity: 2.15,
    hemiSky: '#bde9e4',
    hemiGround: '#385b36',
    waterDeep: '#2a6652',
    waterShallow: '#8b9c55',
    waterFoam: '#eef9e3',
    waterSky: '#c9ecda',
    ambience: 0.85,
  },
  noon: {
    name: 'High Sun',
    skyTop: '#2a8fc9',
    skyMid: '#93e0d4',
    horizon: '#f8f0c7',
    fog: '#bce6cd',
    sun: '#fff8d9',
    sunPos: [0.2, 0.72, 0.45],
    light: '#fff8dd',
    lightIntensity: 2.35,
    hemiSky: '#c8f0e6',
    hemiGround: '#3e653a',
    waterDeep: '#2a6b56',
    waterShallow: '#93a75a',
    waterFoam: '#f4fcea',
    waterSky: '#d0f1e0',
    ambience: 0.95,
  },
  sunset: {
    name: 'Golden Hour',
    skyTop: '#396a9b',
    skyMid: '#e8a47d',
    horizon: '#ffe2a0',
    fog: '#e7bd9a',
    sun: '#ffd28f',
    sunPos: [-0.66, 0.24, 0.68],
    light: '#ffce9a',
    lightIntensity: 2.1,
    hemiSky: '#f3c9b1',
    hemiGround: '#3b4730',
    waterDeep: '#2d5949',
    waterShallow: '#948d55',
    waterFoam: '#faf0d5',
    waterSky: '#f0d6b5',
    ambience: 0.78,
  },
  storm: {
    name: 'Storm Run',
    skyTop: '#334b56',
    skyMid: '#789b92',
    horizon: '#d9cfae',
    fog: '#9fb4a4',
    sun: '#f4edd3',
    sunPos: [0.3, 0.35, 0.55],
    light: '#dce2d2',
    lightIntensity: 1.35,
    hemiSky: '#a8c3ba',
    hemiGround: '#2d4431',
    waterDeep: '#22483f',
    waterShallow: '#718659',
    waterFoam: '#e8f0e4',
    waterSky: '#b5c7b8',
    ambience: 0.62,
  },
};
