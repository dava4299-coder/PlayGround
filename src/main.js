import './style.css';
import { Game } from './game/Game.js';

function showBootError(error) {
  console.error('[River Rush] failed to start', error);
  const loading = document.getElementById('loading');
  if (!loading) return;
  loading.classList.remove('hidden');
  const tip = loading.querySelector('.loading-tip');
  if (tip) {
    tip.innerHTML = 'The current stalled. Reload to try again.';
    tip.style.color = '#ffb3a1';
  }
  const bar = document.getElementById('loadingBar');
  if (bar) {
    bar.style.width = '100%';
    bar.style.background = '#ff7a48';
  }
}

function boot() {
  try {
    const game = new Game();
    window.riverRush = game;
  } catch (error) {
    showBootError(error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
