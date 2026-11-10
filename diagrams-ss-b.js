/* Social Studies diagrams for topics 5 and 6, plus the Stone Age timeline for topic 4.
   Keys: ss-stages, ss-arms, ss-levels, ss-stoneage, ss-elements, ss-rights */
(function () {
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '" font-size="' + (o.s || 12) +
      '" font-weight="' + (o.w || 600) + '" fill="' + (o.c || 'var(--ink)') + '" font-family="system-ui,sans-serif">' + s + '</text>';
  }
  function R(x, y, w, h, fill, stroke, rx) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 10 : rx) +
      '" fill="' + fill + '"' + (stroke ? ' stroke="' + stroke + '" stroke-width="1.5"' : '') + '/>';
  }
  function wrap(h, label, body) {
    return '<svg viewBox="0 0 360 ' + h + '" role="img" aria-label="' + label + '" style="width:100%;height:auto;display:block">' + body + '</svg>';
  }
  function down(x, y1, y2, c) {
    c = c || 'var(--muted)';
    return '<line x1="' + x + '" y1="' + y1 + '" x2="' + x + '" y2="' + (y2 - 5) + '" stroke="' + c + '" stroke-width="3"/>' +
      '<polygon points="' + (x - 7) + ',' + (y2 - 7) + ' ' + (x + 7) + ',' + (y2 - 7) + ' ' + x + ',' + y2 + '" fill="' + c + '"/>';
  }
  var W = '#ffffff';
  var D = window.DIAGRAMS = window.DIAGRAMS || {};

  /* Stages of making the 2010 Constitution */
  D['ss-stages'] = function () {
    var steps = [
      ['Collecting views', 'Citizens give their opinions on what to include'],
      ['Drafting', 'Experts write the draft constitution'],
      ['Debate', 'Leaders and the public discuss the draft'],
      ['Referendum', 'Citizens vote Yes or No on the draft'],
      ['Promulgation', 'The new constitution is officially launched']
    ];
    var b = '';
    steps.forEach(function (s, i) {
      var y = 8 + i * 54;
      b += R(4, y, 352, 46, i === 4 ? 'var(--ok-bg)' : 'var(--surface-2)', 'var(--line)', 10);
      b += '<circle cx="30" cy="' + (y + 23) + '" r="15" fill="' + (i === 4 ? 'var(--green)' : 'var(--g7)') + '"/>';
      b += T(30, y + 28, i + 1, { s: 14, w: 800, c: W });
      b += T(56, y + 20, s[0], { a: 'start', s: 13, w: 800 });
      b += T(56, y + 37, s[1], { a: 'start', s: 11, w: 500, c: 'var(--muted)' });
      if (i < 4) b += '<polygon points="23,' + (y + 47) + ' 37,' + (y + 47) + ' 30,' + (y + 54) + '" fill="var(--muted)"/>';
    });
    return wrap(278, 'Flow chart of the five stages of making Kenya’s Constitution in order: collecting views, drafting, debate, referendum and promulgation', b);
  };

  /* Three arms of government */
  D['ss-arms'] = function () {
    var rows = [
      ['Executive', 'var(--g7)', ['Carries out the laws and', 'runs the government.', 'Led by the President, with the', 'Deputy President and Cabinet.']],
      ['Legislature', 'var(--g8)', ['Makes the laws and checks', 'the work of the Executive.', 'Parliament: National Assembly', 'and Senate.']],
      ['Judiciary', 'var(--g9)', ['Interprets the laws and settles', 'disputes in the courts.', 'Judges, magistrates and the', 'Chief Justice as head.']]
    ];
    var b = '';
    rows.forEach(function (r, i) {
      var y = 6 + i * 86;
      b += R(4, y, 352, 80, 'var(--surface-2)', 'var(--line)', 10);
      b += R(4, y, 106, 80, r[1], null, 10);
      b += T(57, y + 46, r[0], { s: 14, w: 800, c: W });
      r[2].forEach(function (l, j) { b += T(122, y + 19 + j * 16, l, { a: 'start', s: 11.5, w: j < 2 ? 700 : 500, c: j < 2 ? 'var(--ink)' : 'var(--muted)' }); });
    });
    b += T(180, 276, 'Each arm checks the others: separation of powers', { s: 11, w: 600, c: 'var(--muted)' });
    return wrap(286, 'Three arms of government in Kenya: the Executive carries out laws, the Legislature makes laws and the Judiciary interprets laws', b);
  };

  /* National and county government */
  D['ss-levels'] = function () {
    var b = R(30, 6, 300, 84, 'var(--g7)', null, 12);
    b += T(180, 28, 'NATIONAL GOVERNMENT', { s: 13, w: 800, c: W });
    b += T(180, 48, 'President, Cabinet, Parliament and courts', { s: 11, w: 500, c: W });
    b += T(180, 64, 'Defence, foreign affairs, national security,', { s: 11, w: 500, c: W });
    b += T(180, 80, 'national roads and national policies', { s: 11, w: 500, c: W });
    b += down(180, 90, 114);
    b += T(194, 106, 'shares power and resources', { a: 'start', s: 10.5, w: 500, c: 'var(--muted)' });
    b += R(6, 118, 348, 98, 'var(--surface-2)', 'var(--line)', 12);
    b += T(180, 138, '47 COUNTY GOVERNMENTS', { s: 13, w: 800 });
    b += R(14, 148, 162, 60, 'var(--ok-bg)', 'var(--line)', 8);
    b += T(95, 166, 'County Executive', { s: 12, w: 800 });
    b += T(95, 182, 'Governor leads, with', { s: 11, w: 500 });
    b += T(95, 196, 'the Deputy Governor', { s: 11, w: 500 });
    b += R(184, 148, 162, 60, 'var(--ok-bg)', 'var(--line)', 8);
    b += T(265, 166, 'County Assembly', { s: 12, w: 800 });
    b += T(265, 182, 'MCAs make county laws', { s: 11, w: 500 });
    b += T(265, 196, 'and check the Governor', { s: 11, w: 500 });
    b += down(180, 216, 240);
    b += R(6, 244, 348, 66, 'var(--surface)', 'var(--line)', 12);
    b += T(180, 263, 'County services', { s: 12, w: 800 });
    b += T(180, 280, 'Health centres, agriculture,', { s: 11, w: 500 });
    b += T(180, 296, 'county roads, pre-primary education', { s: 11, w: 500 });
    return wrap(318, 'Diagram of national government sharing power with 47 county governments, each with a County Executive led by a Governor and a County Assembly', b);
  };

  /* Stone Age timeline */
  D['ss-stoneage'] = function () {
    var rows = [
      ['Early', 'Stone Age', 'var(--g8)', ['Crude tools such as hand axes.', 'Hunting small animals and', 'gathering fruits and roots.']],
      ['Middle', 'Stone Age', 'var(--g7)', ['Fire used regularly for warmth,', 'cooking and scaring animals.', 'Better stone tools.']],
      ['Late', 'Stone Age', 'var(--g9)', ['Small, sharp tools; bows and arrows.', 'Fishing and rock painting.', 'Burial of the dead.']],
      ['Farming', 'begins', 'var(--green)', ['Crops grown and animals kept.', 'Food surplus, so people settle', 'and villages grow.']]
    ];
    var b = '';
    rows.forEach(function (r, i) {
      var y = 6 + i * 68;
      b += R(4, y, 352, 60, 'var(--surface-2)', 'var(--line)', 10);
      b += R(4, y, 92, 60, r[2], null, 10);
      b += T(50, y + 27, r[0], { s: 13.5, w: 800, c: W });
      b += T(50, y + 44, r[1], { s: 11.5, w: 600, c: W });
      r[3].forEach(function (l, j) { b += T(106, y + 20 + j * 16, l, { a: 'start', s: 11.5, w: j === 0 ? 700 : 500, c: j === 0 ? 'var(--ink)' : 'var(--muted)' }); });
      if (i < 3) b += '<polygon points="43,' + (y + 61) + ' 57,' + (y + 61) + ' 50,' + (y + 68) + '" fill="var(--muted)"/>';
    });
    return wrap(280, 'Timeline of the Early, Middle and Late Stone Age followed by the start of farming, with one key feature of each', b);
  };

  /* Elements of culture */
  D['ss-elements'] = function () {
    var items = [
      ['Language', 180, 28], ['Food', 276, 62], ['Dress', 296, 140], ['Music and dance', 276, 218],
      ['Arts and crafts', 180, 252], ['Customs', 84, 218], ['Beliefs', 64, 140], ['Values', 84, 62]
    ];
    var cols = ['var(--g7)', 'var(--g8)', 'var(--g9)', 'var(--green)'];
    var b = '';
    items.forEach(function (it) {
      b += '<line x1="180" y1="140" x2="' + it[1] + '" y2="' + it[2] + '" stroke="var(--line)" stroke-width="3"/>';
    });
    b += '<circle cx="180" cy="140" r="40" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>' + T(180, 146, 'Culture', { s: 15, w: 800 });
    items.forEach(function (it, i) {
      b += R(it[1] - 56, it[2] - 14, 112, 28, cols[i % 4], null, 14);
      b += T(it[1], it[2] + 4, it[0], { s: 11.5, w: 700, c: W });
    });
    return wrap(282, 'Diagram with Culture in the centre and eight elements around it: language, food, dress, music and dance, arts and crafts, customs, beliefs and values', b);
  };

  /* Rights and responsibilities */
  D['ss-rights'] = function () {
    var rows = [
      [['Right to education'], ['Attend school and', 'work hard to learn']],
      [['Right to a clean and', 'healthy environment'], ['Keep it clean and plant', 'and protect trees']],
      [['Freedom from', 'discrimination'], ['Treat everyone fairly', 'and with respect']],
      [['Freedom of expression'], ['Speak respectfully and', 'listen to others']]
    ];
    var b = T(81, 22, 'Rights', { s: 14, w: 800, c: 'var(--green)' }) + T(279, 22, 'Responsibilities', { s: 14, w: 800, c: 'var(--g7)' });
    rows.forEach(function (r, i) {
      var y = 34 + i * 62;
      b += R(6, y, 150, 54, 'var(--ok-bg)', 'var(--line)', 10) + R(204, y, 150, 54, 'var(--surface-2)', 'var(--line)', 10);
      var off = r[0].length === 1 ? 32 : 24;
      r[0].forEach(function (l, j) { b += T(81, y + off + j * 16, l, { s: 11.5, w: 600 }); });
      r[1].forEach(function (l, j) { b += T(279, y + 24 + j * 16, l, { s: 11.5, w: 500 }); });
      b += '<line x1="164" y1="' + (y + 27) + '" x2="196" y2="' + (y + 27) + '" stroke="var(--ink)" stroke-width="2.5"/>' +
        '<polygon points="162,' + (y + 27) + ' 171,' + (y + 22) + ' 171,' + (y + 32) + '" fill="var(--ink)"/>' +
        '<polygon points="198,' + (y + 27) + ' 189,' + (y + 22) + ' 189,' + (y + 32) + '" fill="var(--ink)"/>';
    });
    return wrap(284, 'Four rights matched with the responsibility that goes with each: education with attending school, a clean environment with keeping it clean, freedom from discrimination with treating others fairly, and freedom of expression with speaking respectfully', b);
  };
})();
