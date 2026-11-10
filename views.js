/* My Grade My Project - views: home, grade, subject, topic hub, notes, flashcards. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util, S = MG.S;

  function gchips(t) { return '<span class="gchips">' + t.grades.map(function (g) { return '<i>G' + g + '</i>'; }).join('') + '</span>'; }
  function topicRow(t) {
    var p = MG.progress(t);
    return '<button class="row" data-go="#/topic/' + t.id + '"><span class="grow"><b>' + U.esc(t.title) + '</b>' +
      '<span class="meta">' + U.esc(t.blurb) + '</span>' + gchips(t) +
      '<span class="bar"><i style="width:' + p.pct + '%"></i></span></span>' +
      '<span class="pill ' + (p.pct >= 75 ? 'good' : '') + '">' + p.pct + '%</span><span class="arrow">&rsaquo;</span></button>';
  }
  function avgPct(list) {
    if (!list.length) return 0;
    return Math.round(list.reduce(function (a, t) { return a + MG.progress(t).pct; }, 0) / list.length);
  }
  function quizCount() { var n = 0; MG.topics.forEach(function (t) { var ts = MG.ts(t.id); if (ts.mcq) n += ts.mcq.n || 0; }); return n; }

  /* ---------- home ---------- */
  MG.views.home = function () {
    MG.setTab('learn'); MG.setTop('My Grade My Project', null);
    var lv = MG.level(S.pts), st = MG.streak();
    var covers = [7, 8, 9].map(function (g) {
      var n = MG.topicsFor(null, g).length;
      return '<button class="cover g' + g + '" data-go="#/grade/' + g + '"><span class="grade-label">JUNIOR SCHOOL</span>' +
        '<span class="num">' + g + '</span><span class="txt"><b>Grade ' + g + '</b><span>' + n + ' topics</span></span><span class="cover-arrow" aria-hidden="true">&#8599;</span></button>';
    }).join('');
    var subs = MG.subjects.map(function (s) {
      var list = MG.topicsFor(s.id), pct = avgPct(list);
      return '<button class="subject" data-go="#/subject/' + s.id + '"><span class="stat-icon" aria-hidden="true">' + s.icon + '</span><h3>' + U.esc(s.name) + '</h3>' +
        '<p class="muted">' + U.esc(s.blurb) + '</p><span class="small muted">' + list.length + ' topics &middot; ' + pct + '% done</span><span class="bar"><i style="width:' + pct + '%"></i></span></button>';
    }).join('');
    MG.show(
      '<section class="welcome-block"><p class="eyebrow">Your learning journey starts here</p>' +
      '<h1>Think clearly.<br>Learn deeply.<br>Create boldly.</h1>' +
      '<p class="welcome-copy">Full notes with diagrams, flashcards and KJSEA-style questions for Social Studies and Pre-Technical Studies, Grades 7 to 9. Then turn what you learn into a project.</p>' +
      '<div class="welcome-actions"><button class="btn" data-go="#/subject/ss">Start learning</button><button class="btn alt" data-go="#/mock">Try a mock paper</button></div></section>' +
      '<div class="quick-stats"><div class="quick-stat"><span class="stat-icon">★</span><div><b>' + S.pts + '</b><small>' + U.esc(lv.name) + ' &middot; points</small></div></div>' +
      '<div class="quick-stat"><span class="stat-icon">✶</span><div><b>' + st + '</b><small>day streak</small></div></div>' +
      '<div class="quick-stat"><span class="stat-icon">✓</span><div><b>' + quizCount() + '</b><small>quizzes taken</small></div></div></div>' +
      '<div class="section-head"><div><p class="eyebrow">Study by grade</p><h2>Choose your grade</h2></div><span class="section-note">Grades 7&ndash;9</span></div>' +
      '<div class="covers">' + covers + '</div>' +
      '<div class="section-head"><div><p class="eyebrow">Or by subject</p><h2>All topics</h2></div></div><div class="subjects">' + subs + '</div>' +
      '<div class="home-lower">' +
      '<button class="feature-card" data-go="#/journey"><span class="feature-symbol">&#9873;</span><div><h3>Learning journey</h3><p class="muted">Walk around the school campus. Tap the Library, ICT Room or Exam Hall and the student walks there.</p><span class="text-link">Walk the campus <span>&rarr;</span></span></div></button>' +
      '<button class="feature-card" data-go="#/mock"><span class="feature-symbol">⏱</span><div><h3>KJSEA-style mock paper</h3><p class="muted">Section A multiple choice and Section B written questions, with a timer and self-marking.</p><span class="text-link">Start a mock <span>&rarr;</span></span></div></button>' +
      '<button class="feature-card" data-go="#/tools"><span class="feature-symbol">⚒</span><div><h3>Interactive tools</h3><p class="muted">Map scale calculator, statement of financial position builder and a tool-matching game.</p><span class="text-link">Open tools <span>&rarr;</span></span></div></button>' +
      '<button class="feature-card" data-go="#/projects"><span class="feature-symbol">⚙</span><div><h3>My Project</h3><p class="muted">Plan, make, test and present a project in six stages. Notes and checklist stay on this phone.</p><span class="text-link">Go to My Project <span>&rarr;</span></span></div></button>' +
      '</div>' +
      '<p class="pilot-note">Content note: all notes and questions are practice material written for this app in the style of KJSEA. They are not taken from KNEC papers. Teachers should check them against the syllabus before use.</p>'
    );
  };

  /* ---------- grade and subject ---------- */
  MG.route('^/$', MG.views.home);
  MG.route('^/grade/([789])$', function (g) {
    g = +g; MG.setTab('learn'); MG.setTop('Grade ' + g, '#/');
    var html = '<div class="col"><p class="muted small">Topics are tagged with the grades they are drawn from. Check the tags against your scheme of work.</p>';
    MG.subjects.forEach(function (s) {
      var list = MG.topicsFor(s.id, g);
      html += '<div class="section-head mt"><h2>' + U.esc(s.name) + '</h2><span class="section-note">' + list.length + ' topics</span></div>' + list.map(topicRow).join('');
    });
    MG.show(html + '</div>');
  });
  var subFilter = 0;
  MG.acts.subfilter = function (el) { subFilter = +el.getAttribute('data-g'); MG.render(); };
  MG.route('^/subject/(ss|pt)$', function (sid) {
    var s = MG.subj(sid); MG.setTab('learn'); MG.setTop(s.name, '#/');
    var chips = [0, 7, 8, 9].map(function (g) {
      return '<button class="btn small ' + (g === subFilter ? '' : 'alt') + '" data-act="subfilter" data-g="' + g + '">' + (g ? 'Grade ' + g : 'All grades') + '</button>';
    }).join('');
    var list = MG.topicsFor(sid, subFilter || 0);
    MG.show('<div class="col"><div class="btns" style="margin-bottom:14px">' + chips + '</div>' +
      (list.length ? list.map(topicRow).join('') : '<p class="muted">No topics for this grade yet.</p>') +
      '<div class="btns mt"><button class="btn alt" data-go="#/subject/' + (sid === 'ss' ? 'pt' : 'ss') + '">Switch to ' + U.esc(MG.subj(sid === 'ss' ? 'pt' : 'ss').name) + '</button></div></div>');
  });

  /* ---------- topic frame, hub ---------- */
  var TABS = [['notes', 'Notes'], ['cards', 'Cards'], ['quiz', 'Quiz'], ['short', 'Short answer'], ['case', 'Case / project']];
  function done(t, tab) {
    var p = MG.progress(t);
    return { notes: p.read, cards: p.known === p.cards, quiz: p.mcq / p.mcqTotal >= 0.75, short: p.sa >= p.saTotal, 'case': p.ca >= p.caTotal }[tab];
  }
  MG.topicFrame = function (t, tab, inner, compact) {
    var p = MG.progress(t);
    var seg = TABS.map(function (x) {
      return '<a href="#/topic/' + t.id + '/' + x[0] + '"' + (x[0] === tab ? ' aria-current="page"' : '') + '>' + x[1] + (done(t, x[0]) ? '<span class="tick" aria-label="done"> ✓</span>' : '') + '</a>';
    }).join('');
    return '<div class="col">' + (compact ? '' : '<div class="thead"><h1>' + U.esc(t.title) + '</h1>' + gchips(t) +
      '<div class="bar"><i style="width:' + p.pct + '%"></i></div><p class="small muted" style="margin:4px 0 0">Topic progress ' + p.pct + '%</p></div>') +
      '<nav class="seg" aria-label="Topic sections">' + seg + '</nav>' + inner + '</div>';
  };

  MG.route('^/topic/([^/]+)$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    MG.setTab('learn'); MG.setTop(t.title, '#/subject/' + t.subject);
    var p = MG.progress(t), figs = t.notes.filter(function (b) { return b.t === 'fig'; }).length, heads = t.notes.filter(function (b) { return b.t === 'h'; }).length;
    var tag = t.cases.map(function (c) { return c.tag; })[0] || 'Case study';
    var card = function (tab, title, sub) { return '<button class="hubcard" data-go="#/topic/' + t.id + '/' + tab + '"><b>' + title + (done(t, tab) ? ' ✓' : '') + '</b><span>' + sub + '</span></button>'; };
    MG.show('<div class="col"><div class="thead"><h1>' + U.esc(t.title) + '</h1><p class="muted">' + U.esc(t.blurb) + '</p>' + gchips(t) +
      '<div class="bar"><i style="width:' + p.pct + '%"></i></div><p class="small muted" style="margin:4px 0 0">Topic progress ' + p.pct + '%</p></div>' +
      '<div class="hub">' +
      card('notes', 'Notes', heads + ' sections &middot; ' + figs + ' diagrams' + (p.read ? ' &middot; read' : '')) +
      card('cards', 'Flashcards', 'Know ' + p.known + ' of ' + p.cards + ' cards') +
      card('quiz', 'Quiz', p.mcqTotal + ' multiple-choice questions' + (MG.ts(t.id).mcq ? ' &middot; best ' + p.mcq + '/' + p.mcqTotal : '')) +
      card('short', 'Short answer', t.short.length + ' written questions &middot; ' + p.sa + ' of ' + p.saTotal + ' marks') +
      card('case', tag, t.cases.length + (t.cases.length > 1 ? ' tasks' : ' task') + ' &middot; ' + p.ca + ' of ' + p.caTotal + ' marks') +
      '</div><p class="small muted mt">Suggested order: read the notes, learn the cards, take the quiz, then try the written questions.</p></div>');
  });

  /* ---------- notes ---------- */
  function block(b) {
    switch (b.t) {
      case 'h': return '<h2>' + U.md(b.x) + '</h2>';
      case 'p': return '<p>' + U.md(b.x) + '</p>';
      case 'ul': return '<ul>' + b.x.map(function (x) { return '<li>' + U.md(x) + '</li>'; }).join('') + '</ul>';
      case 'ol': return '<ol>' + b.x.map(function (x) { return '<li>' + U.md(x) + '</li>'; }).join('') + '</ol>';
      case 'tip': return '<div class="tip">' + U.md(b.x) + '</div>';
      case 'fig': return MG.fig(b.x, b.cap);
      case 'table':
        return '<table><thead><tr>' + b.head.map(function (h) { return '<th>' + U.md(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + U.md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    }
    return '';
  }
  MG.renderNotes = function (t) { return t.notes.map(block).join(''); };
  MG.acts.readnotes = function (el) {
    var t = MG.topic(el.getAttribute('data-id')), ts = MG.ts(t.id);
    if (!ts.read) { ts.read = 1; MG.award(5, 'notes finished'); }
    MG.render();
  };
  MG.route('^/topic/([^/]+)/notes$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    MG.setTab('learn'); MG.setTop(t.title, '#/topic/' + t.id);
    var ts = MG.ts(t.id);
    MG.show(MG.topicFrame(t, 'notes',
      '<article class="notes">' + MG.renderNotes(t) + '</article>' +
      '<div class="btns mt">' + (ts.read ? '<span class="pill good" style="align-self:center">Notes finished ✓</span>' : '<button class="btn" data-act="readnotes" data-id="' + t.id + '">I have read these notes (+5 points)</button>') +
      '<button class="btn alt" data-go="#/topic/' + t.id + '/cards">Next: flashcards</button></div>'));
  });

  /* ---------- flashcards ---------- */
  var deck = null;
  function deckStart(t, all) {
    var known = MG.ts(t.id).known || {}, idx = [];
    t.cards.forEach(function (c, i) { if (all || !known[i]) idx.push(i); });
    deck = { id: t.id, queue: U.shuffle(idx), total: idx.length, flipped: false, all: !!all };
  }
  MG.acts['deck-all'] = function (el) { deckStart(MG.topic(el.getAttribute('data-id')), true); MG.render(); };
  MG.acts['deck-flip'] = function (el) {
    deck.flipped = !deck.flipped; el.classList.toggle('on', deck.flipped);
    var bs = document.querySelectorAll('#deckbtns button'); for (var i = 0; i < bs.length; i++) bs[i].disabled = !deck.flipped;
  };
  MG.acts['deck-got'] = function () {
    var t = MG.topic(deck.id), ts = MG.ts(t.id), i = deck.queue.shift();
    ts.known = ts.known || {};
    var first = !ts.known[i]; ts.known[i] = 1; deck.flipped = false;
    MG.award(first ? 1 : 0, '', true); MG.save(); MG.render();
  };
  MG.acts['deck-again'] = function () { deck.queue.push(deck.queue.shift()); deck.flipped = false; MG.render(); };
  MG.route('^/topic/([^/]+)/cards$', function (id) {
    var t = MG.topic(id); if (!t) return MG.views.home();
    MG.setTab('learn'); MG.setTop(t.title, '#/topic/' + t.id);
    if (!deck || deck.id !== t.id) deckStart(t, false);
    var inner;
    if (!deck.queue.length) {
      var p = MG.progress(t);
      inner = '<div class="card center"><h2>' + (p.known === p.cards ? 'You know all ' + p.cards + ' cards' : 'Deck finished') + '</h2>' +
        '<p class="muted">Cards you tap &ldquo;Got it&rdquo; on are remembered. Come back later to test yourself again.</p>' +
        '<div class="btns"><button class="btn alt" data-act="deck-all" data-id="' + t.id + '">Practise all cards again</button><button class="btn" data-go="#/topic/' + t.id + '/quiz">Next: quiz</button></div></div>';
    } else {
      var c = t.cards[deck.queue[0]], n = deck.total - deck.queue.length + 1;
      inner = '<p class="small muted">Card ' + n + ' of ' + deck.total + ' &middot; tap the card to flip it</p>' +
        '<div class="deck"><button class="flip' + (deck.flipped ? ' on' : '') + '" data-act="deck-flip" aria-label="Flip card"><span class="face front"><span class="term">' + U.esc(c[0]) + '</span><span class="hintx">Say the meaning in your own words, then flip</span></span>' +
        '<span class="face back"><span class="def">' + U.esc(c[1]) + '</span></span></button></div>' +
        '<div class="btns" id="deckbtns"><button class="btn alt" data-act="deck-again"' + (deck.flipped ? '' : ' disabled') + '>Again later</button><button class="btn" data-act="deck-got"' + (deck.flipped ? '' : ' disabled') + '>Got it</button></div>';
    }
    MG.show(MG.topicFrame(t, 'cards', inner), true);
  });
})();
