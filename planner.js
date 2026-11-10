/* My Grade My Project - My Project planner (six stages). Projects are saved on this device only. Same storage key as version 1. */
(function () {
  'use strict';
  var MG = window.MG, U = MG.util;
  var STAGES = [
    { name: 'Find the problem', tip: 'A good project solves a real problem that people around you have. Talk to people before you choose an idea.',
      tasks: ['Write the problem in one sentence', 'Ask at least 3 people what they need or struggle with', 'List 3 possible ideas', 'Choose the best idea and write why you chose it'],
      prompt: 'Write your problem and your chosen idea here.' },
    { name: 'Plan', budget: true, tip: 'A plan saves time and money. Decide what you need, what it will cost and when each step will be done.',
      tasks: ['List the materials and tools you need', 'Fill in the budget table below', 'Make a simple sketch or drawing', 'Write your steps in order, with dates', 'Write the safety rules for your work'],
      prompt: 'Write your steps and dates here.' },
    { name: 'Make', tip: 'Work step by step and follow safety rules. Note down what you do each day, including mistakes. Mistakes show your learning.',
      tasks: ['Collect all materials and tools', 'Follow safety rules (goggles, gloves, adult supervision)', 'Make the product or complete the activity step by step', 'Record what you did and any changes to your plan'],
      prompt: 'Record what you did each day.' },
    { name: 'Test and improve', tip: 'Try your work in real use. Ask someone else to try it too, and listen to what they say.',
      tasks: ['Test your product with a real user or in real use', 'Record what worked and what did not', 'Make at least one improvement', 'Test again'],
      prompt: 'Write your test results and improvements here.' },
    { name: 'Report and present', tip: 'Your report tells the story of your project: the problem, the plan, the steps, the results.',
      tasks: ['Write your report: problem, plan, steps, results', 'Add your sketch, budget and test results', 'Prepare a 3-minute talk', 'Practise presenting to a friend or family member'],
      prompt: 'Write the main points of your talk here.' },
    { name: 'Reflect', tip: 'Reflection means thinking about what you learned so you can do better next time.',
      tasks: ['Write what went well', 'Write what you would change next time', 'List the skills you used or learned', 'Thank the people who helped you'],
      prompt: 'Write your reflection here.' }
  ];
  var openStages = {};
  function all() { return MG.store.get('projects', []); }
  function get(id) { return all().filter(function (p) { return p.id === id; })[0]; }
  function put(p) { MG.store.set('projects', all().map(function (x) { return x.id === p.id ? p : x; })); }
  function pct(p) {
    var total = 0, done = 0;
    STAGES.forEach(function (s, i) { s.tasks.forEach(function (t, j) { total++; if (p.tasks && p.tasks[i + '.' + j]) done++; }); });
    return { total: total, done: done, pct: total ? Math.round(done / total * 100) : 0 };
  }
  function line(r) { return (parseFloat(r.qty) || 0) * (parseFloat(r.cost) || 0); }
  function money(r) { return line(r).toLocaleString('en-KE', { maximumFractionDigits: 2 }); }
  function grand(p) { var t = 0; (p.budget || []).forEach(function (r) { t += line(r); }); return t.toLocaleString('en-KE', { maximumFractionDigits: 2 }); }
  function curId() { var m = location.hash.match(/#\/project\/([^/]+)/); return m ? decodeURIComponent(m[1]) : null; }

  MG.route('^/projects$', function () {
    MG.setTab('projects'); MG.setTop('My Project', '#/');
    var list = all();
    var items = list.map(function (p) {
      var c = pct(p);
      return '<button class="row" data-go="#/project/' + U.esc(p.id) + '"><span class="grow"><b>' + U.esc(p.title) + '</b><span class="meta">Grade ' + U.esc(p.grade) + ' &middot; ' + U.esc(p.subject) + '</span><span class="bar"><i style="width:' + c.pct + '%"></i></span></span><span class="pill">' + c.pct + '%</span><span class="arrow">&rsaquo;</span></button>';
    }).join('');
    var subj = MG.subjects.map(function (s) { return '<option>' + U.esc(s.name) + '</option>'; }).join('') + '<option>Other / mixed</option>';
    MG.show('<div class="col">' + (list.length ? '<h2>Your projects</h2>' + items : '') +
      '<div class="card"><h2>' + (list.length ? 'Start another project' : 'Start your first project') + '</h2>' +
      '<p class="muted small">Your teacher may give a set format for assessed projects. Follow your teacher&rsquo;s instructions. This planner helps you plan, track and record your work.</p>' +
      '<label class="f" for="np-title">Project title</label><input id="np-title" type="text" maxlength="80" placeholder="For example: School tree nursery">' +
      '<label class="f" for="np-grade">Grade</label><select id="np-grade"><option>7</option><option>8</option><option>9</option></select>' +
      '<label class="f" for="np-subject">Learning area</label><select id="np-subject">' + subj + '</select>' +
      '<button class="btn block mt" data-act="create-project">Create project</button></div></div>');
  });

  function budgetHtml(p) {
    var rows = (p.budget || []).map(function (r, i) {
      return '<tr><td><input type="text" data-in="p-b" data-b="' + i + '" data-f="item" value="' + U.esc(r.item) + '" placeholder="Item" aria-label="Item ' + (i + 1) + '"></td>' +
        '<td style="width:58px"><input type="number" min="0" inputmode="numeric" data-in="p-b" data-b="' + i + '" data-f="qty" value="' + U.esc(r.qty) + '" aria-label="Quantity"></td>' +
        '<td style="width:78px"><input type="number" min="0" inputmode="decimal" data-in="p-b" data-b="' + i + '" data-f="cost" value="' + U.esc(r.cost) + '" aria-label="Cost each"></td>' +
        '<td style="width:70px" id="line-' + i + '">' + money(r) + '</td>' +
        '<td style="width:36px"><button class="btn alt small" style="padding:4px 10px;min-height:36px" data-act="del-row" data-i="' + i + '" aria-label="Remove row ' + (i + 1) + '">&times;</button></td></tr>';
    }).join('');
    return '<h3 style="margin-top:14px">Budget (KSh)</h3><table class="budget"><thead><tr><th>Item</th><th>Qty</th><th>Each</th><th>Total</th><th></th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><button class="btn alt small" data-act="add-row">Add item</button><b>Total: KSh <span id="grand">' + grand(p) + '</span></b></div>';
  }

  MG.route('^/project/([^/]+)$', function (id) {
    var p = get(id); if (!p) { location.hash = '#/projects'; return; }
    MG.setTab('projects'); MG.setTop('My Project', '#/projects');
    var c = pct(p);
    if (!openStages[id]) {
      var first = 0;
      for (var i = 0; i < STAGES.length; i++) {
        var allDone = STAGES[i].tasks.every(function (t, j) { return p.tasks && p.tasks[i + '.' + j]; });
        if (!allDone) { first = i; break; }
      }
      openStages[id] = {}; openStages[id][first] = true;
    }
    var stages = STAGES.map(function (s, i) {
      var done = s.tasks.filter(function (t, j) { return p.tasks && p.tasks[i + '.' + j]; }).length;
      var tasks = s.tasks.map(function (t, j) {
        return '<label class="task"><input type="checkbox" data-in="p-task" data-task="' + i + '.' + j + '"' + (p.tasks && p.tasks[i + '.' + j] ? ' checked' : '') + '><span>' + U.esc(t) + '</span></label>';
      }).join('');
      return '<details class="stage" data-stage="' + i + '"' + (openStages[id][i] ? ' open' : '') + '><summary>' + (i + 1) + '. ' + U.esc(s.name) + '<span class="pill ' + (done === s.tasks.length ? 'good' : '') + '">' + done + '/' + s.tasks.length + '</span></summary><div class="body">' +
        '<div class="ptip">' + U.esc(s.tip) + '</div>' + tasks + (s.budget ? budgetHtml(p) : '') +
        '<label class="f" for="note-' + i + '">Notes</label><textarea id="note-' + i + '" data-in="p-note" data-note="' + i + '" placeholder="' + U.esc(s.prompt) + '">' + U.esc((p.notes && p.notes[i]) || '') + '</textarea></div></details>';
    }).join('');
    MG.show('<div class="col"><div class="card"><h2 style="margin-bottom:4px">' + U.esc(p.title) + '</h2><p class="muted" style="margin-bottom:8px">Grade ' + U.esc(p.grade) + ' &middot; ' + U.esc(p.subject) + '</p>' +
      '<div class="bar"><i id="proj-bar" style="width:' + c.pct + '%"></i></div><p class="small muted" id="proj-count" style="margin:6px 0 0">' + c.done + ' of ' + c.total + ' tasks done (' + c.pct + '%)</p></div>' + stages +
      '<div class="btns mt"><button class="btn alt" data-act="copy-summary">Copy summary</button><button class="btn danger" data-act="delete-project">Delete project</button></div>' +
      '<p class="small muted mt">Saved automatically on this phone. If you clear your browser data, your projects are removed, so copy your summary now and then.</p></div>');
  });

  function summary(p) {
    var c = pct(p), out = [p.title, 'Grade ' + p.grade + ' - ' + p.subject, 'Progress: ' + c.done + ' of ' + c.total + ' tasks (' + c.pct + '%)', ''];
    STAGES.forEach(function (s, i) {
      out.push((i + 1) + '. ' + s.name.toUpperCase());
      s.tasks.forEach(function (t, j) { out.push((p.tasks && p.tasks[i + '.' + j] ? '[x] ' : '[ ] ') + t); });
      if (s.budget && p.budget && p.budget.length) {
        out.push('Budget:');
        p.budget.forEach(function (r) { if (r.item || r.qty || r.cost) out.push('  ' + (r.item || 'Item') + ': ' + (r.qty || 0) + ' x ' + (r.cost || 0) + ' = KSh ' + money(r)); });
        out.push('  Total: KSh ' + grand(p));
      }
      if (p.notes && p.notes[i]) out.push('Notes: ' + p.notes[i]);
      out.push('');
    });
    return out.join('\n');
  }
  function copy(text) {
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove(); MG.say(ok ? 'Summary copied' : 'Could not copy');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { MG.say('Summary copied'); }, fallback); else fallback();
  }

  MG.acts['create-project'] = function () {
    var title = document.getElementById('np-title').value.trim();
    if (!title) { MG.say('Type a project title first'); document.getElementById('np-title').focus(); return; }
    var np = { id: 'p' + Date.now().toString(36), title: title, grade: document.getElementById('np-grade').value, subject: document.getElementById('np-subject').value, tasks: {}, notes: {}, budget: [{ item: '', qty: '', cost: '' }], created: Date.now() };
    MG.store.set('projects', all().concat([np]));
    MG.flag('planner'); MG.award(0, '', true);
    location.hash = '#/project/' + np.id;
  };
  MG.acts['delete-project'] = function () {
    var p = get(curId());
    if (p && window.confirm('Delete “' + p.title + '”? This cannot be undone.')) { MG.store.set('projects', all().filter(function (x) { return x.id !== p.id; })); location.hash = '#/projects'; }
  };
  MG.acts['copy-summary'] = function () { var p = get(curId()); if (p) copy(summary(p)); };
  MG.acts['add-row'] = function () { var p = get(curId()); if (!p) return; p.budget = (p.budget || []).concat([{ item: '', qty: '', cost: '' }]); put(p); MG.render(); };
  MG.acts['del-row'] = function (el) {
    var p = get(curId()); if (!p) return; var idx = +el.getAttribute('data-i');
    p.budget = (p.budget || []).filter(function (r, k) { return k !== idx; });
    if (!p.budget.length) p.budget = [{ item: '', qty: '', cost: '' }];
    put(p); MG.render();
  };
  MG.inputs['p-task'] = function (el) {
    var p = get(curId()); if (!p) return; p.tasks = p.tasks || {};
    var k = el.getAttribute('data-task'); if (el.checked) p.tasks[k] = true; else delete p.tasks[k];
    put(p);
    var c = pct(p);
    document.getElementById('proj-bar').style.width = c.pct + '%';
    document.getElementById('proj-count').textContent = c.done + ' of ' + c.total + ' tasks done (' + c.pct + '%)';
    var det = el.closest('details'), si = +det.getAttribute('data-stage');
    var done = STAGES[si].tasks.filter(function (x, j) { return p.tasks[si + '.' + j]; }).length, pill = det.querySelector('summary .pill');
    pill.textContent = done + '/' + STAGES[si].tasks.length; pill.className = 'pill' + (done === STAGES[si].tasks.length ? ' good' : '');
  };
  MG.inputs['p-note'] = function (el) { var p = get(curId()); if (!p) return; p.notes = p.notes || {}; p.notes[el.getAttribute('data-note')] = el.value; put(p); };
  MG.inputs['p-b'] = function (el) {
    var p = get(curId()); if (!p) return; var i = +el.getAttribute('data-b'); if (!p.budget[i]) return;
    p.budget[i][el.getAttribute('data-f')] = el.value; put(p);
    var ln = document.getElementById('line-' + i); if (ln) ln.textContent = money(p.budget[i]);
    var g = document.getElementById('grand'); if (g) g.textContent = grand(p);
  };
  document.addEventListener('toggle', function (e) {
    var d = e.target; if (!d.matches || !d.matches('details.stage')) return;
    var id = curId(); if (!id) return;
    openStages[id] = openStages[id] || {}; openStages[id][d.getAttribute('data-stage')] = d.open;
  }, true);
})();
