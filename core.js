/* My Grade My Project - core: storage, points, levels, badges, router, shared helpers. Nothing leaves the device. */
(function () {
  'use strict';
  var MG = window.MG = { acts: {}, inputs: {}, routes: [], util: {}, views: {}, tabs: {} };
  var U = MG.util;

  /* ---------- helpers ---------- */
  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  U.md = function (s) { return U.esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); };
  U.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  U.pad = function (n) { return n < 10 ? '0' + n : '' + n; };
  U.dayKey = function (d) { return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate()); };
  U.num = function (n, dp) { return Number(n).toLocaleString('en-KE', { maximumFractionDigits: dp == null ? 2 : dp }); };
  U.rint = function (lo, hi, step) { step = step || 1; return lo + step * Math.floor(Math.random() * ((hi - lo) / step + 1)); };

  /* ---------- storage (falls back to memory if the browser blocks it) ---------- */
  var mem = {};
  MG.store = {
    get: function (k, d) {
      try { var v = localStorage.getItem('mgmp.' + k); return v ? JSON.parse(v) : (k in mem ? mem[k] : d); }
      catch (e) { return k in mem ? mem[k] : d; }
    },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem('mgmp.' + k, JSON.stringify(v)); } catch (e) { /* keep in memory */ } }
  };

  /* ---------- content ---------- */
  MG.subjects = [
    { id: 'ss', name: 'Social Studies', blurb: 'People, places, governance, culture and history', icon: '◍' },
    { id: 'pt', name: 'Pre-Technical Studies', blurb: 'Tools, materials, drawing, business and computers', icon: '⚙' }
  ];
  MG.subj = function (id) { return MG.subjects.filter(function (s) { return s.id === id; })[0]; };
  MG.topics = (window.CONTENT || []).slice().sort(function (a, b) {
    var ia = a.subject === 'ss' ? 0 : 1, ib = b.subject === 'ss' ? 0 : 1;
    return ia === ib ? a.n - b.n : ia - ib;
  });
  MG.topic = function (id) { return MG.topics.filter(function (t) { return t.id === id; })[0]; };
  MG.topicsFor = function (subject, grade) {
    return MG.topics.filter(function (t) { return (!subject || t.subject === subject) && (!grade || t.grades.indexOf(grade) !== -1); });
  };
  MG.fig = function (key, cap, cls) {
    var D = window.DIAGRAMS || {};
    if (!key || !D[key]) return '';
    return '<figure class="fig ' + (cls || '') + '">' + D[key]() + (cap ? '<figcaption>' + U.esc(cap) + '</figcaption>' : '') + '</figure>';
  };

  /* ---------- saved state ---------- */
  var S = MG.S = MG.store.get('v2', null) || {};
  S.pts = S.pts || 0; S.days = S.days || []; S.badges = S.badges || {}; S.t = S.t || {};
  S.mock = S.mock || { ss: [], pt: [] }; S.flags = S.flags || {}; S.matchBest = S.matchBest || 0;
  MG.save = function () { MG.store.set('v2', S); };
  MG.ts = function (id) { return S.t[id] || (S.t[id] = {}); };
  MG.flag = function (name) { if (!S.flags[name]) { S.flags[name] = 1; MG.checkBadges(); MG.save(); } };

  /* ---------- toasts (queued) ---------- */
  var q = [], busy = false;
  function nextToast() {
    var m = q.shift();
    if (!m) { busy = false; return; }
    busy = true;
    var t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = m;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); nextToast(); }, 1900);
  }
  MG.say = function (m) { q.push(m); if (!busy) nextToast(); };

  /* ---------- streak, points, levels ---------- */
  MG.streak = function () {
    var set = {}; S.days.forEach(function (d) { set[d] = 1; });
    var d = new Date(), n = 0;
    if (!set[U.dayKey(d)]) { d.setDate(d.getDate() - 1); if (!set[U.dayKey(d)]) return 0; }
    while (set[U.dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };
  MG.touchDay = function () {
    var t = U.dayKey(new Date());
    if (S.days.indexOf(t) === -1) {
      S.days.push(t); if (S.days.length > 400) S.days = S.days.slice(-400);
      S.pts += 5; MG.say('Daily bonus: +5 points');
    }
  };
  MG.award = function (n, why, quiet) {
    MG.touchDay();
    if (n > 0) { S.pts += n; if (!quiet) MG.say('+' + n + ' points' + (why ? ': ' + why : '')); }
    MG.checkBadges(); MG.save(); MG.refreshChip();
  };
  var LV = [[0, 'Starter'], [100, 'Explorer'], [250, 'Thinker'], [500, 'Builder'], [900, 'Achiever'], [1400, 'Scholar'], [2000, 'Champion']];
  MG.level = function (p) {
    var i = 0; for (var k = 0; k < LV.length; k++) if (p >= LV[k][0]) i = k;
    var nx = LV[i + 1];
    return { n: i + 1, name: LV[i][1], from: LV[i][0], to: nx ? nx[0] : null, nextName: nx ? nx[1] : null };
  };

  /* ---------- per-topic progress ---------- */
  function sumMarks(list) { return (list || []).reduce(function (a, q) { return a + q.marks; }, 0); }
  MG.totals = function (t) {
    var cs = 0; t.cases.forEach(function (c) { cs += sumMarks(c.parts); });
    return { cards: t.cards.length, mcq: t.mcq.length, sa: sumMarks(t.short), ca: cs };
  };
  function sumObj(o) { var n = 0; for (var k in (o || {})) n += o[k]; return n; }
  MG.progress = function (t) {
    var ts = MG.ts(t.id), tot = MG.totals(t);
    var known = Object.keys(ts.known || {}).length;
    var mcq = ts.mcq ? ts.mcq.best : 0, sa = sumObj(ts.sa), ca = sumObj(ts.ca);
    var pct = (ts.read ? 10 : 0) + 20 * known / tot.cards + 40 * mcq / tot.mcq + 30 * (sa + ca) / (tot.sa + tot.ca);
    return { read: !!ts.read, known: known, cards: tot.cards, mcq: mcq, mcqTotal: tot.mcq, sa: sa, saTotal: tot.sa, ca: ca, caTotal: tot.ca, pct: Math.min(100, Math.round(pct)) };
  };

  /* ---------- badges ---------- */
  function stat() {
    var quizzes = 0, mastered = 0, perfect = 0, read = 0, cards = 0, marks = 0;
    MG.topics.forEach(function (t) {
      var ts = MG.ts(t.id);
      if (ts.mcq) { quizzes += ts.mcq.n || 0; if (ts.mcq.best / t.mcq.length >= 0.75) mastered++; if (ts.mcq.best === t.mcq.length) perfect++; }
      if (ts.read) read++;
      cards += Object.keys(ts.known || {}).length;
      marks += sumObj(ts.sa) + sumObj(ts.ca);
    });
    var mocks = (S.mock.ss || []).length + (S.mock.pt || []).length;
    var mockBest = 0; ['ss', 'pt'].forEach(function (k) { (S.mock[k] || []).forEach(function (m) { mockBest = Math.max(mockBest, m.pct); }); });
    return { quizzes: quizzes, mastered: mastered, perfect: perfect, read: read, cards: cards, marks: marks, mocks: mocks, mockBest: mockBest };
  }
  MG.badges = [
    { id: 'first', ic: '★', name: 'First step', desc: 'Finish a topic quiz', ok: function (s) { return s.quizzes >= 1; } },
    { id: 'reader', ic: '▤', name: 'Bookworm', desc: 'Finish the notes of 3 topics', ok: function (s) { return s.read >= 3; } },
    { id: 'cards', ic: '▦', name: 'Card collector', desc: 'Know 40 flashcards', ok: function (s) { return s.cards >= 40; } },
    { id: 'sharp', ic: '◉', name: 'Sharp mind', desc: 'Get every question right in a topic quiz', ok: function (s) { return s.perfect >= 1; } },
    { id: 'master', ic: '⚑', name: 'Topic master', desc: 'Score 75% or more in 5 topic quizzes', ok: function (s) { return s.mastered >= 5; } },
    { id: 'writer', ic: '✎', name: 'Deep thinker', desc: 'Earn 30 marks on written questions', ok: function (s) { return s.marks >= 30; } },
    { id: 'mock', ic: '⏱', name: 'Mock finisher', desc: 'Finish a KJSEA mock paper', ok: function (s) { return s.mocks >= 1; } },
    { id: 'exceed', ic: '⬆', name: 'Exceeding', desc: 'Score 75% or more in a mock paper', ok: function (s) { return s.mockBest >= 75; } },
    { id: 's3', ic: '✶', name: '3-day streak', desc: 'Learn on 3 days in a row', ok: function () { return MG.streak() >= 3; } },
    { id: 's7', ic: '✸', name: '7-day streak', desc: 'Learn on 7 days in a row', ok: function () { return MG.streak() >= 7; } },
    { id: 'tools', ic: '⚒', name: 'Toolmaker', desc: 'Use all three interactive tools', ok: function () { return S.flags.scale && S.flags.sofp && S.flags.match; } },
    { id: 'planner', ic: '⚙', name: 'Project planner', desc: 'Start a project in My Project', ok: function () { return !!S.flags.planner; } }
  ];
  MG.checkBadges = function () {
    var s = stat();
    MG.badges.forEach(function (b) {
      if (!S.badges[b.id] && b.ok(s)) { S.badges[b.id] = Date.now(); MG.say('Badge earned: ' + b.name); }
    });
  };

  /* ---------- page frame ---------- */
  var app = document.getElementById('app'), topbar = document.getElementById('topbar');
  MG.setTop = function (title, back, chip) {
    topbar.innerHTML =
      (back ? '<button class="back" data-go="' + U.esc(back) + '" aria-label="Go back">&#8592;</button>' : '<(back ? '<button class="back" data-go="' + U.esc(back) + '" aria-label="Go back">&#8592;</button>' : '<img class="brand-logo" src="./icon-512.png" alt="My Grade, My Project">') +>') +
      '<div class="title-wrap"><div class="title">' + U.esc(title) + '</div><div class="top-subtitle">JUNIOR SCHOOL LEARNING HUB</div></div>' +
      '<span class="chip" id="chip">' + U.esc(chip != null ? chip : '★ ' + S.pts + ' pts') + '</span>';
  };
  MG.refreshChip = function () {
    var c = document.getElementById('chip');
    if (c && c.getAttribute('data-fixed') !== '1' && /pts$/.test(c.textContent)) c.textContent = '★ ' + S.pts + ' pts';
  };
  MG.setTab = function (id) {
    ['learn', 'mock', 'tools', 'progress', 'projects'].forEach(function (t) {
      var el = document.getElementById('t-' + t);
      if (!el) return;
      if (t === id) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
    });
  };
  MG.show = function (html, keepScroll) { app.innerHTML = html; if (!keepScroll) window.scrollTo(0, 0); };
  MG.main = function () { return app; };

  /* ---------- router ---------- */
  MG.route = function (re, fn) { MG.routes.push([new RegExp(re), fn]); };
  MG.render = function () {
    var h = location.hash.replace(/^#/, '') || '/';
    for (var i = 0; i < MG.routes.length; i++) {
      var m = MG.routes[i][0].exec(h);
      if (m) { MG.routes[i][1].apply(null, m.slice(1).map(function (x) { return x == null ? x : decodeURIComponent(x); })); return; }
    }
    MG.views.home();
  };
  window.addEventListener('hashchange', MG.render);

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-go],[data-act]');
    if (!el) return;
    if (el.hasAttribute('data-go')) {
      var to = el.getAttribute('data-go');
      if (location.hash === to || (to === '#/' && !location.hash)) MG.render(); else location.hash = to;
      return;
    }
    var fn = MG.acts[el.getAttribute('data-act')];
    if (fn) fn(el, e);
  });
  function inHandler(e) {
    var el = e.target.closest ? e.target.closest('[data-in]') : null;
    if (el && MG.inputs[el.getAttribute('data-in')]) MG.inputs[el.getAttribute('data-in')](el, e);
  }
  document.addEventListener('input', inHandler);
  document.addEventListener('change', inHandler);

  MG.boot = function () {
    MG.render();
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
    }
  };
})();
