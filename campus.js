/* My Grade My Project - Learning Journey: a stylised campus where a student walks to the chosen destination.
   Illustrated 2.5D SVG (no 3D engine), so it stays light and works offline. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util;

  var PLACES = [
    { id: 'library', name: 'Library', sub: 'Social Studies notes', go: '#/subject/ss', x: 12 },
    { id: 'ict', name: 'ICT Room', sub: 'Pre-Technical Studies', go: '#/subject/pt', x: 96 },
    { id: 'hall', name: 'Exam Hall', sub: 'KJSEA mock paper', go: '#/mock', x: 180 },
    { id: 'lab', name: 'Science Lab', sub: 'Coming soon', go: null, x: 264 }
  ];
  var W = 74, DOOR_Y = 262, START = { x: 180, y: 300 };
  var SKIES = ['dawn', 'day', 'sunset', 'night'];
  var raf = 0, state = null;

  function autoSky() {
    var h = new Date().getHours() + new Date().getMinutes() / 60;
    if (h >= 5 && h < 7.5) return 'dawn';
    if (h >= 7.5 && h < 16.5) return 'day';
    if (h >= 16.5 && h < 19) return 'sunset';
    return 'night';
  }
  var SKY = {
    dawn:   { top: '#f4b894', bot: '#fbe6c8', ground: '#7fb27a', body: 'sun', bx: 70, by: 150, bc: '#fff1b8', amb: 0.0 },
    day:    { top: '#6fb7e6', bot: '#d8f0fb', ground: '#6fb36c', body: 'sun', bx: 290, by: 46, bc: '#ffe27a', amb: 0.0 },
    sunset: { top: '#e0745c', bot: '#f7c58a', ground: '#6f9a63', body: 'sun', bx: 300, by: 140, bc: '#ffd39a', amb: 0.1 },
    night:  { top: '#0f2238', bot: '#27425f', ground: '#3c6a58', body: 'moon', bx: 80, by: 50, bc: '#f4f1d6', amb: 0.28 }
  };

  function building(p, i) {
    var x = p.x, c = [['#c9573f', '#8f3a2a'], ['#2f6fa3', '#1f4e75'], ['#d99a45', '#a8742c'], ['#4d9a7c', '#33725a']][i];
    var h = 74, y = 262 - h;
    var g = '<g class="bld" data-place="' + p.id + '" role="button" tabindex="0" aria-label="' + U.esc(p.name) + ': ' + U.esc(p.sub) + '">';
    g += '<rect x="' + x + '" y="' + y + '" width="' + W + '" height="' + h + '" rx="3" fill="' + c[0] + '"/>';
    g += '<polygon points="' + (x - 5) + ',' + y + ' ' + (x + W / 2) + ',' + (y - 22) + ' ' + (x + W + 5) + ',' + y + '" fill="' + c[1] + '"/>';
    g += '<rect class="win" x="' + (x + 10) + '" y="' + (y + 14) + '" width="14" height="14" rx="2" fill="#fff6c9"/>';
    g += '<rect class="win" x="' + (x + W - 24) + '" y="' + (y + 14) + '" width="14" height="14" rx="2" fill="#fff6c9"/>';
    g += '<rect x="' + (x + W / 2 - 8) + '" y="' + (262 - 28) + '" width="16" height="28" rx="2" fill="#3a2a22"/>';
    g += '<circle cx="' + (x + W / 2 + 4) + '" cy="' + (262 - 14) + '" r="1.4" fill="#ffd27a"/>';
    // sign
    g += '<rect x="' + (x + 6) + '" y="' + (y + 36) + '" width="' + (W - 12) + '" height="13" rx="3" fill="#fff" opacity="0.95"/>';
    g += '<text x="' + (x + W / 2) + '" y="' + (y + 46) + '" text-anchor="middle" font-size="9" font-weight="800" fill="#102a40" font-family="system-ui,sans-serif">' + U.esc(p.name) + '</text>';
    // little emblem on roof
    if (p.id === 'library') g += '<path d="M' + (x + 30) + ',' + (y - 6) + ' h7 v-7 h-7z M' + (x + 38) + ',' + (y - 6) + ' h7 v-7 h-7z" fill="#fff" opacity="0.9"/>';
    if (p.id === 'ict') g += '<rect x="' + (x + 29) + '" y="' + (y - 14) + '" width="16" height="10" rx="1.5" fill="#fff" opacity="0.9"/>';
    if (p.id === 'hall') g += '<line x1="' + (x + 62) + '" y1="' + (y - 4) + '" x2="' + (x + 62) + '" y2="' + (y - 26) + '" stroke="#555" stroke-width="1.6"/><path class="flag" d="M' + (x + 62) + ',' + (y - 26) + ' h12 v3 h-12z" fill="#222"/><path d="M' + (x + 62) + ',' + (y - 23) + ' h12 v3 h-12z" fill="#c0392b"/><path d="M' + (x + 62) + ',' + (y - 20) + ' h12 v3 h-12z" fill="#137f78"/>';
    if (p.id === 'hall') g += '<circle cx="' + (x + W / 2) + '" cy="' + (y - 10) + '" r="5" fill="#fff" opacity="0.9"/><line x1="' + (x + W / 2) + '" y1="' + (y - 10) + '" x2="' + (x + W / 2) + '" y2="' + (y - 13) + '" stroke="#102a40" stroke-width="1.2"/>';
    if (p.id === 'lab') g += '<path d="M' + (x + 33) + ',' + (y - 14) + ' h8 l4 12 h-16z" fill="#fff" opacity="0.9"/>';
    g += '</g>';
    return g;
  }

  function student() {
    return '<g id="jr-stu" class="stu"><g class="stu-flip">' +
      '<ellipse cx="0" cy="0" rx="11" ry="3" fill="#000" opacity="0.18"/>' +
      '<g class="leg l1"><rect x="-5" y="-16" width="4.6" height="16" rx="2" fill="#1d3a57"/><rect x="-5.4" y="-3" width="6.2" height="3.2" rx="1.5" fill="#222"/></g>' +
      '<g class="leg l2"><rect x="0.6" y="-16" width="4.6" height="16" rx="2" fill="#1d3a57"/><rect x="0.2" y="-3" width="6.2" height="3.2" rx="1.5" fill="#222"/></g>' +
      '<rect x="-7" y="-33" width="14" height="19" rx="5" fill="#2a9d8f"/>' +
      '<rect x="-9.5" y="-31" width="5" height="15" rx="2.5" fill="#d99a45"/>' +
      '<g class="arm a1"><rect x="-2" y="-32" width="4" height="13" rx="2" fill="#2a9d8f"/><circle cx="0" cy="-18.5" r="2.3" fill="#8d5a3b"/></g>' +
      '<circle cx="0" cy="-39" r="7.2" fill="#8d5a3b"/>' +
      '<path d="M-7.4,-40 q0.6,-8 7.4,-8 q6.8,0 7.4,8 q-4,-3.2 -7.4,-3.2 q-3.4,0 -7.4,3.2z" fill="#1b1411"/>' +
      '<circle cx="2.6" cy="-39" r="0.9" fill="#1b1411"/>' +
      '</g></g>';
  }

  function scene(sky) {
    var s = SKY[sky];
    var b = '<svg id="jr-svg" viewBox="0 0 360 330" role="img" aria-label="School campus with four buildings: Library, ICT Room, Exam Hall and Science Lab" style="width:100%;height:auto;display:block;border-radius:14px">';
    b += '<defs><linearGradient id="jr-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + s.top + '"/><stop offset="1" stop-color="' + s.bot + '"/></linearGradient></defs>';
    b += '<rect width="360" height="330" fill="url(#jr-sky)"/>';
    if (sky === 'night') {
      for (var i = 0; i < 26; i++) b += '<circle class="star" cx="' + ((i * 53) % 350 + 5) + '" cy="' + ((i * 37) % 120 + 8) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" style="animation-delay:' + (i % 5) * 0.4 + 's"/>';
    }
    b += s.body === 'sun'
      ? '<circle cx="' + s.bx + '" cy="' + s.by + '" r="19" fill="' + s.bc + '"/><circle cx="' + s.bx + '" cy="' + s.by + '" r="27" fill="' + s.bc + '" opacity="0.28"/>'
      : '<circle cx="' + s.bx + '" cy="' + s.by + '" r="16" fill="' + s.bc + '"/><circle cx="' + (s.bx + 6) + '" cy="' + (s.by - 3) + '" r="13" fill="' + s.top + '"/>';
    // hills (Laikipia-style gentle ridge) and clouds
    b += '<path d="M0,196 C60,150 110,176 170,158 C230,140 290,176 360,150 L360,262 L0,262z" fill="' + (sky === 'night' ? '#1d3a4a' : '#8dbb8a') + '" opacity="0.8"/>';
    var cc = sky === 'night' ? '#4a6580' : '#ffffff';
    b += '<g class="cloud c1" fill="' + cc + '" opacity="0.9"><ellipse cx="60" cy="70" rx="24" ry="8"/><ellipse cx="78" cy="64" rx="16" ry="8"/><ellipse cx="46" cy="66" rx="14" ry="6"/></g>';
    b += '<g class="cloud c2" fill="' + cc + '" opacity="0.8"><ellipse cx="230" cy="100" rx="26" ry="8"/><ellipse cx="248" cy="94" rx="15" ry="7"/></g>';
    b += '<rect y="262" width="360" height="68" fill="' + s.ground + '"/>';
    // paths
    b += '<path d="M0,292 Q180,276 360,292 L360,312 Q180,296 0,312z" fill="#d9c9a8"/>';
    PLACES.forEach(function (p) { b += '<path d="M' + (p.x + W / 2 - 6) + ',262 L' + (p.x + W / 2 + 6) + ',262 L' + (p.x + W / 2 + 18) + ',296 L' + (p.x + W / 2 - 18) + ',296z" fill="#d9c9a8"/>'; });
    // trees and flag
    function tree(x, y, sc) { return '<g class="tree" transform="translate(' + x + ',' + y + ') scale(' + sc + ')"><rect x="-2" y="-20" width="4" height="20" fill="#6b4a2f"/><circle cx="0" cy="-28" r="12" fill="#3c8a4f"/><circle cx="-8" cy="-22" r="8" fill="#4aa05c"/><circle cx="8" cy="-22" r="8" fill="#4aa05c"/></g>'; }
    b += tree(4, 262, 0.9) + tree(354, 264, 1) + tree(172, 262, 0.7);
    PLACES.forEach(function (p, i) { b += building(p, i); });
    b += student();
    if (s.amb) b += '<rect width="360" height="330" fill="#0b1a2b" opacity="' + s.amb + '" pointer-events="none"/>';
    b += '</svg>';
    return b;
  }

  function doorOf(p) { return { x: p.x + W / 2, y: 296 }; }
  function setPos(x, y, dir) {
    var el = document.getElementById('jr-stu'); if (!el) return;
    el.setAttribute('transform', 'translate(' + x + ',' + y + ')');
    var f = el.querySelector('.stu-flip'); if (f && dir) f.setAttribute('transform', dir < 0 ? 'scale(-1.25,1.25)' : 'scale(1.25,1.25)');
  }
  function reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function setStatus(html) { var s = document.getElementById('jr-status'); if (s) s.innerHTML = html; }

  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  function walkTo(p) {
    if (state.busy) return;
    var door = doorOf(p), from = { x: state.x, y: state.y };
    var dx = door.x - from.x, dy = door.y - from.y, dist = Math.sqrt(dx * dx + dy * dy);
    var dir = dx >= 0 ? 1 : -1;
    var el = document.getElementById('jr-stu');
    state.busy = true;
    document.querySelectorAll('.jr-btn').forEach(function (b) { b.disabled = true; });
    setStatus('Walking to the <b>' + U.esc(p.name) + '</b>&hellip;');
    function arrive() {
      state.x = door.x; state.y = door.y; setPos(door.x, door.y, dir);
      if (el) el.classList.remove('walk');
      state.busy = false;
      document.querySelectorAll('.jr-btn').forEach(function (b) { b.disabled = false; });
      if (p.go) {
        setStatus('Arrived at the <b>' + U.esc(p.name) + '</b>. Opening&hellip;');
        MG.flag('journey');
        setTimeout(function () { location.hash = p.go; }, reduced() ? 0 : 350);
      } else {
        setStatus('<b>' + U.esc(p.name) + '</b>: the lab is closed for now. Integrated Science notes and questions are not in the app yet. Try the Library, ICT Room or Exam Hall.');
      }
    }
    if (reduced() || dist < 2) { arrive(); return; }
    if (el) el.classList.add('walk');
    var speed = 60, dur = dist / speed * 1000, t0 = null;
    function step(t) {
      if (!document.getElementById('jr-stu')) { stop(); return; }
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      var lin = k; // constant walking pace looks more natural than easing
      setPos(from.x + dx * lin, from.y + dy * lin, dir);
      if (k < 1) raf = requestAnimationFrame(step); else { raf = 0; arrive(); }
    }
    raf = requestAnimationFrame(step);
  }

  MG.acts['jr-go'] = function (el) {
    var p = PLACES.filter(function (x) { return x.id === el.getAttribute('data-place'); })[0];
    if (p) walkTo(p);
  };
  MG.acts['jr-sky'] = function () {
    var i = SKIES.indexOf(state.sky); state.sky = SKIES[(i + 1) % SKIES.length];
    state.auto = false; paint(true);
  };
  function paint(keepPos) {
    var host = document.getElementById('jr-scene'); if (!host) return;
    host.innerHTML = scene(state.sky);
    setPos(state.x, state.y, state.dir || 1);
    var lab = document.getElementById('jr-skylab'); if (lab) lab.textContent = { dawn: 'Early morning', day: 'Daytime', sunset: 'Evening', night: 'Night' }[state.sky] + (state.auto ? ' (phone clock)' : '');
    bind();
  }
  function bind() {
    document.querySelectorAll('#jr-svg .bld').forEach(function (g) {
      g.addEventListener('click', function () { MG.acts['jr-go']({ getAttribute: function () { return g.getAttribute('data-place'); } }); });
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); g.dispatchEvent(new Event('click')); } });
    });
  }

  MG.route('^/journey$', function () {
    stop();
    MG.setTab('learn'); MG.setTop('Learning journey', '#/');
    state = { x: START.x, y: START.y, dir: 1, busy: false, auto: true, sky: autoSky() };
    var btns = PLACES.map(function (p) {
      return '<button class="row jr-btn" data-act="jr-go" data-place="' + p.id + '"><span class="grow"><b>' + U.esc(p.name) + '</b><span class="meta">' + U.esc(p.sub) + '</span></span><span class="arrow">&rsaquo;</span></button>';
    }).join('');
    MG.show('<div class="col"><div class="card jr-card"><p class="eyebrow">Learning journey</p><h2 style="margin:2px 0 8px">Where do you want to learn today?</h2>' +
      '<div id="jr-scene"></div>' +
      '<p id="jr-status" class="jr-status" aria-live="polite">Tap a building and the student will walk there.</p>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:6px"><span id="jr-skylab" class="small muted"></span><button class="btn alt small" data-act="jr-sky">Change the sky</button></div></div>' +
      '<h2 class="mt">Or choose from the list</h2>' + btns +
      '<p class="small muted mt">The campus is an illustration made for this app. The sky follows the time on your phone.</p></div>');
    paint();
    setPos(state.x, state.y, 1);
  });
  window.addEventListener('hashchange', stop);
})();
