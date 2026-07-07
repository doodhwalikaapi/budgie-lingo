// public/js/dashboard.js

async function requireLogin() {
  const res = await fetch('/api/me');
  if (!res.ok) {
    window.location.href = 'login.html';
    return null;
  }
  return res.json();
}

async function loadMyLanguages() {
  const res = await fetch('/api/my-languages');
  const items = await res.json();
  const wrap = document.getElementById('myLanguages');
  const emptyMsg = document.getElementById('noLangsMsg');

  wrap.innerHTML = '';
  if (items.length === 0) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  items.forEach(item => {
    const pct = item.totalLessons ? Math.round((item.completedCount / item.totalLessons) * 100) : 0;
    const pill = document.createElement('div');
    pill.className = 'lang-pill';
    pill.innerHTML = `
      <div class="lp-name">${item.languageName}</div>
      <div class="lp-progress-bar"><div class="lp-progress-fill" style="width:${pct}%"></div></div>
      ${item.completedAt
        ? `<div class="lp-done">✓ Course complete!</div>`
        : `<div class="lp-meta">${item.completedCount}/${item.totalLessons} lessons done</div>`}
    `;
    pill.addEventListener('click', () => {
      if (item.completedAt) {
        window.location.href = `certificate.html?lang=${item.languageCode}`;
      } else {
        window.location.href = `lesson.html?lang=${item.languageCode}`;
      }
    });
    wrap.appendChild(pill);
  });
}

async function loadAllLanguages() {
  const res = await fetch('/api/languages');
  const languages = await res.json();
  const grid = document.getElementById('langGrid');
  grid.innerHTML = '';

  languages.forEach(lang => {
    const card = document.createElement('div');
    card.className = `lang-card ${lang.available ? 'available' : 'unavailable'}`;
    card.innerHTML = `
      <div class="lang-badge">${lang.code.slice(0, 2)}</div>
      <div class="lc-name">${lang.name}</div>
      <div class="lc-tag">${lang.available ? 'Tap to learn' : 'Coming soon'}</div>
    `;
    if (lang.available) {
      card.addEventListener('click', async () => {
        await fetch('/api/my-languages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ languageCode: lang.code })
        });
        window.location.href = `lesson.html?lang=${lang.code}`;
      });
    }
    grid.appendChild(card);
  });
}

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await fetch('/api/logout', { method: 'POST' });
  window.location.href = 'login.html';
});

document.getElementById('deleteBtn').addEventListener('click', async () => {
  if (!confirm('This will permanently delete your account and all your progress. Are you sure?')) return;
  await fetch('/api/account', { method: 'DELETE' });
  window.location.href = 'login.html';
});

(async function init() {
  const me = await requireLogin();
  if (!me) return;
  document.getElementById('userName').textContent = `Hi, ${me.name} 👋`;
  loadMyLanguages();
  loadAllLanguages();
})();
