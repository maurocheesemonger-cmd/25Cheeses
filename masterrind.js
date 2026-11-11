// MasterRind: simulación de la ronda final del Young Cheesemonger of the Year.
// 8 sobres; cada sobre = 10 preguntas (4 de los 25 quesos, 3 de Level 1,
// 2 de patrocinadores / Academy of Cheese, 1 de los World Cheese Awards).
// Todo el contenido está en inglés. Usa data.js y data-en.js sin modificarlos.
(() => {
  const { routes, view, $, esc, shuffle } = window.APP;
  const MISTAKES_KEY = "25cheeses-masterrind-mistakes";
  const TIMER_KEY = "25cheeses-masterrind-timer";
  const SECONDS = 30;

  // ---------- Banco de preguntas: [pregunta, respuesta, [3 distractores], explicación] ----------
  const BANK = {
    general: [
      ["What does rennet do?", "Coagulates the milk", ["Converts lactose into lactic acid", "Gives the rind its colour", "Stops moulds growing on the rind"],
        "Rennet's enzyme chymosin acts on the casein proteins so the milk sets into a curd."],
      ["What do starter cultures do?", "Convert lactose into lactic acid", ["Coagulate the milk proteins", "Create the blue veins", "Remove the whey from the curd"],
        "Starter bacteria ferment lactose into lactic acid, acidifying the milk."],
      ["What is standard HTST pasteurisation?", "72°C for 15 seconds", ["63°C for 15 seconds", "85°C for 30 minutes", "100°C for 1 second"],
        "High Temperature Short Time: 72°C for 15 seconds."],
      ["What does PDO stand for?", "Protected Designation of Origin", ["Protected Dairy Origin", "Product Designated by Origin", "Primary Designation of Origin"],
        "PDO = Protected Designation of Origin: everything is produced, processed and prepared in the defined area."],
      ["What does PGI stand for?", "Protected Geographical Indication", ["Protected Geographical Identity", "Protected Grazing Indication", "Product of Geographical Interest"],
        "PGI = Protected Geographical Indication: at least one stage of production takes place in the defined area."],
      ["Which mould creates the white bloomy rind of Brie and Camembert?", "Penicillium candidum", ["Penicillium roqueforti", "Brevibacterium linens", "Aspergillus niger"],
        "Penicillium candidum (camemberti) forms the white bloomy rind."],
      ["Which mould is used in blue cheeses?", "Penicillium roqueforti", ["Penicillium candidum", "Brevibacterium linens", "Geotrichum candidum"],
        "Penicillium roqueforti creates the blue veins."],
      ["Which bacteria give washed-rind cheeses their orange colour and strong aroma?", "Brevibacterium linens", ["Penicillium candidum", "Lactococcus lactis", "Penicillium roqueforti"],
        "Washing the rind encourages Brevibacterium linens: orange, sticky and pungent."],
      ["Why are blue cheeses pierced with needles?", "To let air in so the blue mould can grow", ["To release excess whey", "To help the salt penetrate", "To stop the cheese collapsing"],
        "Penicillium roqueforti needs oxygen: piercing lets air into the paste."],
      ["What is 'cheddaring'?", "Stacking and turning slabs of curd to drain whey and develop acidity", ["Wrapping the cheese in lard-soaked cloth", "Stretching the curd in hot water", "Washing the curd with water"],
        "Cheddaring stacks and turns blocks of curd so whey drains and acidity develops."],
      ["What is 'pasta filata'?", "Curd stretched in hot water (e.g. Mozzarella)", ["Curd washed with water (e.g. Gouda)", "Cheese rolled in ash (e.g. Morbier)", "Curd cooked to 55°C and pressed (e.g. Parmigiano)"],
        "Pasta filata = 'pulled curd': the curd is stretched in hot water, as in Mozzarella."],
      ["What is a washed-curd cheese?", "Some whey is replaced with water to reduce acidity (e.g. Gouda)", ["The rind is washed with brine (e.g. Époisses)", "The curd is rinsed with whey from the previous day", "The curd is soaked in brine before moulding"],
        "Washing the curd removes lactose, so less acid develops: sweeter cheeses such as Gouda."],
      ["What are the five simple flavours in the SATC?", "Sweet, salty, sour, bitter, umami", ["Sweet, salty, sour, bitter, spicy", "Sweet, salty, acidic, creamy, umami", "Sweet, sour, bitter, nutty, umami"],
        "The Systematic Approach to Tasting Cheese uses sweet, salty, sour, bitter and umami."],
      ["In the SATC, what is 'length'?", "How long the flavour lasts after swallowing", ["How long the cheese has been matured", "The size of the cheese", "How long the aroma lasts before tasting"],
        "Length = how long the flavour persists after swallowing."],
      ["Why should cheese be served at room temperature?", "Aromas and flavours are more expressive", ["It is safer from bacteria", "It is easier to cut", "It stops the rind drying out"],
        "Cold mutes aroma and flavour; at room temperature the cheese shows its full character."],
      ["What is the best wrapping for storing cut cheese in a shop?", "Cheese/waxed paper, which lets it breathe", ["Cling film for every cheese", "Aluminium foil", "Airtight plastic tubs"],
        "Cheese or waxed paper lets the cheese breathe; cling film only short term for hard cheeses on display."]
    ],
    cheese: [
      ["Which cheese has a line of ash through the middle?", "Morbier PDO", ["Livarot PDO", "Époisses PDO", "Mimolette"],
        "Morbier's black line of vegetable charcoal recalls the old evening and morning curds."],
      ["Which cheese is washed with Marc de Bourgogne?", "Époisses PDO", ["Livarot PDO", "Morbier PDO", "Le Gruyère PDO"],
        "Époisses is washed with Marc de Bourgogne, a pomace brandy from Burgundy."],
      ["Livarot is nicknamed 'the Colonel' because of…?", "The strips of sedge (or raffia) around it", ["Its uniform-orange rind", "Its military origins in Normandy", "Its five-sided shape"],
        "The strips around Livarot look like the braids on a colonel's uniform."],
      ["Which cheese is matured in the Combalou caves?", "Roquefort PDO", ["Gorgonzola PDO", "Blue Stilton PDO", "Crottin de Chavignol PDO"],
        "By law Roquefort is matured in the Combalou caves at Roquefort-sur-Soulzon."],
      ["Mimolette's rind is shaped by…?", "Cheese mites", ["Penicillium roqueforti", "Washing in brine", "A wax coating"],
        "Cheese mites burrow into the rind, giving mature Mimolette its pitted, craggy look."],
      ["What is the minimum share of sheep's milk in Feta PDO?", "70% (the rest goat)", ["50%", "100%", "30%"],
        "Feta PDO: at least 70% sheep's milk, the rest goat's milk."],
      ["Which breed of sheep is used for Manchego PDO?", "Manchega", ["Lacaune", "Churra", "Merino"],
        "Only milk from Manchega sheep can be used for Manchego PDO."],
      ["Brillat-Savarin is a…?", "Triple-cream cheese", ["Washed-rind cheese", "Blue cheese", "Pasta filata cheese"],
        "Cream is added to the milk, making Brillat-Savarin a triple-cream cheese."],
      ["Crottin de Chavignol comes from which wine area?", "Sancerre", ["Chablis", "Champagne", "Bordeaux"],
        "Crottin de Chavignol comes from Sancerre in the Loire, its classic wine pairing."],
      ["Which counties can make Blue Stilton PDO?", "Leicestershire, Derbyshire, Nottinghamshire", ["Somerset, Dorset, Devon", "Cheshire, Shropshire, Staffordshire", "Cambridgeshire, Leicestershire, Rutland"],
        "Blue Stilton PDO can only be made in Leicestershire, Derbyshire and Nottinghamshire."],
      ["Is Blue Stilton PDO made with raw or pasteurised milk?", "Pasteurised", ["Raw", "Either, depending on the cheesemaker", "Thermised"],
        "By law Blue Stilton PDO must be made with pasteurised cows' milk."],
      ["Which Sub Make does Parmigiano Reggiano belong to?", "Grana", ["Alpine style", "Cheeses which acidify in the vat", "Curd from a single day"],
        "Parmigiano Reggiano: Make Hard Cooked, Sub Make Grana."],
      ["Mozzarella di Bufala Campana is made with…?", "Buffalo milk", ["Cows' milk", "Sheep's milk", "A blend of cow and buffalo milk"],
        "Only milk from Italian Mediterranean buffalo."]
    ],
    sponsors: [
      ["Which company supplies the crackers for the Perfect Pairing?", "Peter's Yard", ["Carr's", "The Fine Cheese Co.", "Jacob's"],
        "Peter's Yard supplies the crackers for the Perfect Pairing round."],
      ["Which brand supplies the knives and the winner's tool kit?", "Boska", ["Wüsthof", "Victorinox", "Opinel"],
        "Boska, the Dutch cheese-tool maker, supplies the knives and the winner's tool kit."],
      ["Which London cheese market helps fund the finalists' travel?", "Chiswick Cheese Market", ["Borough Market", "Broadway Market", "Spitalfields Market"],
        "Chiswick Cheese Market helps fund the finalists' travel."],
      ["Who organises the World Cheese Awards?", "The Guild of Fine Food", ["The Academy of Cheese", "The Specialist Cheesemakers Association", "The British Cheese Board"],
        "The World Cheese Awards are organised by the Guild of Fine Food."],
      ["Which US dairy organisation is a patron of the Academy and sponsors a finalist?", "Dairy Farmers of Wisconsin", ["American Cheese Society", "California Milk Advisory Board", "Vermont Cheese Council"],
        "Dairy Farmers of Wisconsin is an Academy patron and sponsors a finalist."],
      ["Who founded the Academy of Cheese?", "Mary Quicke", ["Patrick Rance", "Randolph Hodgson", "Juliet Harbutt"],
        "The Academy of Cheese was founded by Mary Quicke."],
      ["In what year was the Academy of Cheese launched?", "2016", ["2006", "2012", "2019"],
        "The Academy of Cheese was launched in 2016."],
      ["What are the four levels of the Academy of Cheese?", "Associate, Member, Fellow, Master of Cheese", ["Bronze, Silver, Gold, Master of Cheese", "Apprentice, Monger, Affineur, Master of Cheese", "Foundation, Intermediate, Advanced, Diploma"],
        "Level 1 Associate, Level 2 Member, Level 3 Fellow, Level 4 Master of Cheese."],
      ["Which model does the Academy use to classify cheeses?", "Make / Post-Make (MPM)", ["The French eight families", "Moisture and fat content", "Rind type"],
        "The Academy classifies cheeses with its Make / Post-Make (MPM) model."],
      ["Who won Young Cheesemonger of the Year 2025?", "Hanna Lee", ["Aimée Rogers", "Lily Morris", "Daniel Iliev"],
        "Hanna Lee won in 2025, the first American winner."],
      ["Who won Young Cheesemonger of the Year in 2022, 2023 and 2024 (in order)?", "Aimée Rogers, Lily Morris, Daniel Iliev", ["Lily Morris, Aimée Rogers, Daniel Iliev", "Daniel Iliev, Lily Morris, Aimée Rogers", "Aimée Rogers, Daniel Iliev, Lily Morris"],
        "2022 Aimée Rogers, 2023 Lily Morris, 2024 Daniel Iliev."]
    ],
    wca: [
      ["World Cheese Awards 2021: host city and World Champion?", "Oviedo, Spain – Olavidia", ["Oviedo, Spain – Nidelven Blå", "Newport, Wales – Olavidia", "Trondheim, Norway – Olavidia"],
        "2021, Oviedo: Olavidia, a goats' milk cheese from Jaén, was World Champion."],
      ["World Cheese Awards 2022: host city and World Champion?", "Newport, Wales – Le Gruyère AOP Réserve (Vorderfultigen)", ["Oviedo, Spain – Le Gruyère AOP Réserve (Vorderfultigen)", "Newport, Wales – Olavidia", "Viseu, Portugal – Le Gruyère AOP Réserve (Vorderfultigen)"],
        "2022, Newport: a Le Gruyère AOP Réserve from Vorderfultigen won."],
      ["World Cheese Awards 2023: host city and World Champion?", "Trondheim, Norway – Nidelven Blå", ["Bern, Switzerland – Nidelven Blå", "Trondheim, Norway – Queijo de Ovelha Amanteigado", "Newport, Wales – Nidelven Blå"],
        "2023, Trondheim: the Norwegian blue Nidelven Blå won."],
      ["World Cheese Awards 2024: host city and World Champion?", "Viseu, Portugal – Queijo de Ovelha Amanteigado", ["Viseu, Portugal – Olavidia", "Oviedo, Spain – Queijo de Ovelha Amanteigado", "Trondheim, Norway – Queijo de Ovelha Amanteigado"],
        "2024, Viseu: a Portuguese Queijo de Ovelha Amanteigado won."],
      ["World Cheese Awards 2025: host city and World Champion?", "Bern, Switzerland – Gruyère AOP Vorderfultigen", ["Bern, Switzerland – Nidelven Blå", "Córdoba, Spain – Gruyère AOP Vorderfultigen", "Viseu, Portugal – Gruyère AOP Vorderfultigen"],
        "2025, Bern: a Gruyère AOP from Vorderfultigen won again."],
      ["Which city hosts the World Cheese Awards 2026?", "Córdoba, Spain", ["Bern, Switzerland", "Lyon, France", "Oviedo, Spain"],
        "The 2026 World Cheese Awards are held in Córdoba, Spain."],
      ["Which dairy has won the World Cheese Awards twice since 2022?", "Vorderfultigen (Gruyère)", ["Montgomery's (Cheddar)", "Quesería Rey Silo", "Fromagerie Marcel Petite (Comté)"],
        "Vorderfultigen's Gruyère won in 2022 and 2025."],
      ["How many entries were there at the World Cheese Awards 2025?", "5,244 cheeses from 46 countries", ["4,502 cheeses from 42 countries", "2,000 cheeses from 20 countries", "10,000 cheeses from 60 countries"],
        "2025: 5,244 cheeses from 46 countries."]
    ]
  };
  const CATEGORY = { cheese: "The 25 cheeses", general: "Level 1 knowledge", sponsors: "Sponsors & Academy", wca: "World Cheese Awards" };

  const toQ = (cat, i, [q, a, d, e]) => ({ key: `${cat}:${i}`, cat, q, a, d, e });
  const bankQs = (cat) => BANK[cat].map((x, i) => toQ(cat, i, x));

  // ---------- Preguntas generadas de los 25 quesos (data.js / data-en.js) ----------
  const en = (c) => ({ ...c, ...CHEESES_EN[c.id] });
  const SPECIES = { Vaca: "Cow", Oveja: "Sheep", Cabra: "Goat", "Búfala": "Buffalo" };
  const species = (c) => (c.id === "feta" ? "Sheep & goat" : SPECIES[c.milk.split(/[ ,(]/)[0]]);
  const country = (c) => en(c).country.split(" (")[0];
  const status = (c) => (/^PGI/.test(c.status) ? "PGI" : /^(PDO|AOP)/.test(c.status) ? "PDO" : "No PDO or PGI");
  const withSub = (cls, s) => (s ? `${cls} (${s})` : cls);
  const pickN = (arr, n) => shuffle([...new Set(arr)]).slice(0, n);
  const summary = (c) => `${c.name}: Make ${withSub(c.make, c.subMake)} · Post-Make ${c.postMake.map((p, i) => withSub(p, c.subPostMake[i])).join(" + ")} · ${species(c)} milk · ${country(c)} · ${en(c).status}.`;

  const cheeseGens = [
    (c) => ({ type: "make", q: `What is the Make class of ${c.name}?`, a: c.make, d: Object.keys(MAKE_CLASSES).filter((m) => m !== c.make) }),
    (c) => {
      const p = c.postMake[Math.floor(Math.random() * c.postMake.length)];
      return { type: "post", q: `Which of these Post-Make classes does ${c.name} have?`, a: p, d: pickN(Object.keys(POST_MAKE_CLASSES).filter((x) => !c.postMake.includes(x)), 3) };
    },
    (c) => ({ type: "milk", q: `Which milk is ${c.name} made from?`, a: species(c), d: pickN(["Cow", "Sheep", "Goat", "Buffalo", "Sheep & goat"].filter((x) => x !== species(c)), 3) }),
    (c) => ({ type: "country", q: `Which country does ${c.name} come from?`, a: country(c), d: pickN(CHEESES.map(country).filter((x) => x !== country(c)), 3) }),
    (c) => ({ type: "status", q: `What protected status does ${c.name} have?`, a: status(c), d: ["PDO", "PGI", "No PDO or PGI", "TSG"].filter((x) => x !== status(c)) }),
    (c) => {
      const subs = c.subPostMake.filter(Boolean);
      if (!subs.length) return null;
      const s = subs[Math.floor(Math.random() * subs.length)];
      return { type: "subpost", q: `Which Post-Make sub-class does ${c.name} have?`, a: s, d: pickN(CHEESES.flatMap((x) => x.subPostMake).filter((x) => x && !subs.includes(x)), 3) };
    }
  ];

  function cheeseQuestion(c) {
    for (let tries = 0; tries < 20; tries++) {
      const g = cheeseGens[Math.floor(Math.random() * cheeseGens.length)](c);
      if (g && g.d.length === 3) return { key: `gen:${g.type}:${c.id}`, cat: "cheese", q: g.q, a: g.a, d: g.d, e: summary(c) };
    }
  }

  // ---------- Sobres ----------
  // Se reparten los 8 sobres a la vez para que los bancos se repartan sin repetirse
  // mientras haya preguntas; dentro de un sobre nunca se repite una pregunta.
  const MIX = { cheese: 4, general: 3, sponsors: 2, wca: 1 };
  function dealEnvelopes() {
    const decks = Object.fromEntries(["general", "sponsors", "wca"].map((k) => [k, []]));
    const draw = (cat, used) => {
      for (let tries = 0; tries < 50; tries++) {
        if (!decks[cat].length) decks[cat] = shuffle(bankQs(cat));
        const q = decks[cat].shift();
        if (!used.has(q.key)) return q;
        decks[cat].push(q);
      }
    };
    const cheeseDeck = shuffle(CHEESES);
    let ci = 0;
    return Array.from({ length: 8 }, () => {
      const used = new Set(), qs = [];
      for (const [cat, n] of Object.entries(MIX)) {
        for (let k = 0; k < n; k++) {
          let q;
          if (cat === "cheese") {
            // la mitad generadas desde data.js, la otra mitad del banco de datos extra
            do {
              q = k % 2 === 0 ? cheeseQuestion(cheeseDeck[ci++ % cheeseDeck.length]) : toQ("cheese", ...pickBank("cheese"));
            } while (used.has(q.key));
          } else q = draw(cat, used);
          used.add(q.key); qs.push(q);
        }
      }
      return shuffle(qs);
    });
  }
  const pickBank = (cat) => { const i = Math.floor(Math.random() * BANK[cat].length); return [i, BANK[cat][i]]; };

  // ---------- Fallos y preferencias (localStorage) ----------
  const read = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  let mistakes = read(MISTAKES_KEY, []);
  let timerOn = read(TIMER_KEY, true);
  const addMistake = (q) => { if (!mistakes.some((m) => m.key === q.key)) { mistakes.push({ key: q.key, cat: q.cat, q: q.q, a: q.a, d: q.d, e: q.e }); write(MISTAKES_KEY, mistakes); } };
  const removeMistake = (q) => { mistakes = mistakes.filter((m) => m.key !== q.key); write(MISTAKES_KEY, mistakes); };

  // ---------- Estado y pantallas ----------
  let envelopes = null, opened = new Set(), round = null, ticker = null;

  const onScreen = () => window.APP.currentTab() === "masterrind";
  function render() {
    view.replaceChildren();
    if (round && !round.done) return drawQuestion();
    if (round && round.done) return drawResult();
    drawHome();
  }
  routes.masterrind = render;

  function drawHome() {
    if (!envelopes || opened.size >= 8) { envelopes = dealEnvelopes(); opened = new Set(); }
    view.replaceChildren($(`
      <div class="mr">
        <h2>🏆 MasterRind</h2>
        <p class="muted">The final round of the Young Cheesemonger of the Year. Pick an envelope: 10 questions on the 25 cheeses, Level 1 knowledge, the sponsors and the World Cheese Awards.</p>
        <label class="mr-toggle"><input type="checkbox" id="mr-timer" ${timerOn ? "checked" : ""}> ⏱ ${SECONDS}-second timer per question</label>
        <div class="mr-envelopes">
          ${envelopes.map((_, i) => `<button class="mr-env ${opened.has(i) ? "opened" : ""}" data-env="${i}" ${opened.has(i) ? "disabled" : ""}>
            <span class="mr-flap"></span><span class="mr-num">${i + 1}</span><span class="mr-lbl">${opened.has(i) ? "Opened" : "Envelope"}</span></button>`).join("")}
        </div>
        <div class="row" style="margin-top:14px">
          <button class="btn" id="mr-review" ${mistakes.length ? "" : "disabled"}>🔁 Review my mistakes (${mistakes.length})</button>
          <button class="btn" id="mr-shuffle">🔀 New envelopes</button>
        </div>
      </div>`));
    view.querySelector("#mr-timer").onchange = (e) => { timerOn = e.target.checked; write(TIMER_KEY, timerOn); };
    view.querySelector(".mr-envelopes").onclick = (e) => {
      const b = e.target.closest("[data-env]"); if (!b || b.disabled) return;
      const i = +b.dataset.env;
      opened.add(i);
      start(envelopes[i], `Envelope ${i + 1}`, false);
    };
    view.querySelector("#mr-review").onclick = startReview;
    view.querySelector("#mr-shuffle").onclick = () => { envelopes = null; drawHome(); };
  }

  function startReview() {
    if (!mistakes.length) return;
    start(shuffle(mistakes).slice(0, 10), "Review my mistakes", true);
  }

  function start(questions, title, review) {
    round = {
      title, review, i: 0, score: 0, misses: [], done: false,
      // las opciones se barajan una vez por pregunta y se mantienen al redibujar
      qs: questions.map((q) => ({ ...q, options: shuffle([q.a, ...q.d]) })),
      chosen: null, deadline: null
    };
    window.scrollTo(0, 0);
    drawQuestion();
  }

  function stopTicker() { if (ticker) { clearInterval(ticker); ticker = null; } }

  function drawQuestion() {
    const q = round.qs[round.i];
    if (round.chosen === null && timerOn && !round.deadline) {
      round.deadline = Date.now() + SECONDS * 1000;
    }
    view.replaceChildren($(`
      <div class="mr">
        <p class="muted small">${esc(round.title)} · Question ${round.i + 1} of ${round.qs.length} · Score ${round.score}</p>
        <div class="bar"><i style="width:${(round.i / round.qs.length) * 100}%"></i></div>
        <span class="tag mr-cat mr-cat-${q.cat}">${CATEGORY[q.cat]}</span>
        ${round.deadline && round.chosen === null ? `<div class="mr-timer"><i id="mr-time"></i><span id="mr-secs"></span></div>` : ""}
        <div class="question">${esc(q.q)}</div>
        <div class="options">${q.options.map((o, k) => `<button class="option" data-k="${k}">${esc(o)}</button>`).join("")}</div>
        <div id="after"></div>
      </div>`));
    view.querySelectorAll(".option").forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
    if (round.chosen !== null) return showFeedback();
    stopTicker();
    if (round.deadline) { ticker = setInterval(tick, 200); tick(); }
  }

  function tick() {
    if (!round || round.chosen !== null || !round.deadline) return stopTicker();
    const left = round.deadline - Date.now();
    if (left <= 0) return answer(-1); // se acabó el tiempo: cuenta como fallo
    const bar = document.getElementById("mr-time"), secs = document.getElementById("mr-secs");
    if (bar) bar.style.width = `${(left / (SECONDS * 1000)) * 100}%`;
    if (secs) secs.textContent = `${Math.ceil(left / 1000)}s`;
  }

  function answer(k) {
    if (round.chosen !== null) return;
    stopTicker();
    const q = round.qs[round.i];
    round.chosen = k;
    const ok = k >= 0 && q.options[k] === q.a;
    if (ok) {
      round.score++;
      if (round.review) removeMistake(q);
    } else {
      round.misses.push(q);
      addMistake(q);
    }
    if (onScreen()) drawQuestion();
  }

  function showFeedback() {
    const q = round.qs[round.i];
    const ok = round.chosen >= 0 && q.options[round.chosen] === q.a;
    view.querySelectorAll(".option").forEach((b) => {
      b.disabled = true;
      const k = +b.dataset.k;
      if (q.options[k] === q.a) b.classList.add("correct");
      else if (k === round.chosen) b.classList.add("wrong");
    });
    const verdict = ok ? "✅ Correct!" : round.chosen < 0 ? `⏰ Time's up! The answer was: <b>${esc(q.a)}</b>` : `❌ Incorrect. The answer was: <b>${esc(q.a)}</b>`;
    const last = round.i + 1 >= round.qs.length;
    view.querySelector("#after").replaceChildren($(`
      <div class="explain">${verdict}<br>${esc(q.e)}</div>
      <div class="row" style="margin-top:12px;justify-content:flex-end">
        <button class="btn primary" id="next">${last ? "See my score" : "Next question →"}</button>
      </div>`));
    view.querySelector("#next").onclick = () => {
      round.i++; round.chosen = null; round.deadline = null;
      if (round.i >= round.qs.length) { round.done = true; return drawResult(); }
      drawQuestion();
    };
  }

  function drawResult() {
    stopTicker();
    const { score, qs, misses, review } = round;
    view.replaceChildren($(`
      <div class="mr">
        <h2>${esc(round.title)}</h2>
        <div class="big">${score} / ${qs.length}</div>
        <p>${score === qs.length ? "🏆 Perfect envelope!" : score >= qs.length * 0.8 ? "🧀 Great round!" : "Keep going: every envelope makes you sharper."}</p>
        ${misses.length ? `<h3>Your mistakes</h3><ul class="mr-misses">${misses.map((q) => `<li>${esc(q.q)}<br><b>${esc(q.a)}</b></li>`).join("")}</ul>` : ""}
        <div class="row" style="margin-top:12px">
          <button class="btn primary" id="mr-again">✉️ Try another envelope</button>
          <button class="btn" id="mr-review" ${mistakes.length ? "" : "disabled"}>🔁 Review my mistakes (${mistakes.length})</button>
        </div>
        ${review ? `<p class="muted small">Questions you got right in this review have been removed from your mistakes.</p>` : ""}
      </div>`));
    view.querySelector("#mr-again").onclick = () => { round = null; drawHome(); window.scrollTo(0, 0); };
    view.querySelector("#mr-review").onclick = startReview;
  }
})();
