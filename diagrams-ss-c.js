/* Extra Social Studies diagrams: scale worked example, population density, degradation cycle, Nile. */
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

  /* Scale: 3.5 cm on the map is 7 km on the ground */
  D['ss-scale'] = function () {
    var b = '<rect x="2" y="2" width="356" height="212" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    b += T(180, 26, 'Scale: 1 cm represents 2 km', { s: 14, w: 800 });
    b += T(24, 56, 'ON THE MAP', { a: 'start', s: 11, c: 'var(--muted)', w: 800 });
    b += '<line x1="40" y1="96" x2="250" y2="96" stroke="var(--ink)" stroke-width="2"/>';
    for (var i = 0; i <= 4; i++) {
      b += '<line x1="' + (40 + i * 60) + '" y1="88" x2="' + (40 + i * 60) + '" y2="104" stroke="var(--ink)" stroke-width="2"/>';
      b += T(40 + i * 60, 120, i, { s: 11, c: 'var(--muted)' });
    }
    b += '<circle cx="40" cy="96" r="7" fill="var(--g7)" stroke="var(--ink)" stroke-width="2"/><circle cx="250" cy="96" r="7" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>';
    b += T(40, 78, 'A', { s: 14, w: 800 }) + T(250, 78, 'B', { s: 14, w: 800 });
    b += T(145, 142, '3.5 cm (measured with a ruler)', { s: 12, c: 'var(--g9)', w: 700 });
    b += '<path d="M180 150 L180 168" stroke="var(--ink)" stroke-width="2" fill="none"/><polygon points="174,166 186,166 180,176" fill="var(--ink)"/>';
    b += '<rect x="30" y="180" width="300" height="26" rx="8" fill="var(--ok-bg)" stroke="var(--green)"/>';
    b += T(180, 198, '3.5 × 2 km = 7 km on the ground', { s: 13, c: 'var(--green)', w: 800 });
    return wrap(218, 'Worked example: a distance of 3.5 centimetres on a map with scale 1 centimetre to 2 kilometres is 7 kilometres on the ground', b);
  };

  /* Population density: same area, different number of people */
  D['ss-density'] = function () {
    function dots(n, cx, cy, size) {
      var s = '', cols = 6, gap = size / (cols + 1);
      for (var i = 0; i < n; i++) {
        var c = i % cols, r = Math.floor(i / cols);
        s += '<circle cx="' + (cx + gap * (c + 1)) + '" cy="' + (cy + gap * (r + 1)) + '" r="4" fill="var(--g9)"/>';
      }
      return s;
    }
    var b = '<rect x="2" y="2" width="356" height="236" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    b += '<rect x="26" y="40" width="130" height="130" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/>';
    b += dots(3, 26, 40, 130);
    b += '<rect x="204" y="40" width="130" height="130" fill="var(--bg)" stroke="var(--ink)" stroke-width="2"/>' + dots(24, 204, 40, 130);
    b += T(91, 30, 'Area: 1 km²', { s: 12, c: 'var(--muted)' }) + T(269, 30, 'Area: 1 km²', { s: 12, c: 'var(--muted)' });
    b += T(91, 192, 'Low density', { s: 14, w: 800 }) + T(91, 210, '3 people per km²', { s: 12, c: 'var(--muted)' });
    b += T(269, 192, 'High density', { s: 14, w: 800 }) + T(269, 210, '24 people per km²', { s: 12, c: 'var(--muted)' });
    b += T(180, 230, 'Each dot = 1 person. Real areas hold many more. Density = people ÷ area', { s: 10, c: 'var(--muted)', w: 500 });
    return wrap(244, 'Two squares of equal area: one with three dots showing low population density, one with twenty-four dots showing high population density', b);
  };

  /* Degradation cycle */
  D['ss-degrade'] = function () {
    var steps = [
      ['1', 'Trees are cut for charcoal,', 'timber and farmland'],
      ['2', 'Soil is left bare', 'and loose'],
      ['3', 'Heavy rain washes the soil', 'away (soil erosion)'],
      ['4', 'Silt fills rivers and dams;', 'water supply and HEP fall'],
      ['5', 'Land is poor, so people clear', 'more land and cut more trees']
    ];
    var b = '<rect x="2" y="2" width="356" height="338" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    steps.forEach(function (s, i) {
      var y = 14 + i * 64;
      b += '<rect x="20" y="' + y + '" width="320" height="48" rx="10" fill="' + (i === 4 ? 'var(--ok-bg)' : 'var(--bg)') + '" stroke="' + (i === 4 ? 'var(--green)' : 'var(--line)') + '"/>';
      b += '<circle cx="46" cy="' + (y + 24) + '" r="14" fill="var(--g9)"/>' + T(46, y + 29, s[0], { s: 14, w: 800, c: '#fff' });
      b += T(70, y + 21, s[1], { a: 'start', s: 12, w: 700 }) + T(70, y + 37, s[2], { a: 'start', s: 12, w: 700 });
      if (i < 4) b += '<polygon points="174,' + (y + 50) + ' 186,' + (y + 50) + ' 180,' + (y + 61) + '" fill="var(--muted)"/>';
    });
    b += T(180, 334, 'A cycle that keeps repeating unless people plant trees and farm carefully', { s: 10, c: 'var(--muted)', w: 500 });
    return wrap(346, 'Cycle of environmental degradation: trees cut, bare soil, soil erosion, silting of rivers and dams, then more land cleared', b);
  };

  /* Egypt and the Nile (simple sketch) */
  D['ss-nile'] = function () {
    var b = '<rect x="2" y="2" width="356" height="272" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    b += '<rect x="2" y="2" width="356" height="46" rx="10" fill="#bfd8e8"/>';
    b += T(180, 32, 'Mediterranean Sea', { s: 13, c: 'var(--ink)', w: 700 });
    b += '<rect x="2" y="48" width="130" height="224" fill="#f1e1bd"/><rect x="228" y="48" width="130" height="224" fill="#f1e1bd"/>';
    b += T(66, 140, 'DESERT', { s: 14, w: 800, c: '#8a6d2f' }) + T(293, 140, 'DESERT', { s: 14, w: 800, c: '#8a6d2f' });
    b += '<path d="M180 262 C 165 220, 195 190, 178 150 S 186 90, 180 66" fill="none" stroke="#2b6f9e" stroke-width="7" stroke-linecap="round"/>';
    b += '<path d="M180 262 C 165 220, 195 190, 178 150 S 186 90, 180 66" fill="none" stroke="var(--green)" stroke-width="22" stroke-linecap="round" opacity="0.22"/>';
    b += '<path d="M180 66 L140 50 M180 66 L180 50 M180 66 L220 50" stroke="#2b6f9e" stroke-width="4" fill="none"/>';
    b += T(236, 66, 'Nile Delta', { a: 'start', s: 12, w: 700 });
    b += T(200, 188, 'River Nile', { a: 'start', s: 13, w: 800, c: '#2b6f9e' });
    b += T(196, 214, 'Fertile green strip', { a: 'start', s: 11, c: 'var(--green)', w: 700 });
    b += T(196, 230, '(flood silt + irrigation)', { a: 'start', s: 11, c: 'var(--green)', w: 600 });
    b += '<polygon points="165,96 172,82 179,96" fill="var(--gold)" stroke="var(--ink)"/>' + T(160, 90, 'Pyramids of Giza', { a: 'end', s: 11 });
    b += T(180, 268, 'Sketch only, not to scale. The Nile flows south to north.', { s: 10, c: 'var(--muted)', w: 500 });
    return wrap(278, 'Sketch of Egypt: the River Nile flows north through desert to the Mediterranean Sea, with a fertile green strip and the Nile Delta', b);
  };
})();
