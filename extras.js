/* My Grade My Project - progress and badges, about, teacher view, startup. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util, S = MG.S;

  /* ---------- progress ---------- */
  MG.route('^/progress$', function () {
    MG.setTab('progress'); MG.setTop('My progress', null);
    var lv = MG.level(S.pts), nextPct = lv.to ? Math.round((S.pts - lv.from) / (lv.to - lv.from) * 100) : 100;
    var quizzes = 0, mastered = 0;
    MG.topics.forEach(function (t) { var ts = MG.ts(t.id); if (ts.mcq) { quizzes += ts.mcq.n || 0; if (ts.mcq.best / t.mcq.length >= 0.75) mastered++; } });
    var badges = MG.badges.map(function (b) {
      var on = !!S.badges[b.id];
      return '<div class="badge' + (on ? '' : ' off') + '"><span class="ic" aria-hidden="true">' + b.ic + '</span><div><b>' + U.esc(b.name) + '</b><span>' + (on ? 'Earned' : U.esc(b.desc)) + '</span></div></div>';
    }).join('');
    var subj = MG.subjects.map(function (s) {
      var rows = MG.topicsFor(s.id).map(function (t) {
        var p = MG.progress(t);
        return '<div style="padding:8px 0;border-bottom:1px solid var(--line)"><div style="display:flex;justify-content:space-between;gap:8px"><a href="#/topic/' + t.id + '" style="text-decoration:none;color:inherit">' + U.esc(t.title) + '</a><b>' + p.pct + '%</b></div><div class="bar"><i style="width:' + p.pct + '%"></i></div></div>';
      }).join('');
      return '<h2 class="mt2">' + U.esc(s.name) + '</h2><div class="card">' + rows + '</div>';
    }).join('');
    var weak = MG.topics.filter(function (t) { var ts = MG.ts(t.id); return ts.mcq && ts.mcq.last / t.mcq.length < 0.6; }).map(function (t) {
      var ts = MG.ts(t.id);
      return '<button class="row" data-go="#/topic/' + t.id + '/quiz"><span class="grow"><b>' + U.esc(t.title) + '</b><span class="meta">Last quiz ' + ts.mcq.last + ' of ' + t.mcq.length + '. Read the notes, then try again.</span></span><span class="pill weak">Practise</span></button>';
    }).join('');
    var mocks = ['ss', 'pt'].map(function (k) {
      return (S.mock[k] || []).slice(-3).reverse().map(function (m) {
        return '<div class="tq"><span class="pill" style="float:right">' + m.pct + '% &middot; ' + MG.band(m.pct)[1] + '</span>' + U.esc(MG.subj(k).name) + ' mock &middot; ' + new Date(m.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short' }) + '</div>';
      }).join('');
    }).join('');
    MG.show('<div class="col"><div class="levelcard"><p class="eyebrow" style="color:#83d5cc">Level ' + lv.n + '</p><div class="lv">' + U.esc(lv.name) + '</div><p style="margin:4px 0 0;color:#c8d9e1">' + S.pts + ' points' + (lv.to ? ' &middot; ' + (lv.to - S.pts) + ' to reach ' + U.esc(lv.nextName) : ' &middot; top level') + '</p><div class="bar"><i style="width:' + nextPct + '%"></i></div></div>' +
      '<div class="stats"><div class="stat"><b>' + quizzes + '</b><span>quizzes taken</span></div><div class="stat"><b>' + mastered + '</b><span>topics at 75%+</span></div><div class="stat"><b>' + MG.streak() + '</b><span>day streak</span></div></div>' +
      (weak ? '<h2>Practise these next</h2>' + weak : '') +
      '<h2 class="mt2">Badges</h2><div class="badges">' + badges + '</div>' + subj +
      (mocks ? '<h2 class="mt2">Recent mock papers</h2><div class="card">' + mocks + '</div>' : '') +
      '<div class="btns mt2"><button class="btn alt" data-go="#/about">About and teacher view</button><button class="btn danger" data-act="reset-progress">Clear my progress</button></div>' +
      '<p class="small muted mt">Progress is saved on this phone only. Clearing it does not delete your projects.</p></div>');
  });
  MG.acts['reset-progress'] = function () {
    if (!window.confirm('Clear all points, badges, scores and streaks on this device? Your projects are kept. This cannot be undone.')) return;
    S.pts = 0; S.days = []; S.badges = {}; S.t = {}; S.mock = { ss: [], pt: [] }; S.flags = {}; S.matchBest = 0;
    MG.save(); MG.render();
  };

  /* ---------- about ---------- */
  MG.route('^/about$', function () {
    MG.setTab('progress'); MG.setTop('About', '#/progress');
    var n = MG.topics.length, mc = 0, sh = 0, cs = 0, cd = 0;
    MG.topics.forEach(function (t) { mc += t.mcq.length; sh += t.short.length; cs += t.cases.length; cd += t.cards.length; });
    MG.show('<div class="col"><div class="card"><h2>My Grade My Project</h2><p>A free revision and project app for Junior School learners in Kenya, Grades 7 to 9. It works on any phone and, once opened, works offline.</p>' +
      '<p class="muted small" style="margin:0">Version 2. ' + n + ' topics &middot; ' + mc + ' multiple-choice questions &middot; ' + sh + ' short-answer questions &middot; ' + cs + ' case studies and projects &middot; ' + cd + ' flashcards.</p></div>' +
      '<div class="card"><h3>Please note</h3><ul style="margin:0;padding-left:20px"><li>Notes and questions are practice material written for this app in the style of KJSEA. They are not taken from KNEC papers.</li>' +
      '<li>Teachers should check the content against the current KICD curriculum designs and the KNEC guidance before using it with learners.</li>' +
      '<li>Written questions are self-marked, so the score depends on honest marking.</li>' +
      '<li>The grade tags on topics show where the content is drawn from and are provisional. Check them against your scheme of work.</li>' +
      '<li>Mock paper levels use the published KJSEA performance bands but are for practice only. They are not official results.</li>' +
      '<li>No account is needed. Points, scores and projects stay on this device and are not sent anywhere.</li></ul></div>' +
      '<div class="card"><h3>Install on your phone</h3><p class="small muted" style="margin:0">In Chrome, open the menu (three dots) and choose &ldquo;Install app&rdquo; or &ldquo;Add to Home screen&rdquo;. It then opens like a normal app.</p></div>' +
      '<button class="btn alt block" data-go="#/teacher">Teacher view: all questions and answers</button></div>');
  });

  /* ---------- teacher view ---------- */
  var tSubj = 'ss';
  MG.acts['t-subj'] = function (el) { tSubj = el.getAttribute('data-s'); MG.render(); };
  MG.acts['t-print'] = function () { window.print(); };
  MG.route('^/teacher$', function () {
    MG.setTab('progress'); MG.setTop('Teacher view', '#/about');
    var chips = MG.subjects.map(function (s) { return '<button class="btn small ' + (s.id === tSubj ? '' : 'alt') + '" data-act="t-subj" data-s="' + s.id + '">' + U.esc(s.name) + '</button>'; }).join('');
    var body = '';
    MG.topicsFor(tSubj).forEach(function (t) {
      body += '<div class="card"><h2>' + U.esc(t.title) + ' <span class="muted small">Grades ' + t.grades.join(', ') + '</span></h2><h3>Multiple choice</h3>';
      t.mcq.forEach(function (q, n) {
        body += '<div class="tq"><b>' + (n + 1) + '. ' + U.md(q.q) + '</b>' + (q.fig ? ' <span class="muted small">[diagram: ' + U.esc(q.fig) + ']</span>' : '') + '<br>' +
          q.o.map(function (o, i) { return 'ABCD'[i] + '. ' + U.esc(o); }).join('<br>') + '<div class="ans">Answer: ' + 'ABCD'[q.a] + '. ' + U.esc(q.o[q.a]) + '</div><div class="small muted">' + U.md(q.e) + '</div></div>';
      });
      body += '<h3 class="mt">Short answer</h3>';
      t.short.forEach(function (q, n) {
        body += '<div class="tq"><b>' + (n + 1) + '. ' + U.md(q.q) + ' (' + q.marks + ' marks)</b><ul class="small" style="margin:4px 0 0;padding-left:20px">' + q.pts.map(function (p) { return '<li>' + U.md(typeof p === 'string' ? p : p.t + ' [' + p.m + ']') + '</li>'; }).join('') + '</ul></div>';
      });
      t.cases.forEach(function (c) {
        body += '<h3 class="mt">' + U.esc(c.tag) + ': ' + U.esc(c.title) + '</h3><p class="small">' + U.md(c.scenario) + '</p>';
        c.parts.forEach(function (q) {
          body += '<div class="tq"><b>' + U.md(q.q) + ' (' + q.marks + ' marks)</b><ul class="small" style="margin:4px 0 0;padding-left:20px">' + q.pts.map(function (p) { return '<li>' + U.md(typeof p === 'string' ? p : p.t + ' [' + p.m + ']') + '</li>'; }).join('') + '</ul></div>';
        });
      });
      body += '</div>';
    });
    MG.show('<div class="col"><div class="btns noprint" style="margin-bottom:12px">' + chips + '<button class="btn alt small" data-act="t-print">Print</button></div>' + body + '</div>');
  });

  /* ---------- start ---------- */
  MG.boot();
})();
