/* Simple inline diagrams used in the notes. Colours use the app's theme variables so they work in light and dark mode. */
(function () {
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.s || 13) +
      '" font-weight="' + (o.w || 600) + '" fill="' + (o.c || 'var(--ink)') + '" font-family="system-ui,sans-serif">' + s + '</text>';
  }
  function wrap(h, label, body) {
    return '<svg viewBox="0 0 360 ' + h + '" role="img" aria-label="' + label + '" style="width:100%;height:auto;display:block">' + body + '</svg>';
  }
  var D = window.DIAGRAMS = window.DIAGRAMS || {};

  D.compass = function () {
    var b = '<circle cx="180" cy="130" r="92" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>';
    [[242, 68], [242, 192], [118, 192], [118, 68]].forEach(function (p) {
      b += '<line x1="180" y1="130" x2="' + p[0] + '" y2="' + p[1] + '" stroke="var(--line)" stroke-width="2"/>';
    });
    b += '<polygon points="180,40 193,130 167,130" fill="var(--red)"/>';
    b += '<polygon points="180,220 193,130 167,130" fill="var(--muted)"/>';
    b += '<polygon points="270,130 180,117 180,143" fill="var(--g7)"/>';
    b += '<polygon points="90,130 180,117 180,143" fill="var(--g9)"/>';
    b += '<circle cx="180" cy="130" r="6" fill="var(--ink)"/>';
    b += T(180, 28, 'N', { s: 18, w: 800 }) + T(180, 248, 'S', { s: 18, w: 800 }) + T(292, 136, 'E', { s: 18, w: 800 }) + T(68, 136, 'W', { s: 18, w: 800 });
    b += T(256, 62, 'NE') + T(256, 208, 'SE') + T(104, 208, 'SW') + T(104, 62, 'NW');
    return wrap(260, 'Compass rose showing eight directions: north, north-east, east, south-east, south, south-west, west and north-west', b);
  };

  D.mapsymbols = function () {
    var cells = [
      ['Built-up area', '<rect x="0" y="-9" width="34" height="18" fill="var(--muted)"/>'],
      ['Tarmac road', '<line x1="0" y1="0" x2="40" y2="0" stroke="var(--ink)" stroke-width="7"/>'],
      ['Murram road', '<line x1="0" y1="0" x2="40" y2="0" stroke="var(--ink)" stroke-width="3" stroke-dasharray="7 4"/>'],
      ['River', '<path d="M0 4 Q10 -8 20 2 T40 0" fill="none" stroke="var(--g9)" stroke-width="3"/>'],
      ['Hospital', '<rect x="4" y="-14" width="28" height="28" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M18 -9v18M9 0h18" stroke="var(--red)" stroke-width="4"/>'],
      ['Church', '<path d="M18 -14v28M8 -4h20" stroke="var(--ink)" stroke-width="3"/>'],
      ['Market', '<rect x="0" y="-9" width="38" height="18" fill="none" stroke="var(--ink)" stroke-width="1.5"/>' + T(19, 4, 'MKT', { s: 10, w: 700 })],
      ['Scrub', T(4, 5, 'v v', { s: 14, a: 'start', w: 700 })],
      ['Forest', '<circle cx="14" cy="-5" r="9" fill="var(--g7)"/><line x1="14" y1="4" x2="14" y2="14" stroke="var(--ink)" stroke-width="3"/>'],
      ['Hill', '<polygon points="2,12 20,-12 38,12" fill="var(--g8)"/>'],
      ['Coffee farm', T(8, 7, 'C', { s: 20, a: 'start', w: 800 })],
      ['Settlement', '<circle cx="6" cy="-4" r="2.5" fill="var(--ink)"/><circle cx="20" cy="4" r="2.5" fill="var(--ink)"/><circle cx="32" cy="-5" r="2.5" fill="var(--ink)"/>']
    ];
    var b = '';
    cells.forEach(function (c, i) {
      var x = (i % 3) * 120 + 8, y = Math.floor(i / 3) * 56 + 32;
      b += '<g transform="translate(' + x + ',' + y + ')">' + c[1] + '</g>' + T(x, y + 28, c[0], { a: 'start', s: 12, w: 500 });
    });
    b += '<rect x="2" y="2" width="356" height="236" fill="none" stroke="var(--line)" stroke-width="2" rx="8"/>';
    return wrap(244, 'Examples of common map symbols and what each one means', b);
  };

  D.settlement = function () {
    var b = '', sq = function (x, y) { return '<rect x="' + x + '" y="' + y + '" width="9" height="9" fill="var(--ink)"/>'; };
    // nucleated
    b += '<circle cx="60" cy="70" r="9" fill="var(--gold)"/>';
    [[40, 40], [58, 34], [78, 42], [90, 62], [86, 86], [66, 98], [44, 94], [32, 74], [30, 54], [60, 52]].forEach(function (p) { b += sq(p[0], p[1]); });
    b += T(60, 128, 'Nucleated', { w: 700 }) + T(60, 144, 'around a centre', { s: 11, c: 'var(--muted)', w: 500 });
    // linear
    b += '<line x1="130" y1="72" x2="230" y2="72" stroke="var(--muted)" stroke-width="6"/>';
    [136, 156, 176, 196, 216].forEach(function (x) { b += sq(x, 52) + sq(x, 84); });
    b += T(180, 128, 'Linear', { w: 700 }) + T(180, 144, 'along a road or river', { s: 11, c: 'var(--muted)', w: 500 });
    // dispersed
    [[262, 36], [300, 56], [336, 34], [270, 84], [312, 98], [340, 76], [286, 62]].forEach(function (p) { b += sq(p[0], p[1]); });
    b += T(300, 128, 'Dispersed', { w: 700 }) + T(300, 144, 'scattered far apart', { s: 11, c: 'var(--muted)', w: 500 });
    b += '<text x="60" y="22" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="system-ui">gold circle = market</text>';
    return wrap(156, 'Three settlement patterns: nucleated, linear and dispersed', b);
  };

  D.pushpull = function () {
    var b = '<rect x="6" y="8" width="136" height="160" rx="12" fill="var(--surface-2)" stroke="var(--line)"/>';
    b += '<rect x="218" y="8" width="136" height="160" rx="12" fill="var(--ok-bg)" stroke="var(--line)"/>';
    b += T(74, 32, 'Rural area', { w: 800 }) + T(286, 32, 'Town', { w: 800 });
    b += T(74, 52, 'PUSH factors', { s: 11, c: 'var(--red)', w: 800 }) + T(286, 52, 'PULL factors', { s: 11, c: 'var(--green)', w: 800 });
    ['Few jobs', 'Land shortage', 'Poor services', 'Drought or insecurity'].forEach(function (s, i) { b += T(74, 78 + i * 24, s, { s: 12, w: 500 }); });
    ['Jobs', 'Schools and hospitals', 'Electricity, markets', 'Better housing'].forEach(function (s, i) { b += T(286, 78 + i * 24, s, { s: 12, w: 500 }); });
    b += '<line x1="150" y1="88" x2="208" y2="88" stroke="var(--ink)" stroke-width="4"/><polygon points="212,88 198,79 198,97" fill="var(--ink)"/>';
    b += T(180, 74, 'People move', { s: 11, c: 'var(--muted)', w: 600 });
    return wrap(176, 'Diagram showing push factors in a rural area and pull factors in a town causing people to move', b);
  };

  D.tana = function () {
    var b = '<rect x="2" y="2" width="356" height="262" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    b += '<path d="M40 40 C 120 40, 80 100, 150 112 S 230 150, 252 188 S 300 232, 328 236" fill="none" stroke="var(--g9)" stroke-width="5" stroke-linecap="round"/>';
    var dams = [['Masinga', 82, 74, 96, 64, 'start'], ['Kamburu', 130, 106, 118, 128, 'end'], ['Gitaru', 172, 126, 186, 116, 'start'], ['Kindaruma', 214, 150, 200, 176, 'end'], ['Kiambere', 258, 192, 272, 184, 'start']];
    dams.forEach(function (d, i) {
      b += '<rect x="' + (d[1] - 7) + '" y="' + (d[2] - 7) + '" width="14" height="14" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>';
      b += T(d[3], d[4], (i + 1) + '. ' + d[0], { a: d[5], s: 12, w: 700 });
    });
    b += T(40, 24, 'Source: Aberdare Range and Mount Kenya area', { a: 'start', s: 11, c: 'var(--muted)', w: 500 });
    b += T(350, 258, 'Indian Ocean', { a: 'end', s: 12, c: 'var(--g9)', w: 700 });
    b += T(180, 16 + 0, '', {});
    b += T(18, 258, 'Not to scale. 1 is upstream, 5 is downstream.', { a: 'start', s: 10, c: 'var(--muted)', w: 500 });
    return wrap(268, 'Sketch showing five dams on the Tana River from upstream to downstream: Masinga, Kamburu, Gitaru, Kindaruma and Kiambere', b);
  };

  D.ndovu = function () {
    var b = '<rect x="2" y="2" width="356" height="250" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>';
    // lake (west)
    b += '<ellipse cx="46" cy="130" rx="40" ry="62" fill="var(--g9)" opacity=".35" stroke="var(--g9)" stroke-width="2"/>' + T(46, 134, 'LAKE', { s: 11, w: 800, c: 'var(--g9)' });
    // river from hills (east) to lake (west)
    b += '<path d="M300 90 C 250 70, 230 130, 180 120 S 110 150, 86 132" fill="none" stroke="var(--g9)" stroke-width="3.5"/>';
    b += '<path d="M240 40 C 235 70, 232 90, 226 112" fill="none" stroke="var(--g9)" stroke-width="2"/>';
    // hills (east)
    [[300, 70], [330, 60], [316, 96], [338, 100]].forEach(function (h) { b += '<polygon points="' + (h[0] - 14) + ',' + (h[1] + 14) + ' ' + h[0] + ',' + (h[1] - 14) + ' ' + (h[0] + 14) + ',' + (h[1] + 14) + '" fill="var(--g8)" opacity=".8"/>'; });
    // tea (east highlands)
    b += T(284, 152, 'T T T', { s: 13, w: 800, c: 'var(--g7)' }) + T(284, 170, 'T T T', { s: 13, w: 800, c: 'var(--g7)' });
    // tarmac road along the north
    b += '<line x1="6" y1="26" x2="354" y2="26" stroke="var(--ink)" stroke-width="7"/>';
    // murram road going south from the road
    b += '<line x1="170" y1="26" x2="170" y2="236" stroke="var(--ink)" stroke-width="3" stroke-dasharray="8 5"/>';
    // market and church near river crossing
    b += '<rect x="182" y="96" width="38" height="18" fill="none" stroke="var(--ink)" stroke-width="1.5"/>' + T(201, 109, 'MKT', { s: 10, w: 700 });
    b += '<path d="M156 84v22M148 91h16" stroke="var(--ink)" stroke-width="3"/>';
    // hospital and clustered houses in the west
    b += '<rect x="96" y="190" width="26" height="26" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M109 195v16M101 203h16" stroke="var(--red)" stroke-width="4"/>';
    [[84, 182], [126, 180], [134, 202], [128, 224], [100, 228], [80, 212], [86, 198], [112, 172]].forEach(function (p) { b += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.8" fill="var(--ink)"/>'; });
    // scrub (south)
    b += T(210, 214, 'v  v  v', { s: 14, w: 700 }) + T(230, 232, 'v  v  v', { s: 14, w: 700 });
    // north arrow and scale bar
    b += '<polygon points="338,40 331,62 345,62" fill="var(--red)"/>' + T(338, 76, 'N', { s: 12, w: 800 });
    b += '<line x1="240" y1="236" x2="340" y2="236" stroke="var(--ink)" stroke-width="3"/>';
    b += '<line x1="240" y1="230" x2="240" y2="242" stroke="var(--ink)" stroke-width="2"/><line x1="290" y1="230" x2="290" y2="242" stroke="var(--ink)" stroke-width="2"/><line x1="340" y1="230" x2="340" y2="242" stroke="var(--ink)" stroke-width="2"/>';
    b += T(240, 226, '0', { s: 10 }) + T(290, 226, '2', { s: 10 }) + T(340, 226, '4 km', { s: 10 });
    b += T(180, 16, 'NDOVU VALLEY  (1 cm represents 2 km)', { s: 10, w: 800 });
    return wrap(256, 'Sketch map of Ndovu Valley showing a lake in the west, a river flowing from hills in the east, roads, a market, a church, a hospital with clustered houses, tea farms in the east and scrub in the south', b);
  };
})();
