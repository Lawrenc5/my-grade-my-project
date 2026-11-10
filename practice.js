/* My Grade My Project - practice: topic quiz, self-marked written questions, KJSEA-style mock paper. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util, S = MG.S;
  var LETTERS = ['A', 'B', 'C', 'D'];

  function optList(q) { return U.shuffle(q.o.map(function (x, i) { return { text: x, ok: i === q.a }; })); }

  /* ================= topic quiz (multiple choice) ================= */
  var Q = null;
  function quizStart(t) {
    Q = { id: t.id, items: U.shuffle(t.mcq.map(function (q) { return { q: q.q, e: q.e, fig: q.fig, opts: optList(q) }; })), i: 0, score: 0, picked: null, missed: [] };
  }
  function quizRender(t) {
    MG.setTab('learn'); MG.setTop(t.title, '#/topic/' + t.id);
    var it = Q.items[Q.i], n = Q.items.length, last = Q.i + 1 >= n;
    var opts = it.opts.map(function (o, i) {
      var cls = 'opt';
      if (Q.picked !== null) { if (o.ok) cls += ' right'; else if (i === Q.picked) cls += ' wrong'; }
      return '<button class="' + cls + '" data-act="q-pick" data-i="' + i + '"' + (Q.picked !== null ? ' disabled' : '') + '><span class="l">' + LETTERS[i] + '</span><span>' + U.esc(o.text) + '</span></button>';
    }).join('');
    var fb = '';
    if (Q.picked !== null) {
      var good = it.opts[Q.picked].ok;
      fb = '<div class="explain" role="status"><b>' + (good ? 'Correct. ' : 'Not quite. ') + '</b>' + U.md(it.e) + '</div><button class="btn block" data-act="q-next">' + (last ? 'See my results' : 'Next question') + '</button>';
    }
    MG.show(MG.topicFrame(t, 'quiz',
      '<div class="progressbar"><i style="width:' + Math.round(Q.i / n * 100) + '%"></i></div><p class="small muted">Question ' + (Q.i + 1) + ' of ' + n + ' &middot; ' + Q.score + ' correct</p>' +
      MG.fig(it.fig, '', 'inq') + '<div class="qtext">' + U.md(it.q) + '</div>' + opts + fb, true), Q.picked !== null);
    if (Q.picked !== null) { var ex = document.querySelector('.explain'); if (ex && ex.scrollIntoView) ex.scrollIntoView({ block: 'nearest' }); }
  }
  function quizFinish(t) {
    var n = Q.items.length, ts = MG.ts(t.id), prev = ts.mcq ? ts.mcq.best : 0;
    var gain = Math.max(0, Q.score - prev);
    ts.mcq = { best: Math.max(prev, Q.score), last: Q.score, n: (ts.mcq ? ts.mcq.n : 0) + 1, total: n };
    MG.award(gain * 10, 'quiz', gain === 0);
    var pct = Math.round(Q.score / n * 100);
    var msg = pct >= 88 ? 'Excellent. You know this topic well.' : pct >= 63 ? 'Good work. Review the ones you missed.' : 'Keep going. Read the notes again, then retry.';
    var missed = Q.missed.map(function (m) {
      var right = m.opts.filter(function (o) { return o.ok; })[0].text;
      return '<div class="card review"><b>' + U.md(m.q) + '</b><p class="small" style="margin:6px 0 2px"><b>Answer:</b> ' + U.esc(right) + '</p><p class="small muted" style="margin:0">' + U.md(m.e) + '</p></div>';
    }).join('');
    MG.setTop(t.title, '#/topic/' + t.id);
    MG.show(MG.topicFrame(t, 'quiz',
      '<div class="card"><div class="score">' + Q.score + '/' + n + '</div><p class="center" style="margin:8px 0 0"><b>' + pct + '% correct</b></p><p class="muted center">' + msg + '</p>' +
      '<p class="small muted center" style="margin:0">' + (gain ? 'You earned ' + gain * 10 + ' points for beating your best score.' : 'Points are given when you beat your best score.') + '</p></div>' +
      '<div class="btns"><button class="btn" data-act="q-retry" data-id="' + t.id + '">Try again</button><button class="btn alt" data-go="#/topic/' + t.id + '/short">Next: written questions</button></div>' +
      (missed ? '<h2 class="mt2">Review what you missed</h2>' + missed : '<p class="center mt"><b>You answered every question correctly.</b></p>'), true));
    Q.finished = true;
  }
  MG.acts['q-pick'] = function (el) {
    if (!Q || Q.picked !== null) return;
    var i = +el.getAttribute('data-i'); Q.picked = i;
    if (Q.items[Q.i].opts[i].ok) Q.score++; else Q.missed.push(Q.items[Q.i]);
    quizRender(MG.topic(Q.id));
  };
  MG.acts['q-next'] = function () {
    var t = MG.topic(Q.id);
    if (Q.i + 1 >= Q.items.length) quizFinish(t); else { Q.i++; Q.picked = null; quizRender(t); }
  };
  MG.acts['q-retry'] = function (el) { var t = MG.topic(el.getAttribute('data-id')); quizStart(t); quizRender(t); };
  MG.route('^/topic/([^/]+)/quiz$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    if (!Q || Q.id !== id || Q.finished) quizStart(t);
    quizRender(t);
  });

  /* ================= structured runner (write, reveal scheme, self-mark) ================= */
  var SR = null;
  function ptsOf(it) { return it.pts.map(function (p) { return typeof p === 'string' ? { t: p, m: 1 } : p; }); }
  function earnedOf(it, checks) {
    var s = 0; ptsOf(it).forEach(function (p, i) { if (checks[i]) s += p.m; });
    return Math.min(s, it.marks);
  }
  function srStart(cfg) {
    SR = { cfg: cfg, i: 0, shown: cfg.mode === 'mark', checks: {}, answers: cfg.answers || {}, earned: {} };
    window.scrollTo(0, 0);
    srRender();
  }
  function srRender() {
    var cfg = SR.cfg, it = cfg.items[SR.i], n = cfg.items.length, h = '';
    h += '<div class="progressbar"><i style="width:' + Math.round(SR.i / n * 100) + '%"></i></div>';
    h += '<p class="small muted">' + U.esc(it.label || (cfg.label || 'Question') + ' ' + (SR.i + 1) + ' of ' + n) + '</p>';
    if (it.scen) h += '<div class="scen"><b class="tag' + (it.tag === 'Project' ? ' project' : '') + '">' + U.esc(it.tag || 'Case study') + '</b>' + (it.stitle ? ' <b>' + U.esc(it.stitle) + '</b>' : '') + '<br>' + U.md(it.scen) + '</div>';
    h += MG.fig(it.fig, '', 'inq');
    h += '<div class="qtext"><span class="pill qmarks">' + it.marks + (it.marks === 1 ? ' mark' : ' marks') + '</span>' + U.md(it.q) + '</div>';
    var ans = SR.answers[it.key] || '';
    if (!SR.shown) {
      h += '<label class="sr" for="ans">Your answer</label><textarea class="ans" id="ans" data-in="sr-ans" placeholder="Write your answer here, as you would on the paper. Then check it against the marking scheme."></textarea>' +
        '<div class="btns mt"><button class="btn" data-act="sr-reveal">Show marking scheme</button></div>';
    } else {
      var pp = ptsOf(it), allOne = pp.every(function (p) { return p.m === 1; });
      var hint = allOne ? (pp.length > it.marks ? 'Any ' + it.marks + ' correct points earn full marks. Tick each point you made.' : 'Tick each point you made.') : 'Marks are shown against each point. You cannot score more than ' + it.marks + '.';
      if (ans) h += '<div class="yours"><b>Your answer</b><br>' + U.esc(ans) + '</div>';
      h += '<div class="scheme"><h3>Marking scheme</h3><p class="small muted">' + hint + ' Mark yourself honestly. Only you can see this.</p>' +
        pp.map(function (p, i) { return '<label class="chk"><input type="checkbox" data-in="sr-chk" data-i="' + i + '"' + (SR.checks[i] ? ' checked' : '') + '><span>' + U.md(p.t) + (p.m > 1 ? ' <b>(' + p.m + ' marks)</b>' : '') + '</span></label>'; }).join('') +
        '<p class="mt" style="margin-bottom:0">Marks earned: <span class="earned" id="srscore">' + earnedOf(it, SR.checks) + '</span> of ' + it.marks + '</p></div>' +
        '<div class="btns"><button class="btn" data-act="sr-next">' + (SR.i + 1 >= n ? 'Finish' : 'Save and continue') + '</button></div>';
    }
    MG.show(cfg.wrap(h), SR.shown ? false : true);
    if (!SR.shown) { var ta = document.getElementById('ans'); if (ta) ta.value = ans; }
  }
  MG.inputs['sr-ans'] = function (el) { var it = SR.cfg.items[SR.i]; SR.answers[it.key] = el.value; };
  MG.inputs['sr-chk'] = function (el) {
    var it = SR.cfg.items[SR.i]; SR.checks[+el.getAttribute('data-i')] = el.checked;
    var s = document.getElementById('srscore'); if (s) s.textContent = earnedOf(it, SR.checks);
  };
  MG.acts['sr-reveal'] = function () { SR.shown = true; SR.checks = {}; srRender(); };
  MG.acts['sr-next'] = function () {
    var cfg = SR.cfg, it = cfg.items[SR.i], e = earnedOf(it, SR.checks);
    SR.earned[it.key] = e;
    if (cfg.save) cfg.save(it.key, e);
    SR.i++; SR.checks = {}; SR.shown = cfg.mode === 'mark';
    if (SR.i >= cfg.items.length) srFinish(); else srRender();
  };
  function srFinish() {
    var cfg = SR.cfg, tot = 0, max = 0;
    cfg.items.forEach(function (it) { tot += SR.earned[it.key] || 0; max += it.marks; });
    if (cfg.onFinish) return cfg.onFinish(SR, tot, max);
    var rows = cfg.items.map(function (it) {
      var e = SR.earned[it.key] || 0;
      return '<div class="tq"><span class="pill ' + (e >= it.marks ? 'good' : e === 0 ? 'weak' : '') + '" style="float:right">' + e + '/' + it.marks + '</span>' + U.md(it.q.length > 110 ? it.q.slice(0, 107) + '...' : it.q) + '</div>';
    }).join('');
    MG.show(cfg.wrap('<div class="card center"><div class="score">' + tot + '/' + max + '</div><p class="muted" style="margin:8px 0 0">marks earned</p></div><div class="card">' + rows + '</div>' + (cfg.after || '')));
  }
  function saveMarks(t, bucket, key, e) {
    var ts = MG.ts(t.id); ts[bucket] = ts[bucket] || {};
    var prev = ts[bucket][key] || 0;
    if (e > prev) { ts[bucket][key] = e; MG.award((e - prev) * 5, 'written answers'); } else MG.award(0, '', true);
  }

  /* ---------- short answer tab ---------- */
  MG.route('^/topic/([^/]+)/short$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    MG.setTab('learn'); MG.setTop(t.title, '#/topic/' + t.id);
    var p = MG.progress(t), list = t.short.map(function (q, i) {
      var e = (MG.ts(t.id).sa || {})['s' + i];
      return '<div class="tq"><span class="pill ' + (e >= q.marks ? 'good' : '') + '" style="float:right">' + (e || 0) + '/' + q.marks + '</span>' + U.md(q.q) + '</div>';
    }).join('');
    MG.show(MG.topicFrame(t, 'short',
      '<div class="card"><h2>Short answer practice</h2><p class="muted">' + t.short.length + ' written questions worth ' + p.saTotal + ' marks, in the style of Section B. Write your answer first, then reveal the marking scheme and mark yourself. You have earned ' + p.sa + ' of ' + p.saTotal + ' marks so far.</p>' + list + '</div>' +
      '<button class="btn block" data-act="short-start" data-id="' + t.id + '">' + (p.sa ? 'Practise again' : 'Start') + '</button>', true));
  });
  MG.acts['short-start'] = function (el) {
    var t = MG.topic(el.getAttribute('data-id'));
    srStart({
      items: t.short.map(function (q, i) { return { key: 's' + i, q: q.q, marks: q.marks, pts: q.pts, fig: q.fig }; }),
      mode: 'learn', label: 'Question',
      wrap: function (h) { return MG.topicFrame(t, 'short', h, true); },
      save: function (k, e) { saveMarks(t, 'sa', k, e); },
      after: '<div class="btns"><button class="btn alt" data-act="short-start" data-id="' + t.id + '">Practise again</button><button class="btn" data-go="#/topic/' + t.id + '/case">Next: ' + U.esc(t.cases[0].tag.toLowerCase()) + '</button></div>'
    });
  };

  /* ---------- case study / project tab ---------- */
  MG.route('^/topic/([^/]+)/case$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    MG.setTab('learn'); MG.setTop(t.title, '#/topic/' + t.id);
    var ca = MG.ts(t.id).ca || {};
    var h = t.cases.map(function (c, ci) {
      var tot = 0, got = 0; c.parts.forEach(function (pt, j) { tot += pt.marks; got += ca['c' + ci + 'p' + j] || 0; });
      return '<div class="card"><div class="scen" style="margin-bottom:10px"><b class="tag' + (c.tag === 'Project' ? ' project' : '') + '">' + U.esc(c.tag) + '</b> <b>' + U.esc(c.title) + '</b><br>' + U.md(c.scenario) + '</div>' +
        '<p class="muted small">' + c.parts.length + ' linked questions &middot; ' + tot + ' marks &middot; you have earned ' + got + '.</p>' +
        '<button class="btn block" data-act="case-start" data-id="' + t.id + '" data-i="' + ci + '">' + (got ? 'Practise again' : 'Start') + '</button></div>';
    }).join('');
    MG.show(MG.topicFrame(t, 'case', h, true));
  });
  MG.acts['case-start'] = function (el) {
    var t = MG.topic(el.getAttribute('data-id')), ci = +el.getAttribute('data-i'), c = t.cases[ci];
    srStart({
      items: c.parts.map(function (pt, j) { return { key: 'c' + ci + 'p' + j, q: pt.q, marks: pt.marks, pts: pt.pts, fig: pt.fig || c.fig, scen: c.scenario, tag: c.tag, stitle: c.title }; }),
      mode: 'learn', label: 'Part',
      wrap: function (h) { return MG.topicFrame(t, 'case', h, true); },
      save: function (k, e) { saveMarks(t, 'ca', k, e); },
      after: '<div class="btns"><button class="btn alt" data-act="case-start" data-id="' + t.id + '" data-i="' + ci + '">Practise again</button><button class="btn" data-go="#/topic/' + t.id + '">Back to topic</button></div>'
    });
  };

  /* ================= KJSEA-style mock paper ================= */
  var CFG = { ss: { a: 20, b: 40 }, pt: { a: 30, b: 30 } };
  var BANDS = [[90, 'EE1', 8, 'Exceeding expectations'], [75, 'EE2', 7, 'Exceeding expectations'], [58, 'ME1', 6, 'Meeting expectations'], [41, 'ME2', 5, 'Meeting expectations'],
    [31, 'AE1', 4, 'Approaching expectations'], [21, 'AE2', 3, 'Approaching expectations'], [11, 'BE1', 2, 'Below expectations'], [1, 'BE2', 1, 'Below expectations'], [0, 'Below BE2', 0, 'Below expectations']];
  MG.band = function (pct) { pct = Math.round(pct); for (var i = 0; i < BANDS.length; i++) if (pct >= BANDS[i][0]) return BANDS[i]; return BANDS[BANDS.length - 1]; };
  var MK = null, timer = null;

  function mockBuild(sid) {
    var cfg = CFG[sid], topics = MG.topicsFor(sid);
    var lists = topics.map(function (t) {
      return U.shuffle(t.mcq.map(function (q) { return { q: q.q, e: q.e, fig: q.fig, topic: t.title, opts: optList(q) }; }));
    });
    var a = [], k = 0;
    while (a.length < cfg.a && k < 2000) { var l = lists[k % lists.length]; if (l.length) a.push(l.shift()); k++; }
    a = U.shuffle(a);
    var pool = [];
    topics.forEach(function (t) {
      t.short.forEach(function (q) { pool.push({ topic: t.title, marks: q.marks, parts: [{ q: q.q, marks: q.marks, pts: q.pts, fig: q.fig }] }); });
      t.cases.forEach(function (c) { var m = 0; c.parts.forEach(function (p) { m += p.marks; }); pool.push({ topic: t.title, marks: m, c: c, parts: c.parts }); });
    });
    pool = U.shuffle(pool);
    var picked = [], total = 0;
    pool.forEach(function (g) { if (total < cfg.b && total + g.marks <= cfg.b + 3) { picked.push(g); total += g.marks; } });
    picked.sort(function (x, y) { return (x.c ? 1 : 0) - (y.c ? 1 : 0); });
    var b = [], qn = a.length;
    picked.forEach(function (g) {
      qn++;
      g.parts.forEach(function (p, j) {
        b.push({ key: 'b' + b.length, q: p.q, marks: p.marks, pts: p.pts, fig: p.fig || (g.c && g.c.fig), scen: g.c ? g.c.scenario : null, tag: g.c ? g.c.tag : null, stitle: g.c ? g.c.title : null,
          label: 'Question ' + qn + (g.parts.length > 1 ? ' (part ' + (j + 1) + ' of ' + g.parts.length + ')' : '') });
      });
    });
    return { sid: sid, a: a, b: b, bMarks: total, ansA: {}, ai: 0, phase: 'A', bi: 0, ansB: {}, limit: (cfg.a + total) * 60, startAt: Date.now(), timed: true };
  }
  function fmt(sec) { var m = Math.floor(sec / 60), s = sec % 60; return U.pad(m) + ':' + U.pad(s); }
  function tick() {
    if (!MK || MK.phase === 'mark' || MK.phase === 'done' || location.hash.indexOf('#/mock/' + MK.sid + '/run') !== 0) { clearInterval(timer); timer = null; return; }
    var c = document.getElementById('chip'); if (!c) return;
    if (!MK.timed) { c.textContent = 'No timer'; return; }
    var left = MK.limit - Math.floor((Date.now() - MK.startAt) / 1000);
    c.className = 'chip timer' + (left < 300 ? ' low' : '');
    c.textContent = left > 0 ? fmt(left) : 'Time is up';
  }
  function timerStart() { clearInterval(timer); timer = setInterval(tick, 1000); tick(); }

  MG.route('^/mock$', function () {
    MG.setTab('mock'); MG.setTop('KJSEA mock paper', '#/');
    var cards = MG.subjects.map(function (s) {
      var h = S.mock[s.id] || [], best = h.reduce(function (m, x) { return Math.max(m, x.pct); }, 0);
      return '<button class="row" data-go="#/mock/' + s.id + '"><span class="grow"><b>' + U.esc(s.name) + '</b><span class="meta">' + CFG[s.id].a + ' multiple-choice questions and about ' + CFG[s.id].b + ' marks of written questions' + (h.length ? ' &middot; best ' + best + '%' : '') + '</span></span><span class="arrow">&rsaquo;</span></button>';
    }).join('');
    MG.show('<div class="col"><div class="card"><h2>Practise like the real paper</h2><p class="muted">KJSEA papers have Section A (multiple choice) and Section B (written questions with marks). Each mock draws questions from all topics at random, so every attempt is different.</p>' +
      '<p class="small muted" style="margin:0">These mocks are shorter than the real papers, and you mark Section B yourself. Treat the result as practice, not a prediction.</p></div>' + cards + '</div>');
  });
  MG.route('^/mock/(ss|pt)$', function (sid) {
    var s = MG.subj(sid), cfg = CFG[sid]; MG.setTab('mock'); MG.setTop(s.name + ' mock', '#/mock');
    var h = (S.mock[sid] || []).slice(-5).reverse().map(function (m) {
      var b = MG.band(m.pct);
      return '<div class="tq"><span class="pill ' + (m.pct >= 58 ? 'good' : '') + '" style="float:right">' + m.pct + '% &middot; ' + b[1] + '</span>' + new Date(m.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short' }) + ' &middot; A ' + m.a + '/' + m.aTot + ', B ' + m.b + '/' + m.bTot + '</div>';
    }).join('');
    MG.show('<div class="col"><div class="card"><h2>' + U.esc(s.name) + ' mock paper</h2>' +
      '<ul style="padding-left:20px;margin:0 0 12px"><li><b>Section A:</b> ' + cfg.a + ' multiple-choice questions, 1 mark each.</li><li><b>Section B:</b> written questions worth about ' + cfg.b + ' marks, with scenarios, maps and diagrams where needed.</li><li><b>Marking:</b> after Section B you see the marking scheme and mark yourself.</li></ul>' +
      '<p class="small muted">Suggested time: 1 minute for each Section A question and 1 minute for each Section B mark (about ' + (cfg.a + cfg.b) + ' minutes). This is a practice guide, not the official time.</p>' +
      '<label class="chk" style="border:0"><input type="checkbox" id="timedchk" checked><span>Use a countdown timer</span></label>' +
      '<button class="btn block mt" data-act="mock-start" data-s="' + sid + '">Start mock paper</button></div>' +
      (h ? '<h2 class="mt2">Your last attempts</h2><div class="card">' + h + '</div>' : '') + '</div>');
  });
  MG.acts['mock-start'] = function (el) {
    var sid = el.getAttribute('data-s'), tc = document.getElementById('timedchk');
    MK = mockBuild(sid); MK.timed = tc ? tc.checked : true;
    location.hash = '#/mock/' + sid + '/run';
  };

  function mockNav(total, cur, answered, act) {
    var d = ''; for (var i = 0; i < total; i++) d += '<button class="' + (i === cur ? 'cur' : answered(i) ? 'done' : '') + '" data-act="' + act + '" data-i="' + i + '" aria-label="Go to question ' + (i + 1) + '">' + (i + 1) + '</button>';
    return '<div class="navdots">' + d + '</div>';
  }
  function mockA() {
    var it = MK.a[MK.ai], n = MK.a.length;
    var opts = it.opts.map(function (o, i) {
      return '<button class="opt' + (MK.ansA[MK.ai] === i ? ' sel' : '') + '" data-act="mk-pick" data-i="' + i + '"><span class="l">' + LETTERS[i] + '</span><span>' + U.esc(o.text) + '</span></button>';
    }).join('');
    var answered = Object.keys(MK.ansA).length;
    MG.setTop('Section A', '#/mock/' + MK.sid, MK.timed ? '' : 'No timer');
    MG.show('<div class="col"><p class="eyebrow">Section A &middot; multiple choice</p><div class="progressbar"><i style="width:' + Math.round(answered / n * 100) + '%"></i></div>' +
      '<p class="small muted">Question ' + (MK.ai + 1) + ' of ' + n + ' &middot; ' + answered + ' answered</p>' + MG.fig(it.fig, '', 'inq') +
      '<div class="qtext">' + U.md(it.q) + '</div>' + opts +
      '<div class="btns"><button class="btn alt" data-act="mk-prev"' + (MK.ai === 0 ? ' disabled' : '') + '>Previous</button>' +
      (MK.ai + 1 < n ? '<button class="btn" data-act="mk-next">Next</button>' : '<button class="btn" data-act="mk-toB">Finish Section A</button>') + '</div>' +
      mockNav(n, MK.ai, function (i) { return MK.ansA[i] !== undefined; }, 'mk-goA') +
      (MK.ai + 1 < n ? '<button class="text-link" data-act="mk-toB">Skip to Section B</button>' : '') + '</div>', true);
    timerStart();
  }
  MG.acts['mk-pick'] = function (el) { MK.ansA[MK.ai] = +el.getAttribute('data-i'); mockA(); };
  MG.acts['mk-prev'] = function () { if (MK.ai > 0) { MK.ai--; mockA(); } };
  MG.acts['mk-next'] = function () { if (MK.ai + 1 < MK.a.length) { MK.ai++; mockA(); } };
  MG.acts['mk-goA'] = function (el) { MK.ai = +el.getAttribute('data-i'); mockA(); };
  MG.acts['mk-toB'] = function () {
    var left = MK.a.length - Object.keys(MK.ansA).length;
    if (left > 0 && !window.confirm('You have ' + left + ' unanswered question' + (left > 1 ? 's' : '') + ' in Section A. Move on to Section B anyway?')) return;
    MK.phase = 'B'; MK.bi = 0; mockB();
  };

  function mockB() {
    var it = MK.b[MK.bi], n = MK.b.length;
    var answered = function (i) { return !!(MK.ansB[MK.b[i].key] || '').trim(); };
    MG.setTop('Section B', '#/mock/' + MK.sid, MK.timed ? '' : 'No timer');
    MG.show('<div class="col"><p class="eyebrow">Section B &middot; written questions</p><div class="progressbar"><i style="width:' + Math.round(MK.bi / n * 100) + '%"></i></div>' +
      '<p class="small muted">' + U.esc(it.label) + ' &middot; item ' + (MK.bi + 1) + ' of ' + n + '</p>' +
      (it.scen ? '<div class="scen"><b class="tag' + (it.tag === 'Project' ? ' project' : '') + '">' + U.esc(it.tag) + '</b> <b>' + U.esc(it.stitle) + '</b><br>' + U.md(it.scen) + '</div>' : '') +
      MG.fig(it.fig, '', 'inq') + '<div class="qtext"><span class="pill qmarks">' + it.marks + (it.marks === 1 ? ' mark' : ' marks') + '</span>' + U.md(it.q) + '</div>' +
      '<label class="sr" for="mans">Your answer</label><textarea class="ans" id="mans" data-in="mk-ans" placeholder="Write your answer. You will see the marking scheme after the last question."></textarea>' +
      '<div class="btns mt"><button class="btn alt" data-act="mk-bprev"' + (MK.bi === 0 ? ' disabled' : '') + '>Previous</button>' +
      (MK.bi + 1 < n ? '<button class="btn" data-act="mk-bnext">Next</button>' : '<button class="btn" data-act="mk-mark">Finish and mark my paper</button>') + '</div>' +
      mockNav(n, MK.bi, answered, 'mk-goB') + '</div>');
    var ta = document.getElementById('mans'); if (ta) ta.value = MK.ansB[it.key] || '';
    timerStart();
  }
  MG.inputs['mk-ans'] = function (el) { MK.ansB[MK.b[MK.bi].key] = el.value; };
  MG.acts['mk-bprev'] = function () { if (MK.bi > 0) { MK.bi--; mockB(); } };
  MG.acts['mk-bnext'] = function () { if (MK.bi + 1 < MK.b.length) { MK.bi++; mockB(); } };
  MG.acts['mk-goB'] = function (el) { MK.bi = +el.getAttribute('data-i'); mockB(); };
  MG.acts['mk-mark'] = function () {
    MK.phase = 'mark';
    MG.setTop('Mark your paper', '#/mock/' + MK.sid, 'Section B');
    srStart({
      items: MK.b, mode: 'mark', answers: MK.ansB, label: 'Marking',
      wrap: function (h) { return '<div class="col">' + h + '</div>'; },
      onFinish: mockResults
    });
  };

  function mockResults(sr, bEarned, bMax) {
    MK.phase = 'done'; clearInterval(timer); timer = null;
    var a = MK.a, ok = 0, missed = [], weak = {};
    a.forEach(function (it, i) {
      var pk = MK.ansA[i];
      if (pk !== undefined && it.opts[pk].ok) ok++; else { missed.push({ it: it, pk: pk }); weak[it.topic] = (weak[it.topic] || 0) + 1; }
    });
    var total = ok + bEarned, max = a.length + bMax, pct = Math.round(total / max * 100), band = MG.band(pct);
    S.mock[MK.sid] = (S.mock[MK.sid] || []).concat([{ pct: pct, date: Date.now(), a: ok, aTot: a.length, b: bEarned, bTot: bMax }]).slice(-10);
    MG.award(20 + (pct >= 75 ? 10 : 0), 'mock paper finished');
    var weakList = Object.keys(weak).sort(function (x, y) { return weak[y] - weak[x]; }).slice(0, 3);
    var rev = missed.map(function (m) {
      var right = m.it.opts.filter(function (o) { return o.ok; })[0].text;
      return '<div class="card review"><b>' + U.md(m.it.q) + '</b><p class="small" style="margin:6px 0 2px"><b>Your answer:</b> ' + (m.pk === undefined ? 'not answered' : U.esc(m.it.opts[m.pk].text)) + '<br><b>Correct answer:</b> ' + U.esc(right) + '</p><p class="small muted" style="margin:0">' + U.md(m.it.e) + '</p></div>';
    }).join('');
    MG.setTop('Mock results', '#/mock');
    MG.show('<div class="col"><div class="card center"><div class="score">' + pct + '%</div><p class="level-big" style="margin:8px 0 2px">' + band[1] + '</p><p class="muted" style="margin:0">' + band[3] + '</p></div>' +
      '<div class="stats"><div class="stat"><b>' + ok + '/' + a.length + '</b><span>Section A</span></div><div class="stat"><b>' + bEarned + '/' + bMax + '</b><span>Section B</span></div><div class="stat"><b>' + total + '/' + max + '</b><span>Total marks</span></div></div>' +
      '<p class="pilot-note">The level uses the published KJSEA performance bands (for example EE2 is 75 to 89 percent). Because this paper is shorter than the real one and you marked Section B yourself, treat it as practice only. It is not an official result.</p>' +
      (weakList.length ? '<div class="card mt"><h3>Revise these first</h3><p class="muted small" style="margin:0">Most Section A mistakes came from: ' + weakList.map(U.esc).join('; ') + '.</p></div>' : '') +
      '<div class="btns mt"><button class="btn" data-act="mock-start" data-s="' + MK.sid + '">Try another mock</button><button class="btn alt" data-go="#/progress">See my progress</button></div>' +
      (rev ? '<h2 class="mt2">Section A: review your mistakes</h2>' + rev : '') + '</div>');
  }

  MG.route('^/mock/(ss|pt)/run$', function (sid) {
    MG.setTab('mock');
    if (!MK || MK.sid !== sid || MK.phase === 'done') { location.hash = '#/mock/' + sid; return; }
    if (MK.phase === 'A') mockA(); else if (MK.phase === 'B') mockB(); else { MG.acts['mk-mark'](); }
  });
})();
