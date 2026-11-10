/* Pre-Technical Studies - topics 1 to 3 (all tagged Grades 7, 8, 9).
   Practice material written for this app in the style of KJSEA. Not copied from any KNEC paper.
   REVIEW: (1) Concrete mix ratio 1 : 2 : 4 (cement : sand : ballast) is given only as "a common mix"; check against the class textbook.
   REVIEW: (2) Hardwood/softwood examples: eucalyptus is listed as a hardwood and cypress, pine and cedar as softwoods (also on the pt1-timber diagram).
   REVIEW: (3) First aid for burns says to cool under running water for about 10 minutes; confirm with the textbook wording.
   REVIEW: (4) Fire extinguisher advice: water for wood/paper; foam, dry powder, CO2 or fire blanket for oil/liquid; CO2 or dry powder for electrical after switching off power. Check against textbook colour codes (not given here).
   REVIEW: (5) Pictorial drawing types (isometric, oblique, perspective) and the 2H/HB/B pencil uses are standard; confirm which are named in the syllabus.
   mcq: {q, o:[4 options], a:index of correct option, e:explanation, fig?}
   short / case parts: {q, marks, pts:[ "1 mark point" | {t:"point", m:2} ], fig?}
   notes blocks: h, p, ul, ol, fig, tip, table.  Use **bold** inside text. */
(window.CONTENT = window.CONTENT || []).push(

/* ------------------------------------------------------------------ 1 */
{
  id: "pt-safety", grades: [7, 8, 9], subject: "pt", n: 1,
  title: "Safety, tools and tool care",
  blurb: "Workshop hazards, protective wear, safety signs, first aid, fire, tools and how to look after them",
  notes: [
    { t: "h", x: "Hazards in a workshop" },
    { t: "p", x: "A **hazard** is anything that can cause harm. An **accident** is an unplanned event that causes injury or damage. Most accidents can be prevented if we know the hazards and act carefully." },
    { t: "table", head: ["Hazard", "How to prevent it"], rows: [["Sharp or blunt tools left lying around", "Return tools to their place after use; carry them with the sharp edge pointing down"], ["Slippery floor (oil, water, wood shavings)", "Clean spills and sweep shavings at once"], ["Loose or damaged tools (a loose hammer head)", "Check tools before use and repair or report them"], ["Flying chips and dust", "Wear goggles and a dust mask"], ["Loud noise", "Wear ear muffs"], ["Faulty electrical wires and sockets", "Report them; never touch bare wires"], ["Running, playing or crowding in the workshop", "Follow workshop rules and work in your own space"]] },
    { t: "h", x: "Protective clothing and equipment" },
    { t: "p", x: "**Personal protective equipment (PPE)** is the clothing and gear worn to protect the body from harm. Each item protects one part of the body." },
    { t: "fig", x: "pt1-ppe", cap: "Protective clothing and the part of the body each one protects." },
    { t: "ul", x: ["**Overall or apron**: protects the body and clothes from dirt, sparks and chemicals.", "**Safety boots**: protect the feet from falling objects and sharp nails.", "**Gloves**: protect the hands from cuts, heat and rough surfaces.", "**Goggles**: protect the eyes from flying chips and dust.", "**Dust mask**: protects the lungs from dust and fumes.", "**Ear muffs**: protect the ears from loud noise."] },
    { t: "h", x: "Safety signs" },
    { t: "p", x: "A **safety sign** gives a warning or an instruction using a shape, a colour and a picture. The shape and colour tell you the type of sign before you read it." },
    { t: "fig", x: "pt1-signs", cap: "The four types of safety signs by shape and colour." },
    { t: "table", head: ["Type", "Shape and colour", "Meaning"], rows: [["Prohibition", "Red circle with a red slash", "Something you must NOT do"], ["Warning", "Yellow triangle with a black border", "Danger ahead, take care"], ["Mandatory", "Blue circle with a white picture", "Something you MUST do, such as wear goggles"], ["Safe condition", "Green square or rectangle with a white picture", "Shows safe places, such as first aid or an exit"]] },
    { t: "h", x: "First aid" },
    { t: "p", x: "**First aid** is the help given to an injured person before a nurse or doctor arrives. Stay calm, keep yourself safe and tell the teacher at once." },
    { t: "ul", x: ["**Minor cut:** wash your hands, rinse the cut with clean water, press on it with a clean cloth to stop the bleeding, then cover it with a clean dressing.", "**Minor burn:** hold the burn under clean running water for about 10 minutes, then cover it loosely with a clean dressing. Do not burst blisters or put oil or butter on a burn.", "**Eye injury:** do not rub the eye. Rinse it with clean water. If something is stuck in the eye, do not try to pull it out; cover the eye lightly and take the learner for medical help."] },
    { t: "h", x: "Fire safety" },
    { t: "p", x: "A fire needs fuel, heat and air (oxygen). Putting out a fire means removing at least one of them. Choose the method that suits the kind of fire, because the wrong one can make it worse." },
    { t: "table", head: ["Type of fire", "Suitable method", "Do NOT use"], rows: [["Wood, paper, cloth", "Water", "-"], ["Oil, petrol or other liquids", "Foam, dry powder, carbon dioxide extinguisher, or smother with a fire blanket or tight lid", "Water, because the burning oil floats and spreads"], ["Electrical equipment", "Switch off the power first, then use carbon dioxide or dry powder", "Water, because it conducts electricity and can cause shock"]] },
    { t: "tip", x: "Common mistake: pouring water on a cooking oil fire or on an electrical fire. In the exam, say which fire it is and then give the matching method." },
    { t: "h", x: "Electrical safety" },
    { t: "ul", x: ["Switch off and unplug before cleaning or repairing equipment.", "Never touch switches or plugs with wet hands.", "Do not use cables with cracked or bare wires; report them.", "Do not overload a socket with many plugs.", "Never poke metal objects into sockets."] },
    { t: "h", x: "Classes of tools" },
    { t: "p", x: "Tools are grouped by the job they do. Knowing the class helps you choose the correct tool." },
    { t: "fig", x: "pt1-toolclass", cap: "The seven classes of tools with examples." },
    { t: "table", head: ["Tool", "Use"], rows: [["Steel rule, tape measure", "Measuring length"], ["Try square", "Marking and checking right angles"], ["Pair of compasses", "Drawing circles and arcs"], ["G-clamp, bench vice", "Holding work firmly"], ["Pliers", "Gripping, bending and cutting wire"], ["Hacksaw", "Cutting metal"], ["Chisel", "Cutting and shaping wood"], ["File", "Smoothing and shaping metal edges"], ["Claw hammer", "Driving nails in and pulling them out"], ["Mallet", "Striking a chisel and tapping joints together"], ["Screwdriver", "Turning screws in and out"], ["Bradawl, hand drill", "Making holes (boring)"]] },
    { t: "h", x: "Using, caring for and storing tools" },
    { t: "ol", x: ["Choose the right tool for the job. Using a screwdriver as a chisel can damage both the tool and the work.", "Check the tool before use. Do not use a loose handle or a mushroomed chisel head.", "Hold the work firmly in a clamp or vice so that it cannot slip.", "Clean the tool after use. Wipe metal parts and put a thin film of oil on them to stop rust.", "Sharpen cutting edges when they are blunt. A blunt tool needs more force and slips more easily.", "Store tools in a dry rack or tool box. Hang them or keep them in labelled places so that none get lost."] },
    { t: "p", x: "**Maintenance** means keeping tools clean, sharp and in good repair. It matters because well-kept tools work better, last longer, save money on replacements and cause fewer accidents." },
    { t: "tip", x: "Command words: **State** or **Name** needs only the answer. **Explain** needs the point and the reason. For a tool and use table, write the job the tool does, not a description of how it looks." }
  ],
  cards: [
    ["Hazard", "Anything in the workshop that can cause harm."],
    ["PPE", "Personal protective equipment: clothing and gear worn to protect the body, such as goggles and gloves."],
    ["Prohibition sign", "A red circle with a slash. It tells you what you must NOT do."],
    ["Warning sign", "A yellow triangle with a black border. It warns of danger."],
    ["Mandatory sign", "A blue circle with a white picture. It tells you what you MUST do."],
    ["Safe condition sign", "A green sign that shows safe places, such as first aid or an exit."],
    ["First aid", "Help given to an injured person before medical help arrives."],
    ["Fire triangle", "Fuel, heat and air. A fire goes out when one of them is removed."],
    ["Holding tools", "Tools that keep work firmly in place, such as a G-clamp and a bench vice."],
    ["Striking tools", "Tools used to hit, such as a claw hammer and a mallet."],
    ["Boring tools", "Tools used to make holes, such as a bradawl and a hand drill."],
    ["Tool maintenance", "Keeping tools clean, sharp, oiled and stored properly so that they last."]
  ],
  mcq: [
    { fig: "pt1-signs", q: "Baraka saw a blue circle with a white picture of goggles on the workshop door. What does the sign tell learners?", o: ["Goggles are not allowed here", "Goggles are sold here", "Goggles must be worn here", "Goggles are in the first aid box"], a: 2, e: "A blue circle is a mandatory sign. It tells you what you must do, so goggles must be worn." },
    { q: "Cooking oil in a pan catches fire in the school kitchen. What is the safest way to put it out?", o: ["Pour a bucket of water over it", "Cover it with a fire blanket or tight lid", "Fan it with a wet cloth", "Carry the pan outside quickly"], a: 1, e: "Covering cuts off the air. Water makes burning oil spread, and carrying a burning pan can cause burns." },
    { q: "Juma wants to keep a piece of timber from moving while he saws it. Which tool should he use?", o: ["G-clamp", "Mallet", "Try square", "Bradawl"], a: 0, e: "A G-clamp is a holding tool. It grips the timber firmly so that it cannot slip." },
    { q: "Which of the following is NOT a correct way of caring for tools?", o: ["Wiping them clean after use", "Oiling metal parts to stop rust", "Sharpening blunt cutting edges", "Leaving them on the floor after the lesson"], a: 3, e: "Tools left on the floor can be stepped on, damaged or lost, and they cause accidents. The other three are good care." },
    { q: "An electric kettle in the staffroom catches fire. If it is safe to do so, what should be done first?", o: ["Pour a jug of water on it", "Cover it with a wet cloth", "Switch off the electricity supply", "Carry it outside while burning"], a: 2, e: "Cutting the power removes the danger of shock and the source of the fire. Water on live electrical equipment is dangerous." },
    { q: "Which of the following is a boring tool?", o: ["Hacksaw", "Bradawl", "Mallet", "Try square"], a: 1, e: "A bradawl makes small holes in wood. A hacksaw cuts, a mallet strikes and a try square marks." },
    { q: "Four learners were asked what safety boots protect. Identify the learner who gave the correct response.", o: ["Juma said they protect the lungs from dust.", "Zainabu said they protect the eyes from chips.", "Baraka said they protect the ears from noise.", "Wanjiru said they protect the feet from falling objects."], a: 3, e: "Safety boots protect the feet. Dust masks protect the lungs, goggles the eyes and ear muffs the ears." },
    { fig: "pt1-signs", q: "A yellow triangle with a black border and an exclamation mark is fixed near the welding area. This is a ___ sign.", o: ["warning", "prohibition", "mandatory", "safe condition"], a: 0, e: "A yellow triangle with a black border is a warning sign. It tells people to take care." }
  ],
  short: [
    { q: "State four items of protective clothing or equipment used in a workshop and the part of the body that each protects.", marks: 4, pts: ["Goggles: eyes", "Dust mask: lungs (nose and mouth)", "Ear muffs: ears", "Gloves: hands", "Safety boots: feet", "Overall or apron: body and clothes"] },
    { q: "Outline three steps of giving first aid to a learner who has a minor burn on the hand.", marks: 3, pts: ["Cool the burn under clean running water for about 10 minutes", "Cover the burn loosely with a clean dressing", "Do not burst blisters or apply oil or butter", "Inform the teacher and take the learner for medical help if it is serious"] },
    { q: "Explain two reasons why tools should be cleaned, oiled and stored in a rack after use.", marks: 4, pts: [{ t: "To prevent rust (1) because oil keeps moisture away from the metal, so the tool lasts longer (1)", m: 2 }, { t: "To keep them in good working condition (1) so that work is done well and safely (1)", m: 2 }, { t: "To avoid accidents (1) because tools left lying around can cause cuts and falls (1)", m: 2 }, { t: "To avoid losing them (1) because each tool has a fixed place (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "Preparing a safe workshop for a tool-box project", tag: "Project",
      scenario: "Grade 8 learners at Masomo Junior School are to make a wooden tool box in the workshop. Their teacher asks them to prepare the room and the tools before they start.",
      parts: [
        { q: "(a) Identify two hazards the learners may meet in the workshop.", marks: 2, pts: ["Sharp tools left lying around", "Wood shavings or spills on the floor", "Flying wood chips and dust", "Loud noise from sawing and hammering", "Loose tool handles"] },
        { q: "(b) State the colour and shape of a mandatory sign, and give one example of what it could say.", marks: 2, pts: ["Blue circle", "Example: wear goggles / wear a dust mask / wear safety boots"] },
        { q: "(c) State the use of each of these tools: (i) try square, (ii) mallet, (iii) G-clamp.", marks: 3, pts: ["Try square: marking and checking right angles", "Mallet: striking a chisel or tapping joints together", "G-clamp: holding work firmly in place"] },
        { q: "(d) Explain one reason why the tools should be returned to a rack at the end of the lesson.", marks: 2, pts: [{ t: "Reason: so that tools are not lost or damaged (1 mark)", m: 1 }, { t: "Explanation: they are kept dry and in order, and no one trips over or is cut by tools on the floor (1 mark)", m: 1 }] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 2 */
{
  id: "pt-materials", grades: [7, 8, 9], subject: "pt", n: 2,
  title: "Materials and their properties",
  blurb: "Wood, metals, plastics, ceramics, glass, rubber, fibres and concrete, and how to choose the right one",
  notes: [
    { t: "h", x: "Natural and manufactured materials" },
    { t: "p", x: "A **material** is what an object is made of. **Natural materials** come from plants, animals or the ground with little change, such as timber, clay, cotton, wool and stone. **Manufactured materials** are made by people from other materials, such as plastic, glass, steel and cement." },
    { t: "h", x: "Wood (timber)" },
    { t: "p", x: "**Timber** is wood that has been cut and prepared for use. It is light, easy to cut and join, and cheaper than many metals. It is grouped into two kinds." },
    { t: "fig", x: "pt1-timber", cap: "Softwood and hardwood, with examples used in Kenya." },
    { t: "table", head: ["Feature", "Softwood", "Hardwood"], rows: [["Tree", "Conifer (cone-bearing) trees", "Broad-leaved trees"], ["Growth", "Grows fast", "Grows slowly"], ["Cost", "Usually cheaper", "Usually more costly"], ["Examples", "Pine, cypress, cedar", "Mvule, mahogany, eucalyptus"], ["Common uses", "Roof timber, doors, window frames, fencing posts", "Furniture, floors, poles, heavy-duty work"]] },
    { t: "p", x: "**Seasoning** is drying timber to remove extra moisture. Fresh timber is full of water. If it is used wet, it shrinks, warps, cracks or rots as it dries. Timber can be seasoned by stacking it in the open air with gaps for air to pass (natural seasoning) or by drying it in a kiln (artificial seasoning)." },
    { t: "h", x: "Metals" },
    { t: "p", x: "**Metals** are hard, shiny materials that conduct heat and electricity. They are grouped by whether they contain iron." },
    { t: "fig", x: "pt1-metals", cap: "Ferrous and non-ferrous metals." },
    { t: "ul", x: ["**Ferrous metals** contain iron: mild steel, cast iron and high carbon steel. Most of them rust.", "**Non-ferrous metals** contain no iron: copper, aluminium, zinc and lead. They do not rust. **Brass** is an alloy (a mixture of metals) of copper and zinc."] },
    { t: "p", x: "**Rusting** happens when iron or steel meets air (oxygen) and water for some time. A brown, flaky layer of iron oxide forms and weakens the metal. To prevent rust, keep iron and steel from air and water by:" },
    { t: "ul", x: ["painting it (clean the surface first)", "oiling or greasing moving parts and tools", "galvanising: coating it with zinc, as on iron roofing sheets", "keeping it dry in storage"] },
    { t: "h", x: "Other materials" },
    { t: "table", head: ["Material", "What it is", "Examples and uses"], rows: [["Plastics", "Manufactured from oil-based chemicals; light and water resistant; do not rust", "Water pipes, jerrycans, buckets, plug casings"], ["Ceramics", "Made from clay shaped and baked (fired) in a kiln; hard but brittle", "Floor tiles, bricks, pots, sinks"], ["Glass", "Made by heating sand with other substances; hard, see-through, brittle", "Windows, bottles, laboratory ware"], ["Rubber", "Natural rubber comes from the latex of the rubber tree; elastic and waterproof", "Tyres, shoe soles, hoses, electrical insulation"], ["Fibres", "Thin threads, natural (cotton, sisal, wool) or manufactured (nylon, polyester)", "Cloth, ropes, mats, sacks"]] },
    { t: "h", x: "Concrete" },
    { t: "fig", x: "pt1-concrete", cap: "Concrete is made from cement, sand, ballast and water, then cured." },
    { t: "p", x: "**Concrete** is a mixture of cement, sand, ballast and water. **Cement** is the binder, **sand** fills the small gaps, **ballast** (crushed stones) gives strength and **water** starts the hardening of the cement. A common mix is 1 part cement, 2 parts sand and 4 parts ballast. After placing, concrete must be **cured**: kept damp for several days so that it hardens fully and does not crack. It is used for floors, foundations, slabs and blocks." },
    { t: "h", x: "Properties of materials" },
    { t: "p", x: "A **property** describes how a material behaves. We choose a material by matching its properties to the job." },
    { t: "table", head: ["Property", "Meaning", "Example"], rows: [["Strength", "Ability to carry a load without breaking", "Steel beams"], ["Hardness", "Ability to resist scratching and wear", "Glass, high carbon steel"], ["Durability", "Ability to last a long time without wearing out", "Hardwood, concrete"], ["Elasticity", "Ability to return to shape after stretching", "Rubber"], ["Malleability", "Can be hammered or pressed into shape without breaking", "Aluminium, copper"], ["Ductility", "Can be drawn into a thin wire", "Copper"], ["Conductivity", "Allows heat or electricity to pass through", "Copper conducts; plastic and rubber do not (insulators)"], ["Water resistance", "Does not absorb or let water through", "Plastic, glass"], ["Density", "How heavy a material is for its size", "Steel is heavier than timber of the same size"]] },
    { t: "p", x: "**Choosing a material:** electric cables use copper because it is ductile and a good conductor, covered with plastic because plastic does not conduct. A water pipe is made of plastic because it does not rust and resists water." },
    { t: "h", x: "Sustainable use and recycling" },
    { t: "p", x: "**Sustainable use** means using materials so that they do not run out and the environment is not harmed. Ways to do this:" },
    { t: "ul", x: ["**Reduce**: use only what you need and avoid waste.", "**Reuse**: use items again, such as plastic bottles for seedlings.", "**Recycle**: process waste into new items, such as scrap metal and plastics.", "Plant new trees to replace those cut for timber.", "Dispose of waste properly; never burn plastic in the open."] },
    { t: "tip", x: "Exam technique: when asked to choose a material, name the material and give the property that makes it suitable. A material alone earns one mark; the reason earns the second." }
  ],
  cards: [
    ["Natural material", "A material that comes from plants, animals or the ground, such as timber or clay."],
    ["Manufactured material", "A material made by people, such as plastic, glass or steel."],
    ["Softwood", "Timber from conifer trees. It grows fast and is cheaper, for example pine and cypress."],
    ["Hardwood", "Timber from broad-leaved trees. It grows slowly and is usually costlier, for example mvule."],
    ["Seasoning", "Drying timber to remove extra moisture so it does not warp, shrink or rot."],
    ["Ferrous metal", "A metal that contains iron, such as mild steel. Most of them rust."],
    ["Non-ferrous metal", "A metal with no iron, such as copper or aluminium. It does not rust."],
    ["Rusting", "The brown flaky layer formed when iron or steel meets air and water."],
    ["Concrete", "A mixture of cement, sand, ballast and water that hardens into a strong material."],
    ["Malleability", "The ability to be hammered or pressed into shape without breaking."],
    ["Ductility", "The ability to be drawn out into a thin wire."],
    ["Recycling", "Processing waste materials to make new items."]
  ],
  mcq: [
    { q: "Learners visited a timber yard to identify different types of timber. Which of the following did they identify as a hardwood?", o: ["Pine", "Mvule", "Cypress", "Cedar"], a: 1, e: "Mvule comes from a broad-leaved tree and is a hardwood. Pine, cypress and cedar are softwoods." },
    { q: "Which of the following is a non-ferrous metal?", o: ["Mild steel", "Cast iron", "Aluminium", "High carbon steel"], a: 2, e: "Non-ferrous metals contain no iron. Aluminium has none; the other three contain iron." },
    { q: "Wanjiru's new iron gate in Nanyuki is exposed to rain. What is the best way to protect it from rusting?", o: ["Clean it and paint it", "Wash it every evening", "Leave the bare metal outside", "Wrap it in a wet cloth"], a: 0, e: "Paint keeps air and water away from the iron. Water and wet cloth make rusting faster." },
    { q: "Daima Traders are mixing concrete for a floor. Which ingredient acts as the binder?", o: ["Sand", "Ballast", "Water", "Cement"], a: 3, e: "Cement holds the other materials together. Sand fills gaps, ballast gives strength and water starts the hardening." },
    { q: "Zainabu wants to draw copper into a long thin wire. Which property of copper makes this possible?", o: ["Brittleness", "Hardness", "Ductility", "Elasticity"], a: 2, e: "Ductility is the ability to be drawn into a wire. Copper is ductile, so it is used for cables." },
    { q: "Juma is choosing a material for the handle of a screwdriver used by electricians. Which is the best choice?", o: ["Copper", "Plastic", "Aluminium", "Steel"], a: 1, e: "Plastic does not conduct electricity, so it protects the user from shock. The metals conduct electricity." },
    { q: "Four learners compared softwood and hardwood. Identify the learner who gave the correct response.", o: ["Baraka said softwood grows slowly and is always costlier.", "Zainabu said hardwood comes from conifer trees.", "Juma said both kinds are always very hard to cut.", "Wanjiru said softwood comes from conifer trees and grows fast."], a: 3, e: "Softwoods come from conifer trees and grow fast. Hardwoods come from broad-leaved trees and grow slowly." },
    { q: "Which of the following is NOT a sustainable way of using materials?", o: ["Burning waste plastic in the open", "Reusing plastic bottles", "Recycling scrap metal", "Planting trees to replace those cut"], a: 0, e: "Burning plastic pollutes the air and wastes the material. The others save resources." }
  ],
  short: [
    { q: "Identify two ferrous metals and two non-ferrous metals.", marks: 4, pts: ["Ferrous: mild steel", "Ferrous: cast iron", "Ferrous: high carbon steel", "Non-ferrous: copper", "Non-ferrous: aluminium", "Non-ferrous: zinc", "Non-ferrous: lead"] },
    { q: "Outline three ways of preventing rust on iron or steel tools.", marks: 3, pts: ["Painting", "Oiling or greasing", "Galvanising (coating with zinc)", "Keeping them dry in storage", "Plating with another metal"] },
    { q: "Explain two reasons why a new concrete floor should be kept damp for several days after it is laid.", marks: 4, pts: [{ t: "So that the cement can harden fully (1) because the hardening needs water (1)", m: 2 }, { t: "To prevent cracks (1) because rapid drying makes the surface shrink (1)", m: 2 }, { t: "To make it strong (1) so that it lasts a long time (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "Choosing materials for a school garden project", tag: "Case study",
      scenario: "Learners at Masomo Junior School are building a school garden. They will make a seat, a water pipe system and a metal gate. Their teacher asks them to choose the most suitable materials.",
      parts: [
        { q: "(a) Name two softwoods the learners could use to make the garden seat.", marks: 2, pts: ["Pine", "Cypress", "Cedar"] },
        { q: "(b) Name a suitable material for the water pipes and give one reason for your choice.", marks: 2, pts: ["Plastic", "It does not rust / it is water resistant / it is light and cheap"] },
        { q: "(c) The metal gate is made of mild steel. Explain why it may rust and state one way of preventing it.", marks: 2, pts: [{ t: "It contains iron, so when it meets air and water it rusts (1 mark)", m: 1 }, { t: "Prevention: painting, oiling or galvanising (1 mark)", m: 1 }] },
        { q: "(d) Outline two ways in which the learners can reuse waste materials in the garden.", marks: 2, pts: ["Use old plastic bottles or tins as seedling pots", "Use old tyres as flower beds or planters", "Make a compost heap from vegetable waste", "Use scrap wood to make labels or a fence"] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 3 */
{
  id: "pt-drawing", grades: [7, 8, 9], subject: "pt", n: 3,
  title: "Technical drawing and measurement",
  blurb: "Drawing instruments, lines, dimensions, scale, drawing types, shapes and units of length",
  notes: [
    { t: "h", x: "Drawing instruments" },
    { t: "p", x: "**Technical drawing** is drawing that shows exact sizes and shapes so that an item can be made from it. It needs correct instruments used carefully." },
    { t: "table", head: ["Instrument", "What it does"], rows: [["Pencil", "Draws lines. Hard grades (H, 2H) make light thin lines for construction. HB is medium. Soft grades (B) make dark thick lines"], ["Ruler", "Measures and draws straight lines"], ["T-square", "Draws horizontal lines and guides set squares"], ["Set squares", "Draw vertical and slanted lines, and angles, with the T-square"], ["Pair of compasses", "Draws circles and arcs"], ["Protractor", "Measures and draws angles in degrees"], ["Eraser", "Rubs out mistakes"]] },
    { t: "fig", x: "pt1-setsq", cap: "The two set squares: 45 degrees and 30 and 60 degrees. Each also has a 90 degree corner." },
    { t: "p", x: "Slide a set square along the edge of a T-square to draw parallel lines. With the 45 degree set square you can draw 45 degrees; with the other you can draw 30 and 60 degrees. Using both together gives 15 and 75 degrees." },
    { t: "h", x: "Types of line" },
    { t: "p", x: "Each type of line has its own meaning. Mixing them confuses the reader." },
    { t: "fig", x: "pt1-lines", cap: "Types of line used in technical drawing." },
    { t: "ul", x: ["**Outline**: thick continuous line that shows the visible edges of the object.", "**Hidden detail**: thin short dashes that show edges that cannot be seen.", "**Centre line**: thin line of long and short dashes through the centre of circles and holes.", "**Dimension line**: thin line with arrowheads that shows a measurement.", "**Projection line**: thin line that starts with a small gap from the object and extends past the dimension line."] },
    { t: "h", x: "Dimensioning" },
    { t: "p", x: "**Dimensioning** is writing measurements on a drawing. Without dimensions, the maker cannot know the sizes." },
    { t: "fig", x: "pt1-dims", cap: "Linear, diameter, radius and angular dimensions." },
    { t: "ul", x: ["**Linear**: length, width or height, written above the dimension line.", "**Diameter**: the distance across a circle through the centre, with the symbol Ø, for example Ø60.", "**Radius**: the distance from the centre to the edge, with the letter R, for example R30. A radius is half a diameter.", "**Angular**: the size of an angle in degrees, for example 60°."] },
    { t: "p", x: "Rules for reading and writing dimensions: put dimension lines outside the shape, write each size once, use the same unit throughout (usually millimetres, mm) and do not cross dimension lines." },
    { t: "h", x: "Scale" },
    { t: "p", x: "**Scale** is the ratio between a size on the drawing and the real size. A scale of **1:5** means 1 unit on the drawing stands for 5 units on the real object, so the drawing is smaller. **1:1** is full size. **2:1** means the drawing is twice the real size." },
    { t: "p", x: "**Worked example:** A table top is 120 cm long. It is drawn to a scale of 1:10. Drawing length = 120 ÷ 10 = **12 cm**. To go back, multiply: 12 × 10 = 120 cm." },
    { t: "h", x: "Types of drawing" },
    { t: "ul", x: ["**Two-dimensional (2D)** drawings show length and width only, for example a plan or one side view. They are flat.", "**Three-dimensional (3D)** drawings show length, width and height.", "**Pictorial drawings** show an object as it looks in one picture. Isometric drawings use lines at 30 degrees to the horizontal, oblique drawings show the front face true and the depth at an angle, and perspective drawings make far parts smaller."] },
    { t: "h", x: "Freehand sketching" },
    { t: "p", x: "**Freehand sketching** is drawing without instruments. It is quick and is used to record ideas. Steps:" },
    { t: "ol", x: ["Use squared or dotted paper to help keep lines straight and in proportion.", "Draw very light boxes for the overall length, width and height.", "Divide the box to place the main features, comparing sizes by eye.", "Darken the final outline and add details."] },
    { t: "h", x: "Shapes" },
    { t: "table", head: ["Group", "Shapes and key facts"], rows: [["Triangle (3 sides)", "Equilateral (3 equal sides), isosceles (2 equal sides), scalene (no equal sides), right-angled (one 90 degree angle). Angles add up to 180 degrees"], ["Quadrilateral (4 sides)", "Square, rectangle, parallelogram, rhombus, trapezium, kite. Angles add up to 360 degrees"], ["Other polygons", "Pentagon (5 sides), hexagon (6), heptagon (7), octagon (8)"]] },
    { t: "h", x: "Units of length and measuring" },
    { t: "table", head: ["Conversion", "Rule"], rows: [["cm to mm", "multiply by 10 (1 cm = 10 mm)"], ["m to cm", "multiply by 100 (1 m = 100 cm)"], ["m to mm", "multiply by 1000 (1 m = 1000 mm)"], ["mm to cm", "divide by 10"], ["cm to m", "divide by 100"]] },
    { t: "p", x: "**Worked example:** A plank is 2.4 m long. In centimetres: 2.4 × 100 = 240 cm. In millimetres: 2.4 × 1000 = 2400 mm." },
    { t: "p", x: "**Perimeter** is the distance around a shape. **Area** is the space inside it. For a rectangle: perimeter = 2 × (length + width); area = length × width." },
    { t: "p", x: "**Worked example:** A rectangular door is 2 m by 0.9 m. Perimeter = 2 × (2 + 0.9) = 2 × 2.9 = **5.8 m**. Area = 2 × 0.9 = **1.8 m²**." },
    { t: "tip", x: "Common mistake: forgetting the unit or mixing units in one calculation. Convert everything to the same unit first. Perimeter is in metres, centimetres or millimetres; area is in square units such as m²." }
  ],
  cards: [
    ["T-square", "An instrument that draws horizontal lines and guides set squares."],
    ["Set square", "A triangle-shaped instrument for drawing vertical and slanted lines and angles."],
    ["Protractor", "An instrument that measures and draws angles in degrees."],
    ["H pencil", "A hard pencil that makes light, thin lines. It is used for construction lines."],
    ["Outline", "The thick continuous line showing the visible edges of an object."],
    ["Hidden detail line", "A thin line of short dashes showing edges that cannot be seen."],
    ["Centre line", "A thin line of long and short dashes through the centre of a circle or hole."],
    ["Dimension line", "A thin line with arrowheads that shows a measurement."],
    ["Scale", "The ratio between a size on the drawing and the real size, such as 1:5."],
    ["Pictorial drawing", "A drawing that shows an object in one picture as it looks, such as an isometric drawing."],
    ["Perimeter", "The distance around the edge of a shape. For a rectangle: 2 times (length plus width)."],
    ["Area", "The space inside a shape. For a rectangle: length times width."]
  ],
  mcq: [
    { q: "Juma drew a line of long and short dashes through the middle of a circular washer. This line is called a", o: ["hidden detail line", "centre line", "projection line", "dimension line"], a: 1, e: "A thin line of long and short dashes through the centre of a circle or hole is a centre line." },
    { fig: "pt1-dims", q: "Zainabu saw Ø40 on a drawing of a disc. What does it show?", o: ["The radius is 40 mm", "The disc is 40 mm thick", "The diameter is 40 mm", "The angle is 40 degrees"], a: 2, e: "The symbol Ø means diameter, so the distance across the disc is 40 mm." },
    { q: "A shelf is 1.8 m long. What is its length in centimetres?", o: ["180 cm", "18 cm", "1800 cm", "0.18 cm"], a: 0, e: "1 m is 100 cm, so 1.8 × 100 = 180 cm." },
    { q: "Baraka made a rectangular notice board 90 cm long and 60 cm wide. What is its perimeter?", o: ["150 cm", "5400 cm", "210 cm", "300 cm"], a: 3, e: "Perimeter = 2 × (90 + 60) = 2 × 150 = 300 cm." },
    { q: "A drawing is made to a scale of 1:5. A line on the drawing is 8 cm long. What is the actual length?", o: ["13 cm", "1.6 cm", "40 cm", "8 cm"], a: 2, e: "The real object is 5 times bigger than the drawing: 8 × 5 = 40 cm." },
    { fig: "pt1-setsq", q: "Wanjiru wants to draw a 60 degree angle using only a set square. Which one should she use?", o: ["The 45 degree set square", "The 30 and 60 degree set square", "A T-square", "A ruler"], a: 1, e: "The 30 and 60 degree set square has a 60 degree corner. A 45 degree set square has 45 and 90 degree corners only." },
    { q: "Four learners described a pictorial drawing. Identify the learner who gave the correct response.", o: ["Juma said it is a flat drawing showing only one face.", "Zainabu said it shows only hidden edges.", "Baraka said it is a list of measurements.", "Wanjiru said it shows an object in a single picture as it looks."], a: 3, e: "A pictorial drawing shows the object as a single picture, giving an idea of its shape in three dimensions." },
    { q: "Which pencil is the best choice for drawing light construction lines?", o: ["2H", "4B", "2B", "HB"], a: 0, e: "H pencils are hard and make light, thin lines. B pencils are soft and make dark, thick lines." }
  ],
  short: [
    { q: "State four drawing instruments and the use of each.", marks: 4, pts: ["T-square: drawing horizontal lines", "Set square: drawing vertical and slanted lines and angles", "Compasses: drawing circles and arcs", "Protractor: measuring and drawing angles", "Ruler: measuring and drawing straight lines", "Pencil: drawing lines", "Eraser: rubbing out mistakes"] },
    { q: "Outline three rules to follow when dimensioning a drawing.", marks: 3, pts: ["Place dimension lines outside the shape", "Write each dimension only once", "Use the same unit throughout (for example mm)", "Use thin lines with arrowheads for dimension lines", "Do not let dimension lines cross"] },
    { q: "Explain two reasons why drawings are made to scale.", marks: 4, pts: [{ t: "Large objects such as buildings can be drawn on a small sheet of paper (1) so they fit on the page (1)", m: 2 }, { t: "Small objects can be enlarged (1) so that small details can be seen clearly (1)", m: 2 }, { t: "Real sizes can be worked out from the drawing (1) so the maker can build to the correct size (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "Designing a wooden notice board", tag: "Project",
      scenario: "The Journalism Club at Masomo Junior School wants a rectangular wooden notice board 1.2 m long and 0.8 m wide. Zainabu prepares a drawing before the board is made.",
      parts: [
        { q: "(a) Express the length of the board in (i) centimetres and (ii) millimetres.", marks: 2, pts: ["120 cm", "1200 mm"] },
        { q: "(b) Calculate the perimeter of the board in metres. Show your working.", marks: 2, pts: ["Perimeter = 2 × (1.2 + 0.8)", "= 4 m"] },
        { q: "(c) Calculate the area of the board. Show your working.", marks: 2, pts: ["Area = 1.2 × 0.8", "= 0.96 m²"] },
        { q: "(d) Zainabu draws the board to a scale of 1:10. Find the length of the drawing in centimetres.", marks: 2, pts: ["Length 1.2 m = 120 cm, and 120 ÷ 10", "= 12 cm"] }
      ]
    }
  ]
}

);
