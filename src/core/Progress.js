import { clamp } from './utils.js';

export const JETSKIS = [
  {
    id: 'reef', name: 'Reef Runner', tag: 'Balanced starter',
    price: 0, speed: 68, handling: 72, boost: 64,
    c1: '#7af3d5', c2: '#0e7269', accent: '#d8ff5d', trim: '#f4fff9',
    copy: 'Light, forgiving and born for the shallows.',
  },
  {
    id: 'mango', name: 'Mango Dart', tag: 'Flickable',
    price: 900, speed: 65, handling: 86, boost: 68,
    c1: '#ffb03a', c2: '#c4491f', accent: '#ffe58a', trim: '#fff2dc',
    copy: 'Razor turn-in. Slides through jungle chicanes.',
  },
  {
    id: 'storm', name: 'Storm Ski', tag: 'Top speed',
    price: 1800, speed: 83, handling: 64, boost: 77,
    c1: '#68c6ff', c2: '#203f91', accent: '#8ff5ff', trim: '#eef9ff',
    copy: 'A straight-line weapon with a storm in its wake.',
  },
  {
    id: 'tiki', name: 'Tiki Fury', tag: 'Boost monster',
    price: 2800, speed: 76, handling: 74, boost: 91,
    c1: '#b6ff5a', c2: '#28752c', accent: '#ffd356', trim: '#f4ffe0',
    copy: 'A carved river idol. Nitro is its heartbeat.',
  },
  {
    id: 'volcano', name: 'Volcano', tag: 'Endgame',
    price: 4200, speed: 91, handling: 67, boost: 84,
    c1: '#ff7a48', c2: '#7c1d24', accent: '#ffd356', trim: '#fff0e4',
    copy: 'Lava-forged hull. Built to leave the pack behind.',
  },
];

export const CAREER_EVENTS = [
  {
    id: 'mangrove',
    name: 'Mangrove Sprint',
    circuit: 'Emerald Bend',
    desc: 'Warm-up run through the palms. Find your line.',
    palette: 'morning',
    laps: 3,
    rivals: 5,
    prize: 260,
    unlockAfter: null,
    tag: 'ROUND 01',
  },
  {
    id: 'rapids',
    name: 'Jungle Rapids',
    circuit: 'The Narrows',
    desc: 'Tight water, hidden logs and a low wooden bridge.',
    palette: 'noon',
    laps: 3,
    rivals: 5,
    prize: 420,
    unlockAfter: 'mangrove',
    tag: 'ROUND 02',
  },
  {
    id: 'regatta',
    name: 'Village Regatta',
    circuit: 'Stilt Town',
    desc: 'The whole village turns out. Don’t clip the docks.',
    palette: 'sunset',
    laps: 3,
    rivals: 5,
    prize: 620,
    unlockAfter: 'rapids',
    tag: 'ROUND 03',
  },
  {
    id: 'storm',
    name: 'Storm Run',
    circuit: 'Thunder Chute',
    desc: 'The final. Choppy water, low light, no excuses.',
    palette: 'storm',
    laps: 3,
    rivals: 5,
    prize: 950,
    unlockAfter: 'regatta',
    tag: 'FINAL',
  },
];

const MISSION_POOL = [
  { type: 'coins', name: 'River loot', desc: 'Collect {target} coins', target: 25, reward: 120, icon: '●' },
  { type: 'drift', name: 'Hold the carve', desc: 'Drift for {target} m', target: 700, reward: 140, icon: '≈' },
  { type: 'boost', name: 'Blue flame', desc: 'Trigger {target} nitro boosts', target: 6, reward: 130, icon: '▲' },
  { type: 'jump', name: 'Send it', desc: 'Launch off {target} ramps', target: 4, reward: 110, icon: '↑' },
  { type: 'races', name: 'One more run', desc: 'Finish {target} races', target: 2, reward: 150, icon: '⚑' },
  { type: 'top3', name: 'Podium chaser', desc: 'Finish top 3 in {target} races', target: 1, reward: 160, icon: '★' },
  { type: 'checkpoint', name: 'Clean lines', desc: 'Pass {target} checkpoints', target: 24, reward: 120, icon: '✓' },
];

const DAILY_REWARDS = [100, 150, 200, 250, 300, 400, 600];
const UPGRADE_COSTS = [200, 340, 520, 760, 1080];

const defaultSettings = () => ({
  control: 'joystick',
  quality: 'auto',
  sound: true,
  haptics: true,
});

const defaultSave = () => ({
  version: 1,
  coins: 450,
  owned: ['reef'],
  selected: 'reef',
  upgrades: { reef: { speed: 0, handling: 0, boost: 0 } },
  career: {},
  bestTimes: {},
  daily: { lastClaim: null, streak: 0 },
  missions: null,
  stats: { races: 0, wins: 0, distance: 0, bestLap: null },
  settings: defaultSettings(),
});

const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const yesterdayKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export class Progress {
  constructor() {
    this.save = this.load();
    this.ensureMissions();
  }

  load() {
    const base = defaultSave();
    try {
      const raw = localStorage.getItem('riverRush.save.v1');
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      const merged = {
        ...base,
        ...parsed,
        settings: { ...base.settings, ...(parsed.settings || {}) },
        daily: { ...base.daily, ...(parsed.daily || {}) },
        stats: { ...base.stats, ...(parsed.stats || {}) },
        upgrades: { ...base.upgrades, ...(parsed.upgrades || {}) },
      };
      if (!Array.isArray(merged.owned) || !merged.owned.length) merged.owned = ['reef'];
      if (!merged.owned.includes('reef')) merged.owned.unshift('reef');
      if (!merged.owned.includes(merged.selected)) merged.selected = merged.owned[0];
      return merged;
    } catch {
      return base;
    }
  }

  persist() {
    try {
      localStorage.setItem('riverRush.save.v1', JSON.stringify(this.save));
    } catch {
      /* private mode */
    }
  }

  get settings() { return this.save.settings; }
  get coins() { return this.save.coins; }

  updateSettings(patch) {
    this.save.settings = { ...this.save.settings, ...patch };
    this.persist();
  }

  addCoins(amount) {
    this.save.coins = Math.max(0, Math.round(this.save.coins + amount));
    this.persist();
  }

  jetSki(id) {
    return JETSKIS.find((j) => j.id === id) || JETSKIS[0];
  }

  selectedJetSki() {
    return this.jetSki(this.save.selected);
  }

  isOwned(id) { return this.save.owned.includes(id); }

  buyJetSki(id) {
    const ski = this.jetSki(id);
    if (!ski || this.isOwned(id) || this.save.coins < ski.price) return false;
    this.save.coins -= ski.price;
    this.save.owned.push(id);
    this.save.selected = id;
    if (!this.save.upgrades[id]) this.save.upgrades[id] = { speed: 0, handling: 0, boost: 0 };
    this.persist();
    return true;
  }

  selectJetSki(id) {
    if (!this.isOwned(id)) return false;
    this.save.selected = id;
    this.persist();
    return true;
  }

  upgradesFor(id = this.save.selected) {
    return this.save.upgrades[id] || { speed: 0, handling: 0, boost: 0 };
  }

  upgradeCost(id, key) {
    const level = this.upgradesFor(id)[key] || 0;
    if (level >= 5) return null;
    return UPGRADE_COSTS[level];
  }

  upgrade(id, key) {
    if (!this.isOwned(id)) return false;
    const ups = this.upgradesFor(id);
    const level = ups[key] || 0;
    if (level >= 5) return false;
    const cost = UPGRADE_COSTS[level];
    if (this.save.coins < cost) return false;
    this.save.coins -= cost;
    this.save.upgrades[id] = { ...ups, [key]: level + 1 };
    this.persist();
    return true;
  }

  /** Effective stat values (0–100) including owned upgrades. */
  effectiveStats(id = this.save.selected) {
    const ski = this.jetSki(id);
    const ups = this.upgradesFor(id);
    return {
      speed: clamp(ski.speed + ups.speed * 2.3, 0, 100),
      handling: clamp(ski.handling + ups.handling * 2.3, 0, 100),
      boost: clamp(ski.boost + ups.boost * 2.3, 0, 100),
    };
  }

  /** Multipliers used by the physics. */
  performance(id = this.save.selected) {
    const stats = this.effectiveStats(id);
    return {
      speed: 0.94 + (stats.speed - 60) * 0.0042,
      handling: 0.90 + (stats.handling - 60) * 0.0052,
      boost: 0.90 + (stats.boost - 60) * 0.0050,
    };
  }

  // ---------- Career ----------
  isCareerUnlocked(event) {
    if (!event.unlockAfter) return true;
    const prev = this.save.career[event.unlockAfter];
    return Boolean(prev && prev.place <= 3);
  }

  careerUnlockedCount() {
    return CAREER_EVENTS.filter((e) => this.isCareerUnlocked(e)).length;
  }

  recordCareer(eventId, result) {
    const prev = this.save.career[eventId] || {};
    const bestPlace = prev.place ? Math.min(prev.place, result.place) : result.place;
    const bestTime = prev.time ? Math.min(prev.time, result.time) : result.time;
    this.save.career[eventId] = {
      place: bestPlace,
      time: bestTime,
      bestLap: prev.bestLap ? Math.min(prev.bestLap, result.bestLap) : result.bestLap,
      races: (prev.races || 0) + 1,
    };
    this.persist();
  }

  // ---------- Daily ----------
  dailyAvailable() {
    return this.save.daily.lastClaim !== todayKey();
  }

  dailyDayIndex() {
    if (this.dailyAvailable()) {
      return (this.save.daily.lastClaim === yesterdayKey()) ? clamp((this.save.daily.streak || 0) + 1, 1, 7) : 1;
    }
    return clamp(this.save.daily.streak || 1, 1, 7);
  }

  claimDaily() {
    if (!this.dailyAvailable()) return null;
    const yesterday = this.save.daily.lastClaim === yesterdayKey();
    const nextStreak = yesterday ? Math.min(7, (this.save.daily.streak || 0) + 1) : 1;
    const amount = DAILY_REWARDS[nextStreak - 1];
    this.save.daily.lastClaim = todayKey();
    this.save.daily.streak = nextStreak;
    this.addCoins(amount);
    return { amount, day: nextStreak };
  }

  // ---------- Missions ----------
  ensureMissions() {
    const today = todayKey();
    if (!this.save.missions || this.save.missions.date !== today) {
      const seed = Number(today.replace(/-/g, '')) % 997;
      const picked = [];
      const pool = [...MISSION_POOL];
      for (let i = 0; i < 3; i++) {
        const idx = (seed * (i + 3) + i * 7) % pool.length;
        picked.push(pool.splice(idx, 1)[0]);
      }
      this.save.missions = {
        date: today,
        list: picked.map((m, i) => ({ ...m, id: `${today}-${i}`, claimed: false, progress: 0 })),
      };
      this.persist();
    }
    return this.save.missions.list;
  }

  get missions() { return this.ensureMissions(); }

  missionReady() {
    const m = this.missions.find((x) => !x.claimed && x.progress >= x.target);
    return Boolean(m) || this.dailyAvailable();
  }

  claimMission(id) {
    const m = this.missions.find((x) => x.id === id);
    if (!m || m.claimed || m.progress < m.target) return null;
    m.claimed = true;
    this.addCoins(m.reward);
    return m.reward;
  }

  recordRace({ place, time, bestLap, topSpeed, coinsCollected, drift, boosts, jumps, checkpoints, mode, eventId }) {
    this.save.stats.races = (this.save.stats.races || 0) + 1;
    if (place === 1) this.save.stats.wins = (this.save.stats.wins || 0) + 1;
    if (bestLap && (!this.save.stats.bestLap || bestLap < this.save.stats.bestLap)) {
      this.save.stats.bestLap = bestLap;
    }
    if (mode === 'career' && eventId) {
      this.recordCareer(eventId, { place, time, bestLap });
    } else if (mode === 'time') {
      const prev = this.save.bestTimes.timeTrial;
      if (!prev || time < prev) this.save.bestTimes.timeTrial = time;
    }
    if (mode === 'quick') {
      const prev = this.save.bestTimes.quick;
      if (!prev || time < prev) this.save.bestTimes.quick = time;
    }

    const list = this.ensureMissions();
    for (const m of list) {
      if (m.claimed) continue;
      if (m.type === 'coins') m.progress += coinsCollected;
      else if (m.type === 'drift') m.progress += Math.round(drift);
      else if (m.type === 'boost') m.progress += boosts;
      else if (m.type === 'jump') m.progress += jumps;
      else if (m.type === 'races') m.progress += 1;
      else if (m.type === 'top3') m.progress += place <= 3 ? 1 : 0;
      else if (m.type === 'checkpoint') m.progress += checkpoints;
      m.progress = Math.min(m.progress, m.target);
    }
    this.persist();
  }

  reset() {
    this.save = defaultSave();
    this.persist();
  }
}
