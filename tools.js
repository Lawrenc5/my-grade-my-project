/* My Grade My Project - interactive tools: map scale and density, statement of financial position builder, tool match. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util, S = MG.S;

  function toolDone(name, pts) {
    if (!S.flags[name]) { MG.flag(name); MG.award(pts, 'tool used'); }
  }

  /* ---------- hub ---------- */
  MG.route('^/tools$', function () {
    MG.setTab('tools'); MG.setTop('Interactive tools', '#/');
    var tick = function (f) { return S.flags[f] ? '<span class="pill good">Used ✓</span>' : '<span class="pill">New</span>'; };
    var hasTools = (window.TOOLS || []).length >= 4;
    MG.show('<div class="col"><p class="muted">Practise skills that come up again and again in KJSEA. Each tool gives points the first time you use it.</p>' +
      '<button class="row" data-go="#/tools/scale"><span class="grow"><b>Map scale and density calculator</b><span class="meta">Social Studies: change map distance to ground distance, and find population density, with the steps shown.</span></span>' + tick('scale') + '<span class="arrow">&rsaquo;</span></button>' +
      '<button class="row" data-go="#/tools/sofp"><span class="grow"><b>Statement of financial position builder</b><span class="meta">Pre-Technical: sort assets, liabilities and capital for a random business, then check that it balances.</span></span>' + tick('sofp') + '<span class="arrow">&rsaquo;</span></button>' +
      (hasTools ? '<button class="row" data-go="#/tools/match"><span class="grow"><b>Tool match game</b><span class="meta">Pre-Technical: name each workshop tool and say what it is used for. 10 rounds.' + (S.matchBest ? ' Best: ' + S.matchBest + '/10.' : '') + '</span></span>' + tick('match') + '<span class="arrow">&rsaquo;</span></button>' : '') + '</div>');
  });

  /* ---------- map scale and density ---------- */
  var SC = { mode: 'm2g', val: '', scale: '2', pop: '', area: '' };
  function scaleResult() {
    var v = parseFloat(SC.val), s = parseFloat(SC.scale);
    if (!(v > 0) || !(s > 0)) return '<p class="muted small" style="margin:0">Type a distance and a scale greater than zero to see the answer.</p>';
    if (SC.mode === 'm2g') {
      var g = v * s; toolDone('scale', 5);
      return '<div class="result"><div class="big">' + U.num(g) + ' km</div><p class="small" style="margin:4px 0 0"><b>Ground distance</b></p><ol class="steps"><li>The scale says 1 cm represents ' + U.num(s) + ' km.</li><li>Multiply: ' + U.num(v) + ' &times; ' + U.num(s) + ' = ' + U.num(g) + '.</li><li>Write the unit: <b>' + U.num(g) + ' km</b>.</li></ol></div>';
    }
    var m = v / s; toolDone('scale', 5);
    return '<div class="result"><div class="big">' + U.num(m) + ' cm</div><p class="small" style="margin:4px 0 0"><b>Distance on the map</b></p><ol class="steps"><li>The scale says 1 cm represents ' + U.num(s) + ' km.</li><li>Divide: ' + U.num(v) + ' &divide; ' + U.num(s) + ' = ' + U.num(m) + '.</li><li>Write the unit: <b>' + U.num(m) + ' cm</b> on the map.</li></ol></div>';
  }
  function densResult() {
    var p = parseFloat(SC.pop), a = parseFloat(SC.area);
    if (!(p >= 0) || !(a > 0) || SC.pop === '') return '<p class="muted small" style="margin:0">Type a population and an area greater than zero.</p>';
    var d = p / a; toolDone('scale', 5);
    return '<div class="result"><div class="big">' + U.num(d, 1) + ' people per km&sup2;</div><ol class="steps"><li>Population density = population &divide; area.</li><li>' + U.num(p, 0) + ' &divide; ' + U.num(a) + ' = ' + U.num(d, 1) + '.</li><li>Write the unit: <b>people per km&sup2;</b>.</li></ol></div>';
  }
  MG.inputs['sc-in'] = function (el) {
    SC[el.getAttribute('data-k')] = el.value;
    var which = el.getAttribute('data-k') === 'pop' || el.getAttribute('data-k') === 'area' ? 'dens' : 'scale';
    document.getElementById(which === 'dens' ? 'densout' : 'scaleout').innerHTML = which === 'dens' ? densResult() : scaleResult();
    if (el.tagName === 'SELECT') { var l = document.getElementById('vallabel'); if (l) l.textContent = SC.mode === 'm2g' ? 'Distance on the map (cm)' : 'Distance on the ground (km)'; }
  };
  MG.route('^/tools/scale$', function () {
    MG.setTab('tools'); MG.setTop('Scale and density', '#/tools');
    MG.show('<div class="col tool-form"><div class="card"><h2>Map scale calculator</h2><p class="muted small">Use the scale on the map. &ldquo;1 cm represents 2 km&rdquo; means every 1 cm on the map is 2 km on the ground.</p>' +
      '<label for="sc-mode">What do you want to find?</label><select id="sc-mode" data-in="sc-in" data-k="mode"><option value="m2g"' + (SC.mode === 'm2g' ? ' selected' : '') + '>Ground distance from a map distance</option><option value="g2m"' + (SC.mode === 'g2m' ? ' selected' : '') + '>Map distance from a ground distance</option></select>' +
      '<label for="sc-scale">Scale: 1 cm represents (km)</label><input id="sc-scale" type="number" inputmode="decimal" min="0" step="any" data-in="sc-in" data-k="scale" value="' + U.esc(SC.scale) + '">' +
      '<label for="sc-val" id="vallabel">' + (SC.mode === 'm2g' ? 'Distance on the map (cm)' : 'Distance on the ground (km)') + '</label><input id="sc-val" type="number" inputmode="decimal" min="0" step="any" data-in="sc-in" data-k="val" value="' + U.esc(SC.val) + '">' +
      '<div id="scaleout" aria-live="polite" style="margin-top:12px">' + scaleResult() + '</div></div>' +
      '<div class="card"><h2>Population density</h2><p class="muted small">Population density tells you how crowded a place is.</p>' +
      '<label for="dn-pop">Population (people)</label><input id="dn-pop" type="number" inputmode="numeric" min="0" step="any" data-in="sc-in" data-k="pop" value="' + U.esc(SC.pop) + '">' +
      '<label for="dn-area">Area (km&sup2;)</label><input id="dn-area" type="number" inputmode="decimal" min="0" step="any" data-in="sc-in" data-k="area" value="' + U.esc(SC.area) + '">' +
      '<div id="densout" aria-live="polite" style="margin-top:12px">' + densResult() + '</div></div></div>');
  });

  /* ---------- statement of financial position builder ---------- */
  var CATS = [['nca', 'Non-current asset'], ['ca', 'Current asset'], ['cl', 'Current liability'], ['ncl', 'Non-current liability'], ['cap', 'Capital']];
  var POOL = { nca: ['Machinery', 'Delivery van', 'Furniture', 'Equipment', 'Building'], ca: ['Stock', 'Debtors', 'Cash in hand', 'Cash at bank'], cl: ['Creditors', 'Bank overdraft'], ncl: ['Bank loan (repayable in 5 years)'] };
  var BIZ = ['Amani Traders', 'Tumaini Bakery', 'Neema Stores', 'Baraka Hardware', 'Zawadi Tailors', 'Imani Print Shop', 'Mwangaza Dairy', 'Uhuru Poultry Farm', 'Jua Kali Works', 'Safari Fresh Produce'];
  var SF = null;
  function sum(items, cats) { return items.filter(function (i) { return cats.indexOf(i.cat) !== -1; }).reduce(function (a, i) { return a + i.amt; }, 0); }
  function sfGen() {
    for (var tries = 0; tries < 100; tries++) {
      var items = [];
      U.shuffle(POOL.nca).slice(0, 2).forEach(function (n) { items.push({ name: n, cat: 'nca', amt: U.rint(80000, 400000, 10000) }); });
      U.shuffle(POOL.ca).slice(0, 3).forEach(function (n) { items.push({ name: n, cat: 'ca', amt: U.rint(20000, 150000, 5000) }); });
      U.shuffle(POOL.cl).slice(0, 2).forEach(function (n) { items.push({ name: n, cat: 'cl', amt: U.rint(10000, 90000, 5000) }); });
      items.push({ name: POOL.ncl[0], cat: 'ncl', amt: U.rint(50000, 200000, 10000) });
      var assets = sum(items, ['nca', 'ca']), liab = sum(items, ['cl', 'ncl']), cap = assets - liab;
      if (cap >= 50000) {
        items.push({ name: 'Capital', cat: 'cap', amt: cap });
        return { biz: BIZ[Math.floor(Math.random() * BIZ.length)], items: U.shuffle(items), assets: assets, sel: {}, checked: false, allOk: false, totalDone: false, msg: '' };
      }
    }
  }
  function catName(k) { return CATS.filter(function (c) { return c[0] === k; })[0][1]; }
  function statementHtml(sc) {
    var rows = '', by = function (c) { return sc.items.filter(function (i) { return i.cat === c; }); };
    var line = function (i) { return '<tr><td>' + U.esc(i.name) + '</td><td class="n">' + U.num(i.amt, 0) + '</td></tr>'; };
    var head = function (t) { return '<tr class="h"><td colspan="2">' + t + '</td></tr>'; };
    var tot = function (t, v) { return '<tr class="t"><td>' + t + '</td><td class="n">' + U.num(v, 0) + '</td></tr>'; };
    rows += head('Non-current assets') + by('nca').map(line).join('');
    rows += head('Current assets') + by('ca').map(line).join('') + tot('Total assets', sc.assets);
    rows += head('Capital and liabilities') + by('cap').map(line).join('');
    rows += head('Non-current liabilities') + by('ncl').map(line).join('');
    rows += head('Current liabilities') + by('cl').map(line).join('') + tot('Total capital and liabilities', sc.assets);
    return '<table class="sofp"><caption class="small muted" style="text-align:left;padding-bottom:4px">Statement of financial position of ' + U.esc(sc.biz) + ' (KSh)</caption>' + rows + '</table>';
  }
  function sfRender() {
    var sc = SF; MG.setTab('tools'); MG.setTop('Financial position builder', '#/tools');
    var rows = sc.items.map(function (it, i) {
      var cls = 'itemrow', note = '';
      if (sc.checked) { var ok = sc.sel[i] === it.cat; cls += ok ? ' ok' : ' no'; if (!ok) note = '<div class="small" style="grid-column:1/3;color:var(--red)">Correct: ' + catName(it.cat) + '</div>'; }
      var opts = '<option value="">Choose...</option>' + CATS.map(function (c) { return '<option value="' + c[0] + '"' + (sc.sel[i] === c[0] ? ' selected' : '') + '>' + c[1] + '</option>'; }).join('');
      return '<div class="' + cls + '"><div><b>' + U.esc(it.name) + '</b><br><span class="muted small">KSh ' + U.num(it.amt, 0) + '</span></div><select data-in="sf-sel" data-i="' + i + '" aria-label="Category of ' + U.esc(it.name) + '"' + (sc.allOk ? ' disabled' : '') + '>' + opts + '</select>' + note + '</div>';
    }).join('');
    var after = '';
    if (sc.checked && !sc.allOk) after = '<p class="small" style="color:var(--red)"><b>Some items are in the wrong group.</b> Fix them and check again. Remember: non-current means it lasts more than a year.</p>';
    if (sc.allOk) {
      after = '<div class="result"><b>All items sorted correctly.</b><p class="small" style="margin:6px 0 10px">Now add up the assets. What are the <b>total assets</b> (non-current assets plus current assets)?</p>' +
        '<input type="number" inputmode="numeric" id="sf-total" placeholder="Total assets in KSh" ' + (sc.totalDone ? 'disabled value="' + sc.assets + '"' : '') + '>' +
        (sc.totalDone ? '' : '<button class="btn block mt" data-act="sf-total">Check total</button>') + (sc.msg ? '<p class="small" style="margin:8px 0 0">' + sc.msg + '</p>' : '') + '</div>';
      if (sc.totalDone) after += '<div class="card mt"><h3>Your completed statement</h3>' + statementHtml(sc) + '<p class="small muted" style="margin:0">Total assets equals total capital and liabilities, so the statement balances.</p></div>';
    }
    MG.show('<div class="col"><div class="card"><h2>' + U.esc(sc.biz) + '</h2><p class="muted small">The business listed these items as at 31st December. Choose where each one belongs in a statement of financial position.</p>' + rows +
      (sc.allOk ? '' : '<button class="btn block mt" data-act="sf-check">Check my answers</button>') + '</div>' + after +
      '<div class="btns mt"><button class="btn alt" data-act="sf-new">New business</button></div></div>', true);
  }
  MG.inputs['sf-sel'] = function (el) { SF.sel[+el.getAttribute('data-i')] = el.value; };
  MG.acts['sf-check'] = function () {
    var ok = true; SF.items.forEach(function (it, i) { if (SF.sel[i] !== it.cat) ok = false; });
    SF.checked = true; SF.allOk = ok;
    if (ok) toolDone('sofp', 10);
    sfRender();
  };
  MG.acts['sf-total'] = function () {
    var v = parseFloat((document.getElementById('sf-total') || {}).value);
    if (v === SF.assets) { SF.totalDone = true; SF.msg = '<b>Correct.</b> ' + U.num(SF.assets, 0) + ' = ' + U.num(sum(SF.items, ['nca']), 0) + ' + ' + U.num(sum(SF.items, ['ca']), 0) + '.'; }
    else SF.msg = 'Not yet. Add the non-current assets (' + U.num(sum(SF.items, ['nca']), 0) + ') to the current assets (' + U.num(sum(SF.items, ['ca']), 0) + ') and try again.';
    sfRender();
  };
  MG.acts['sf-new'] = function () { SF = sfGen(); sfRender(); };
  MG.route('^/tools/sofp$', function () { if (!SF) SF = sfGen(); sfRender(); });

  /* ---------- tool match game ---------- */
  var MT = null;
  function mtBuild() {
    var T = window.TOOLS || [], pool = U.shuffle(T), rounds = [];
    for (var i = 0; i < 10; i++) {
      var tool = pool[i % pool.length], kind = i % 2 === 0 ? 'name' : 'use';
      var key = function (x) { return kind === 'name' ? x.name : x.use; };
      var others = U.shuffle(T.filter(function (x) { return x.id !== tool.id && key(x) !== key(tool); }));
      var seen = {}; seen[key(tool)] = 1; var wrong = [];
      others.forEach(function (x) { if (wrong.length < 3 && !seen[key(x)]) { seen[key(x)] = 1; wrong.push(key(x)); } });
      var opts = U.shuffle([{ t: key(tool), ok: true }].concat(wrong.map(function (w) { return { t: w, ok: false }; })));
      rounds.push({ tool: tool, kind: kind, opts: opts });
    }
    return { rounds: rounds, i: 0, score: 0, picked: null };
  }
  function mtRender() {
    MG.setTab('tools'); MG.setTop('Tool match', '#/tools');
    var r = MT.rounds[MT.i], n = MT.rounds.length;
    var opts = r.opts.map(function (o, i) {
      var cls = 'opt'; if (MT.picked !== null) { if (o.ok) cls += ' right'; else if (i === MT.picked) cls += ' wrong'; }
      return '<button class="' + cls + '" data-act="mt-pick" data-i="' + i + '"' + (MT.picked !== null ? ' disabled' : '') + '><span class="l">' + 'ABCD'[i] + '</span><span>' + U.esc(o.t) + '</span></button>';
    }).join('');
    var fb = MT.picked !== null ? '<div class="explain" role="status"><b>' + (r.opts[MT.picked].ok ? 'Correct. ' : 'Not quite. ') + '</b>This is the <b>' + U.esc(r.tool.name) + '</b>. Use: ' + U.esc(r.tool.use) + '.</div><button class="btn block" data-act="mt-next">' + (MT.i + 1 >= n ? 'See my score' : 'Next tool') + '</button>' : '';
    MG.show('<div class="col"><div class="progressbar"><i style="width:' + Math.round(MT.i / n * 100) + '%"></i></div><p class="small muted">Round ' + (MT.i + 1) + ' of ' + n + ' &middot; ' + MT.score + ' correct</p>' +
      '<div class="matchfig">' + (window.DIAGRAMS[r.tool.fig] ? window.DIAGRAMS[r.tool.fig]() : '') + '</div>' +
      '<div class="qtext center">' + (r.kind === 'name' ? 'What is this tool called?' : 'What is this tool used for?') + '</div>' + opts + fb + '</div>', MT.picked !== null);
  }
  MG.acts['mt-pick'] = function (el) {
    if (MT.picked !== null) return;
    var i = +el.getAttribute('data-i'); MT.picked = i; if (MT.rounds[MT.i].opts[i].ok) MT.score++;
    mtRender();
  };
  MG.acts['mt-next'] = function () {
    if (MT.i + 1 >= MT.rounds.length) {
      MT.done = true;
      var gain = Math.max(0, MT.score - S.matchBest); if (MT.score > S.matchBest) S.matchBest = MT.score;
      MG.flag('match'); MG.award(gain * 2, 'tool match', gain === 0);
      MG.show('<div class="col"><div class="card center"><div class="score">' + MT.score + '/' + MT.rounds.length + '</div><p class="muted">' + (MT.score >= 9 ? 'Excellent. You know your tools.' : MT.score >= 6 ? 'Good work. Play again to improve.' : 'Revise the tools in Safety, tools and tool care, then play again.') + '</p>' +
        '<p class="small muted" style="margin:0">Points are given when you beat your best score. Best: ' + S.matchBest + '/10.</p></div>' +
        '<div class="btns"><button class="btn" data-act="mt-again">Play again</button><button class="btn alt" data-go="#/tools">Back to tools</button></div></div>');
      return;
    }
    MT.i++; MT.picked = null; mtRender();
  };
  MG.acts['mt-again'] = function () { MT = mtBuild(); mtRender(); };
  MG.route('^/tools/match$', function () {
    if (!(window.TOOLS || []).length) return MG.render && (location.hash = '#/tools');
    if (!MT || MT.done) MT = mtBuild();
    mtRender();
  });
})();
