(() => {
  const view = document.getElementById("view");
  const STORE_KEY = "25cheeses-progress-v1";
  const LANG_KEY = "25cheeses-lang";

  // ---------- Textos de la interfaz (ES / EN) ----------
  const UI = {
    es: {
      title: "25 Cheeses · Level 1",
      tabs: { library: "Fichas", cards: "Tarjetas", quiz: "Quiz", matrix: "Tabla", progress: "Progreso" },
      switchTo: "EN", switchLabel: "Switch to English",
      lib: { title: "Los 25 quesos", search: "Buscar por nombre, país, leche…", all: "Todos", none: "Sin resultados.", back: "← Volver a las fichas", prev: "← Anterior", next: "Siguiente →" },
      f: { country: "País", region: "Región", milk: "Leche", treatment: "Tratamiento", rennet: "Cuajo", status: "Protección", appearance: "Aspecto", flavour: "Sabor / textura", keys: "Claves para el examen" },
      cards: {
        title: "Tarjetas", help: "Toca la tarjeta para darle la vuelta. Marca si te la sabes; las que no, vuelven a salir.",
        all: "Todas (25)", pending: (n) => `Solo las que no sé (${n})`, reverse: "Al revés: adivina el queso", photo: "📷 Foto: adivina el queso",
        done: "🎉 ¡Te las sabes todas! Prueba el modo \"Todas\" o el quiz.", known: " · ✅ marcada como sabida",
        tap: "Toca para ver la ficha", which: "¿Qué queso es?", again: "🔁 Repasar", gotIt: "✅ Me la sé"
      },
      quiz: {
        title: "Quiz", intro: "Preguntas tipo test generadas a partir de las fichas: leche, país, región, protección, Make, Post-Make (y sus sub-clases), aspecto y sabor.",
        best: (s, t) => `Mejor resultado: ${s}/${t}`, count: "Número de preguntas", focus: "Enfoque",
        allCheeses: "Todos los quesos", weak: "Mis puntos débiles", start: "Empezar",
        progress: (i, n, s) => `Pregunta ${i} de ${n} · Aciertos: ${s}`,
        correct: "✅ ¡Correcto!", wrong: "❌ La respuesta era:", next: "Siguiente →", result: "Ver resultado",
        resultTitle: "Resultado", pass: "🏆 ¡Aprobado! (el examen oficial pide un 80%)", fail: "Sigue practicando: el examen oficial pide un 80%.",
        review: "Repasa estas", again: "Otro quiz",
        q: {
          milk: (n) => `¿De qué leche se elabora ${n}?`,
          country: (n) => `¿De qué país es ${n}?`,
          make: (n) => `¿Cuál es la clase Make de ${n}?`,
          postMake: (n) => `¿Cuál de estas clases Post-Make tiene ${n}?`,
          subMake: (n) => `¿Cuál es la sub-clase Make de ${n}?`,
          subPostMake: (n) => `¿Qué sub-clase Post-Make tiene ${n}?`,
          status: (n) => `¿Qué tipo de protección tiene ${n}?`,
          region: (n) => `¿De qué región procede ${n}?`,
          fact: (t) => `¿Qué queso es? “${t}”`,
          appearance: (t) => `¿Qué queso tiene este aspecto? “${t}”`,
          flavour: (t) => `¿Qué queso sabe así? “${t}”`,
          photo: () => "¿Qué queso es el de la foto?",
          whichMake: (m) => `¿Cuál de estos quesos tiene Make = ${m}?`,
          whichMilk: (s) => `¿Cuál de estos quesos es de leche de ${s.toLowerCase()}?`,
          whichPost: (p) => `¿Cuál de estos quesos tiene Post-Make “${p}”?`
        }
      },
      species: { cow: "Vaca", sheep: "Oveja", goat: "Cabra", buffalo: "Búfala", sheepGoat: "Oveja (y algo de cabra)" },
      statusKeys: { PDO: "PDO", PGI: "PGI", none: "Sin denominación protegida propia" },
      matrix: {
        title: "Tabla Make / Post-Make", help: "Cada queso tiene una sola clase Make y puede tener una o más Post-Make. Toca un queso para ver su ficha.",
        corner: "Make ↓ / Post-Make →", makes: "Clases Make", posts: "Clases Post-Make",
        note: "Las sub-clases solo aparecen en los quesos en los que se han comprobado con las fichas oficiales de la Academy of Cheese."
      },
      prog: {
        title: "Tu progreso", known: "Tarjetas que te sabes:", answered: "Preguntas respondidas:", global: "Acierto global:",
        per: "Por queso (de peor a mejor)", reset: "Borrar progreso", confirm: "¿Seguro que quieres borrar todo tu progreso?"
      }
    },
    en: {
      title: "25 Cheeses · Level 1",
      tabs: { library: "Profiles", cards: "Cards", quiz: "Quiz", matrix: "Matrix", progress: "Progress" },
      switchTo: "ES", switchLabel: "Cambiar a español",
      lib: { title: "The 25 cheeses", search: "Search by name, country, milk…", all: "All", none: "No results.", back: "← Back to profiles", prev: "← Previous", next: "Next →" },
      f: { country: "Country", region: "Region", milk: "Milk", treatment: "Treatment", rennet: "Rennet", status: "Protection", appearance: "Appearance", flavour: "Flavour / texture", keys: "Key exam facts" },
      cards: {
        title: "Flashcards", help: "Tap the card to flip it. Mark whether you know it; the ones you don't will come back.",
        all: "All (25)", pending: (n) => `Only the ones I don't know (${n})`, reverse: "Reverse: guess the cheese", photo: "📷 Photo: guess the cheese",
        done: "🎉 You know them all! Try \"All\" mode or the quiz.", known: " · ✅ marked as known",
        tap: "Tap to see the profile", which: "Which cheese is it?", again: "🔁 Review again", gotIt: "✅ I know it"
      },
      quiz: {
        title: "Quiz", intro: "Multiple-choice questions generated from the profiles: milk, country, region, protection, Make, Post-Make (and their sub-classes), appearance and flavour.",
        best: (s, t) => `Best score: ${s}/${t}`, count: "Number of questions", focus: "Focus",
        allCheeses: "All cheeses", weak: "My weak spots", start: "Start",
        progress: (i, n, s) => `Question ${i} of ${n} · Correct: ${s}`,
        correct: "✅ Correct!", wrong: "❌ The answer was:", next: "Next →", result: "See result",
        resultTitle: "Result", pass: "🏆 Pass! (the official exam requires 80%)", fail: "Keep practising: the official exam requires 80%.",
        review: "Review these", again: "Another quiz",
        q: {
          milk: (n) => `Which milk is ${n} made from?`,
          country: (n) => `Which country is ${n} from?`,
          make: (n) => `What is the Make class of ${n}?`,
          postMake: (n) => `Which of these Post-Make classes does ${n} have?`,
          subMake: (n) => `What is the Make sub-class of ${n}?`,
          subPostMake: (n) => `Which Post-Make sub-class does ${n} have?`,
          status: (n) => `What type of protection does ${n} have?`,
          region: (n) => `Which region does ${n} come from?`,
          fact: (t) => `Which cheese is it? “${t}”`,
          appearance: (t) => `Which cheese looks like this? “${t}”`,
          flavour: (t) => `Which cheese tastes like this? “${t}”`,
          photo: () => "Which cheese is in the photo?",
          whichMake: (m) => `Which of these cheeses has Make = ${m}?`,
          whichMilk: (s) => `Which of these cheeses is made from ${s.toLowerCase()}'s milk?`,
          whichPost: (p) => `Which of these cheeses has Post-Make “${p}”?`
        }
      },
      species: { cow: "Cow", sheep: "Sheep", goat: "Goat", buffalo: "Buffalo", sheepGoat: "Sheep (with some goat)" },
      statusKeys: { PDO: "PDO", PGI: "PGI", none: "No protected designation of its own" },
      matrix: {
        title: "Make / Post-Make matrix", help: "Each cheese has a single Make class and may have one or more Post-Make classes. Tap a cheese to see its profile.",
        corner: "Make ↓ / Post-Make →", makes: "Make classes", posts: "Post-Make classes",
        note: "Sub-classes are only shown for cheeses where they have been checked against the official Academy of Cheese profiles."
      },
      prog: {
        title: "Your progress", known: "Cards you know:", answered: "Questions answered:", global: "Overall accuracy:",
        per: "By cheese (worst to best)", reset: "Reset progress", confirm: "Are you sure you want to delete all your progress?"
      }
    }
  };

  let lang = (() => { try { return localStorage.getItem(LANG_KEY) || "es"; } catch { return "es"; } })();
  if (!UI[lang]) lang = "es";
  const T = () => UI[lang];

  // Queso con los textos en el idioma actual
  const L = (c) => (lang === "en" ? { ...c, ...CHEESES_EN[c.id] } : c);
  const makeDesc = () => (lang === "en" ? MAKE_CLASSES_EN : MAKE_CLASSES);
  const postDesc = () => (lang === "en" ? POST_MAKE_CLASSES_EN : POST_MAKE_CLASSES);

  // ---------- Utilidades ----------
  const $ = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const distinct = (arr) => [...new Set(arr)];
  const byId = Object.fromEntries(CHEESES.map((c) => [c.id, c]));
  const makeClass = (m) => "make-" + m.replace(/\s/g, "");
  // Clase con su sub-clase entre paréntesis, si la hay
  // Foto del queso (si se ha extraído); alt vacío para no desvelar el nombre en el quiz
  const photoSrc = (id) => (PHOTOS[id] ? "photos/" + PHOTOS[id] : null);
  const photoImg = (id, cls, alt = "") => (photoSrc(id) ? `<img class="${cls}" src="${photoSrc(id)}" alt="${esc(alt)}"${cls === "thumb" ? ' loading="lazy"' : ""}>` : "");
  const withSub = (cls, subCls) => (subCls ? `${cls} (${subCls})` : cls);
  const postList = (c) => c.postMake.map((p, i) => withSub(p, c.subPostMake[i])).join(" + ");
  const classTags = (c, prefix = "") =>
    `<span class="tag ${makeClass(c.make)}">${prefix && "Make: "}${esc(withSub(c.make, c.subMake))}</span>` +
    c.postMake.map((p, i) => `<span class="tag">${prefix && "Post-Make: "}${esc(withSub(p, c.subPostMake[i]))}</span>`).join("");

  // Claves neutras (independientes del idioma) para el quiz
  const SPECIES_KEY = { Vaca: "cow", Oveja: "sheep", Cabra: "goat", "Búfala": "buffalo" };
  const speciesKey = (c) => (c.id === "feta" ? "sheepGoat" : SPECIES_KEY[c.milk.split(/[ ,(]/)[0]]);
  const speciesLabel = (k) => T().species[k];
  const countryKey = (c) => c.country.split(" (")[0];
  const countryLabel = (k) => L(CHEESES.find((c) => countryKey(c) === k)).country.split(" (")[0];
  const statusKey = (c) => (/^PGI/.test(c.status) ? "PGI" : /^(PDO|AOP)/.test(c.status) ? "PDO" : "none");

  // ---------- Progreso (localStorage) ----------
  const load = () => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
  };
  let progress = load();
  progress.stats ||= {};   // id -> { ok, ko }
  progress.known ||= {};   // id -> true (tarjetas "me la sé")
  progress.best ||= null;
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch {} };
  const record = (id, ok) => {
    const s = (progress.stats[id] ||= { ok: 0, ko: 0 });
    ok ? s.ok++ : s.ko++;
    save();
  };
  const weakness = (id) => {
    const s = progress.stats[id] || { ok: 0, ko: 0 };
    return (s.ko + 1) / (s.ok + s.ko + 2); // suavizado: sin datos = 0.5
  };

  // ---------- Navegación e idioma ----------
  const tabs = document.querySelectorAll(".tabs button");
  const langBtn = document.getElementById("lang");
  const routes = { library: renderLibrary, cards: renderCards, quiz: renderQuizStart, matrix: renderMatrix, progress: renderProgress };
  let current = { tab: "library", arg: undefined };

  function go(tab, arg) {
    current = { tab, arg };
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    view.replaceChildren();
    routes[tab](arg);
    window.scrollTo(0, 0);
  }
  tabs.forEach((b) => b.addEventListener("click", () => go(b.dataset.tab)));

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelector(".tabs").ariaLabel = lang === "en" ? "Sections" : "Secciones";
    tabs.forEach((b) => (b.querySelector("em").textContent = T().tabs[b.dataset.tab]));
    langBtn.textContent = T().switchTo;
    langBtn.title = langBtn.ariaLabel = T().switchLabel;
  }
  langBtn.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
    applyLang();
    // Redibuja la pantalla actual sin perder el sitio (tarjeta o pregunta en curso)
    view.replaceChildren();
    routes[current.tab](current.arg);
  });

  // ---------- Fichas ----------
  let libFilter = { q: "", make: "all" };
  function renderLibrary() {
    const t = T().lib;
    view.append($(`
      <h2>${t.title}</h2>
      <input class="search" type="search" placeholder="${t.search}" value="${esc(libFilter.q)}">
      <div class="chips">${["all", ...Object.keys(MAKE_CLASSES)].map((m) => `<button class="chip ${m === libFilter.make ? "on" : ""}" data-m="${m}">${m === "all" ? t.all : m}</button>`).join("")}</div>
      <div class="grid"></div>`));
    const grid = view.querySelector(".grid");
    const draw = () => {
      const q = libFilter.q.toLowerCase();
      const list = CHEESES.map(L).filter((c) =>
        (libFilter.make === "all" || c.make === libFilter.make) &&
        (!q || [c.name, c.country, c.region, c.milk, c.make, c.subMake, ...c.postMake, ...c.subPostMake].join(" ").toLowerCase().includes(q)));
      grid.replaceChildren($(list.map((c) => `
        <button class="card" data-id="${c.id}">
          ${photoImg(c.id, "thumb")}
          <div class="name">${esc(c.name)}</div>
          <div class="meta">${esc(countryLabel(countryKey(byId[c.id])))} · ${esc(speciesLabel(speciesKey(byId[c.id])))}</div>
          <div><span class="tag ${makeClass(c.make)}">${c.make}</span>${c.postMake.map((p) => `<span class="tag">${p}</span>`).join("")}</div>
        </button>`).join("") || `<p class="muted">${t.none}</p>`));
    };
    view.querySelector(".search").addEventListener("input", (e) => { libFilter.q = e.target.value; draw(); });
    view.querySelector(".chips").addEventListener("click", (e) => {
      const m = e.target.dataset.m; if (!m) return;
      libFilter.make = m;
      view.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x.dataset.m === m));
      draw();
    });
    grid.addEventListener("click", (e) => { const b = e.target.closest(".card"); if (b) go("library-detail", b.dataset.id); });
    draw();
  }

  function factsList(c) {
    return `<ul>${c.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
  }

  function detailHTML(c) {
    const f = T().f;
    return `
      ${photoImg(c.id, "photo", c.name)}
      <h2>${esc(c.name)}</h2>
      ${classTags(c, true)}
      <dl>
        <dt>${f.country}</dt><dd>${esc(c.country)}</dd>
        <dt>${f.region}</dt><dd>${esc(c.region)}</dd>
        <dt>${f.milk}</dt><dd>${esc(c.milk)}</dd>
        <dt>${f.treatment}</dt><dd>${esc(c.treatment)}</dd>
        ${c.rennet ? `<dt>${f.rennet}</dt><dd>${esc(c.rennet)}</dd>` : ""}
        <dt>${f.status}</dt><dd>${esc(c.status)}</dd>
        <dt>${f.appearance}</dt><dd>${esc(c.appearance)}</dd>
        <dt>${f.flavour}</dt><dd>${esc(c.flavour)}</dd>
      </dl>
      <h3>${f.keys}</h3>
      ${factsList(c)}`;
  }

  routes["library-detail"] = (id) => {
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === "library"));
    const t = T().lib;
    const c = L(byId[id]);
    const i = CHEESES.indexOf(byId[id]);
    view.append($(`
      <button class="back-link">${t.back}</button>
      <article class="detail">${detailHTML(c)}</article>
      <div class="row" style="margin-top:12px;justify-content:space-between">
        <button class="btn" data-go="${CHEESES[(i + 24) % 25].id}">${t.prev}</button>
        <button class="btn" data-go="${CHEESES[(i + 1) % 25].id}">${t.next}</button>
      </div>`));
    view.querySelector(".back-link").onclick = () => go("library");
    view.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => go("library-detail", b.dataset.go)));
  };

  // ---------- Tarjetas ----------
  let deck = null, deckPos = 0;
  function renderCards() {
    const t = T().cards;
    view.append($(`
      <h2>${t.title}</h2>
      <p class="muted small">${t.help}</p>
      <div class="chips">
        <button class="chip" data-mode="all">${t.all}</button>
        <button class="chip" data-mode="pending">${t.pending(CHEESES.filter((c) => !progress.known[c.id]).length)}</button>
        <button class="chip" data-mode="reverse">${t.reverse}</button>
        ${Object.keys(PHOTOS).length ? `<button class="chip" data-mode="photo">${t.photo}</button>` : ""}
      </div>
      <div id="deck"></div>`));
    view.querySelector(".chips").addEventListener("click", (e) => {
      const mode = e.target.dataset.mode; if (!mode) return;
      startDeck(mode);
    });
    // Al cambiar de idioma se mantiene el mazo en curso
    if (deck) { markDeckChip(); drawCard(); } else startDeck("all");
  }

  function markDeckChip() {
    view.querySelectorAll("[data-mode]").forEach((x) => x.classList.toggle("on", x.dataset.mode === deck.mode));
  }

  function startDeck(mode) {
    const list = mode === "pending" ? CHEESES.filter((c) => !progress.known[c.id]) : mode === "photo" ? CHEESES.filter((c) => PHOTOS[c.id]) : CHEESES;
    deck = { mode, ids: shuffle(list.map((c) => c.id)) };
    deckPos = 0;
    markDeckChip();
    drawCard();
  }

  function drawCard() {
    const t = T().cards;
    const box = document.getElementById("deck");
    if (!deck.ids.length) {
      box.replaceChildren($(`<p>${t.done}</p>`));
      return;
    }
    if (deckPos >= deck.ids.length) { deck.ids = shuffle(deck.ids); deckPos = 0; }
    const raw = byId[deck.ids[deckPos]];
    const c = L(raw);
    const reverse = deck.mode === "reverse";
    const photoMode = deck.mode === "photo";
    const front = photoMode
      ? `${photoImg(c.id, "photo")}<p class="muted small" style="font-weight:400">${t.which}</p>`
      : reverse
      ? `<div style="font-size:1rem;font-weight:500;text-align:left">
           <p><b>${esc(countryLabel(countryKey(raw)))}</b> · ${esc(speciesLabel(speciesKey(raw)))} · ${esc(withSub(c.make, c.subMake))} · ${esc(postList(c))}</p>
           <p>${esc(mask(c.appearance, c))}</p><p class="muted">${esc(mask(c.flavour, c))}</p>
           <p class="muted small">${t.which}</p></div>`
      : `<div>${esc(c.name)}</div><div class="muted small" style="font-weight:400;margin-top:8px">${t.tap}</div>`;
    const back = reverse || photoMode ? `<h3 style="margin-top:0">${esc(c.name)}</h3>${factsList(c)}`
      : `${photoImg(c.id, "photo", c.name)}<p><b>${esc(c.country)}</b> — ${esc(c.region)}</p>
         <p>🥛 ${esc(c.milk)} · ${esc(c.treatment)}</p>
         <p>🏷️ ${esc(c.status)}</p>
         <p>${classTags(c, true)}</p>
         <p>👀 ${esc(c.appearance)}</p><p>👅 ${esc(c.flavour)}</p>
         ${factsList(c)}`;
    box.replaceChildren($(`
      <p class="muted small">${deckPos + 1} / ${deck.ids.length}${progress.known[c.id] ? t.known : ""}</p>
      <div class="flash"><div class="flash-inner">
        <div class="face front">${front}</div>
        <div class="face back">${back}</div>
      </div></div>
      <div class="row" style="justify-content:center">
        <button class="btn" data-a="no">${t.again}</button>
        <button class="btn primary" data-a="yes">${t.gotIt}</button>
      </div>`));
    const flash = box.querySelector(".flash");
    flash.onclick = () => flash.classList.toggle("flipped");
    box.querySelector('[data-a="yes"]').onclick = () => {
      progress.known[c.id] = true; save();
      if (deck.mode === "pending") deck.ids.splice(deckPos, 1); else deckPos++;
      drawCard();
    };
    box.querySelector('[data-a="no"]').onclick = () => {
      delete progress.known[c.id]; save();
      deckPos++;
      drawCard();
    };
  }

  // Oculta el nombre del queso dentro de una pista
  function mask(text, c) {
    const words = c.name.replace(/\b(PDO|PGI|de|di|Le)\b/g, "").split(/[\s-]+/).filter((w) => w.length > 3 && !/^(Aged|Block|Cloth|bound|Blue|Smoked|Single|Campana)$/i.test(w));
    return words.reduce((t, w) => t.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "____"), text);
  }

  // ---------- Quiz ----------
  // Cada pregunta guarda claves neutras (no textos), así se puede
  // redibujar en el otro idioma a mitad de quiz.
  function optionsFrom(correct, pool, n = 4) {
    return shuffle([correct, ...shuffle(distinct(pool).filter((x) => x !== correct)).slice(0, n - 1)]);
  }
  const otherIds = (c, filter = () => true) => CHEESES.filter((x) => x !== c && filter(x)).map((x) => x.id);
  const nameOf = (id) => byId[id].name;
  const POST_KEYS = Object.keys(POST_MAKE_CLASSES);

  // kind → cómo se muestran las opciones
  const label = {
    species: speciesLabel,
    country: countryLabel,
    plain: (v) => v,
    status: (k) => T().statusKeys[k],
    region: (id) => L(byId[id]).region,
    cheese: nameOf
  };

  const generators = [
    (c) => ({ type: "milk", kind: "species", options: optionsFrom(speciesKey(c), Object.keys(UI.es.species)), answer: speciesKey(c) }),
    (c) => ({ type: "country", kind: "country", options: optionsFrom(countryKey(c), CHEESES.map(countryKey)), answer: countryKey(c) }),
    (c) => ({ type: "make", kind: "plain", options: shuffle(Object.keys(MAKE_CLASSES)), answer: c.make }),
    (c) => {
      // un queso puede tener varios Post-Make: se pregunta por uno y los distractores son clases que no tiene
      const p = pick(c.postMake);
      return { type: "postMake", kind: "plain", options: optionsFrom(p, POST_KEYS.filter((x) => !c.postMake.includes(x))), answer: p };
    },
    (c) => c.subMake && ({ type: "subMake", kind: "plain", options: optionsFrom(c.subMake, CHEESES.map((x) => x.subMake).filter(Boolean)), answer: c.subMake }),
    (c) => {
      const subs = c.subPostMake.filter(Boolean);
      if (!subs.length) return null;
      const s = pick(subs);
      return { type: "subPostMake", kind: "plain", answer: s,
        options: optionsFrom(s, CHEESES.flatMap((x) => x.subPostMake).filter((x) => x && !subs.includes(x))) };
    },
    (c) => ({ type: "status", kind: "status", options: ["PDO", "PGI", "none"], answer: statusKey(c) }),
    (c) => ({
      type: "region", kind: "region", answer: c.id,
      options: optionsFrom(c.id, CHEESES.filter((x) => x.region !== c.region && (countryKey(x) === countryKey(c) || Math.random() < 0.3)).map((x) => x.id))
    }),
    (c) => ({ type: "fact", kind: "cheese", fact: Math.floor(Math.random() * c.facts.length), options: optionsFrom(c.id, otherIds(c)), answer: c.id }),
    (c) => ({ type: "appearance", kind: "cheese", options: optionsFrom(c.id, otherIds(c)), answer: c.id }),
    (c) => ({ type: "flavour", kind: "cheese", options: optionsFrom(c.id, otherIds(c)), answer: c.id }),
    (c) => PHOTOS[c.id] && ({ type: "photo", kind: "cheese", options: optionsFrom(c.id, otherIds(c)), answer: c.id }),
    (c) => ({ type: "whichMake", kind: "cheese", options: optionsFrom(c.id, otherIds(c, (x) => x.make !== c.make)), answer: c.id }),
    (c) => ({ type: "whichMilk", kind: "cheese", options: optionsFrom(c.id, otherIds(c, (x) => speciesKey(x) !== speciesKey(c))), answer: c.id }),
    (c) => {
      const p = pick(c.postMake);
      return { type: "whichPost", kind: "cheese", pm: p, options: optionsFrom(c.id, otherIds(c, (x) => !x.postMake.includes(p))), answer: c.id };
    }
  ];

  // Texto de la pregunta en el idioma actual
  function questionText(q) {
    const c = L(q.cheese);
    const t = T().quiz.q;
    switch (q.type) {
      case "fact": return t.fact(mask(c.facts[q.fact], c));
      case "appearance": return t.appearance(mask(c.appearance, c));
      case "flavour": return t.flavour(mask(c.flavour, c));
      case "photo": return t.photo();
      case "whichMake": return t.whichMake(c.make);
      case "whichMilk": return t.whichMilk(speciesLabel(speciesKey(q.cheese)));
      case "whichPost": return t.whichPost(q.pm);
      default: return t[q.type](c.name);
    }
  }

  function makeQuestion(c) {
    for (let tries = 0; tries < 10; tries++) {
      const q = pick(generators)(c);
      if (q && q.options.length >= 2 && q.options.includes(q.answer)) return { ...q, cheese: c };
    }
  }

  let quiz = null;
  routes.quiz = () => (quiz && quiz.i < quiz.questions.length ? drawQuestion() : renderQuizStart());
  routes["quiz-result"] = () => drawResult();

  function renderQuizStart() {
    const t = T().quiz;
    const best = progress.best ? `<p class="muted small">${t.best(progress.best.score, progress.best.total)}</p>` : "";
    view.append($(`
      <h2>${t.title}</h2>
      <p class="muted">${t.intro}</p>
      ${best}
      <h3>${t.count}</h3>
      <div class="chips" id="n">${[10, 25, 50].map((n, i) => `<button class="chip ${i === 0 ? "on" : ""}" data-n="${n}">${n}</button>`).join("")}</div>
      <h3>${t.focus}</h3>
      <div class="chips" id="f">
        <button class="chip on" data-f="all">${t.allCheeses}</button>
        <button class="chip" data-f="weak">${t.weak}</button>
        ${Object.keys(MAKE_CLASSES).map((m) => `<button class="chip" data-f="${m}">${m}</button>`).join("")}
      </div>
      <button class="btn primary" id="go" style="margin-top:12px">${t.start}</button>`));
    let n = 10, focus = "all";
    view.querySelector("#n").onclick = (e) => { if (!e.target.dataset.n) return; n = +e.target.dataset.n; view.querySelectorAll("#n .chip").forEach((x) => x.classList.toggle("on", x === e.target)); };
    view.querySelector("#f").onclick = (e) => { if (!e.target.dataset.f) return; focus = e.target.dataset.f; view.querySelectorAll("#f .chip").forEach((x) => x.classList.toggle("on", x === e.target)); };
    view.querySelector("#go").onclick = () => startQuiz(n, focus);
  }

  function startQuiz(n, focus) {
    let pool = CHEESES;
    if (Object.keys(MAKE_CLASSES).includes(focus)) pool = CHEESES.filter((c) => c.make === focus);
    const questions = [];
    for (let i = 0; i < n; i++) {
      let c;
      if (focus === "weak") {
        // muestreo ponderado por los fallos
        const w = pool.map((x) => weakness(x.id) ** 2);
        let r = Math.random() * w.reduce((a, b) => a + b, 0);
        c = pool[w.findIndex((x) => (r -= x) <= 0)] || pick(pool);
      } else {
        c = pool[i % pool.length];
      }
      questions.push(makeQuestion(c));
    }
    quiz = { questions: focus === "weak" ? questions : shuffle(questions), i: 0, score: 0, misses: [], chosen: null, saved: false };
    current = { tab: "quiz" };
    drawQuestion();
  }

  function drawQuestion() {
    const t = T().quiz;
    const { questions, i } = quiz;
    if (i >= questions.length) return drawResult();
    const q = questions[i];
    const show = label[q.kind];
    view.replaceChildren($(`
      <p class="muted small">${t.progress(i + 1, questions.length, quiz.score)}</p>
      <div class="bar"><i style="width:${(i / questions.length) * 100}%"></i></div>
      <div class="question">${esc(questionText(q))}</div>
      ${q.type === "photo" ? photoImg(q.cheese.id, "photo quiz-photo") : ""}
      <div class="options">${q.options.map((o, k) => `<button class="option" data-k="${k}">${esc(show(o))}</button>`).join("")}</div>
      <div id="after"></div>`));
    view.querySelectorAll(".option").forEach((b) => (b.onclick = () => answer(+b.dataset.k)));
    if (quiz.chosen !== null) showFeedback();
  }

  function answer(k) {
    const q = quiz.questions[quiz.i];
    quiz.chosen = k;
    const ok = q.options[k] === q.answer;
    if (ok) quiz.score++; else quiz.misses.push(q);
    record(q.cheese.id, ok);
    showFeedback();
  }

  function showFeedback() {
    const t = T().quiz;
    const q = quiz.questions[quiz.i];
    const show = label[q.kind];
    const ok = q.options[quiz.chosen] === q.answer;
    view.querySelector(".question").nextElementSibling.querySelectorAll(".option").forEach((b) => {
      b.disabled = true;
      const v = q.options[+b.dataset.k];
      if (v === q.answer) b.classList.add("correct");
      else if (+b.dataset.k === quiz.chosen) b.classList.add("wrong");
    });
    const c = L(q.cheese);
    view.querySelector("#after").replaceChildren($(`
      <div class="explain">${ok ? t.correct : `${t.wrong} <b>${esc(show(q.answer))}</b>`}<br>
        <b>${esc(c.name)}</b>: ${esc(countryLabel(countryKey(q.cheese)))} · ${esc(c.milk)} · ${esc(c.status)} · Make ${esc(withSub(c.make, c.subMake))} · Post-Make ${esc(postList(c))}
      </div>
      <div class="row" style="margin-top:12px;justify-content:flex-end">
        <button class="btn primary" id="next">${quiz.i + 1 < quiz.questions.length ? t.next : t.result}</button>
      </div>`));
    view.querySelector("#next").onclick = () => { quiz.i++; quiz.chosen = null; drawQuestion(); };
  }

  function drawResult() {
    const t = T().quiz;
    const { score, questions, misses } = quiz;
    const pct = Math.round((score / questions.length) * 100);
    current = { tab: "quiz-result" };
    if (!quiz.saved) {
      quiz.saved = true;
      if (!progress.best || score / questions.length > progress.best.score / progress.best.total) {
        progress.best = { score, total: questions.length }; save();
      }
    }
    view.replaceChildren($(`
      <h2>${t.resultTitle}</h2>
      <div class="big">${score} / ${questions.length} <span class="muted" style="font-size:1.2rem">(${pct}%)</span></div>
      <p>${pct >= 80 ? t.pass : t.fail}</p>
      ${misses.length ? `<h3>${t.review}</h3><ul>${misses.map((q) => `<li>${esc(questionText(q))}<br><b>${esc(label[q.kind](q.answer))}</b></li>`).join("")}</ul>` : ""}
      <div class="row" style="margin-top:12px">
        <button class="btn primary" id="again">${t.again}</button>
      </div>`));
    view.querySelector("#again").onclick = () => { quiz = null; go("quiz"); };
  }

  // ---------- Tabla Make / Post-Make ----------
  function renderMatrix() {
    const t = T().matrix;
    const makes = Object.keys(MAKE_CLASSES);
    const cell = (m, p) => CHEESES.filter((c) => c.make === m && c.postMake.includes(p))
      .map((c) => {
        const sp = c.subPostMake[c.postMake.indexOf(p)];
        return `<button data-id="${c.id}">${esc(c.name)}${sp ? `<small>${esc(sp)}</small>` : ""}</button>`;
      }).join("");
    view.append($(`
      <h2>${t.title}</h2>
      <p class="muted small">${t.help}</p>
      <div class="matrix-wrap"><table class="matrix">
        <thead><tr><th>${t.corner}</th>${POST_KEYS.map((p) => `<th>${p}</th>`).join("")}</tr></thead>
        <tbody>${makes.map((m) => `<tr><th><span class="tag ${makeClass(m)}">${m}</span></th>${POST_KEYS.map((p) => `<td>${cell(m, p)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      <h3>${t.makes}</h3>
      <dl class="legend">${makes.map((m) => `<dt>${m}</dt><dd>${makeDesc()[m]}</dd>`).join("")}</dl>
      <h3>${t.posts}</h3>
      <dl class="legend">${POST_KEYS.map((p) => `<dt>${p}</dt><dd>${postDesc()[p]}</dd>`).join("")}</dl>
      <p class="note">${t.note}</p>`));
    view.querySelector("table").addEventListener("click", (e) => { const id = e.target.dataset.id; if (id) go("library-detail", id); });
  }

  // ---------- Progreso ----------
  function renderProgress() {
    const t = T().prog;
    const known = CHEESES.filter((c) => progress.known[c.id]).length;
    const totals = Object.values(progress.stats).reduce((a, s) => ({ ok: a.ok + s.ok, ko: a.ko + s.ko }), { ok: 0, ko: 0 });
    const answered = totals.ok + totals.ko;
    const rows = CHEESES.map((c) => ({ c, s: progress.stats[c.id] || { ok: 0, ko: 0 } }))
      .sort((a, b) => weakness(b.c.id) - weakness(a.c.id));
    view.append($(`
      <h2>${t.title}</h2>
      <p>${t.known} <b>${known} / 25</b></p>
      <div class="bar"><i style="width:${(known / 25) * 100}%"></i></div>
      <p>${t.answered} <b>${answered}</b> · ${t.global} <b>${answered ? Math.round((totals.ok / answered) * 100) : 0}%</b></p>
      <h3>${t.per}</h3>
      ${rows.map(({ c, s }) => {
        const n = s.ok + s.ko;
        return `<div class="stat-row"><span>${esc(c.name)}</span><span class="muted">${n ? `${s.ok}/${n} (${Math.round((s.ok / n) * 100)}%)` : "—"}</span></div>`;
      }).join("")}
      <div class="row" style="margin-top:16px"><button class="btn" id="reset">${t.reset}</button></div>`));
    view.querySelector("#reset").onclick = () => {
      if (confirm(t.confirm)) {
        progress = { stats: {}, known: {}, best: null }; save(); go("progress");
      }
    };
  }

  applyLang();
  go("library");

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
