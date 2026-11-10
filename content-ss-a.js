/* Social Studies - topics 1 to 4 (tagged for the grades they are drawn from; tags are provisional).
   Practice material written for this app in the style of KJSEA. Not copied from any KNEC paper.
   mcq: {q, o:[4 options], a:index of correct option, e:explanation, fig?}
   short / case parts: {q, marks, pts:[ "1 mark point" | {t:"point", m:2} ], fig?}
   notes blocks: h, p, ul, ol, fig, tip, table.  Use **bold** inside text. */
(window.CONTENT = window.CONTENT || []).push(

/* ------------------------------------------------------------------ 1 */
{
  id: "ss-map", grades: [7, 8, 9], subject: "ss", n: 1,
  title: "Map work and settlement patterns",
  blurb: "Direction, scale, symbols, features and why people settle where they do",
  notes: [
    { t: "h", x: "Why we use maps" },
    { t: "p", x: "A **map** is a drawing of an area as seen from above, drawn to scale. People use maps to find places, plan journeys, decide where to build roads, schools and hospitals, and study how land is used. **Map reading** means picking out information from a map. **Map interpretation** goes further: you explain what the information means, for example why people have settled in one place." },
    { t: "h", x: "Parts of a map" },
    { t: "ul", x: ["**Title**: tells you which area is shown.", "**Key**: explains every symbol. Always check it, because symbols can change from map to map.", "**Scale**: links distance on the map to distance on the ground.", "**North arrow or compass**: tells you direction.", "**Frame**: the border around the map."] },
    { t: "fig", x: "mapsymbols", cap: "Common map symbols. Always use the key on your own map." },
    { t: "tip", x: "A sketch map is a simple map drawn by hand. It still needs a title, a key, a scale and a north arrow. Learners lose easy marks by leaving these out." },
    { t: "h", x: "Direction" },
    { t: "p", x: "There are eight main directions. To say the direction of B from A, stand at **A** and look towards **B**. The most common mistake is to do it the other way round." },
    { t: "fig", x: "compass", cap: "The eight compass directions." },
    { t: "table", head: ["Direction", "Opposite direction"], rows: [["North (N)", "South (S)"], ["East (E)", "West (W)"], ["North-east (NE)", "South-west (SW)"], ["North-west (NW)", "South-east (SE)"]] },
    { t: "p", x: "**Example:** if the school is east of the church, then the church is **west** of the school. Both statements are true. The answer depends on which place you start from." },
    { t: "tip", x: "River flow: a river flows from high ground towards a lake or the sea. Look for where it starts (hills) and where it ends (lake or sea), then say, for example, **from east to west**." },
    { t: "h", x: "Scale and distance" },
    { t: "p", x: "A **statement scale** such as ‘1 cm represents 2 km’ means that every 1 cm on the map is 2 km on the ground." },
    { t: "ol", x: ["Measure the distance on the map in centimetres.", "Multiply by the kilometres each centimetre stands for.", "Write the answer with the unit."] },
    { t: "fig", x: "ss-scale", cap: "A worked example of changing map distance to ground distance." },
    { t: "p", x: "**Going the other way:** divide. If two villages are 18 km apart and the scale is 1 cm represents 3 km, the map distance is 18 ÷ 3 = **6 cm**." },
    { t: "p", x: "**Curved routes:** to measure a winding river or road, lay a piece of thread along it, straighten the thread, then measure the thread against the ruler." },
    { t: "p", x: "**Representative fraction (RF)** is another way to show scale. The RF 1:50,000 means 1 unit on the map is 50,000 of the same units on the ground. Because 1 km is 100,000 cm, 1 cm on the map is 50,000 cm, which is **0.5 km**." },
    { t: "table", head: ["Scale as a ratio", "1 cm on the map is"], rows: [["1:50,000", "0.5 km on the ground"], ["1:100,000", "1 km on the ground"], ["1:250,000", "2.5 km on the ground"]] },
    { t: "tip", x: "Check which kind of scale your question gives. Most KJSEA-style questions use a statement scale such as ‘1 cm represents 2 km’. Ask your teacher whether ratio scales are in your scheme of work." },
    { t: "h", x: "Physical and human features" },
    { t: "p", x: "**Physical features** are natural: rivers, lakes, hills, scrub. **Human features** are made by people: roads, buildings, farms. Features hint at economic activities:" },
    { t: "table", head: ["Feature on the map", "Likely economic activity"], rows: [["Tea or coffee symbols", "Crop farming"], ["Market", "Trading"], ["Cattle dip", "Livestock keeping"], ["Tree nursery, forest", "Forestry"], ["Lake or river", "Fishing, irrigation, water supply"], ["Hospital, school", "Service provision (health, education)"], ["Tarmac road", "Transport and trade"], ["Quarry", "Mining and building materials"]] },
    { t: "h", x: "Reading a sketch map step by step" },
    { t: "ol", x: ["Read the **title**: what area is it?", "Study the **key**: what does each symbol mean?", "Find the **north arrow** so you can give directions.", "Use the **scale** for any distance question.", "Name the features you can see, physical and human.", "Ask ‘why?’: why is the hospital there, why are the farms in the east?"] },
    { t: "h", x: "Settlement patterns" },
    { t: "fig", x: "settlement", cap: "The three main settlement patterns." },
    { t: "table", head: ["Pattern", "What it looks like", "Where you may find it"], rows: [["Nucleated", "Houses close together around a centre", "Around a market, hospital, water point or crossroads"], ["Linear", "Houses in a line", "Along a road, river or railway"], ["Dispersed", "Houses far apart", "Large farms or dry rangelands"]] },
    { t: "h", x: "Why people settle where they do" },
    { t: "table", head: ["Factor", "Why it attracts people"], rows: [["Water", "For drinking, farming, livestock and washing"], ["Fertile soil and good climate", "Crops grow well, so food is available"], ["Social services", "Schools and hospitals are close"], ["Transport", "Roads make it easy to trade and travel"], ["Security", "People feel safe from conflict and theft"], ["Flat or gently sloping land", "Easier and cheaper to build and farm"], ["Employment and trade", "People can earn an income"]] },
    { t: "p", x: "**Why some places have few settlements:** swamps and areas that flood, very steep land, thick forest, very dry areas with little water, areas with disease-carrying insects such as tsetse flies, and places with insecurity." },
    { t: "h", x: "Exam help" },
    { t: "tip", x: "**Command words.** **Identify** or **state**: name it, briefly, no explanation. **Describe**: say what you see or what happens. **Explain**: give the reason and say why it matters. **Suggest** or **highlight**: give sensible points that fit the situation. For a 2-mark ‘explain’, write one factor (1 mark) and its reason (1 mark)." },
    { t: "tip", x: "**Common mistakes.** (1) Forgetting the unit, for example writing ‘9’ instead of ‘9 km’. (2) Giving direction from the wrong place. (3) Naming a feature but not saying how it affects people. (4) Not using the key to check symbols." },
    { t: "h", x: "Key terms" },
    { t: "table", head: ["Term", "Meaning"], rows: [["Map", "A drawing of an area seen from above, drawn to scale"], ["Scale", "Link between map distance and ground distance"], ["Key", "Explains the symbols used on a map"], ["Settlement", "A place where people live"], ["Physical feature", "A natural feature"], ["Human feature", "A feature made by people"]] },
    { t: "tip", x: "**Remember this:** Read the title, key, scale and north arrow first. Distance on the ground = distance on the map × scale. Say direction by standing at the first place. Settlement patterns are nucleated, linear or dispersed, and each has a reason: water, services, transport, soil and security." }
  ],
  cards: [
    ["Map", "A drawing of an area seen from above, drawn to scale."],
    ["Key", "The part of a map that explains what each symbol means."],
    ["Scale", "The link between a distance on the map and the real distance on the ground."],
    ["Compass", "A tool or diagram that shows direction. It has eight main directions."],
    ["Physical feature", "A natural feature that people did not make, such as a hill or a lake."],
    ["Human feature", "A feature made by people, such as a road or a hospital."],
    ["Nucleated settlement", "Houses clustered closely around a centre such as a market or hospital."],
    ["Linear settlement", "Houses arranged in a line along a road, river or railway."],
    ["Dispersed settlement", "Houses scattered far apart from one another."],
    ["Map interpretation", "Explaining what the features on a map mean, not just naming them."],
    ["Frame", "The border around a map."],
    ["Statement scale", "A written scale such as 1 cm represents 2 km."],
    ["Representative fraction", "A scale shown as a ratio, such as 1:50,000. It means 1 unit on the map is 50,000 units on the ground."]
  ],
  mcq: [
    { fig: "ndovu", q: "Grade 9 learners studied the sketch map of Ndovu Valley. In which direction does the river flow?", o: ["From west to east", "From north to south", "From east to west", "From south to north"], a: 2, e: "The river starts near the hills in the east and ends in the lake in the west. Rivers flow downhill, so it flows from east to west." },
    { fig: "ndovu", q: "Using the map of Ndovu Valley, the hospital is in which direction from the market?", o: ["South-west", "North-east", "North-west", "South-east"], a: 0, e: "The hospital is to the left (west) and lower down (south) on the map, so it is south-west of the market." },
    { fig: "ndovu", q: "On the map of Ndovu Valley, the tea farms are mainly found in the", o: ["west", "south-west", "north-west", "east"], a: 3, e: "The tea symbols are on the right-hand side of the map, in the east, near the hills." },
    { q: "A map has the scale ‘1 cm represents 2 km’. Two towns are 4.5 cm apart on the map. What is the actual distance between them?", o: ["6.5 km", "9 km", "2.25 km", "4.5 km"], a: 1, e: "Multiply the map distance by the scale: 4.5 × 2 = 9 km." },
    { fig: "ndovu", q: "The houses clustered around the hospital in Ndovu Valley form a ___ settlement pattern.", o: ["linear", "nucleated", "dispersed", "scattered"], a: 1, e: "Houses grouped closely around a centre (here the hospital) make a nucleated pattern." },
    { fig: "ndovu", q: "Which of these is the most likely reason for the clustered settlement near the hospital?", o: ["The scrub vegetation in the south", "The hills in the east", "The tarmac road in the north", "Availability of health services and water from the nearby lake"], a: 3, e: "People settle near services and water. The hospital provides health care and the lake provides water." },
    { q: "A learner wants to find out what each symbol on a map stands for. Which part of the map should she use?", o: ["The key", "The scale", "The title", "The north arrow"], a: 0, e: "The key explains the meaning of symbols." },
    { fig: "ndovu", q: "Which pair contains only physical features on the map of Ndovu Valley?", o: ["Market and river", "Church and scrub", "Lake and hills", "Hospital and lake"], a: 2, e: "Lakes and hills are natural. A market, church and hospital are built by people." }
  ],
  short: [
    { fig: "ndovu", q: "Identify three economic activities that are likely to be carried out in Ndovu Valley.", marks: 3, pts: ["Tea farming (tea symbols in the east)", "Trading (the market)", "Fishing (the lake in the west)", "Providing health services (the hospital)", "Livestock keeping on the scrub area in the south", "Transport business along the tarmac road"] },
    { fig: "ndovu", q: "Explain one factor that has influenced the nucleated settlement in the western part of Ndovu Valley.", marks: 2, pts: [{ t: "Factor named: the hospital / services, OR the lake / water (1 mark)", m: 1 }, { t: "Explanation: people want to be close to health care or water, so they build their homes near it (1 mark)", m: 1 }] },
    { q: "The distance between a market and a church on a map is 2.5 cm. The scale is 1 cm represents 2 km. Calculate the actual distance. Show your working.", marks: 3, pts: ["Uses the scale: 1 cm = 2 km", "Multiplies correctly: 2.5 × 2", "Correct answer with unit: 5 km"] }
  ],
  cases: [
    {
      title: "A map study in Ndovu Valley", tag: "Case study", fig: "ndovu",
      scenario: "During a Social Studies lesson, Grade 9 learners studied the sketch map of Ndovu Valley. Use the map to answer the questions.",
      parts: [
        { q: "(a) State the direction of flow of the river.", marks: 1, pts: ["From east to west (towards the lake)"] },
        { q: "(b) Identify three physical features shown on the map.", marks: 3, pts: ["Lake", "River", "Hills", "Scrub vegetation"] },
        { q: "(c) Highlight two ways in which the tarmac road benefits the community.", marks: 2, pts: ["Easy transport of goods such as tea to the market", "Easy movement of people, including to the hospital", "Encourages trade and business along the road", "Allows services and visitors to reach the valley"] },
        { q: "(d) Explain one problem that people living near the river may face.", marks: 2, pts: [{ t: "Problem: floods during heavy rain (1 mark)", m: 1 }, { t: "Explanation: the land near rivers is low, so water covers it and damages houses and crops (1 mark)", m: 1 }, { t: "Alternative: water-borne diseases such as cholera or typhoid when river water is dirty (1) because people drink or wash in it (1)", m: 1 }] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 2 */
{
  id: "ss-pop", grades: [8, 9], subject: "ss", n: 2,
  title: "Population and rural-urban migration",
  blurb: "Population density, push and pull factors, and what fast-growing towns face",
  notes: [
    { t: "h", x: "Population and settlement" },
    { t: "p", x: "**Population** is the number of people living in an area. A **census** is an official count of all the people in a country, usually done every ten years. Kenya’s 2019 census counted about **47.6 million** people. About **31 percent** of them lived in urban areas." },
    { t: "p", x: "**Population distribution** is how people are spread across an area. **Population density** is the average number of people for each square kilometre." },
    { t: "h", x: "Calculating population density" },
    { t: "p", x: "**Density = population ÷ area (km²)**" },
    { t: "fig", x: "ss-density", cap: "Same area, different densities." },
    { t: "ol", x: ["Write the formula.", "Put in the population and the area.", "Divide.", "Write the answer with the unit: **people per km²**."] },
    { t: "p", x: "**Example 1:** 600,000 people in 300 km² gives 600,000 ÷ 300 = **2,000 people per km²**." },
    { t: "p", x: "**Example 2 (finding the population):** a town has a density of 500 people per km² and an area of 40 km². Population = density × area = 500 × 40 = **20,000 people**." },
    { t: "table", head: ["County (2019 census)", "People per km² (approximate)"], rows: [["Nairobi", "6,247"], ["Mombasa", "5,495"], ["Vihiga", "1,047"], ["Tana River", "8"], ["Marsabit", "6"]] },
    { t: "tip", x: "Notice the huge gap. Nairobi and Mombasa are very small in area but full of people. Marsabit and Tana River are large, dry or remote counties with few people. Densities are rounded and come from reports of the 2019 census." },
    { t: "h", x: "Why people live where they do" },
    { t: "ul", x: ["**Climate and rainfall**: people prefer areas with reliable rain and moderate temperatures.", "**Soils and water**: fertile soils and permanent water support farming and homes.", "**Relief**: flat or gently sloping land is easier to build on.", "**Transport and services**: roads, schools, hospitals and markets attract people.", "**Jobs and security**: industries, trade and peace attract people."] },
    { t: "p", x: "In Kenya, densely populated areas include the Lake Victoria basin, the central highlands and the coast around Mombasa. Large dry areas in the north have few people because water and reliable rainfall are scarce." },
    { t: "h", x: "Why populations change" },
    { t: "p", x: "A population grows when **births** are more than **deaths** and when more people **move in** than move out. It shrinks when deaths are more than births or more people leave. Migration matters most for towns, because many people move there from the countryside." },
    { t: "h", x: "Rural-urban migration" },
    { t: "p", x: "**Rural-urban migration** is the movement of people from the countryside to towns. People are **pushed** out by problems at home and **pulled** by attractions in town." },
    { t: "fig", x: "pushpull", cap: "Push and pull factors." },
    { t: "table", head: ["Push factors (rural area)", "Pull factors (town)"], rows: [["Shortage of land", "Jobs and business"], ["Drought and crop failure", "Schools and colleges"], ["Few jobs", "Hospitals and other services"], ["Poor roads and services", "Electricity, water and entertainment"], ["Insecurity", "Better housing and the hope of a higher income"]] },
    { t: "h", x: "Effects of rural-urban migration" },
    { t: "table", head: ["On the town", "On the rural area"], rows: [["Overcrowding and shortage of housing", "Shortage of labour on farms"], ["Growth of informal settlements with poor sanitation", "Less food produced"], ["Unemployment and crime", "Women, children and elderly left to do farm work"], ["Strain on water, schools and hospitals", "Money sent home (remittances) can help families"], ["Traffic jams and pollution", "Some schools and shops lose customers"]] },
    { t: "p", x: "**Urbanisation** is the growth of towns and the rise in the share of people who live in them. **Informal settlements** are crowded areas of simple housing with poor services. Examples in Nairobi include Kibera and Mathare." },
    { t: "h", x: "Reducing the problem" },
    { t: "ul", x: ["Improve roads, electricity and water in rural areas.", "Create jobs outside big cities, for example farm produce processing and small industries.", "Support farmers with inputs, markets and training.", "County governments plan towns and build affordable housing.", "Expand schools and hospitals in smaller towns so people do not need to travel far."] },
    { t: "h", x: "Exam help" },
    { t: "tip", x: "**Problems of fast-growing towns.** When a question describes a town that grew fast, the problems examiners expect are usually housing, health facilities, jobs, water and sewage, and crime. For ‘explain’, state the problem and the reason in the same sentence." },
    { t: "tip", x: "**Push or pull?** Ask yourself: is this a problem at home that makes people leave (push), or an attraction in town (pull)? ‘Jobs’ and ‘schools’ are pulls. ‘Drought’ and ‘shortage of land’ are pushes." },
    { t: "tip", x: "**Common mistakes.** (1) Dividing area by population instead of population by area. (2) Forgetting the unit ‘people per km²’. (3) Listing effects only for the town and forgetting the rural area." },
    { t: "h", x: "Key terms" },
    { t: "table", head: ["Term", "Meaning"], rows: [["Population", "Number of people living in an area"], ["Census", "An official count of all people in a country"], ["Population density", "People per square kilometre"], ["Migration", "Movement of people from one place to another"], ["Push factor", "A problem that makes people leave"], ["Pull factor", "An attraction that draws people in"], ["Urbanisation", "Growth of towns and share of people living in them"]] },
    { t: "tip", x: "**Remember this:** Density = population ÷ area. People settle where there is water, fertile land, services, transport, jobs and security. Push factors drive people out of rural areas and pull factors draw them to towns. Fast town growth brings housing, job, health, water and crime problems." }
  ],
  cards: [
    ["Population", "The total number of people living in an area."],
    ["Population density", "The average number of people for each square kilometre. Population ÷ area."],
    ["Settlement", "A place where people live, such as a village or a town."],
    ["Rural-urban migration", "The movement of people from the countryside to towns."],
    ["Push factor", "A problem in the home area that makes people leave, such as drought or lack of land."],
    ["Pull factor", "An attraction in a new area that draws people, such as jobs or schools."],
    ["Urbanisation", "The growth of towns and the increase in the share of people who live in them."],
    ["Informal settlement", "A crowded area of simple housing with poor services, often with little planning."],
    ["Remittance", "Money that migrants send home to their families."],
    ["Population distribution", "How people are spread out across an area."],
    ["Census", "An official count of all the people in a country, usually done every ten years."],
    ["Migration", "The movement of people from one place to another to live."],
    ["Natural population growth", "Growth that happens when births are more than deaths."]
  ],
  mcq: [
    { q: "A county has 450,000 people living in an area of 150 km². What is its population density?", o: ["300 people per km²", "30,000 people per km²", "600 people per km²", "3,000 people per km²"], a: 3, e: "Density = population ÷ area = 450,000 ÷ 150 = 3,000 people per km²." },
    { q: "Which of the following is a pull factor of a town?", o: ["Shortage of land", "Employment opportunities", "Prolonged drought", "Poor road network"], a: 1, e: "Jobs attract people to towns. The other three are problems that push people out of rural areas." },
    { q: "Which pair contains only push factors from rural areas?", o: ["Drought and shortage of land", "Jobs and better schools", "Electricity and drought", "Land shortage and better housing"], a: 0, e: "Drought and land shortage are problems that push people away. Jobs, schools, electricity and better housing are pulls." },
    { q: "Mwangaza town’s population doubled in ten years as people moved in from rural areas. Which pair of problems is the town most likely to face?", o: ["Too much farmland and low rent", "Few people and many empty schools", "Overcrowding and unemployment", "Less crime and light traffic"], a: 2, e: "Fast growth through migration usually leads to overcrowding, housing shortage and too few jobs." },
    { q: "Which effect of rural-urban migration is likely to be seen in the rural area left behind?", o: ["Overcrowded schools", "Traffic jams", "Shortage of farm labour", "Growth of informal settlements"], a: 2, e: "When young adults leave, there are fewer people to work on farms." },
    { q: "Which area of Kenya is most likely to have a very low population density?", o: ["The dry areas of northern Kenya", "The central highlands", "The Lake Victoria basin", "The coastal strip around Mombasa"], a: 0, e: "Dry areas have scarce water and unreliable rain, so few people settle there." },
    { q: "Money that workers in town send back to their families in rural areas is called", o: ["loans", "remittances", "taxes", "rent"], a: 1, e: "Money migrants send home is called remittances." },
    { q: "Which strategy would best reduce rural-urban migration?", o: ["Closing rural schools", "Banning farming", "Building roads only into the city", "Providing electricity, water and jobs in rural areas"], a: 3, e: "If rural areas offer jobs and services, fewer people feel pushed to leave." }
  ],
  short: [
    { q: "State four factors that influence the distribution of population in an area.", marks: 4, pts: ["Climate and reliable rainfall", "Fertile soils", "Availability of water", "Good transport network", "Security and peace", "Social services such as schools and hospitals", "Employment opportunities", "Relief: flat or gently sloping land"] },
    { q: "Describe three effects of rural-urban migration on a town.", marks: 6, pts: [{ t: "Housing shortage: demand is higher than the houses available (1) and informal settlements with poor sanitation grow (1)", m: 2 }, { t: "Unemployment: too many people look for few jobs (1) leading to idleness and crime (1)", m: 2 }, { t: "Strain on services: hospitals, schools and water supply are overstretched (1) causing long queues and shortages (1)", m: 2 }, { t: "Traffic congestion (1) and pollution from smoke and waste (1)", m: 2 }] },
    { q: "A sub-county has 320,000 people living in an area of 80 km². Calculate its population density. Show your working.", marks: 3, pts: ["States the formula: population ÷ area", "Substitutes correctly: 320,000 ÷ 80", "Correct answer with unit: 4,000 people per km²"] }
  ],
  cases: [
    {
      title: "Mwangaza town grows fast", tag: "Case study",
      scenario: "Mwangaza used to be a small trading centre. In ten years its population grew quickly because many people moved there from nearby rural areas. Grade 9 learners researched the town and found: not enough houses, long queues at the only hospital, many jobless youths and a growing informal settlement beside the river.",
      parts: [
        { q: "(a) Identify two reasons that may have attracted people to Mwangaza.", marks: 2, pts: ["Job opportunities", "Better social services such as schools and hospitals", "Business and market opportunities", "Better housing, electricity or water"] },
        { q: "(b) Explain two problems that Mwangaza faces because of its rapid growth.", marks: 4, pts: [{ t: "Shortage of housing, so informal settlements grow with poor sanitation (2)", m: 2 }, { t: "Strained health services, so patients wait long and drugs run out (2)", m: 2 }, { t: "Unemployment, which leads to crime and idleness (2)", m: 2 }, { t: "Pressure on water and sewage, which can spread disease (2)", m: 2 }] },
        { q: "(c) Suggest two ways the county government could improve the situation.", marks: 2, pts: ["Plan the town and build affordable housing", "Expand and equip the hospital", "Create jobs through small industries or business centres", "Improve water supply and sewage", "Develop rural areas so fewer people leave"] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 3 */
{
  id: "ss-env", grades: [8, 9], subject: "ss", n: 3,
  title: "Resources, environment and the Tana River",
  blurb: "Degradation, over-exploitation, conservation and the Seven Forks dams",
  notes: [
    { t: "h", x: "Natural resources" },
    { t: "p", x: "A **resource** is anything from the environment that people use: soil, water, forests, minerals and wildlife. **Renewable** resources (such as forests and fish) can regrow if managed well. **Non-renewable** resources (such as minerals and fuels) run out." },
    { t: "table", head: ["Renewable", "Non-renewable"], rows: [["Forests", "Minerals such as soda ash and fluorspar"], ["Fish", "Fossil fuels such as oil and coal"], ["Soil (if protected)", "Building stone"], ["Water, sunlight, wind", "Metals that are mined"]] },
    { t: "h", x: "Environmental degradation" },
    { t: "p", x: "**Environmental degradation** is damage to the environment that lowers its quality and usefulness." },
    { t: "table", head: ["Natural causes", "Human causes"], rows: [["Floods", "Deforestation"], ["Prolonged drought", "Overgrazing"], ["Landslides", "Mining and quarrying"], ["Volcanic eruptions, earthquakes", "Pollution, poor farming, uncontrolled settlement"]] },
    { t: "tip", x: "In multiple choice, check each pair. ‘Floods and prolonged drought’ are natural. ‘Overgrazing’, ‘deforestation’ and ‘mining’ are human activities." },
    { t: "fig", x: "ss-degrade", cap: "How clearing trees can start a cycle of damage." },
    { t: "h", x: "Over-exploitation" },
    { t: "p", x: "**Over-exploitation** is using a resource faster than it can renew itself. Effects: forests and fish stocks run low, wildlife is lost, soil erosion and desertification spread, rivers dry up, and people fight over what is left." },
    { t: "p", x: "**Kenya example:** forests act as ‘water towers’. Large forests on Mount Kenya, the Aberdare Range, the Mau complex, Mount Elgon and the Cherangani Hills help to feed Kenya’s rivers. When these forests are cleared, rivers lose water and soil washes into them. Kenya’s forest cover was reported as about **8.8 percent in 2021**, below the 10 percent target in the Constitution. The government has since set a goal of **30 percent tree cover**." },
    { t: "h", x: "Industries and settlement" },
    { t: "p", x: "Negative effects of industrial areas: air pollution from smoke, water pollution from factory waste, noise, solid waste, congestion, loss of farmland, pressure on housing and services, and health problems. Positive effects include jobs, taxes, and goods and services for people." },
    { t: "h", x: "Conserving the environment" },
    { t: "ul", x: ["**Afforestation**: planting trees where there were none. **Reafforestation**: replanting where trees were cut.", "Terracing and cover crops to hold the soil; controlled grazing.", "Sustainable harvesting of forests and fish; avoiding bush fires.", "Using gas or solar to reduce firewood use; tree nurseries.", "**Reduce, reuse, recycle** and proper waste disposal.", "Laws and bodies such as **NEMA** (National Environment Management Authority). An **Environmental Impact Assessment (EIA)** is done before big projects to find out how they may affect the environment."] },
    { t: "p", x: "**Examples of action in Kenya:** the ban on plastic carrier bags (2017), tree-planting campaigns by schools and communities, and the work of the **Green Belt Movement** started by Wangari Maathai." },
    { t: "table", head: ["Problem", "A way to reduce it"], rows: [["Soil erosion on slopes", "Terraces, cover crops, planting trees"], ["Cutting trees for fuel", "Biogas, solar, energy-saving jikos, tree nurseries"], ["Overgrazing", "Controlled grazing and rotating pastures"], ["Waste in streams", "Collection, sorting, recycling, penalties for dumping"], ["Factory pollution", "Treating waste, laws, inspections by NEMA"]] },
    { t: "h", x: "The Tana River projects" },
    { t: "p", x: "The **Tana** is Kenya’s longest river, about 1,000 km long. It rises on the slopes of the Aberdare Range and Mount Kenya and flows to the Indian Ocean. Five dams on its upper and middle course, called the **Seven Forks Scheme**, were built one after the other: Kindaruma (1968), Kamburu (1974), Gitaru (1978), Masinga (1981) and Kiambere (1988)." },
    { t: "fig", x: "tana", cap: "Dams on the Tana River from upstream to downstream." },
    { t: "tip", x: "Do not mix up the order. Going **downstream**, the dams are Masinga, Kamburu, Gitaru, Kindaruma, Kiambere. That is not the order in which they were built. **Masinga** stores the most water, which it passes to those below it." },
    { t: "ul", x: ["**Purposes:** hydroelectric power (HEP), flood control, irrigation (for example the Bura scheme lower down the river), water supply, fishing and jobs.", "**Why the Tana was chosen:** the river flows all year, its course drops steeply (good for HEP), Kenya needed more electricity, the dry east needed irrigation, and the government found funding."] },
    { t: "table", head: ["Benefits of the dams", "Problems caused by the dams"], rows: [["Electricity for homes and industry", "People and farms were moved to make room for reservoirs"], ["Water is stored for dry months", "Silt from eroded land fills the reservoirs"], ["Floods can be reduced", "Releasing water in heavy rain can flood areas downstream"], ["Fishing and jobs around the reservoirs", "Less water and silt may reach the lower river and delta"]] },
    { t: "p", x: "**Link to conservation:** when forests in the Tana’s catchment (the area that drains into it) are cleared, soil washes into the river and fills the dams with silt. That reduces water storage and the electricity that can be made. Protecting the forests protects the dams." },
    { t: "h", x: "Exam help" },
    { t: "tip", x: "**Command words.** **State** or **identify**: one short point. **Explain**: reason plus effect. **Suggest**: sensible solutions that fit the case. For a Tana River question, always link the dams to a purpose, a benefit or a problem, not just names." },
    { t: "tip", x: "**Common mistakes.** (1) Putting a human cause under natural causes. (2) Saying ‘afforestation’ when trees were cut and replanted (that is reafforestation). (3) Giving the dams in the order they were built instead of upstream to downstream. (4) Giving only the benefits of a project when the question asks for problems." },
    { t: "h", x: "Key terms" },
    { t: "table", head: ["Term", "Meaning"], rows: [["Resource", "Anything from the environment that people use"], ["Degradation", "Damage that lowers the quality of the environment"], ["Over-exploitation", "Using a resource faster than it can renew"], ["Conservation", "Protecting and using resources wisely"], ["Catchment", "The area from which water drains into a river"], ["HEP", "Hydroelectric power: electricity made from flowing water"]] },
    { t: "tip", x: "**Remember this:** Natural causes are floods, drought and landslides. Human causes are deforestation, overgrazing, mining and pollution. Conserve by planting trees, protecting soil, recycling and following the law (NEMA, EIA). On the Tana, going downstream: Masinga, Kamburu, Gitaru, Kindaruma, Kiambere. They give power, flood control and irrigation, but silt and displacement are problems." }
  ],
  cards: [
    ["Resource", "Something from the environment that people use, such as soil, water or forests."],
    ["Renewable resource", "A resource that can regrow or refill if managed well, such as forests."],
    ["Non-renewable resource", "A resource that cannot be replaced once used, such as minerals."],
    ["Environmental degradation", "Damage to the environment that lowers its quality and usefulness."],
    ["Deforestation", "Clearing forests or trees faster than they grow back."],
    ["Overgrazing", "Keeping too many animals on land so the grass cannot recover."],
    ["Afforestation", "Planting trees where there were none."],
    ["Reafforestation", "Replanting trees in a place where they were cut down."],
    ["Over-exploitation", "Using a resource faster than it can renew itself."],
    ["HEP", "Hydroelectric power: electricity made from flowing or stored water."],
    ["EIA", "Environmental Impact Assessment: a study of how a project may affect the environment."],
    ["NEMA", "National Environment Management Authority, which helps to protect Kenya’s environment."],
    ["Catchment area", "The land from which rain and streams drain into a river or dam."],
    ["Water tower", "A large forested highland, such as Mount Kenya, from which rivers flow."],
    ["Siltation", "The filling of rivers and dams with soil washed down from the land."]
  ],
  mcq: [
    { q: "Which pair contains only natural causes of environmental degradation?", o: ["Floods and prolonged drought", "Deforestation and floods", "Overgrazing and drought", "Mining and landslides"], a: 0, e: "Floods and drought occur naturally. Deforestation, overgrazing and mining are caused by people." },
    { q: "Planting trees in an area where there were no trees before is called", o: ["reafforestation", "deforestation", "afforestation", "terracing"], a: 2, e: "Afforestation is planting where there was no forest. Reafforestation is replanting where trees were cut." },
    { q: "A community cut down many trees along a river to make charcoal. What is a likely result?", o: ["More rainfall in the whole region", "Soil erosion and silting of the river", "A bigger wildlife population near the river", "Formation of deeper fertile soil on the banks"], a: 1, e: "Without tree roots, soil is washed into the river, causing erosion and silting." },
    { fig: "tana", q: "Which is the correct order of dams on the Tana River from upstream to downstream?", o: ["Kamburu, Masinga, Gitaru, Kiambere, Kindaruma", "Kiambere, Kindaruma, Gitaru, Kamburu, Masinga", "Gitaru, Kamburu, Masinga, Kindaruma, Kiambere", "Masinga, Kamburu, Gitaru, Kindaruma, Kiambere"], a: 3, e: "Masinga is highest upstream and Kiambere is the furthest downstream of the five." },
    { q: "Which of the following was NOT an aim of the Tana River projects?", o: ["Generating hydroelectric power", "Irrigation", "Flood control", "Producing petroleum"], a: 3, e: "The dams generate electricity, supply irrigation and water, and help control floods. They do not produce petroleum." },
    { q: "Which of the following is a negative effect of industries in a settled area?", o: ["Creation of jobs for local people", "Water pollution from factory waste", "Development of roads and transport links", "A ready market for farm produce"], a: 1, e: "Jobs, roads and markets are benefits. Pollution of rivers by factory waste is a harm." },
    { q: "A school environmental club wants to reduce waste. Which activity is best?", o: ["Burning all waste in the open", "Burying all waste near the classrooms", "Sorting waste and recycling paper and plastic", "Throwing waste into the stream"], a: 2, e: "Sorting and recycling follows the reduce, reuse, recycle approach and avoids pollution." },
    { q: "Using a resource faster than it can renew itself is called", o: ["over-exploitation", "conservation", "afforestation", "recycling"], a: 0, e: "That is the meaning of over-exploitation." }
  ],
  short: [
    { q: "Outline five ways in which a community can care for vegetation.", marks: 5, pts: ["Plant trees (afforestation and reafforestation)", "Avoid and put out bush fires", "Control grazing and avoid overgrazing", "Protect forests from illegal logging", "Use gas, solar or energy-saving stoves to reduce firewood use", "Set up tree nurseries", "Educate the community on caring for vegetation"] },
    { q: "State four effects of over-exploitation of forest resources.", marks: 4, pts: ["Soil erosion", "Reduced rainfall or changes in climate", "Loss of wildlife habitats and of animal and plant species", "Drying up of rivers and springs", "Shortage of timber and firewood", "Floods and landslides", "Desertification"] },
    { q: "Give four factors that led to the establishment of the Tana River projects.", marks: 4, pts: ["The river has water all year round", "The river drops steeply, which is good for generating HEP", "Demand for electricity was growing", "Need for irrigation in the dry areas of eastern Kenya", "Need to control floods", "Government support and funding from partners"] }
  ],
  cases: [
    {
      title: "Restoring the school compound", tag: "Project",
      scenario: "The environmental club at Mazingira Junior School noticed litter everywhere in the compound, bare patches of ground, and a gully forming near the football field after every rain. The club decided to carry out a project to restore the compound.",
      parts: [
        { q: "(a) Identify two environmental problems in the school compound from the story.", marks: 2, pts: ["Litter or poor waste disposal", "Bare ground / loss of vegetation", "Soil erosion and gully formation"] },
        { q: "(b) Describe two actions the club can take to stop the gully from growing.", marks: 4, pts: [{ t: "Plant grass and trees (1) because roots hold the soil together (1)", m: 2 }, { t: "Build stone lines or terraces (1) to slow down running water (1)", m: 2 }, { t: "Dig a drainage channel (1) to direct rainwater away safely (1)", m: 2 }, { t: "Fill the gully with stones and soil (1) and plant on top (1)", m: 2 }] },
        { q: "(c) State two ways the club can involve the whole school.", marks: 2, pts: ["Announce the project at assembly and put up posters", "Hold a school clean-up or tree-planting day", "Give each class a part of the compound to look after", "Involve parents and the board of management", "Run a competition for the cleanest class"] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 4 */
{
  id: "ss-early", grades: [7, 9], subject: "ss", n: 4,
  title: "Early humans and ancient Egypt",
  blurb: "The Stone Age, settling down, the Nile and our historical sites",
  notes: [
    { t: "h", x: "How do we know about the past?" },
    { t: "p", x: "**History** is the study of the past. We learn about early humans from several sources:" },
    { t: "ul", x: ["**Archaeology**: scientists called **archaeologists** dig up and study tools, bones and other remains.", "**Fossils and artefacts**: a **fossil** is the remains of a plant or animal preserved in rock. An **artefact** is an object made by people, such as a stone tool.", "**Oral tradition**: stories passed down by word of mouth.", "**Written records**: documents, books and inscriptions."] },
    { t: "p", x: "Scientists can estimate the age of remains using methods such as **radiocarbon dating**, which works on remains of once-living things up to about 50,000 years old. For much older finds, they use the age of the rock layers." },
    { t: "h", x: "The Stone Age" },
    { t: "p", x: "The **Stone Age** is the long period when people made most of their tools from stone. It is divided into three stages." },
    { t: "table", head: ["Stage", "How people lived"], rows: [["Early", "Hunted small animals, gathered wild fruits and roots, made crude tools such as hand axes, lived in caves or under trees"], ["Middle", "Controlled fire for warmth, cooking and scaring away animals (as school books usually describe it); made better tools"], ["Late", "Made small, sharp tools, bows and arrows; fished; painted on rocks; buried the dead. At the end of this stage people began to keep animals and grow crops"]] },
    { t: "fig", x: "ss-stoneage", cap: "The Stone Age stages and the start of farming." },
    { t: "tip", x: "Scientists have found signs of controlled fire much earlier than school books suggest, and the exact dates are debated. For your exam, learn the stage your course book gives, and remember that **fire** helped people stay warm, cook, scare animals and stay safe at night." },
    { t: "p", x: "**Activities of early humans:** hunting, gathering, fishing, making tools, making fire, building shelters, rock painting and burying the dead." },
    { t: "h", x: "Kenya and the story of early humans" },
    { t: "p", x: "Kenya is often called a ‘cradle of humankind’ because scientists have found some of the oldest evidence of early humans here. Important sites include:" },
    { t: "table", head: ["Site", "What it is known for"], rows: [["Koobi Fora (east of Lake Turkana)", "Fossils of early humans and stone tools more than two million years old"], ["Olorgesailie (Kajiado County)", "Known as a ‘factory of stone tools’, with very many ancient stone tools"], ["Hyrax Hill (near Nakuru)", "Mostly later remains: Late Stone Age and Iron Age, including house remains, burial mounds and a bao game board carved in rock"]] },
    { t: "p", x: "Another famous find is the skeleton of ‘**Turkana Boy**’, found at Nariokotome, near Lake Turkana. **Olduvai Gorge** is also famous, but it is in **Tanzania**, not Kenya. The **National Museums of Kenya** looks after many of these finds." },
    { t: "h", x: "From moving around to settling" },
    { t: "p", x: "When wild animals and fruits ran low, people learned to grow crops and keep animals. This is called **domestication**. Steps that followed:" },
    { t: "ol", x: ["Farming and herding produced a **surplus** of food.", "People stayed in one place and built villages.", "Populations grew and people shared jobs (**division of labour**).", "Trade, towns and leaders developed."] },
    { t: "table", head: ["Before farming (hunter-gatherers)", "After farming"], rows: [["Moved from place to place (nomads)", "Settled in villages"], ["Food depended on what could be found", "Food could be stored and shared"], ["Small groups", "Larger communities"], ["Everyone did similar work", "Different jobs: farmers, herders, potters, traders"]] },
    { t: "h", x: "Ancient Egypt" },
    { t: "p", x: "Egypt grew along the **River Nile** in north-eastern Africa. It is often called ‘the gift of the Nile’. Factors behind its growth:" },
    { t: "fig", x: "ss-nile", cap: "Egypt: a green strip of farmland along the Nile, with desert on both sides." },
    { t: "ul", x: ["The Nile’s yearly floods left **fertile silt**.", "Water for **irrigation** turned desert edges into farmland.", "A strong central government under the **Pharaoh**.", "Trade by river and with neighbours.", "Deserts on both sides gave natural protection."] },
    { t: "tip", x: "Egypt is mostly desert. Heavy rainfall was never a reason for its growth. This is a common ‘except’ question." },
    { t: "p", x: "**Contributions:** hieroglyphic writing on papyrus, a 365-day calendar, mathematics and geometry (used to re-measure land after floods), pyramids, mummification and medical knowledge." },
    { t: "table", head: ["Contribution", "Why it mattered"], rows: [["Hieroglyphics and papyrus", "Records of laws, taxes, religion and history"], ["Calendar of 365 days", "Helped farmers plan for the flood and planting seasons"], ["Geometry", "Re-marking farm boundaries after floods; planning buildings"], ["Pyramids", "Tombs for pharaohs; show skill in building and organisation"], ["Mummification", "Preserving bodies; increased knowledge of the human body"]] },
    { t: "h", x: "Museums and historical monuments" },
    { t: "p", x: "A **museum** is a building where objects of history and culture are kept and displayed. A **historical monument** is a structure or site protected because of its importance in history, for example **Fort Jesus** (Mombasa), the **Gedi ruins** (Kilifi), the **Giza pyramids** (Egypt) and **Great Zimbabwe** (Zimbabwe)." },
    { t: "ul", x: ["Why protect them: they teach us about the past, attract tourists and bring income, and are part of national identity.", "Threats: vandalism, littering, weather, uncontrolled building, and lack of care.", "How to care for them: laws and guards, repair work, education, and visiting responsibly without damaging or writing on them."] },
    { t: "h", x: "Exam help" },
    { t: "tip", x: "**Command words.** **Name** or **state**: a short answer. **Describe**: say how people lived or what happened. **Explain**: give reasons. **Discuss** or **suggest**: give points with reasons. In an ‘except’ question, find the one choice that does not fit." },
    { t: "tip", x: "**Common mistakes.** (1) Putting Olduvai Gorge in Kenya. (2) Saying Egypt grew because of heavy rain. (3) Mixing up fossils (remains) and artefacts (made objects). (4) Mixing up domestication, surplus and division of labour." },
    { t: "h", x: "Key terms" },
    { t: "table", head: ["Term", "Meaning"], rows: [["Archaeologist", "A scientist who digs up and studies remains of the past"], ["Artefact", "An object made by people"], ["Fossil", "Remains of a plant or animal preserved in rock"], ["Domestication", "Growing crops and keeping animals"], ["Surplus", "More than is needed, which can be stored or traded"], ["Division of labour", "People doing different jobs"], ["Pharaoh", "The ruler of ancient Egypt"]] },
    { t: "tip", x: "**Remember this:** We learn about early humans from archaeology and other sources. The Stone Age has Early, Middle and Late stages. Kenya has Koobi Fora, Olorgesailie and Hyrax Hill, but Olduvai is in Tanzania. Farming brought surplus, villages and division of labour. Egypt grew because of the Nile’s silt, irrigation, a strong pharaoh and desert protection, not heavy rain." }
  ],
  cards: [
    ["Stone Age", "The long period when people made most of their tools from stone."],
    ["Archaeologist", "A scientist who digs up and studies remains and tools of past people."],
    ["Artefact", "An object made by people in the past, such as a tool or a pot."],
    ["Domestication", "Taming and keeping animals and growing plants for human use."],
    ["Nomad", "A person who moves from place to place looking for food or pasture."],
    ["Surplus", "More food than people need right away, which can be stored or traded."],
    ["Division of labour", "People doing different jobs depending on their skills."],
    ["Pharaoh", "The king and ruler of ancient Egypt."],
    ["Papyrus", "A paper-like material the Egyptians made from a river plant and wrote on."],
    ["Hieroglyphics", "The picture-writing system of ancient Egypt."],
    ["Historical monument", "A structure or site protected because of its importance in history."],
    ["Silt", "Fine, fertile soil left on the land when a river floods."],
    ["Fossil", "The remains of a plant or animal preserved in rock."],
    ["Oral tradition", "History passed from one generation to the next by word of mouth."],
    ["Radiocarbon dating", "A way of estimating the age of remains of once-living things, up to about 50,000 years old."]
  ],
  mcq: [
    { q: "Which of the following was a benefit of fire to early humans?", o: ["Making stone tools", "Scaring away wild animals", "Growing crops", "Writing messages"], a: 1, e: "Fire gave warmth and light, cooked food and scared away wild animals." },
    { q: "Which development allowed people to settle permanently in one place?", o: ["Hunting wild animals every day", "Moving about to gather wild fruits", "Making stone tools", "Growing crops and keeping animals"], a: 3, e: "With food from farms and herds close by, people no longer had to keep moving." },
    { q: "Which of the following is a Stone Age site in Kenya?", o: ["Olduvai Gorge", "Giza", "Olorgesailie", "Great Zimbabwe"], a: 2, e: "Olorgesailie is in Kajiado County. Olduvai Gorge is in Tanzania, Giza is in Egypt and Great Zimbabwe is in Zimbabwe." },
    { q: "Which factor did NOT contribute to the growth of ancient Egypt?", o: ["Heavy equatorial rainfall", "Annual flooding of the Nile", "Strong leadership under the Pharaoh", "Fertile soils along the Nile"], a: 0, e: "Egypt is a desert country. It grew because of the Nile, not heavy rainfall." },
    { q: "The writing system of the ancient Egyptians was called", o: ["hieroglyphics", "cuneiform", "Latin script", "Arabic script"], a: 0, e: "Egyptians used hieroglyphics, a system of pictures and signs, often written on papyrus." },
    { q: "Fort Jesus in Mombasa and the Gedi ruins in Kilifi are examples of", o: ["museums", "national parks", "historical monuments", "game reserves"], a: 2, e: "They are protected sites with historical importance." },
    { q: "A scientist who digs up and studies tools and remains of past people to learn about them is called an", o: ["geologist", "economist", "astronomer", "archaeologist"], a: 3, e: "Archaeologists study artefacts and remains from the past." },
    { q: "‘Division of labour’ in early farming communities meant that", o: ["everyone did exactly the same work all year", "people did different jobs according to their skills", "only the chief and his family worked", "no one needed to work"], a: 1, e: "When there was a food surplus, some people could specialise as craftsmen, traders or leaders." }
  ],
  short: [
    { q: "Give four activities of early humans during the Stone Age that learners may learn about during a visit to a pre-historic site.", marks: 4, pts: ["Hunting", "Gathering wild fruits and roots", "Fishing", "Making stone tools", "Making and using fire", "Building shelters", "Painting on rocks", "Burying the dead"] },
    { q: "Explain three ways in which the River Nile helped the growth of ancient Egypt.", marks: 6, pts: [{ t: "Yearly floods left fertile silt (1) which gave good harvests (1)", m: 2 }, { t: "Water for irrigation (1) allowed farming along the edge of the desert (1)", m: 2 }, { t: "Transport by boat along the river (1) helped trade and united the kingdom (1)", m: 2 }, { t: "Fish and fresh water for people and animals (1) supported a large population (1)", m: 2 }] },
    { q: "Outline three consequences of the domestication of plants and animals.", marks: 3, pts: ["People settled in one place and built villages", "A surplus of food was produced", "Population increased", "Division of labour and trade developed", "Some people became wealthier than others"] }
  ],
  cases: [
    {
      title: "A visit to historical sites", tag: "Case study",
      scenario: "Grade 9 learners visited the National Museum in Nairobi and the Gedi ruins in Kilifi County on an educational trip. They took notes and later made a class display.",
      parts: [
        { q: "(a) Distinguish between a museum and a historical monument.", marks: 2, pts: ["A museum is a building where objects of history and culture are kept and displayed (1)", "A historical monument is a structure or site protected because of its importance in history (1)"] },
        { q: "(b) State two reasons why historical sites should be preserved.", marks: 2, pts: ["To learn about the past", "They attract tourists and earn income", "They are part of our national heritage and identity", "They are used for education and research"] },
        { q: "(c) Describe two ways learners can help protect historical sites.", marks: 2, pts: ["Not writing on or damaging walls", "Not removing or taking artefacts", "Reporting vandalism to the authorities", "Joining heritage or history clubs", "Teaching others why the sites matter"] }
      ]
    }
  ]
}

);
