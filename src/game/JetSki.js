import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { makeGlowTexture } from '../core/utils.js';

const glowTex = typeof document !== 'undefined' ? makeGlowTexture(96) : null;

function hullGeometry() {
  const stations = [
    { z: -1.42, w: 0.46, deck: 0.24, mid: -0.02, bottom: -0.24, keel: -0.34 },
    { z: -1.1, w: 0.58, deck: 0.27, mid: -0.03, bottom: -0.27, keel: -0.37 },
    { z: -0.55, w: 0.64, deck: 0.3, mid: -0.03, bottom: -0.3, keel: -0.4 },
    { z: 0.1, w: 0.63, deck: 0.31, mid: -0.02, bottom: -0.29, keel: -0.39 },
    { z: 0.65, w: 0.51, deck: 0.28, mid: 0.0, bottom: -0.23, keel: -0.31 },
    { z: 1.08, w: 0.3, deck: 0.25, mid: 0.04, bottom: -0.12, keel: -0.16 },
    { z: 1.3, w: 0.08, deck: 0.28, mid: 0.15, bottom: 0.05, keel: 0.02 },
  ];
  const ringSize = 8;
  const positions = [];
  const indices = [];
  for (let s = 0; s < stations.length; s++) {
    const st = stations[s];
    const ring = [
      [0, st.deck + 0.055],
      [-st.w, st.deck],
      [-st.w, st.mid],
      [-st.w * 0.72, st.bottom],
      [0, st.keel],
      [st.w * 0.72, st.bottom],
      [st.w, st.mid],
      [st.w, st.deck],
    ];
    for (const [x, y] of ring) positions.push(x, y, st.z);
  }
  for (let s = 0; s < stations.length - 1; s++) {
    for (let i = 0; i < ringSize; i++) {
      const a = s * ringSize + i;
      const b = s * ringSize + ((i + 1) % ringSize);
      const c = (s + 1) * ringSize + i;
      const d = (s + 1) * ringSize + ((i + 1) % ringSize);
      indices.push(a, c, b, b, c, d);
    }
  }
  // close the stern
  for (let i = 1; i < ringSize - 1; i++) {
    indices.push(0, i + 1, i);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

const hullGeo = hullGeometry();
const seatGeo = new RoundedBoxGeometry(0.78, 0.3, 1.25, 3, 0.12);
const consoleGeo = new RoundedBoxGeometry(0.62, 0.32, 0.65, 3, 0.1);
const barColumnGeo = new THREE.CylinderGeometry(0.055, 0.075, 0.5, 7);
const barGeo = new THREE.CylinderGeometry(0.038, 0.038, 0.9, 6);
const gripGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.18, 6);
const windshieldGeo = new THREE.PlaneGeometry(0.72, 0.42);
const nozzleGeo = new THREE.CylinderGeometry(0.11, 0.16, 0.28, 8);
const sphereGeo = new THREE.SphereGeometry(1, 12, 8);
const capsuleGeo = new THREE.CapsuleGeometry(0.12, 0.34, 3, 7);
const limbGeo = new THREE.CylinderGeometry(0.07, 0.082, 1, 6);

function cylBetween(a, b, radius, material) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(radius > 0.07 ? limbGeo : capsuleGeo, material);
  if (radius > 0.07) {
    mesh.scale.set(1, len, 1);
  } else {
    mesh.scale.set(radius / 0.12, len / 0.58, radius / 0.12);
  }
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return mesh;
}

export class JetSki {
  constructor({
    c1 = '#7af3d5', c2 = '#0e7269', accent = '#d8ff5d', trim = '#f4fff9',
    rider = true, riderColor = '#ff8a3d', helmet = '#f8f5e6',
  } = {}) {
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.group.add(this.body);
    this.phase = Math.random() * Math.PI * 2;
    this.speed = 0;
    this.steer = 0;
    this.drift = 0;
    this.boost = 0;
    this.airborne = false;
    this.shieldOn = false;

    const hullMat = new THREE.MeshStandardMaterial({
      color: trim, roughness: 0.48, metalness: 0.08, flatShading: true,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: c1, roughness: 0.4, metalness: 0.1, flatShading: true,
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: '#172a27', roughness: 0.82, metalness: 0.02 });
    const trimMat = new THREE.MeshStandardMaterial({ color: c2, roughness: 0.62, metalness: 0.02, flatShading: true });
    const metalMat = new THREE.MeshStandardMaterial({ color: '#9fb6b2', roughness: 0.3, metalness: 0.7 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: '#bfe9e0', roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.34, side: THREE.DoubleSide,
    });
    const gloveMat = new THREE.MeshStandardMaterial({ color: '#202b29', roughness: 0.8 });
    const skinMat = new THREE.MeshStandardMaterial({ color: '#c88154', roughness: 0.72 });
    const vestMat = new THREE.MeshStandardMaterial({ color: riderColor, roughness: 0.65 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: helmet, roughness: 0.32, metalness: 0.08 });
    const visorMat = new THREE.MeshStandardMaterial({ color: '#142523', roughness: 0.1, metalness: 0.5 });
    this.materials = { hullMat, accentMat, darkMat, trimMat };

    const hull = new THREE.Mesh(hullGeo, hullMat);
    this.body.add(hull);

    // Lower hull accent shell.
    const lower = new THREE.Mesh(hullGeo, trimMat);
    lower.scale.set(1.008, 0.72, 1.002);
    lower.position.y = -0.17;
    this.body.add(lower);

    for (const side of [-1, 1]) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.12, 2.05), accentMat);
      stripe.position.set(side * 0.615, 0.06, 0.05);
      stripe.rotation.z = side * 0.12;
      this.body.add(stripe);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 1.6), darkMat);
      rail.position.set(side * 0.52, 0.315, -0.25);
      this.body.add(rail);
    }

    const seat = new THREE.Mesh(seatGeo, darkMat);
    seat.position.set(0, 0.43, -0.3);
    this.body.add(seat);
    const seatAccent = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.12), accentMat);
    seatAccent.position.set(0, 0.59, -0.28);
    this.body.add(seatAccent);

    const consoleMesh = new THREE.Mesh(consoleGeo, trimMat);
    consoleMesh.position.set(0, 0.44, 0.38);
    consoleMesh.rotation.x = -0.13;
    this.body.add(consoleMesh);
    const consoleTop = new THREE.Mesh(new RoundedBoxGeometry(0.46, 0.08, 0.34, 2, 0.05), darkMat);
    consoleTop.position.set(0, 0.58, 0.35);
    consoleTop.rotation.x = -0.13;
    this.body.add(consoleTop);

    const column = new THREE.Mesh(barColumnGeo, metalMat);
    column.position.set(0, 0.72, 0.55);
    column.rotation.x = 0.28;
    this.body.add(column);
    const bar = new THREE.Mesh(barGeo, metalMat);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, 0.92, 0.49);
    this.body.add(bar);
    for (const side of [-1, 1]) {
      const grip = new THREE.Mesh(gripGeo, gloveMat);
      grip.rotation.z = Math.PI / 2;
      grip.position.set(side * 0.4, 0.92, 0.49);
      this.body.add(grip);
    }

    const windshield = new THREE.Mesh(windshieldGeo, glassMat);
    windshield.position.set(0, 0.69, 0.62);
    windshield.rotation.x = -0.54;
    this.body.add(windshield);
    const cowl = new THREE.Mesh(new RoundedBoxGeometry(0.68, 0.2, 0.4, 2, 0.08), trimMat);
    cowl.position.set(0, 0.45, 0.81);
    cowl.rotation.x = -0.1;
    this.body.add(cowl);
    const accentNose = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.55), accentMat);
    accentNose.position.set(0, 0.51, 0.92);
    accentNose.rotation.x = -0.1;
    this.body.add(accentNose);

    const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.04), new THREE.MeshBasicMaterial({ color: '#eaffb0' }));
    headlight.position.set(0, 0.38, 1.13);
    this.body.add(headlight);

    const nozzle = new THREE.Mesh(nozzleGeo, metalMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(0, 0.02, -1.48);
    this.body.add(nozzle);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.05), new THREE.MeshBasicMaterial({ color: '#ff4a3d' }));
    tail.position.set(0, 0.22, -1.42);
    this.body.add(tail);

    // Rear boarding step.
    const step = new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.055, 0.28, 2, 0.03), darkMat);
    step.position.set(0, 0.21, -1.28);
    this.body.add(step);

    if (rider) {
      this.rider = new THREE.Group();
      const hipY = 0.6;
      const hips = new THREE.Mesh(new THREE.SphereGeometry(0.23, 8, 6), vestMat);
      hips.scale.set(1.2, 0.85, 1);
      hips.position.set(0, hipY, -0.36);
      this.rider.add(hips);

      const torso = new THREE.Mesh(capsuleGeo, vestMat);
      torso.scale.set(1.6, 1.35, 1.2);
      torso.position.set(0, hipY + 0.3, -0.24);
      torso.rotation.x = -0.26;
      this.rider.add(torso);
      const vestStripe = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.28), new THREE.MeshStandardMaterial({ color: '#f8f5e6', roughness: 0.6 }));
      vestStripe.position.set(0, hipY + 0.35, -0.12);
      vestStripe.rotation.x = -0.26;
      this.rider.add(vestStripe);

      const neck = cylBetween(
        new THREE.Vector3(0, hipY + 0.48, -0.16),
        new THREE.Vector3(0, hipY + 0.61, -0.17),
        0.06, skinMat,
      );
      this.rider.add(neck);
      const head = new THREE.Mesh(sphereGeo, helmetMat);
      head.scale.set(0.21, 0.24, 0.22);
      head.position.set(0, hipY + 0.82, -0.18);
      this.rider.add(head);
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.1, 0.08), visorMat);
      visor.position.set(0, hipY + 0.82, -0.02);
      visor.rotation.x = -0.15;
      this.rider.add(visor);

      const shoulderL = new THREE.Vector3(-0.24, hipY + 0.46, -0.15);
      const shoulderR = new THREE.Vector3(0.24, hipY + 0.46, -0.15);
      const gripL = new THREE.Vector3(-0.38, 0.96, 0.47);
      const gripR = new THREE.Vector3(0.38, 0.96, 0.47);
      const elbowL = new THREE.Vector3(-0.36, hipY + 0.3, 0.18);
      const elbowR = new THREE.Vector3(0.36, hipY + 0.3, 0.18);
      this.rider.add(cylBetween(shoulderL, elbowL, 0.065, vestMat), cylBetween(elbowL, gripL, 0.058, skinMat));
      this.rider.add(cylBetween(shoulderR, elbowR, 0.065, vestMat), cylBetween(elbowR, gripR, 0.058, skinMat));
      const kneeL = new THREE.Vector3(-0.32, hipY + 0.04, 0.12);
      const kneeR = new THREE.Vector3(0.32, hipY + 0.04, 0.12);
      const footL = new THREE.Vector3(-0.3, 0.3, -0.35);
      const footR = new THREE.Vector3(0.3, 0.3, -0.35);
      this.rider.add(cylBetween(new THREE.Vector3(-0.17, hipY - 0.06, -0.32), kneeL, 0.09, darkMat));
      this.rider.add(cylBetween(new THREE.Vector3(0.17, hipY - 0.06, -0.32), kneeR, 0.09, darkMat));
      this.rider.add(cylBetween(kneeL, footL, 0.075, darkMat));
      this.rider.add(cylBetween(kneeR, footR, 0.075, darkMat));
      const bootL = new THREE.Mesh(new RoundedBoxGeometry(0.19, 0.14, 0.34, 2, 0.05), darkMat);
      bootL.position.set(-0.3, 0.26, -0.43);
      this.rider.add(bootL);
      const bootR = bootL.clone();
      bootR.position.x = 0.3;
      this.rider.add(bootR);
      this.body.add(this.rider);
    }

    // Shield bubble.
    this.shield = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.85, 2),
      new THREE.MeshBasicMaterial({
        color: '#ffd356', transparent: true, opacity: 0.11,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      }),
    );
    this.shield.position.y = 0.55;
    this.shield.scale.set(1, 0.72, 1.25);
    this.shield.visible = false;
    this.group.add(this.shield);

    // Boost / nitro glow.
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: new THREE.Color('#65fff0'), transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
    }));
    this.glow.position.set(0, 0.15, -1.6);
    this.glow.scale.setScalar(1.9);
    this.group.add(this.glow);

    // Fake baked shadow, separate so it doesn't tilt on waves.
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 3.6),
      new THREE.MeshBasicMaterial({
        map: glowTex, color: '#06221d', transparent: true, opacity: 0.32,
        depthWrite: false,
      }),
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.renderOrder = 2;
    this.shadow.visible = false;
  }

  addTo(parent) {
    parent.add(this.group);
    parent.add(this.shadow);
  }

  setTransform(position, yaw, waterY, time, opts = {}) {
    const { speed = 0, steer = 0, drift = 0, boost = 0, airborne = false, shield = false, stun = 0, idle = false } = opts;
    this.speed = speed;
    this.steer = steer;
    this.drift = drift;
    this.boost = boost;

    const bob = Math.sin(time * 5.1 + this.phase) * 0.045 + Math.sin(time * 2.3 + this.phase * 1.7) * 0.028;
    this.group.position.set(position.x, waterY + (airborne ? 0 : 0.02) + bob, position.z);
    this.group.rotation.y = yaw;
    this.group.rotation.x = airborne ? -0.12 : Math.sin(time * 3.4 + this.phase) * 0.018 + (speed / 45) * -0.015;
    this.group.rotation.z = -steer * 0.24 - drift * 0.12;

    if (this.rider) {
      this.rider.rotation.z = -steer * 0.2;
      this.rider.rotation.x = Math.sin(time * 4.2 + this.phase) * 0.012;
    }
    this.shield.visible = shield;
    if (shield) {
      const pulse = 1 + Math.sin(time * 6) * 0.025;
      this.shield.scale.set(1 * pulse, 0.72 * pulse, 1.25 * pulse);
      this.shield.material.opacity = 0.1 + Math.sin(time * 5) * 0.03;
    }

    const boostAmt = Math.max(0, boost);
    this.glow.material.opacity = boostAmt > 0.02 ? 0.6 + Math.sin(time * 20) * 0.15 : 0;
    this.glow.scale.setScalar(1.5 + boostAmt * 1.1 + Math.sin(time * 16) * 0.16);
    this.glow.position.z = -1.6 - boostAmt * 0.25;

    this.shadow.visible = !airborne;
    this.shadow.position.set(position.x, waterY + 0.06, position.z);
    this.shadow.rotation.z = -yaw;
    const shScale = airborne ? 0.8 : 1;
    this.shadow.scale.setScalar(shScale);
    this.shadow.material.opacity = 0.3 - Math.min(0.14, speed * 0.002);

    if (stun > 0) {
      this.body.rotation.z = Math.sin(time * 32) * 0.09 * Math.min(1, stun * 2);
    } else {
      this.body.rotation.z = 0;
    }
    if (idle) {
      this.group.position.y += Math.sin(time * 2.1 + this.phase) * 0.02;
    }
  }

  dispose(scene) {
    scene.remove(this.group);
    scene.remove(this.shadow);
    this.group.traverse((o) => {
      if (o.geometry && ![hullGeo, seatGeo, consoleGeo, barColumnGeo, barGeo, gripGeo, windshieldGeo, nozzleGeo, sphereGeo, capsuleGeo, limbGeo].includes(o.geometry)) {
        o.geometry.dispose?.();
      }
    });
  }
}
