/* Pre-Technical Studies, topics 4 to 6: note diagrams (keys start with pt2-).
   Colours use the app's theme variables. */
(function () {
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.s || 13) +
      '" font-weight="' + (o.w || 600) + '" fill="' + (o.c || 'var(--ink)') + '" font-family="system-ui,sans-serif">' + s + '</text>';
  }
  function wrap(h, label, body) {
    return '<svg viewBox="0 0 360 ' + h + '" role="img" aria-label="' + label + '" style="width:100%;height:auto;display:block">' + body + '</svg>';
  }
  function box(x, y, w, h, fill, extra) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + fill + '" stroke="var(--line)" stroke-width="2"' + (extra || '') + '/>';
  }
  function arrow(x1, y1, x2, y2) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="var(--muted)" stroke-width="2.5"/>' +
      '<polygon points="' + x2 + ',' + y2 + ' ' + (x2 - 5) + ',' + (y2 - 9) + ' ' + (x2 + 5) + ',' + (y2 - 9) + '" fill="var(--muted)"/>';
  }
  var D = window.DIAGRAMS = window.DIAGRAMS || {};

  /* ---------- Topic 4: enterprise ---------- */

  D['pt2-money'] = function () {
    var b = '';
    // left: income
    b += box(8, 24, 140, 150, 'var(--surface)');
    b += T(78, 46, 'INCOME IN', { s: 13, w: 800, c: 'var(--green)' });
    ['Wages', 'Salary', 'Rent received', 'Interest', 'Profit'].forEach(function (s, i) {
      b += T(78, 72 + i * 22, s, { s: 12, w: 500 });
    });
    // right: expenditure
    b += box(212, 24, 140, 150, 'var(--surface)');
    b += T(282, 46, 'MONEY OUT', { s: 13, w: 800, c: 'var(--red)' });
    ['Food', 'Rent paid', 'Transport', 'School needs', 'Airtime'].forEach(function (s, i) {
      b += T(282, 72 + i * 22, s, { s: 12, w: 500 });
    });
    // middle: balance beam
    b += T(180, 94, 'compare', { s: 11, c: 'var(--muted)', w: 500 });
    b += '<line x1="152" y1="102" x2="208" y2="102" stroke="var(--muted)" stroke-width="3"/>';
    b += T(180, 124, '=', { s: 22, w: 800 });
    // outcomes
    b += box(8, 190, 112, 70, 'var(--surface)') + T(64, 212, 'Income more', { s: 12 }) + T(64, 228, 'than spending', { s: 12 }) + T(64, 248, 'SURPLUS', { s: 12, w: 800, c: 'var(--green)' });
    b += box(124, 190, 112, 70, 'var(--surface)') + T(180, 212, 'Income equals', { s: 12 }) + T(180, 228, 'spending', { s: 12 }) + T(180, 248, 'BALANCED', { s: 12, w: 800, c: 'var(--gold)' });
    b += box(240, 190, 112, 70, 'var(--surface)') + T(296, 212, 'Spending more', { s: 12 }) + T(296, 228, 'than income', { s: 12 }) + T(296, 248, 'DEFICIT', { s: 12, w: 800, c: 'var(--red)' });
    b += T(180, 14, 'Income and expenditure', { s: 12, c: 'var(--muted)' });
    return wrap(272, 'Income coming in is compared with money going out. More income gives a surplus, equal gives balance, and more spending gives a deficit', b);
  };

  D['pt2-bizplan'] = function () {
    var rows = [
      ['1', 'Executive summary', 'Short overview of the whole plan', 'var(--g7)'],
      ['2', 'Business description', 'Name, place, owner, aims', 'var(--g8)'],
      ['3', 'Products and services', 'What you sell and why it is needed', 'var(--g9)'],
      ['4', 'Marketing plan', 'Customers, price, promotion, rivals', 'var(--gold)'],
      ['5', 'Organisation and management', 'Who does what', 'var(--g7)'],
      ['6', 'Financial plan', 'Start-up cost, income, expenses, profit', 'var(--g8)']
    ];
    var b = '';
    rows.forEach(function (r, i) {
      var y = 8 + i * 48;
      b += '<rect x="8" y="' + y + '" width="344" height="42" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>';
      b += '<circle cx="32" cy="' + (y + 21) + '" r="14" fill="' + r[3] + '"/>' + T(32, y + 26, r[0], { s: 14, w: 800, c: '#fff' });
      b += T(56, y + 18, r[1], { a: 'start', s: 13, w: 700 }) + T(56, y + 34, r[2], { a: 'start', s: 11, w: 500, c: 'var(--muted)' });
    });
    return wrap(300, 'The six parts of a business plan in order: executive summary, business description, products and services, marketing plan, organisation and management, financial plan', b);
  };

  /* ---------- Topic 5: bookkeeping ---------- */

  D['pt2-equation'] = function () {
    var b = '';
    // beam and stand
    b += '<polygon points="180,120 160,176 200,176" fill="var(--muted)"/>';
    b += '<rect x="60" y="176" width="240" height="8" rx="4" fill="var(--muted)"/>';
    b += '<line x1="40" y1="116" x2="320" y2="116" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>';
    // left pan
    b += '<line x1="70" y1="116" x2="50" y2="150" stroke="var(--line)" stroke-width="2"/><line x1="70" y1="116" x2="110" y2="150" stroke="var(--line)" stroke-width="2"/>';
    b += box(30, 150, 100, 12, 'var(--g9)');
    b += box(36, 54, 88, 56, 'var(--surface)') + T(80, 78, 'ASSETS', { s: 13, w: 800 }) + T(80, 98, 'KSh 123 000', { s: 12, w: 600 });
    // right pan
    b += '<line x1="290" y1="116" x2="250" y2="150" stroke="var(--line)" stroke-width="2"/><line x1="290" y1="116" x2="330" y2="150" stroke="var(--line)" stroke-width="2"/>';
    b += box(230, 150, 100, 12, 'var(--g7)');
    b += box(196, 8, 76, 48, 'var(--surface)') + T(234, 28, 'CAPITAL', { s: 12, w: 800 }) + T(234, 46, '68 000', { s: 12 });
    b += box(276, 8, 76, 48, 'var(--surface)') + T(314, 28, 'LIABILITIES', { s: 11, w: 800 }) + T(314, 46, '55 000', { s: 12 });
    b += box(196, 64, 156, 46, 'var(--surface)') + T(274, 84, 'Capital + Liabilities', { s: 12, w: 700 }) + T(274, 101, '= KSh 123 000', { s: 12 });
    b += T(180, 212, 'Assets = Capital + Liabilities', { s: 15, w: 800 });
    b += T(180, 232, 'Both sides must always be equal', { s: 12, w: 500, c: 'var(--muted)' });
    return wrap(244, 'A balance scale. Assets of KSh 123000 on the left balance capital of 68000 plus liabilities of 55000 on the right', b);
  };

  D['pt2-sofp'] = function () {
    var b = '';
    b += T(180, 18, 'Name of business', { s: 14, w: 800 });
    b += T(180, 35, 'Statement of financial position as at (date)', { s: 12, w: 500, c: 'var(--muted)' });
    b += '<rect x="8" y="44" width="344" height="246" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>';
    var y = 66;
    function band(label, fill) {
      b += '<rect x="14" y="' + (y - 14) + '" width="332" height="20" rx="4" fill="' + fill + '"/>' + T(22, y, label, { a: 'start', s: 12, w: 800, c: '#fff' });
      y += 20;
    }
    function line(label, v) {
      b += T(24, y, label, { a: 'start', s: 12, w: 500 }) + T(338, y, v, { a: 'end', s: 12, w: 500 });
      y += 18;
    }
    band('ASSETS', 'var(--g9)');
    line('Non-current assets (long term)', 'list + total');
    line('Current assets (within a year)', 'list + total');
    line('TOTAL ASSETS', 'A');
    y += 8;
    band('CAPITAL AND LIABILITIES', 'var(--g7)');
    line('Capital (owner)', 'C');
    line('Non-current liabilities (after a year)', 'list + total');
    line('Current liabilities (within a year)', 'list + total');
    line('TOTAL CAPITAL AND LIABILITIES', 'C + L');
    y += 10;
    b += '<rect x="14" y="' + (y - 12) + '" width="332" height="26" rx="6" fill="none" stroke="var(--red)" stroke-width="2"/>' + T(180, y + 6, 'A must equal C + L. If not, check your work.', { s: 12, w: 700, c: 'var(--red)' });
    return wrap(300, 'Layout of a statement of financial position: assets at the top split into non-current and current, then capital and liabilities below, with both totals equal', b);
  };

  /* ---------- Topic 6: computer studies ---------- */

  D['pt2-hardware'] = function () {
    var cols = [
      ['INPUT', 'var(--g7)', ['Keyboard', 'Mouse', 'Barcode scanner', 'Microphone', 'Touch screen']],
      ['PROCESSING', 'var(--g8)', ['Processor (CPU)', 'Memory (RAM)']],
      ['OUTPUT', 'var(--g9)', ['Monitor', 'Printer', 'Speaker', 'Projector']],
      ['STORAGE', 'var(--gold)', ['Hard disk', 'Flash disk', 'Memory card', 'Receipt printer?']]
    ];
    cols[3][2] = ['Hard disk', 'Flash disk', 'Memory card', 'CD or DVD'];
    var b = '';
    cols.forEach(function (c, i) {
      var x = 6 + (i % 2) * 177, y = 8 + Math.floor(i / 2) * 150;
      b += '<rect x="' + x + '" y="' + y + '" width="171" height="140" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>';
      b += '<rect x="' + x + '" y="' + y + '" width="171" height="26" rx="10" fill="' + c[1] + '"/>' + T(x + 85, y + 18, c[0], { s: 13, w: 800, c: '#fff' });
      c[2].forEach(function (s, j) { b += T(x + 85, y + 48 + j * 20, s, { s: 12, w: 500 }); });
    });
    return wrap(306, 'Four groups of computer hardware with examples: input devices, processing parts, output devices and storage devices', b);
  };

  D['pt2-blocks'] = function () {
    var items = [
      ['when green flag clicked', 'var(--gold)', 0],
      ['ask "Length?" and wait', 'var(--g9)', 1],
      ['set length to answer', 'var(--red)', 1],
      ['ask "Width?" and wait', 'var(--g9)', 1],
      ['set width to answer', 'var(--red)', 1],
      ['set area to length x width', 'var(--red)', 1],
      ['say join "Area = " area', 'var(--g7)', 1]
    ];
    var b = '';
    items.forEach(function (it, i) {
      var y = 10 + i * 38;
      b += '<rect x="20" y="' + y + '" width="230" height="34" rx="8" fill="' + it[1] + '" stroke="var(--line)" stroke-width="1.5"/>';
      b += T(34, y + 22, it[0], { a: 'start', s: 13, w: 700, c: '#fff' });
    });
    var leg = [['var(--gold)', 'Events'], ['var(--g9)', 'Input'], ['var(--red)', 'Variables'], ['var(--g7)', 'Looks']];
    leg.forEach(function (l, i) {
      b += '<rect x="268" y="' + (20 + i * 30) + '" width="14" height="14" rx="3" fill="' + l[0] + '"/>' + T(288, 32 + i * 30, l[1], { a: 'start', s: 12, w: 500 });
    });
    return wrap(284, 'A stack of visual programming blocks that asks for length and width, calculates the area and says the answer', b);
  };

  D['pt2-flow'] = function () {
    var b = '', cx = 180;
    function oval(y, s) { b += '<rect x="120" y="' + y + '" width="120" height="30" rx="15" fill="var(--g8)"/>' + T(cx, y + 20, s, { s: 13, w: 800, c: '#fff' }); }
    function para(y, s) { b += '<polygon points="130,' + (y + 32) + ' 150,' + y + ' 240,' + y + ' 220,' + (y + 32) + '" fill="var(--surface)" stroke="var(--g9)" stroke-width="2.5"/>' + T(cx + 5, y + 20, s, { s: 12 }); }
    function proc(y, s) { b += '<rect x="115" y="' + y + '" width="130" height="32" fill="var(--surface)" stroke="var(--red)" stroke-width="2.5"/>' + T(cx, y + 20, s, { s: 12 }); }
    oval(8, 'START'); b += arrow(cx, 38, cx, 56);
    para(56, 'Input length'); b += arrow(cx, 88, cx, 106);
    para(106, 'Input width'); b += arrow(cx, 138, cx, 156);
    proc(156, 'area = length x width'); b += arrow(cx, 188, cx, 206);
    para(206, 'Output area'); b += arrow(cx, 238, cx, 256);
    oval(256, 'STOP');
    b += T(256, 78, 'Input or output', { a: 'start', s: 10, w: 500, c: 'var(--g9)' }) + T(256, 94, 'uses a slanted box', { a: 'start', s: 10, w: 500, c: 'var(--g9)' });
    b += T(256, 176, 'Process uses', { a: 'start', s: 11, w: 500, c: 'var(--red)' }) + T(256, 192, 'a plain box', { a: 'start', s: 11, w: 500, c: 'var(--red)' });
    b += T(8, 24, 'Start and stop', { a: 'start', s: 11, w: 500, c: 'var(--g8)' }) + T(8, 40, 'use ovals', { a: 'start', s: 11, w: 500, c: 'var(--g8)' });
    return wrap(294, 'Flowchart for the area of a rectangle: start, input length, input width, calculate area, output area, stop', b);
  };

  D['pt2-bizsize'] = function () {
    var b = '', labels = [['Micro', 'owner alone or one helper', 26], ['Small', 'few workers, small shop', 40], ['Medium', 'more workers, bigger premises', 54], ['Large', 'many workers, big capital', 68]];
    labels.forEach(function (l, i) {
      var x = 8 + i * 88, h = l[2] + 40, y = 140 - h;
      b += '<rect x="' + x + '" y="' + y + '" width="80" height="' + h + '" rx="8" fill="var(--g' + (7 + (i % 3)) + ')" opacity="' + (0.55 + i * 0.15) + '"/>';
      b += T(x + 40, 162, l[0], { s: 13, w: 800 });
    });
    ['owner alone', 'few workers', 'more workers', 'many workers'].forEach(function (s, i) { b += T(48 + i * 88, 178, s, { s: 10, w: 500, c: 'var(--muted)' }); });
    b += T(180, 16, 'Size grows with employees, capital, sales and premises', { s: 11, c: 'var(--muted)', w: 500 });
    return wrap(188, 'Four columns of growing height showing micro, small, medium and large businesses', b);
  };
})();
