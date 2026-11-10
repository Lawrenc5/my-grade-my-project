/* Pre-Technical Studies, topics 1 to 3: note diagrams (keys start with pt1-) and tool icons for the matching game (keys start with tool-).
   Colours use the app's theme variables. Safety-sign colours are fixed on purpose, because red, yellow, blue and green carry the meaning. */
(function () {
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.s || 13) +
      '" font-weight="' + (o.w || 600) + '" fill="' + (o.c || 'var(--ink)') + '" font-family="system-ui,sans-serif">' + s + '</text>';
  }
  function wrap(h, label, body) {
    return '<svg viewBox="0 0 360 ' + h + '" role="img" aria-label="' + label + '" style="width:100%;height:auto;display:block">' + body + '</svg>';
  }
  function icon(label, body) {
    return '<svg viewBox="0 0 120 90" role="img" aria-label="' + label + '" style="width:100%;height:auto;display:block">' + body + '</svg>';
  }
  function box(x, y, w, h, fill, extra) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + fill + '" stroke="var(--line)" stroke-width="2"' + (extra || '') + '/>';
  }
  var D = window.DIAGRAMS = window.DIAGRAMS || {};
  var STEEL = 'var(--muted)', DARK = 'var(--ink)', WOOD = 'var(--gold)', RED = 'var(--red)', LIGHT = 'var(--line)';

  /* ================= Topic 1: safety, tools and tool care ================= */

  D['pt1-signs'] = function () {
    var b = '', cx = [45, 135, 225, 315], y = 46;
    // prohibition: red circle with a slash
    b += '<circle cx="' + cx[0] + '" cy="' + y + '" r="29" fill="#fff" stroke="#d32f2f" stroke-width="7"/>';
    b += '<rect x="' + (cx[0] - 9) + '" y="' + (y - 9) + '" width="18" height="18" fill="var(--ink)"/>';
    b += '<line x1="' + (cx[0] - 21) + '" y1="' + (y - 21) + '" x2="' + (cx[0] + 21) + '" y2="' + (y + 21) + '" stroke="#d32f2f" stroke-width="7"/>';
    // warning: yellow triangle, black border
    b += '<polygon points="' + cx[1] + ',' + (y - 32) + ' ' + (cx[1] + 35) + ',' + (y + 28) + ' ' + (cx[1] - 35) + ',' + (y + 28) + '" fill="#f6c026" stroke="#111" stroke-width="4" stroke-linejoin="round"/>';
    b += '<line x1="' + cx[1] + '" y1="' + (y - 10) + '" x2="' + cx[1] + '" y2="' + (y + 7) + '" stroke="#111" stroke-width="5" stroke-linecap="round"/>';
    b += '<circle cx="' + cx[1] + '" cy="' + (y + 17) + '" r="3" fill="#111"/>';
    // mandatory: blue circle, white goggles
    b += '<circle cx="' + cx[2] + '" cy="' + y + '" r="31" fill="#1565c0"/>';
    b += '<circle cx="' + (cx[2] - 10) + '" cy="' + y + '" r="8" fill="none" stroke="#fff" stroke-width="3.5"/>';
    b += '<circle cx="' + (cx[2] + 10) + '" cy="' + y + '" r="8" fill="none" stroke="#fff" stroke-width="3.5"/>';
    b += '<line x1="' + (cx[2] - 2) + '" y1="' + y + '" x2="' + (cx[2] + 2) + '" y2="' + y + '" stroke="#fff" stroke-width="3"/>';
    b += '<line x1="' + (cx[2] - 18) + '" y1="' + (y - 2) + '" x2="' + (cx[2] - 24) + '" y2="' + (y - 4) + '" stroke="#fff" stroke-width="3"/>';
    b += '<line x1="' + (cx[2] + 18) + '" y1="' + (y - 2) + '" x2="' + (cx[2] + 24) + '" y2="' + (y - 4) + '" stroke="#fff" stroke-width="3"/>';
    // safe condition: green square, white cross
    b += '<rect x="' + (cx[3] - 31) + '" y="' + (y - 31) + '" width="62" height="62" rx="6" fill="#2e7d32"/>';
    b += '<rect x="' + (cx[3] - 6) + '" y="' + (y - 19) + '" width="12" height="38" fill="#fff"/>';
    b += '<rect x="' + (cx[3] - 19) + '" y="' + (y - 6) + '" width="38" height="12" fill="#fff"/>';
    var names = ['Prohibition', 'Warning', 'Mandatory', 'Safe condition'];
    var shapes = ['red circle, slash', 'yellow triangle', 'blue circle', 'green square'];
    var means = ['Do not', 'Take care', 'You must', 'Help or exit'];
    for (var i = 0; i < 4; i++) {
      b += T(cx[i], 100, names[i], { w: 700, s: 12 });
      b += T(cx[i], 116, shapes[i], { s: 10.5, c: 'var(--muted)', w: 500 });
      b += T(cx[i], 132, means[i], { s: 11, w: 600 });
    }
    return wrap(142, 'The four main kinds of safety sign: a red circle with a slash means prohibition, a yellow triangle means warning, a blue circle means mandatory, and a green square means safe condition', b);
  };

  D['pt1-ppe'] = function () {
    var b = '';
    // legs and boots
    b += '<rect x="165" y="112" width="13" height="42" fill="var(--g8)" stroke="var(--ink)" stroke-width="2"/>';
    b += '<rect x="182" y="112" width="13" height="42" fill="var(--g8)" stroke="var(--ink)" stroke-width="2"/>';
    b += '<rect x="160" y="152" width="21" height="11" rx="3" fill="var(--ink)"/>';
    b += '<rect x="179" y="152" width="21" height="11" rx="3" fill="var(--ink)"/>';
    // overall (body) and arms
    b += '<line x1="164" y1="66" x2="144" y2="100" stroke="var(--g8)" stroke-width="10" stroke-linecap="round"/>';
    b += '<line x1="196" y1="66" x2="216" y2="100" stroke="var(--g8)" stroke-width="10" stroke-linecap="round"/>';
    b += '<rect x="162" y="58" width="36" height="58" rx="8" fill="var(--g8)" stroke="var(--ink)" stroke-width="2"/>';
    // gloves
    b += '<circle cx="141" cy="105" r="8" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>';
    b += '<circle cx="219" cy="105" r="8" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>';
    // head
    b += '<circle cx="180" cy="38" r="17" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>';
    // ear muffs
    b += '<rect x="159" y="30" width="7" height="16" rx="3" fill="var(--red)"/>';
    b += '<rect x="194" y="30" width="7" height="16" rx="3" fill="var(--red)"/>';
    b += '<path d="M162 30 Q180 12 198 30" fill="none" stroke="var(--red)" stroke-width="3"/>';
    // goggles
    b += '<rect x="168" y="33" width="24" height="9" rx="4" fill="none" stroke="#1565c0" stroke-width="3"/>';
    // dust mask
    b += '<rect x="171" y="46" width="18" height="9" rx="4" fill="#fff" stroke="var(--ink)" stroke-width="1.6"/>';
    // labels and leader lines
    var L = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="var(--muted)" stroke-width="1.3"/>'; };
    b += T(124, 24, 'Ear muffs: ears', { a: 'end', s: 12 }) + L(128, 22, 160, 36);
    b += T(236, 24, 'Goggles: eyes', { a: 'start', s: 12 }) + L(232, 22, 192, 36);
    b += T(236, 58, 'Dust mask: lungs', { a: 'start', s: 12 }) + L(232, 56, 190, 51);
    b += T(124, 84, 'Overall: body', { a: 'end', s: 12 }) + L(128, 82, 163, 84);
    b += T(236, 112, 'Gloves: hands', { a: 'start', s: 12 }) + L(232, 110, 226, 107);
    b += T(124, 160, 'Safety boots: feet', { a: 'end', s: 12 }) + L(128, 158, 160, 158);
    return wrap(174, 'A learner wearing ear muffs, goggles, a dust mask, an overall, gloves and safety boots, with each item linked to the body part it protects', b);
  };

  D['pt1-toolclass'] = function () {
    var rows = [
      ['Measuring', 'tape measure, steel rule'],
      ['Marking', 'pencil, scriber, marking gauge, try square'],
      ['Holding', 'G-clamp, bench vice, pliers'],
      ['Cutting', 'hacksaw, tenon saw, chisel, file'],
      ['Striking', 'claw hammer, mallet'],
      ['Driving', 'screwdriver, spanner'],
      ['Boring', 'bradawl, hand drill, brace and bit']
    ];
    var cols = ['var(--g7)', 'var(--g8)', 'var(--g9)'];
    var b = '';
    rows.forEach(function (r, i) {
      var y = 6 + i * 33;
      b += '<rect x="4" y="' + y + '" width="352" height="29" rx="7" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>';
      b += '<rect x="4" y="' + y + '" width="8" height="29" rx="3" fill="' + cols[i % 3] + '"/>';
      b += T(22, y + 19, r[0], { a: 'start', s: 13, w: 800 });
      b += T(104, y + 19, r[1], { a: 'start', s: 11.5, w: 500, c: 'var(--muted)' });
    });
    return wrap(240, 'Tools grouped by the job they do: measuring, marking, holding, cutting, striking, driving and boring, each with examples', b);
  };

  /* ================= Topic 2: materials and their properties ================= */

  D['pt1-timber'] = function () {
    var b = '';
    b += box(110, 6, 140, 30, 'var(--surface-2)') + T(180, 26, 'Timber (wood)', { w: 800 });
    b += '<path d="M180 36 V50 M180 50 H92 V62 M180 50 H268 V62" fill="none" stroke="var(--muted)" stroke-width="2"/>';
    b += box(8, 62, 168, 138, 'var(--ok-bg)') + box(184, 62, 168, 138, 'var(--surface-2)');
    b += T(92, 84, 'Softwood', { w: 800, s: 14 }) + T(268, 84, 'Hardwood', { w: 800, s: 14 });
    var s = ['from conifer trees', 'grows fast, costs less', 'pine, cypress, cedar', 'roof timber, doors,', 'window frames'];
    var h = ['from broad-leaved trees', 'grows slowly, costs more', 'mahogany, teak, mvule,', 'eucalyptus', 'furniture, floors, poles'];
    var cs = ['var(--muted)', 'var(--muted)', 'var(--ink)', 'var(--muted)', 'var(--muted)'];
    s.forEach(function (t, i) { b += T(92, 106 + i * 18, t, { s: 11.5, w: i === 2 ? 700 : 500, c: cs[i] }); });
    h.forEach(function (t, i) { b += T(268, 106 + i * 18, t, { s: 11.5, w: i === 2 || i === 3 ? 700 : 500, c: (i === 2 || i === 3) ? 'var(--ink)' : 'var(--muted)' }); });
    return wrap(208, 'Timber divided into softwood from conifer trees and hardwood from broad-leaved trees, with Kenyan examples and uses', b);
  };

  D['pt1-metals'] = function () {
    var b = '';
    b += box(120, 6, 120, 30, 'var(--surface-2)') + T(180, 26, 'Metals', { w: 800 });
    b += '<path d="M180 36 V50 M180 50 H92 V62 M180 50 H268 V62" fill="none" stroke="var(--muted)" stroke-width="2"/>';
    b += box(8, 62, 168, 158, 'var(--red-bg)') + box(184, 62, 168, 158, 'var(--ok-bg)');
    b += T(92, 84, 'Ferrous', { w: 800, s: 14 }) + T(268, 84, 'Non-ferrous', { w: 800, s: 14 });
    var f = ['contain iron', 'most of them rust', 'mild steel', 'cast iron', 'high carbon steel'];
    var n = ['contain no iron', 'do not rust', 'copper, aluminium', 'zinc, lead', 'brass (an alloy)'];
    f.forEach(function (t, i) { b += T(92, 108 + i * 20, t, { s: 12, w: i > 1 ? 700 : 500, c: i > 1 ? 'var(--ink)' : 'var(--muted)' }); });
    n.forEach(function (t, i) { b += T(268, 108 + i * 20, t, { s: 12, w: i > 1 ? 700 : 500, c: i > 1 ? 'var(--ink)' : 'var(--muted)' }); });
    b += T(180, 212, '', {});
    return wrap(228, 'Metals divided into ferrous metals that contain iron and non-ferrous metals that do not, with examples', b);
  };

  D['pt1-concrete'] = function () {
    var b = '', xs = [6, 96, 186, 276];
    var names = ['Cement', 'Sand', 'Ballast', 'Water'];
    var l1 = ['binds the', 'fills the', 'crushed stone', 'starts the'];
    var l2 = ['mix together', 'small gaps', 'adds strength', 'hardening'];
    var fills = ['var(--surface-2)', 'var(--gold)', 'var(--muted)', 'var(--ok-bg)'];
    var ops = [1, 0.35, 0.3, 1];
    xs.forEach(function (x, i) {
      b += '<rect x="' + x + '" y="10" width="78" height="82" rx="10" fill="' + fills[i] + '" fill-opacity="' + ops[i] + '" stroke="var(--line)" stroke-width="2"/>';
      b += T(x + 39, 34, names[i], { w: 800, s: 13 });
      b += T(x + 39, 58, l1[i], { s: 10.5, w: 500, c: 'var(--ink)' }) + T(x + 39, 72, l2[i], { s: 10.5, w: 500, c: 'var(--ink)' });
    });
    [90, 180, 270].forEach(function (x) { b += T(x, 56, '+', { s: 14, w: 800, c: 'var(--muted)' }); });
    b += '<path d="M180 94 V114" stroke="var(--ink)" stroke-width="3"/><polygon points="180,124 172,112 188,112" fill="var(--ink)"/>';
    b += '<rect x="60" y="126" width="240" height="46" rx="10" fill="var(--g7)"/>';
    b += T(180, 146, 'Concrete', { w: 800, s: 15, c: '#fff' });
    b += T(180, 163, 'cure it: keep it damp for several days', { s: 11, w: 500, c: '#dbe7ee' });
    return wrap(180, 'Concrete is made by mixing cement, sand, ballast and water, then curing it by keeping it damp', b);
  };

  /* ================= Topic 3: technical drawing and measurement ================= */

  D['pt1-lines'] = function () {
    var b = '', y;
    // outline
    y = 26; b += '<line x1="12" y1="' + y + '" x2="168" y2="' + y + '" stroke="var(--ink)" stroke-width="4"/>';
    b += T(186, y - 2, 'Outline', { a: 'start', w: 800, s: 13 }) + T(186, y + 13, 'thick, continuous', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    // hidden
    y = 64; b += '<line x1="12" y1="' + y + '" x2="168" y2="' + y + '" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="6 4"/>';
    b += T(186, y - 2, 'Hidden detail', { a: 'start', w: 800, s: 13 }) + T(186, y + 13, 'short dashes, thin', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    // centre
    y = 102; b += '<line x1="12" y1="' + y + '" x2="168" y2="' + y + '" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="20 4 4 4"/>';
    b += T(186, y - 2, 'Centre line', { a: 'start', w: 800, s: 13 }) + T(186, y + 13, 'long and short dashes, thin', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    // dimension
    y = 140; b += '<line x1="12" y1="' + y + '" x2="168" y2="' + y + '" stroke="var(--ink)" stroke-width="1.6"/>';
    b += '<polygon points="12,' + y + ' 24,' + (y - 4) + ' 24,' + (y + 4) + '" fill="var(--ink)"/><polygon points="168,' + y + ' 156,' + (y - 4) + ' 156,' + (y + 4) + '" fill="var(--ink)"/>';
    b += T(90, y - 5, '50', { s: 12 });
    b += T(186, y - 2, 'Dimension line', { a: 'start', w: 800, s: 13 }) + T(186, y + 13, 'thin, with arrowheads', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    // projection
    y = 178;
    b += '<rect x="12" y="' + (y + 2) + '" width="90" height="12" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="12" y1="' + (y - 1) + '" x2="12" y2="' + (y - 18) + '" stroke="var(--ink)" stroke-width="1.6"/>';
    b += '<line x1="102" y1="' + (y - 1) + '" x2="102" y2="' + (y - 18) + '" stroke="var(--ink)" stroke-width="1.6"/>';
    b += T(186, y - 2, 'Projection line', { a: 'start', w: 800, s: 13 }) + T(186, y + 13, 'thin, starts with a small gap', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    return wrap(206, 'Five types of line used in technical drawing: outline, hidden detail, centre line, dimension line and projection line', b);
  };

  D['pt1-dims'] = function () {
    var b = '';
    var arrow = function (tx, ty, dx, dy) { // arrowhead with tip at (tx,ty) pointing along (dx,dy)
      var l = 10, w = 4, bx = tx - dx * l, by = ty - dy * l, px = -dy * w, py = dx * w;
      return '<polygon points="' + tx + ',' + ty + ' ' + (bx + px) + ',' + (by + py) + ' ' + (bx - px) + ',' + (by - py) + '" fill="var(--ink)"/>';
    };
    // linear
    b += T(90, 16, 'Linear', { w: 800 });
    b += '<rect x="30" y="64" width="100" height="40" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="30" y1="60" x2="30" y2="34" stroke="var(--ink)" stroke-width="1.5"/><line x1="130" y1="60" x2="130" y2="34" stroke="var(--ink)" stroke-width="1.5"/>';
    b += '<line x1="30" y1="42" x2="130" y2="42" stroke="var(--ink)" stroke-width="1.5"/>' + arrow(30, 42, -1, 0) + arrow(130, 42, 1, 0);
    b += T(80, 37, '60', { s: 12 });
    // diameter
    b += T(270, 16, 'Diameter', { w: 800 });
    b += '<circle cx="270" cy="72" r="32" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="238" y1="72" x2="302" y2="72" stroke="var(--ink)" stroke-width="1.5"/>' + arrow(238, 72, -1, 0) + arrow(302, 72, 1, 0);
    b += T(270, 66, 'Ø60', { s: 12 });
    // radius
    b += T(100, 140, 'Radius', { w: 800 });
    b += '<circle cx="100" cy="196" r="30" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="100" y1="196" x2="121.2" y2="174.8" stroke="var(--ink)" stroke-width="1.5"/>' + arrow(121.2, 174.8, 0.707, -0.707);
    b += '<circle cx="100" cy="196" r="2.5" fill="var(--ink)"/>';
    b += T(94, 214, 'R30', { s: 12 });
    // angular
    b += T(270, 140, 'Angular', { w: 800 });
    b += '<line x1="222" y1="232" x2="330" y2="232" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="222" y1="232" x2="262" y2="167.4" stroke="var(--ink)" stroke-width="3"/>';
    b += '<path d="M258 232 A36 36 0 0 0 240 200.8" fill="none" stroke="var(--ink)" stroke-width="1.5"/>';
    b += T(272, 214, '60°', { a: 'start', s: 12 });
    return wrap(246, 'Four kinds of dimension: a linear dimension with projection lines, a diameter, a radius and an angle', b);
  };

  D['pt1-setsq'] = function () {
    var b = '';
    var fill = 'fill="var(--ok-bg)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"';
    b += '<polygon points="30,120 130,120 30,20" ' + fill + '/>';
    b += '<path d="M44 120 V106 H30" fill="none" stroke="var(--ink)" stroke-width="2"/>';
    b += T(96, 112, '45°', { s: 12 }) + T(52, 62, '45°', { s: 12 });
    b += T(80, 146, '45° set square', { w: 700, s: 12 });
    b += '<polygon points="200,120 330,120 200,45" ' + fill + '/>';
    b += '<path d="M214 120 V106 H200" fill="none" stroke="var(--ink)" stroke-width="2"/>';
    b += T(286, 112, '30°', { s: 12 }) + T(220, 84, '60°', { s: 12 });
    b += T(265, 146, '30° and 60° set square', { w: 700, s: 12 });
    return wrap(156, 'A 45 degree set square with angles 45, 45 and 90, and a 30 and 60 degree set square with angles 30, 60 and 90', b);
  };

  /* ================= Tool icons (no text; used in the matching game) ================= */

  D['tool-hammer'] = function () {
    return icon('Claw hammer',
      '<g transform="rotate(-30 60 45)">' +
      '<rect x="55" y="22" width="10" height="62" rx="4" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="40" y="14" width="30" height="13" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="68" y="9" width="17" height="23" rx="2" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<path d="M40 14 Q24 14 14 32 L22 34 Q30 24 40 25 Z" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="2" stroke-linejoin="round"/>' +
      '</g>');
  };

  D['tool-mallet'] = function () {
    return icon('Wooden mallet',
      '<rect x="55" y="42" width="12" height="42" rx="4" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="20" y="10" width="80" height="34" rx="7" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2.5"/>' +
      '<line x1="34" y1="16" x2="34" y2="38" stroke="' + DARK + '" stroke-opacity=".35" stroke-width="1.5"/>' +
      '<line x1="86" y1="16" x2="86" y2="38" stroke="' + DARK + '" stroke-opacity=".35" stroke-width="1.5"/>' +
      '<line x1="44" y1="20" x2="76" y2="20" stroke="' + DARK + '" stroke-opacity=".3" stroke-width="1.5"/>' +
      '<line x1="44" y1="30" x2="76" y2="30" stroke="' + DARK + '" stroke-opacity=".3" stroke-width="1.5"/>');
  };

  D['tool-trysquare'] = function () {
    var ticks = '';
    for (var x = 36; x <= 104; x += 6) ticks += '<line x1="' + x + '" y1="25" x2="' + x + '" y2="' + (((x - 36) / 6) % 2 === 0 ? 31 : 28) + '" stroke="' + DARK + '" stroke-width="1.3"/>';
    return icon('Try square',
      '<rect x="12" y="10" width="18" height="70" rx="2" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="30" y="14" width="80" height="11" fill="' + STEEL + '" fill-opacity=".45" stroke="' + DARK + '" stroke-width="2"/>' +
      ticks +
      '<circle cx="21" cy="22" r="2.2" fill="' + DARK + '"/><circle cx="21" cy="68" r="2.2" fill="' + DARK + '"/>');
  };

  D['tool-gclamp'] = function () {
    return icon('G-clamp',
      '<path d="M40 8 H84 Q98 8 98 22 V52 Q98 66 84 66 H40" fill="none" stroke="' + DARK + '" stroke-width="10" stroke-linejoin="round"/>' +
      '<path d="M40 8 H84 Q98 8 98 22 V52 Q98 66 84 66 H40" fill="none" stroke="' + STEEL + '" stroke-width="6" stroke-linejoin="round"/>' +
      '<rect x="46" y="13" width="20" height="6" rx="2" fill="' + DARK + '"/>' +
      '<rect x="52" y="30" width="8" height="48" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="45" y="24" width="22" height="7" rx="2" fill="' + DARK + '"/>' +
      '<line x1="52" y1="42" x2="60" y2="42" stroke="' + DARK + '" stroke-width="1.5"/><line x1="52" y1="48" x2="60" y2="48" stroke="' + DARK + '" stroke-width="1.5"/><line x1="52" y1="54" x2="60" y2="54" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<rect x="36" y="78" width="40" height="7" rx="3.5" fill="' + RED + '" stroke="' + DARK + '" stroke-width="2"/>');
  };

  D['tool-hacksaw'] = function () {
    var teeth = '';
    for (var x = 22; x < 94; x += 5) teeth += '<polygon points="' + x + ',57 ' + (x + 5) + ',57 ' + (x + 2.5) + ',63" fill="' + DARK + '"/>';
    return icon('Hacksaw',
      '<rect x="14" y="22" width="80" height="6" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<rect x="14" y="22" width="6" height="36" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<rect x="20" y="52" width="76" height="5" fill="' + LIGHT + '" stroke="' + DARK + '" stroke-width="1.5"/>' +
      teeth +
      '<path d="M90 16 H112 L114 46 L106 70 H94 L99 54 H90 Z" fill="' + RED + '" stroke="' + DARK + '" stroke-width="2" stroke-linejoin="round"/>');
  };

  D['tool-chisel'] = function () {
    return icon('Wood chisel',
      '<g transform="rotate(-30 60 45)">' +
      '<rect x="50" y="4" width="20" height="36" rx="8" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="48" y="38" width="24" height="7" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<polygon points="53,45 67,45 70,80 50,80" fill="' + LIGHT + '" stroke="' + DARK + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<polygon points="50,80 70,80 70,84 50,87" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<line x1="60" y1="48" x2="60" y2="76" stroke="' + STEEL + '" stroke-width="1.3"/>' +
      '</g>');
  };

  D['tool-screwdriver'] = function () {
    return icon('Screwdriver',
      '<g transform="rotate(-18 60 45)">' +
      '<rect x="6" y="33" width="36" height="24" rx="11" fill="' + RED + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<line x1="16" y1="36" x2="16" y2="54" stroke="' + DARK + '" stroke-opacity=".4" stroke-width="2"/><line x1="23" y1="35" x2="23" y2="55" stroke="' + DARK + '" stroke-opacity=".4" stroke-width="2"/><line x1="30" y1="36" x2="30" y2="54" stroke="' + DARK + '" stroke-opacity=".4" stroke-width="2"/>' +
      '<rect x="41" y="39" width="6" height="12" fill="' + DARK + '"/>' +
      '<rect x="47" y="43" width="48" height="4" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<polygon points="95,40 112,42.5 112,47.5 95,50" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '</g>');
  };

  D['tool-pliers'] = function () {
    return icon('Pliers',
      '<line x1="60" y1="40" x2="86" y2="84" stroke="' + RED + '" stroke-width="12" stroke-linecap="round"/>' +
      '<line x1="60" y1="40" x2="34" y2="84" stroke="' + RED + '" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M60 40 L50 6" stroke="' + DARK + '" stroke-width="12" stroke-linecap="round" fill="none"/>' +
      '<path d="M60 40 L70 6" stroke="' + DARK + '" stroke-width="12" stroke-linecap="round" fill="none"/>' +
      '<path d="M60 40 L50 6" stroke="' + STEEL + '" stroke-width="8" stroke-linecap="round" fill="none"/>' +
      '<path d="M60 40 L70 6" stroke="' + STEEL + '" stroke-width="8" stroke-linecap="round" fill="none"/>' +
      '<line x1="57" y1="12" x2="63" y2="12" stroke="' + DARK + '" stroke-width="1.5"/><line x1="58" y1="19" x2="62" y2="19" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<circle cx="60" cy="40" r="6" fill="' + LIGHT + '" stroke="' + DARK + '" stroke-width="2"/>');
  };

  D['tool-plumbbob'] = function () {
    return icon('Plumb bob hanging on a string',
      '<line x1="36" y1="7" x2="84" y2="7" stroke="' + DARK + '" stroke-width="5" stroke-linecap="round"/>' +
      '<line x1="60" y1="8" x2="60" y2="40" stroke="' + DARK + '" stroke-width="1.6"/>' +
      '<rect x="52" y="38" width="16" height="10" rx="3" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<path d="M47 49 H73 Q71 62 60 86 Q49 62 47 49 Z" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<line x1="55" y1="54" x2="58" y2="70" stroke="' + DARK + '" stroke-opacity=".3" stroke-width="2"/>');
  };

  D['tool-compasses'] = function () {
    return icon('Pair of compasses',
      '<line x1="60" y1="16" x2="33" y2="80" stroke="' + STEEL + '" stroke-width="6" stroke-linecap="round"/>' +
      '<line x1="33" y1="80" x2="29" y2="87" stroke="' + DARK + '" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="60" y1="16" x2="86" y2="66" stroke="' + STEEL + '" stroke-width="6" stroke-linecap="round"/>' +
      '<line x1="80" y1="54" x2="88" y2="72" stroke="' + WOOD + '" stroke-width="8" stroke-linecap="butt"/>' +
      '<polygon points="84,71 92,71 88,84" fill="' + DARK + '"/>' +
      '<path d="M49 42 Q60 50 71 42" fill="none" stroke="' + DARK + '" stroke-width="2.2"/>' +
      '<rect x="55" y="3" width="10" height="9" rx="3" fill="' + DARK + '"/>' +
      '<circle cx="60" cy="16" r="6" fill="' + LIGHT + '" stroke="' + DARK + '" stroke-width="2"/>');
  };

  D['tool-tapemeasure'] = function () {
    var ticks = '';
    for (var x = 74; x <= 108; x += 6) ticks += '<line x1="' + x + '" y1="53" x2="' + x + '" y2="' + (((x - 74) / 6) % 2 === 0 ? 59 : 56) + '" stroke="' + DARK + '" stroke-width="1.3"/>';
    return icon('Tape measure',
      '<circle cx="42" cy="44" r="31" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2.5"/>' +
      '<circle cx="42" cy="44" r="13" fill="var(--surface)" stroke="' + DARK + '" stroke-width="2"/>' +
      '<circle cx="42" cy="44" r="3" fill="' + DARK + '"/>' +
      '<rect x="66" y="52" width="46" height="11" fill="var(--surface)" stroke="' + DARK + '" stroke-width="2"/>' +
      ticks +
      '<rect x="111" y="49" width="4" height="17" rx="1" fill="' + DARK + '"/>');
  };

  D['tool-file'] = function () {
    var hatch = '';
    for (var x = 46; x < 104; x += 5) {
      var f = function (xx) { return (xx - 38) / 74; };
      var yb = 53 - 3 * f(x), yt = 37 + 3 * f(x + 7);
      hatch += '<line x1="' + x + '" y1="' + yb.toFixed(1) + '" x2="' + (x + 7) + '" y2="' + yt.toFixed(1) + '" stroke="' + STEEL + '" stroke-width="1.2"/>';
    }
    return icon('Flat file',
      '<g transform="rotate(-12 60 45)">' +
      '<rect x="4" y="33" width="30" height="24" rx="11" fill="' + WOOD + '" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="33" y="36" width="6" height="18" fill="' + STEEL + '" stroke="' + DARK + '" stroke-width="1.5"/>' +
      '<polygon points="39,37 114,40 114,50 39,53" fill="' + LIGHT + '" stroke="' + DARK + '" stroke-width="2" stroke-linejoin="round"/>' +
      hatch +
      '</g>');
  };

  /* ================= Tool list for the matching game ================= */
  window.TOOLS = window.TOOLS || [];
  [
    ['hammer', 'Claw hammer', 'Driving in nails and pulling them out', 'striking'],
    ['mallet', 'Mallet', 'Striking chisels and tapping wood joints together', 'striking'],
    ['trysquare', 'Try square', 'Marking and checking right angles', 'marking'],
    ['gclamp', 'G-clamp', 'Holding work firmly in place', 'holding'],
    ['hacksaw', 'Hacksaw', 'Cutting metal', 'cutting'],
    ['chisel', 'Chisel', 'Cutting and shaping wood', 'cutting'],
    ['screwdriver', 'Screwdriver', 'Turning screws in and out', 'driving'],
    ['pliers', 'Pliers', 'Gripping, bending and cutting wire', 'holding'],
    ['plumbbob', 'Plumb bob', 'Checking that a wall or post is upright', 'measuring'],
    ['compasses', 'Pair of compasses', 'Drawing circles and arcs', 'marking'],
    ['tapemeasure', 'Tape measure', 'Measuring lengths and distances', 'measuring'],
    ['file', 'File', 'Smoothing and shaping metal edges', 'cutting']
  ].forEach(function (t) { window.TOOLS.push({ id: t[0], name: t[1], use: t[2], cat: t[3], fig: 'tool-' + t[0] }); });
})();
