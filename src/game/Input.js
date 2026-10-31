import { clamp, damp } from '../core/utils.js';

export class Input {
  constructor({ onPause } = {}) {
    this.onPause = onPause;
    this.steer = 0;
    this.steerTarget = 0;
    this.nitroHeld = false;
    this.brakeHeld = false;
    this.jumpQueued = false;
    this.nitroTapQueued = false;
    this.controlScheme = 'joystick';
    this.joystickActive = false;
    this.pointerId = null;
    this.keys = new Set();
    this.tiltRaw = 0;
    this.tiltCenter = null;
    this.tiltSamples = [];
    this.tiltReady = false;
    this.tiltPermission = 'unknown';
    this.tiltHandler = null;
    this.swipe = null;
    this.enabled = false;
    this.joystickRadius = 48;
    this.knobEl = null;
    this.joystickEl = null;
    this.bind();
  }

  bind() {
    this.joystickEl = document.getElementById('joystickZone');
    this.knobEl = document.getElementById('joystickKnob');
    this.nitroBtn = document.getElementById('nitroBtn');
    this.brakeBtn = document.getElementById('brakeBtn');

    this.bindJoystick();
    this.bindHoldButton(this.nitroBtn, 'nitro');
    this.bindHoldButton(this.brakeBtn, 'brake');
    this.bindSwipe();
    this.bindKeyboard();

    window.addEventListener('blur', () => this.reset());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.reset();
    });
  }

  bindJoystick() {
    const zone = this.joystickEl;
    if (!zone) return;
    const update = (e) => {
      const rect = zone.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.42;
      let dx = e.clientX - cx;
      let dy = e.clientY - cy;
      const radius = Math.min(rect.width * 0.38, 52);
      const len = Math.hypot(dx, dy);
      if (len > radius) {
        dx = (dx / len) * radius;
        dy = (dy / len) * radius;
      }
      this.steerTarget = clamp(dx / radius, -1, 1);
      if (this.knobEl) this.knobEl.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    zone.addEventListener('pointerdown', (e) => {
      if (!this.enabled || this.controlScheme !== 'joystick') return;
      e.preventDefault();
      this.joystickActive = true;
      this.pointerId = e.pointerId;
      zone.setPointerCapture(e.pointerId);
      update(e);
    });
    zone.addEventListener('pointermove', (e) => {
      if (!this.joystickActive || e.pointerId !== this.pointerId) return;
      e.preventDefault();
      update(e);
    });
    const end = (e) => {
      if (e.pointerId !== this.pointerId) return;
      this.joystickActive = false;
      this.pointerId = null;
      this.steerTarget = 0;
      if (this.knobEl) this.knobEl.style.transform = 'translate(0px, 0px)';
    };
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
    zone.addEventListener('lostpointercapture', end);
  }

  bindHoldButton(el, type) {
    if (!el) return;
    const down = (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      el.setPointerCapture?.(e.pointerId);
      el.classList.add('held');
      if (type === 'nitro') {
        this.nitroHeld = true;
        this.nitroTapQueued = true;
      } else {
        this.brakeHeld = true;
      }
    };
    const up = (e) => {
      e.preventDefault();
      el.classList.remove('held');
      if (type === 'nitro') this.nitroHeld = false;
      else this.brakeHeld = false;
    };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  bindSwipe() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    canvas.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      this.swipe = { id: e.pointerId, x: e.clientX, y: e.clientY, time: performance.now() };
    });
    canvas.addEventListener('pointerup', (e) => {
      if (!this.enabled || !this.swipe || e.pointerId !== this.swipe.id) return;
      const dy = e.clientY - this.swipe.y;
      const dx = e.clientX - this.swipe.x;
      const dt = performance.now() - this.swipe.time;
      if (dt < 650 && dy < -54 && Math.abs(dx) < 95) this.jumpQueued = true;
      this.swipe = null;
    });
    canvas.addEventListener('pointercancel', () => { this.swipe = null; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (!this.enabled) return;
      if (e.code === 'Escape' || e.code === 'KeyP') this.onPause?.();
      if (e.code === 'Space') this.jumpQueued = true;
      if (e.code === 'KeyN' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.nitroHeld = true;
        this.nitroTapQueued = true;
      }
      if (e.code === 'KeyB' || e.code === 'KeyS') this.brakeHeld = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      if (e.code === 'KeyN' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.nitroHeld = false;
      if (e.code === 'KeyB' || e.code === 'KeyS') this.brakeHeld = false;
    });
  }

  setEnabled(on) {
    this.enabled = on;
    if (!on) this.reset();
  }

  setControlScheme(scheme) {
    this.controlScheme = scheme;
    if (scheme === 'tilt') this.enableTilt();
  }

  async enableTilt() {
    if (this.tiltHandler) return true;
    try {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        const permission = await DeviceOrientationEvent.requestPermission();
        this.tiltPermission = permission;
        if (permission !== 'granted') return false;
      }
      this.tiltHandler = (e) => {
        const angle = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
        let raw = 0;
        if (Math.abs(angle) === 90) raw = e.beta ?? 0;
        else raw = e.gamma ?? 0;
        if (angle === -90 || angle === 270) raw = -raw;
        this.tiltRaw = raw;
        if (this.tiltCenter == null) {
          this.tiltSamples.push(raw);
          if (this.tiltSamples.length > 8) {
            this.tiltCenter = this.tiltSamples.reduce((a, b) => a + b, 0) / this.tiltSamples.length;
            this.tiltReady = true;
          }
        }
      };
      window.addEventListener('deviceorientation', this.tiltHandler, true);
      this.tiltPermission = 'granted';
      return true;
    } catch {
      this.tiltPermission = 'denied';
      return false;
    }
  }

  calibrateTilt() {
    this.tiltCenter = null;
    this.tiltSamples = [];
  }

  update(dt) {
    let target = 0;
    if (this.controlScheme === 'joystick') {
      target = this.steerTarget;
      if (this.keys.has('ArrowLeft') || this.keys.has('KeyA')) target -= 1;
      if (this.keys.has('ArrowRight') || this.keys.has('KeyD')) target += 1;
      target = clamp(target, -1, 1);
    } else {
      if (this.tiltReady) {
        const delta = this.tiltRaw - this.tiltCenter;
        const dead = 1.8;
        const sign = Math.sign(delta);
        target = Math.abs(delta) < dead ? 0 : clamp((delta - sign * dead) / 16, -1, 1);
      }
      if (this.keys.has('ArrowLeft') || this.keys.has('KeyA')) target -= 1;
      if (this.keys.has('ArrowRight') || this.keys.has('KeyD')) target += 1;
      target = clamp(target, -1, 1);
    }
    if (!this.enabled) target = 0;
    this.steer = damp(this.steer, target, 13, dt);
  }

  consumeJump() {
    if (!this.jumpQueued) return false;
    this.jumpQueued = false;
    return true;
  }

  consumeNitroTap() {
    if (!this.nitroTapQueued) return false;
    this.nitroTapQueued = false;
    return true;
  }

  reset() {
    this.steer = 0;
    this.steerTarget = 0;
    this.nitroHeld = false;
    this.brakeHeld = false;
    this.jumpQueued = false;
    this.nitroTapQueued = false;
    this.joystickActive = false;
    this.pointerId = null;
    this.keys.clear();
    this.nitroBtn?.classList.remove('held');
    this.brakeBtn?.classList.remove('held');
    if (this.knobEl) this.knobEl.style.transform = 'translate(0px, 0px)';
  }
}
