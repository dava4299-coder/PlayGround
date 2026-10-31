import { CAREER_EVENTS, JETSKIS } from '../core/Progress.js';
import { clamp, formatNumber, formatTime, ordinal, PALETTES } from '../core/utils.js';

const $ = (id) => document.getElementById(id);

const upgradeLabels = { speed: 'Top speed', handling: 'Handling', boost: 'Nitro power' };

function jetskiSVG(ski) {
  return `
  <svg class="ski-svg" viewBox="0 0 340 180" aria-hidden="true">
    <ellipse cx="170" cy="146" rx="118" ry="13" fill="rgba(4,24,20,.32)"/>
    <path d="M44 112 L62 96 L128 84 L232 82 L282 96 L302 112 L282 128 L92 132 Z" fill="#0b2b27" opacity=".55"/>
    <path d="M48 104 L72 88 L142 77 L235 80 L284 94 L300 110 L278 123 L96 126 L56 118 Z" fill="var(--trim)"/>
    <path d="M58 108 L92 123 L252 120 L286 107 L276 98 L234 88 L137 85 L77 93 Z" fill="var(--c1)"/>
    <path d="M70 104 L148 90 L256 93 L270 101 L252 106 L104 110 Z" fill="rgba(255,255,255,.22)"/>
    <path d="M154 84 L195 66 L235 72 L220 88 Z" fill="#132a26"/>
    <path d="M177 77 L200 58 L246 58 L246 70 L208 82 Z" fill="var(--c2)"/>
    <path d="M190 63 Q208 50 226 59 Q232 68 222 78 L196 78 Q186 72 190 63 Z" fill="#132a26"/>
    <path d="M206 72 L246 58" stroke="#9fb6b2" stroke-width="5" stroke-linecap="round"/>
    <circle cx="247" cy="58" r="6" fill="#233a35"/>
    <path d="M160 86 L172 56 L192 55 L187 87 Z" fill="var(--trim)" opacity=".6"/>
    <path d="M124 96 L104 126" stroke="var(--c2)" stroke-width="3" opacity=".45"/>
    <path d="M264 101 L290 108" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="290" cy="109" r="4" fill="#eaffb0"/>
    <circle cx="122" cy="128" r="3" fill="#ff6b4a"/>
    <g opacity=".9">
      <path d="M180 54 Q184 32 200 32 Q214 32 215 49 Q214 60 200 60 Q185 60 180 54 Z" fill="#f8f5e6"/>
      <path d="M184 43 Q196 37 210 43 L210 49 Q197 44 184 48 Z" fill="#122723"/>
      <path d="M198 60 Q202 70 200 80 L214 82 Q216 66 210 60 Z" fill="var(--rider, #ff8a3d)"/>
      <path d="M202 62 L228 60" stroke="var(--rider, #ff8a3d)" stroke-width="9" stroke-linecap="round"/>
      <path d="M228 60 L246 58" stroke="#c88154" stroke-width="7" stroke-linecap="round"/>
    </g>
    <g fill="var(--accent)">
      <circle cx="94" cy="111" r="2.4"/><circle cx="108" cy="108" r="1.6"/><circle cx="268" cy="104" r="2"/>
    </g>
  </svg>`;
}

export class UI {
  constructor(game) {
    this.game = game;
    this.progress = game.progress;
    this.hudAccum = 0;
    this.messageTimer = null;
    this.toastTimer = null;
    this.swipeHintTimer = null;
    this.panelOpen = false;
    this.activePanel = null;
    this.garagePreview = this.progress.save.selected;
    this.bind();
    this.cacheMinimap();
    this.refreshMenu();
  }

  bind() {
    const on = (id, fn) => $(id)?.addEventListener('click', (e) => {
      this.game.audio?.ui?.();
      fn(e);
    });
    on('quickRaceBtn', () => this.game.startRace({ mode: 'quick' }));
    on('careerBtn', () => this.openCareer());
    on('timeTrialBtn', () => this.game.startRace({ mode: 'time' }));
    on('garageBtn', () => this.openGarage());
    on('dailyBtn', () => this.openDaily());
    on('menuDailyBtn', () => this.openDaily());
    on('settingsBtn', () => this.openSettings());
    on('pauseBtn', () => this.game.pause());
    on('resumeBtn', () => this.game.resume());
    on('restartBtn', () => this.game.restartRace());
    on('pauseSettingsBtn', () => this.openSettings(true));
    on('quitBtn', () => this.game.quitToMenu());
    on('againBtn', () => this.game.restartRace());
    on('resultsMenuBtn', () => this.game.quitToMenu());

    $('panelLayer')?.addEventListener('pointerdown', (e) => {
      if (e.target === $('panelLayer')) this.closePanel();
    });
    $('panelCard')?.addEventListener('click', (e) => this.onPanelClick(e));
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'Escape') return;
      if (this.panelOpen) {
        this.closePanel();
      }
    });
    document.addEventListener('pointerdown', () => this.game.audio?.unlock?.(), { once: true, capture: true });
    window.addEventListener('orientationchange', () => setTimeout(() => this.cacheMinimap(), 250));
    window.addEventListener('resize', () => this.cacheMinimap());
  }

  refreshMenu() {
    $('menuCoins').textContent = formatNumber(this.progress.coins);
    const careerCount = this.progress.careerUnlockedCount();
    $('careerBadge').textContent = `${careerCount}/${CAREER_EVENTS.length}`;
    const daily = this.progress.dailyAvailable() || this.progress.missions.some((m) => !m.claimed && m.progress >= m.target);
    $('dailyDot').classList.toggle('hidden', !this.progress.dailyAvailable());
    $('dailyBadge').classList.toggle('hidden', !daily);
  }

  showMenu() {
    $('menu').classList.remove('hidden');
    $('hud').classList.add('hidden');
    $('pause').classList.add('hidden');
    $('results').classList.add('hidden');
    $('countdown').classList.add('hidden');
    $('boostOverlay').classList.remove('active');
    $('slowmoOverlay').classList.remove('active');
    this.closePanel();
    this.refreshMenu();
  }

  showRaceHUD(mode, laps, rivals, scheme) {
    $('menu').classList.add('hidden');
    $('hud').classList.remove('hidden');
    $('hud').classList.toggle('tilt-mode', scheme === 'tilt');
    $('modeChip').textContent = mode === 'career' ? 'CAREER' : mode === 'time' ? 'TIME TRIAL' : 'QUICK RACE';
    $('hudLap').nextElementSibling.textContent = `/${laps}`;
    $('hudPos').parentElement.querySelector('i').textContent = `/${rivals + 1}`;
    $('raceMessage').classList.remove('show');
    $('checkpointToast').classList.remove('show');
    $('swipeHint').classList.remove('hide');
    clearTimeout(this.swipeHintTimer);
    this.swipeHintTimer = setTimeout(() => $('swipeHint').classList.add('hide'), 8000);
  }

  showCountdown() {
    $('countdown').classList.remove('hidden');
    $('countdownValue').classList.remove('go');
  }

  updateCountdown(value, sub) {
    const el = $('countdownValue');
    el.textContent = value;
    $('countdownSub').textContent = sub || '';
    el.classList.toggle('go', value === 'GO!');
    // restart pop animation
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = '';
    const lights = document.querySelectorAll('.start-lights i');
    lights.forEach((l, i) => l.classList.toggle('on', value !== 'GO!' && i < 3 - (Number(value) - 1 || 0)));
  }

  hideCountdown() {
    $('countdown').classList.add('hidden');
    $('countdownValue').classList.remove('go');
  }

  showRaceMessage(text, sub = '', duration = 1300, big = false) {
    const el = $('raceMessage');
    el.innerHTML = `${text}${sub ? `<small>${sub}</small>` : ''}`;
    el.classList.toggle('big', big);
    el.classList.add('show');
    clearTimeout(this.messageTimer);
    if (duration > 0) this.messageTimer = setTimeout(() => el.classList.remove('show'), duration);
  }

  hideRaceMessage() {
    clearTimeout(this.messageTimer);
    $('raceMessage').classList.remove('show');
  }

  checkpointToast(text) {
    const el = $('checkpointToast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(this.checkpointTimer);
    this.checkpointTimer = setTimeout(() => el.classList.remove('show'), 1700);
  }

  updateHUD(state) {
    const { player, position, racers, time, lapTime, mode, boost, slowmo } = state;
    const posEl = $('hudPos');
    posEl.textContent = position;
    $('hudLap').textContent = player.displayLap;
    $('hudTimer').textContent = formatTime(time);
    $('hudLapTime').textContent = `LAP ${formatTime(lapTime)}`;
    $('speedVal').textContent = player.speedKmh;
    const ratio = clamp(player.speed / (player.maxSpeed + player.boostPower), 0, 1);
    const arc = $('speedArc');
    arc.style.strokeDasharray = `${ratio * 240} 321`;
    const pct = Math.round(player.nitro);
    $('nitroFill').style.width = `${pct}%`;
    $('nitroPct').textContent = `${pct}%`;
    const wrap = $('nitroFill').closest('.nitro-wrap');
    wrap.classList.toggle('full', pct >= 99);
    $('nitroBtn').classList.toggle('ready', pct >= 99);
    $('driftTag').classList.toggle('hidden', !player.driftActive);
    $('shieldTag').classList.toggle('hidden', player.shieldTimer <= 0);
    if (player.shieldTimer > 0) $('shieldTime').textContent = `${Math.ceil(player.shieldTimer)}s`;
    $('coinTag').classList.toggle('hidden', player.coins <= 0);
    $('raceCoins').textContent = player.coins;
    $('boostOverlay').classList.toggle('active', boost > 0.25);
    $('slowmoOverlay').classList.toggle('active', slowmo);
    $('hud').classList.toggle('tilt-mode', this.game.controlScheme === 'tilt');

    this.hudAccum += 1;
    if (this.hudAccum % 2 === 0) this.drawMinimap(racers, player, position);
  }

  cacheMinimap() {
    const track = this.game.track;
    if (!track) return;
    const pts = [];
    for (let i = 0; i <= 240; i++) {
      const f = track.getFrameAt(i / 240);
      pts.push({ x: f.pos.x, z: f.pos.z });
    }
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of pts) {
      minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
      minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z);
    }
    this.mapBounds = { minX, maxX, minZ, maxZ };
    this.mapPoints = pts;
  }

  mapXY(x, z) {
    const size = 220;
    const pad = 32;
    const b = this.mapBounds;
    const spanX = b.maxX - b.minX;
    const spanZ = b.maxZ - b.minZ;
    const scale = (size - pad * 2) / Math.max(spanX, spanZ);
    const cx = (b.minX + b.maxX) / 2;
    const cz = (b.minZ + b.maxZ) / 2;
    return {
      x: size / 2 + (x - cx) * scale,
      y: size / 2 + (z - cz) * scale,
    };
  }

  drawMinimap(racers, player, position) {
    const canvas = $('minimap');
    if (!canvas || !this.mapPoints) return;
    const ctx = canvas.getContext('2d');
    const size = 220;
    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = 'rgba(4,30,26,.42)';
    ctx.fillRect(0, 0, size, size);

    // Jungle haze
    const grad = ctx.createRadialGradient(size / 2, size / 2, 10, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(58,125,88,.18)');
    grad.addColorStop(1, 'rgba(10,48,38,.05)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const drawPath = (width, color) => {
      ctx.beginPath();
      this.mapPoints.forEach((p, i) => {
        const q = this.mapXY(p.x, p.z);
        if (i === 0) ctx.moveTo(q.x, q.y);
        else ctx.lineTo(q.x, q.y);
      });
      ctx.closePath();
      ctx.lineWidth = width;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = color;
      ctx.stroke();
    };
    drawPath(17, 'rgba(2,22,18,.55)');
    drawPath(12, '#2f6b5b');
    drawPath(7, '#72bda5');
    drawPath(2.5, 'rgba(210,255,232,.5)');

    // Checkpoint pips
    const track = this.game.track;
    if (track) {
      ctx.fillStyle = 'rgba(216,255,93,.65)';
      track.gateFractions.forEach((f) => {
        const fr = track.getFrameAt(f);
        const q = this.mapXY(fr.pos.x, fr.pos.z);
        ctx.beginPath();
        ctx.arc(q.x, q.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Rival dots
    for (const r of racers) {
      if (r === player) continue;
      const q = this.mapXY(r.position.x, r.position.z);
      ctx.beginPath();
      ctx.arc(q.x, q.y, 3.6, 0, Math.PI * 2);
      ctx.fillStyle = r.profile?.c1 || '#ff8a3d';
      ctx.fill();
      ctx.strokeStyle = 'rgba(4,28,24,.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Player arrow
    const q = this.mapXY(position.x, position.z);
    ctx.save();
    ctx.translate(q.x, q.y);
    const b = this.mapBounds;
    const spanX = b.maxX - b.minX;
    const spanZ = b.maxZ - b.minZ;
    const scale = (size - 64) / Math.max(spanX, spanZ);
    ctx.rotate(Math.atan2(Math.sin(player.yaw), Math.cos(player.yaw)));
    ctx.beginPath();
    ctx.moveTo(0, -7.5);
    ctx.lineTo(5, 5.5);
    ctx.lineTo(0, 2.6);
    ctx.lineTo(-5, 5.5);
    ctx.closePath();
    ctx.fillStyle = '#d8ff5d';
    ctx.shadowColor = 'rgba(216,255,93,.9)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
    ctx.restore();

    // Ring highlight
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(216,255,93,.18)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  showPause() { $('pause').classList.remove('hidden'); }
  hidePause() { $('pause').classList.add('hidden'); }

  showResults(data) {
    const place = ordinal(data.place);
    $('resultKicker').textContent = data.kicker || 'RACE COMPLETE';
    $('resultOrdinal').textContent = place;
    $('resultPlaceLabel').textContent = data.place === 1 ? 'CHAMPION' : 'PLACE';
    $('resultTitle').textContent = data.title;
    $('resultSub').textContent = data.sub;
    $('resultTime').textContent = formatTime(data.time);
    $('resultBestLap').textContent = formatTime(data.bestLap || 0);
    $('resultSpeed').textContent = Math.round(data.topSpeed);
    $('rewardPrize').textContent = `+${formatNumber(data.prize)}`;
    $('rewardCoins').textContent = `+${formatNumber(data.coins)}`;
    $('rewardMissions').textContent = data.missionProgress ?? '—';
    $('rewardTotal').textContent = formatNumber(data.total);
    $('resultNew').classList.toggle('hidden', !data.newBest);
    $('results').classList.remove('hidden');
    $('hud').classList.add('hidden');
    $('boostOverlay').classList.remove('active');
    $('slowmoOverlay').classList.remove('active');
    this.refreshMenu();
  }

  hideResults() { $('results').classList.add('hidden'); }

  toast(text, duration = 1900) {
    const el = $('toast');
    el.textContent = text;
    el.classList.remove('hidden');
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = '';
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.add('hidden'), duration);
  }

  // ---------------- Panels ----------------
  openPanel(html, kind) {
    this.panelOpen = true;
    this.activePanel = kind;
    $('panelCard').innerHTML = html;
    $('panelLayer').classList.remove('hidden');
  }

  closePanel() {
    if (!this.panelOpen) return;
    this.panelOpen = false;
    this.activePanel = null;
    $('panelLayer').classList.add('hidden');
    this.refreshMenu();
  }

  panelShell(kicker, title, bodyHtml) {
    return `
      <div class="panel-head">
        <div class="panel-head-left"><span class="panel-kicker">${kicker}</span><h2>${title}</h2></div>
        <div class="panel-head-right">
          <div class="pill-btn coin-pill"><span class="coin-glyph">●</span><span>${formatNumber(this.progress.coins)}</span></div>
          <button class="panel-close" data-close aria-label="Close">×</button>
        </div>
      </div>
      <div class="panel-body">${bodyHtml}</div>`;
  }

  onPanelClick(e) {
    const target = e.target.closest('[data-action], [data-select], [data-buy], [data-upgrade], [data-event], [data-claim], [data-claim-mission], [data-close], [data-setting], [data-quality], [data-toggle], [data-calibrate], [data-reset]');
    if (!target) return;
    this.game.audio?.ui?.();
    if (target.hasAttribute('data-close')) { this.closePanel(); return; }
    const action = target.getAttribute('data-action');
    if (action === 'open-career') return this.openCareer();
    if (action === 'open-garage') return this.openGarage();
    if (action === 'open-daily') return this.openDaily();
    if (action === 'equip') {
      const id = target.getAttribute('data-select');
      if (this.progress.selectJetSki(id)) {
        this.garagePreview = id;
        this.game.onJetSkiChanged();
        this.game.audio.pickup('nitro');
        this.toast(`${this.progress.jetSki(id).name} equipped`);
        this.openGarage();
      }
      return;
    }
    if (action === 'claim-daily') {
      const r = this.progress.claimDaily();
      if (r) {
        this.game.audio.pickup('coin');
        this.toast(`Day ${r.day} gift claimed · +${r.amount} coins`);
        this.openDaily();
      }
      return;
    }
    if (target.hasAttribute('data-select')) {
      this.garagePreview = target.getAttribute('data-select');
      this.openGarage();
      return;
    }
    if (target.hasAttribute('data-buy')) {
      const id = target.getAttribute('data-buy');
      if (this.progress.buyJetSki(id)) {
        this.garagePreview = id;
        this.game.onJetSkiChanged();
        this.game.audio.pickup('nitro');
        this.toast(`${this.progress.jetSki(id).name} is yours`);
        this.openGarage();
      } else {
        this.toast('Not enough coins — win some races');
      }
      return;
    }
    if (target.hasAttribute('data-upgrade')) {
      const key = target.getAttribute('data-upgrade');
      if (this.progress.upgrade(this.garagePreview, key)) {
        this.game.onJetSkiChanged();
        this.game.audio.pickup('shield');
        this.openGarage();
      } else {
        this.toast('Not enough coins for that upgrade');
      }
      return;
    }
    if (target.hasAttribute('data-event')) {
      const id = target.getAttribute('data-event');
      const ev = CAREER_EVENTS.find((x) => x.id === id);
      if (ev && this.progress.isCareerUnlocked(ev)) {
        this.closePanel();
        this.game.startRace({ mode: 'career', event: ev });
      } else {
        this.toast('Finish the previous cup in the top 3 to unlock');
      }
      return;
    }
    if (target.hasAttribute('data-claim-mission')) {
      const id = target.getAttribute('data-claim-mission');
      const amount = this.progress.claimMission(id);
      if (amount) {
        this.game.audio.pickup('coin');
        this.toast(`Mission complete · +${amount} coins`);
        this.openDaily();
      }
      return;
    }
    if (target.hasAttribute('data-setting')) {
      const scheme = target.getAttribute('data-setting');
      this.game.setControlScheme(scheme).then((ok) => {
        if (!ok) this.toast('Tilt needs motion permission on this device');
        this.openSettings(this.activePanel === 'settings-pause');
      });
      return;
    }
    if (target.hasAttribute('data-quality')) {
      this.progress.updateSettings({ quality: target.getAttribute('data-quality') });
      this.game.setQuality(this.progress.settings.quality);
      this.openSettings(this.activePanel === 'settings-pause');
      return;
    }
    if (target.hasAttribute('data-toggle')) {
      const key = target.getAttribute('data-toggle');
      const val = !this.progress.settings[key];
      this.progress.updateSettings({ [key]: val });
      if (key === 'sound') this.game.audio.setMuted(!val);
      if (key === 'haptics' && val && navigator.vibrate) navigator.vibrate(30);
      this.openSettings(this.activePanel === 'settings-pause');
      return;
    }
    if (target.hasAttribute('data-calibrate')) {
      this.game.input.calibrateTilt();
      this.toast('Tilt centre calibrated — hold still');
      return;
    }
    if (target.hasAttribute('data-reset')) {
      if (window.confirm('Reset all coins, rides, upgrades and progress?')) {
        this.progress.reset();
        this.game.onJetSkiChanged();
        this.closePanel();
        this.refreshMenu();
        this.toast('Progress reset');
      }
      return;
    }
  }

  openCareer() {
    const events = CAREER_EVENTS.map((ev) => {
      const unlocked = this.progress.isCareerUnlocked(ev);
      const best = this.progress.save.career[ev.id];
      const p = PALETTES[ev.palette] || PALETTES.morning;
      const thumb = `linear-gradient(150deg, ${p.skyMid}, ${p.waterDeep} 70%, #082f28)`;
      return `
        <div class="career-row ${unlocked ? '' : 'locked'}">
          <div class="career-thumb" style="--thumb:${thumb}">
            <b>${ev.tag.split(' ')[1] || ev.tag}</b>
          </div>
          <div class="career-info">
            <h3>${ev.name}</h3>
            <p>${ev.desc}</p>
            <div class="career-tags">
              <span>${ev.laps} LAPS</span><span>${ev.rivals} RIVALS</span>
              <span class="gold">${formatNumber(ev.prize)} COINS</span>
              ${best ? `<span>BEST ${ordinal(best.place)}</span>` : ''}
            </div>
          </div>
          <div class="career-action">
            ${unlocked
              ? `<button class="btn btn-primary" data-event="${ev.id}">RACE</button><small>${ev.circuit}</small>`
              : `<span class="career-lock">🔒 TOP 3 PREVIOUS</span>`}
          </div>
        </div>`;
    }).join('');
    this.openPanel(this.panelShell('CAREER MODE', 'River Cups', `
      <p class="panel-copy">Four legs down the wild river. Finish in the top three to open the next cup. Faster rides and smarter lines will be rewarded.</p>
      <div class="career-list">${events}</div>
      <p class="garage-note">Career prizes are paid out on every finish. Your best placement is kept.</p>
    `), 'career');
  }

  openGarage() {
    const p = this.progress;
    if (!JETSKIS.some((j) => j.id === this.garagePreview)) this.garagePreview = p.save.selected;
    const ski = p.jetSki(this.garagePreview);
    const owned = p.isOwned(ski.id);
    const selected = p.save.selected === ski.id;
    const stats = p.effectiveStats(ski.id);
    const ups = p.upgradesFor(ski.id);
    const list = JETSKIS.map((j) => {
      const isOwned = p.isOwned(j.id);
      const equip = p.save.selected === j.id;
      return `
        <button class="ski-item ${this.garagePreview === j.id ? 'active' : ''}" data-select="${j.id}" style="--c1:${j.c1};--c2:${j.c2}">
          <span class="ski-swatch" style="--c1:${j.c1};--c2:${j.c2}"></span>
          <span class="ski-item-text"><b>${j.name}</b><span>${j.tag}</span></span>
          ${!isOwned ? `<span class="lock-price">● ${formatNumber(j.price)}</span>` : equip ? '<span class="equipped">EQUIPPED</span>' : ''}
        </button>`;
    }).join('');
    const statRows = ['speed', 'handling', 'boost'].map((key) => `
      <div class="stat-line">
        <span>${key === 'boost' ? 'BOOST' : key.toUpperCase()}</span>
        <div class="stat-track"><i style="width:${Math.round(stats[key])}%"></i></div>
        <b>${Math.round(stats[key])}</b>
      </div>`).join('');
    const upgradeRows = ['speed', 'handling', 'boost'].map((key) => {
      const level = ups[key] || 0;
      const cost = p.upgradeCost(ski.id, key);
      const pips = Array.from({ length: 5 }, (_, i) => `<i class="${i < level ? 'on' : ''}"></i>`).join('');
      return `
        <div class="upgrade-row">
          <div class="upgrade-info">
            <b>${upgradeLabels[key]}</b>
            <div class="upgrade-pips">${pips}</div>
            <small>Level ${level}/5 · +2.3 stat</small>
          </div>
          ${owned
            ? cost == null
              ? '<button class="upgrade-btn maxed" disabled>MAXED</button>'
              : `<button class="upgrade-btn" data-upgrade="${key}" ${p.coins < cost ? 'disabled' : ''}>● ${formatNumber(cost)}</button>`
            : ''}
        </div>`;
    }).join('');
    const buyRow = !owned
      ? `<div class="buy-row">
           <button class="btn btn-primary" data-buy="${ski.id}" ${p.coins < ski.price ? 'disabled' : ''}><span>BUY · ${formatNumber(ski.price)} COINS</span></button>
         </div>`
      : selected
        ? `<div class="buy-row"><button class="btn btn-glass" disabled>EQUIPPED</button></div>`
        : `<div class="buy-row"><button class="btn btn-primary" data-select="${ski.id}" data-action="equip"><span>EQUIP THIS RIDE</span></button></div>`;

    this.openPanel(this.panelShell('GARAGE', 'Pick your ride', `
      <div class="garage-layout">
        <div>
          <p class="section-label">Jetski fleet</p>
          <div class="ski-list">${list}</div>
          <p class="garage-note">Every hull has its own soul. Upgrades are permanent and carry into every mode.</p>
        </div>
        <div class="garage-detail">
          <div class="ski-preview" style="--c1:${ski.c1};--c2:${ski.c2};--accent:${ski.accent};--trim:${ski.trim};--rider:${ski.c1}">
            ${jetskiSVG(ski)}
            <div class="preview-badge">${owned ? 'OWNED' : 'LOCKED'}</div>
            <div class="preview-name">${ski.name}</div>
          </div>
          <p class="panel-copy" style="margin-bottom:10px !important">${ski.copy}</p>
          <div class="stat-grid">${statRows}</div>
          <p class="section-label">Upgrades</p>
          ${upgradeRows}
          ${buyRow}
        </div>
      </div>
    `), 'garage');
  }

  openDaily() {
    const p = this.progress;
    const day = p.dailyDayIndex();
    const available = p.dailyAvailable();
    const streak = p.save.daily.streak || 0;
    const rewards = [100, 150, 200, 250, 300, 400, 600];
    const dayCards = rewards.map((amount, i) => {
      const claimed = available ? i + 1 < day : i + 1 <= streak;
      return `
        <div class="day-card ${i + 1 === day && available ? 'today' : ''} ${claimed ? 'claimed' : ''}">
          <span>DAY ${i + 1}</span>
          <span class="coin-glyph">●</span>
          <b>${amount}</b>
        </div>`;
    }).join('');
    const missions = p.missions.map((m) => {
      const done = m.progress >= m.target;
      const pct = Math.min(100, Math.round((m.progress / m.target) * 100));
      return `
        <div class="mission-item">
          <div class="mission-icon">${m.icon}</div>
          <div class="mission-text">
            <b>${m.name}</b>
            <div class="mission-progress"><i style="width:${pct}%"></i></div>
            <small>${m.desc.replace('{target}', m.target)} · ${Math.min(m.progress, m.target)}/${m.target}</small>
          </div>
          <div class="mission-reward">
            <span>+${m.reward}</span>
            ${m.claimed
              ? '<button disabled>CLAIMED</button>'
              : `<button data-claim-mission="${m.id}" ${done ? '' : 'disabled'}>${done ? 'CLAIM' : 'LOCKED'}</button>`}
          </div>
        </div>`;
    }).join('');
    this.openPanel(this.panelShell('DAILY CURRENT', 'River rewards', `
      <p class="panel-copy">The river pays its regulars. Claim your daily chest, then chase today’s three objectives in any race mode.</p>
      <div class="daily-rewards">${dayCards}</div>
      <div class="daily-cta">
        <div class="daily-cta-info">
          <b>${available ? `Day ${day} chest is ready` : 'Chest claimed today'}</b>
          <span>${available ? 'Come back tomorrow to keep the streak alive.' : `${streak}-day streak · resets only if you miss a day.`}</span>
        </div>
        ${available
          ? `<button class="btn btn-primary" data-action="claim-daily" style="min-height:42px;padding:0 16px;font-size:10px"><span>CLAIM +${rewards[day - 1]}</span></button>`
          : `<button class="btn btn-glass" disabled style="min-height:42px;padding:0 16px;font-size:10px">CLAIMED</button>`}
      </div>
      <p class="section-label">Today’s missions</p>
      <div class="mission-list">${missions}</div>
    `), 'daily');
  }

  openSettings(fromPause = false) {
    const s = this.progress.settings;
    const seg = (attribute, settingKey, values) => values.map((v) => `<button data-${attribute}="${v.value}" class="${s[settingKey] === v.value ? 'active' : ''}">${v.label}</button>`).join('');
    this.openPanel(this.panelShell('SETTINGS', 'Tune the ride', `
      <div class="settings-grid">
        <div class="setting-row">
          <div class="setting-label"><b>Steering</b><span>Tilt uses your gyroscope. Joystick is thumb-first.</span></div>
          <div class="segmented">${seg('setting', 'control', [{ value: 'joystick', label: 'JOYSTICK' }, { value: 'tilt', label: 'TILT' }])}</div>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Quality</b><span>Auto adapts resolution to hold 60 FPS.</span></div>
          <div class="segmented">${seg('quality', 'quality', [{ value: 'auto', label: 'AUTO' }, { value: 'high', label: 'HIGH' }, { value: 'low', label: 'LOW' }])}</div>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Sound</b><span>Engine, water and tropical ambience.</span></div>
          <button class="toggle ${s.sound ? 'on' : ''}" data-toggle="sound" aria-label="Toggle sound"></button>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Haptics</b><span>Impact and boost vibration (supported devices).</span></div>
          <button class="toggle ${s.haptics ? 'on' : ''}" data-toggle="haptics" aria-label="Toggle haptics"></button>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Tilt calibration</b><span>Hold your phone naturally, then tap.</span></div>
          <button class="upgrade-btn" data-calibrate style="min-height:34px">CALIBRATE</button>
        </div>
      </div>
      <p class="settings-note">Desktop: A / D or arrows to steer, Shift or N for nitro, Space to jump, S to brake. P or Esc pauses.</p>
      <button class="danger-link" data-reset>Reset all progress</button>
    `), fromPause ? 'settings-pause' : 'settings');
  }
}
