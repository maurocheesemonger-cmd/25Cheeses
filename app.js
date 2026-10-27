(() => {
  const view = document.getElementById("view");
  const STORE_KEY = "25cheeses-progress-v1";

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
  const byId = Object.fromEntries(CHEESES.map((c) => [c.id, c]));
  const makeClass = (m) => "make-" + m.replace(/\s/g, "");

  // Valores normalizados para el quiz
  const species = (c) => (c.id === "feta" ? "Oveja (y algo de cabra)" : c.milk.split(/[ ,(]/)[0]);
  const country = (c) => c.country.split(" (")[0];
  const statusKey = (c) => (/^PGI/.test(c.status) ? "PGI" : /^(PDO|AOP)/.test(c.status) ? "PDO" : "Sin denominación protegida propia");

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

  // ---------- Navegación ----------
  const tabs = document.querySelectorAll(".tabs button");
  const routes = { library: renderLibrary, cards: renderCards, quiz: renderQuizStart, matrix: renderMatrix, progress: renderProgress };
  function go(tab, arg) {
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    view.replaceChildren();
    routes[tab](arg);
    window.scrollTo(0, 0);
  }
  tabs.forEach((b) => b.addEventListener("click", () => go(b.dataset.tab)));

  // ---------- Fichas ----------
  let libFilter = { q: "", make: "Todos" };
  function renderLibrary() {
    view.append($(`
      <h2>Los 25 quesos</h2>
      <input class="search" type="search" placeholder="Buscar por nombre, país, leche…" value="${esc(libFilter.q)}">
      <div class="chips">${["Todos", ...Object.keys(MAKE_CLASSES)].map((m) => `<button class="chip ${m === libFilter.make ? "on" : ""}" data-m="${m}">${m}</button>`).join("")}</div>
      <div class="grid"></div>`));
    const grid = view.querySelector(".grid");
    const draw = () => {
      const q = libFilter.q.toLowerCase();
      const list = CHEESES.filter((c) =>
        (libFilter.make === "Todos" || c.make === libFilter.make) &&
        (!q || [c.name, c.country, c.region, c.milk, c.make, ...c.postMake].join(" ").toLowerCase().includes(q)));
      grid.replaceChildren($(list.map((c) => `
        <button class="card" data-id="${c.id}">
          <div class="name">${esc(c.name)}</div>
          <div class="meta">${esc(country(c))} · ${esc(species(c))}</div>
          <span class="tag ${makeClass(c.make)}">${c.make}</span>${c.postMake.map((p) => `<span class="tag">${p}</span>`).join("")}
        </button>`).join("") || `<p class="muted">Sin resultados.</p>`));
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

  function detailHTML(c) {
    return `
      <h2>${esc(c.name)}</h2>
      <span class="tag ${makeClass(c.make)}">Make: ${c.make}</span>${c.postMake.map((p) => `<span class="tag">Post-Make: ${p}</span>`).join("")}
      <dl>
        <dt>País</dt><dd>${esc(c.country)}</dd>
        <dt>Región</dt><dd>${esc(c.region)}</dd>
        <dt>Leche</dt><dd>${esc(c.milk)}</dd>
        <dt>Tratamiento</dt><dd>${esc(c.treatment)}</dd>
        <dt>Protección</dt><dd>${esc(c.status)}</dd>
        <dt>Aspecto</dt><dd>${esc(c.appearance)}</dd>
        <dt>Sabor / textura</dt><dd>${esc(c.flavour)}</dd>
      </dl>
      <h3>Claves para el examen</h3>
      <ul>${c.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
  }

  routes["library-detail"] = (id) => {
    tabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === "library"));
    const c = byId[id];
    const i = CHEESES.indexOf(c);
    view.append($(`
      <button class="back-link">← Volver a las fichas</button>
      <article class="detail">${detailHTML(c)}</article>
      <div class="row" style="margin-top:12px;justify-content:space-between">
        <button class="btn" data-go="${CHEESES[(i + 24) % 25].id}">← Anterior</button>
        <button class="btn" data-go="${CHEESES[(i + 1) % 25].id}">Siguiente →</button>
      </div>`));
    view.querySelector(".back-link").onclick = () => go("library");
    view.querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => go("library-detail", b.dataset.go)));
  };

  // ---------- Tarjetas ----------
  let deck = null, deckPos = 0;
  function renderCards() {
    view.append($(`
      <h2>Tarjetas</h2>
      <p class="muted small">Toca la tarjeta para darle la vuelta. Marca si te la sabes; las que no, vuelven a salir.</p>
      <div class="chips">
        <button class="chip" data-mode="all">Todas (25)</button>
        <button class="chip" data-mode="pending">Solo las que no sé (${CHEESES.filter((c) => !progress.known[c.id]).length})</button>
        <button class="chip" data-mode="reverse">Al revés: adivina el queso</button>
      </div>
      <div id="deck"></div>`));
    view.querySelector(".chips").addEventListener("click", (e) => {
      const mode = e.target.dataset.mode; if (!mode) return;
      view.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === e.target));
      startDeck(mode);
    });
    view.querySelector('[data-mode="all"]').click();
  }

  function startDeck(mode) {
    let list = mode === "pending" ? CHEESES.filter((c) => !progress.known[c.id]) : CHEESES;
    deck = { mode, ids: shuffle(list.map((c) => c.id)) };
    deckPos = 0;
    drawCard();
  }

  function drawCard() {
    const box = document.getElementById("deck");
    if (!deck.ids.length) {
      box.replaceChildren($(`<p>🎉 ¡Te las sabes todas! Prueba el modo "Todas" o el quiz.</p>`));
      return;
    }
    if (deckPos >= deck.ids.length) { deck.ids = shuffle(deck.ids); deckPos = 0; }
    const c = byId[deck.ids[deckPos]];
    const reverse = deck.mode === "reverse";
    const front = reverse
      ? `<div style="font-size:1rem;font-weight:500;text-align:left">
           <p><b>${esc(country(c))}</b> · ${esc(species(c))} · ${c.make} · ${c.postMake.join(", ")}</p>
           <p>${esc(mask(c.appearance, c))}</p><p class="muted">${esc(mask(c.flavour, c))}</p>
           <p class="muted small">¿Qué queso es?</p></div>`
      : `<div>${esc(c.name)}</div><div class="muted small" style="font-weight:400;margin-top:8px">Toca para ver la ficha</div>`;
    const back = reverse ? `<h3 style="margin-top:0">${esc(c.name)}</h3><ul>${c.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`
      : `<p><b>${esc(c.country)}</b> — ${esc(c.region)}</p>
         <p>🥛 ${esc(c.milk)} · ${esc(c.treatment)}</p>
         <p>🏷️ ${esc(c.status)}</p>
         <p><span class="tag ${makeClass(c.make)}">Make: ${c.make}</span>${c.postMake.map((p) => `<span class="tag">${p}</span>`).join("")}</p>
         <p>👀 ${esc(c.appearance)}</p><p>👅 ${esc(c.flavour)}</p>
         <ul>${c.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
    box.replaceChildren($(`
      <p class="muted small">${deckPos + 1} / ${deck.ids.length}${progress.known[c.id] ? " · ✅ marcada como sabida" : ""}</p>
      <div class="flash"><div class="flash-inner">
        <div class="face front">${front}</div>
        <div class="face back">${back}</div>
      </div></div>
      <div class="row" style="justify-content:center">
        <button class="btn" data-a="no">🔁 Repasar</button>
        <button class="btn primary" data-a="yes">✅ Me la sé</button>
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
  // Cada generador devuelve { q, options, answer, cheese, explain } o null
  const distinct = (arr) => [...new Set(arr)];
  function optionsFrom(correct, pool, n = 4) {
    return shuffle([correct, ...shuffle(distinct(pool).filter((x) => x !== correct)).slice(0, n - 1)]);
  }
  const otherNames = (c, filter = () => true) => CHEESES.filter((x) => x !== c && filter(x)).map((x) => x.name);

  const generators = [
    (c) => ({ q: `¿De qué leche se elabora ${c.name}?`, options: optionsFrom(species(c), ["Vaca", "Oveja", "Cabra", "Búfala", "Oveja (y algo de cabra)"]), answer: species(c) }),
    (c) => ({ q: `¿De qué país es ${c.name}?`, options: optionsFrom(country(c), CHEESES.map(country)), answer: country(c) }),
    (c) => ({ q: `¿Cuál es la clase Make de ${c.name}?`, options: shuffle(Object.keys(MAKE_CLASSES)), answer: c.make }),
    (c) => ({ q: `¿Qué clase Post-Make corresponde a ${c.name}?`, options: optionsFrom(c.postMake[0], Object.keys(POST_MAKE_CLASSES).filter((p) => !c.postMake.includes(p))), answer: c.postMake[0] }),
    (c) => ({ q: `¿Qué tipo de protección tiene ${c.name}?`, options: ["PDO", "PGI", "Sin denominación protegida propia"], answer: statusKey(c) }),
    (c) => ({ q: `¿De qué región procede ${c.name}?`, options: optionsFrom(c.region, CHEESES.filter((x) => country(x) === country(c) || Math.random() < 0.3).map((x) => x.region)), answer: c.region }),
    (c) => ({ q: `¿Qué queso es? “${mask(pick(c.facts), c)}”`, options: optionsFrom(c.name, otherNames(c)), answer: c.name }),
    (c) => ({ q: `¿Qué queso tiene este aspecto? “${mask(c.appearance, c)}”`, options: optionsFrom(c.name, otherNames(c)), answer: c.name }),
    (c) => ({ q: `¿Qué queso sabe así? “${mask(c.flavour, c)}”`, options: optionsFrom(c.name, otherNames(c)), answer: c.name }),
    (c) => ({ q: `¿Cuál de estos quesos tiene Make = ${c.make}?`, options: optionsFrom(c.name, otherNames(c, (x) => x.make !== c.make)), answer: c.name }),
    (c) => ({ q: `¿Cuál de estos quesos es de leche de ${species(c).toLowerCase()}?`, options: optionsFrom(c.name, otherNames(c, (x) => species(x) !== species(c))), answer: c.name }),
    (c) => ({ q: `¿Cuál de estos quesos tiene Post-Make “${c.postMake[0]}”?`, options: optionsFrom(c.name, otherNames(c, (x) => !x.postMake.includes(c.postMake[0]))), answer: c.name })
  ];

  function makeQuestion(c) {
    for (let tries = 0; tries < 10; tries++) {
      const q = pick(generators)(c);
      if (q && q.options.length >= 2 && q.options.includes(q.answer)) return { ...q, cheese: c };
    }
  }

  let quiz = null;
  function renderQuizStart() {
    const best = progress.best ? `<p class="muted small">Mejor resultado: ${progress.best.score}/${progress.best.total}</p>` : "";
    view.append($(`
      <h2>Quiz</h2>
      <p class="muted">Preguntas tipo test generadas a partir de las fichas: leche, país, región, protección, Make, Post-Make, aspecto y sabor.</p>
      ${best}
      <h3>Número de preguntas</h3>
      <div class="chips" id="n">${[10, 25, 50].map((n, i) => `<button class="chip ${i === 0 ? "on" : ""}" data-n="${n}">${n}</button>`).join("")}</div>
      <h3>Enfoque</h3>
      <div class="chips" id="f">
        <button class="chip on" data-f="all">Todos los quesos</button>
        <button class="chip" data-f="weak">Mis puntos débiles</button>
        ${Object.keys(MAKE_CLASSES).map((m) => `<button class="chip" data-f="${m}">${m}</button>`).join("")}
      </div>
      <button class="btn primary" id="go" style="margin-top:12px">Empezar</button>`));
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
    quiz = { questions: focus === "weak" ? questions : shuffle(questions), i: 0, score: 0, misses: [] };
    view.replaceChildren();
    drawQuestion();
  }

  function drawQuestion() {
    const { questions, i } = quiz;
    if (i >= questions.length) return drawResult();
    const q = questions[i];
    view.replaceChildren($(`
      <p class="muted small">Pregunta ${i + 1} de ${questions.length} · Aciertos: ${quiz.score}</p>
      <div class="bar"><i style="width:${(i / questions.length) * 100}%"></i></div>
      <div class="question">${esc(q.q)}</div>
      <div class="options">${q.options.map((o) => `<button class="option">${esc(o)}</button>`).join("")}</div>
      <div id="after"></div>`));
    view.querySelectorAll(".option").forEach((b) => (b.onclick = () => answer(b)));
  }

  function answer(btn) {
    const q = quiz.questions[quiz.i];
    const ok = btn.textContent === q.answer;
    view.querySelectorAll(".option").forEach((b) => {
      b.disabled = true;
      if (b.textContent === q.answer) b.classList.add("correct");
    });
    if (!ok) { btn.classList.add("wrong"); quiz.misses.push(q); } else quiz.score++;
    record(q.cheese.id, ok);
    const c = q.cheese;
    view.querySelector("#after").replaceChildren($(`
      <div class="explain">${ok ? "✅ ¡Correcto!" : "❌ La respuesta era: <b>" + esc(q.answer) + "</b>"}<br>
        <b>${esc(c.name)}</b>: ${esc(country(c))} · ${esc(c.milk)} · ${esc(c.status)} · Make ${c.make} · ${c.postMake.join(", ")}
      </div>
      <div class="row" style="margin-top:12px;justify-content:flex-end">
        <button class="btn primary" id="next">${quiz.i + 1 < quiz.questions.length ? "Siguiente →" : "Ver resultado"}</button>
      </div>`));
    view.querySelector("#next").onclick = () => { quiz.i++; drawQuestion(); };
  }

  function drawResult() {
    const { score, questions, misses } = quiz;
    const pct = Math.round((score / questions.length) * 100);
    if (!progress.best || score / questions.length > progress.best.score / progress.best.total) {
      progress.best = { score, total: questions.length }; save();
    }
    view.replaceChildren($(`
      <h2>Resultado</h2>
      <div class="big">${score} / ${questions.length} <span class="muted" style="font-size:1.2rem">(${pct}%)</span></div>
      <p>${pct >= 80 ? "🏆 ¡Aprobado! (el examen oficial pide un 80%)" : "Sigue practicando: el examen oficial pide un 80%."}</p>
      ${misses.length ? `<h3>Repasa estas</h3><ul>${misses.map((q) => `<li>${esc(q.q)}<br><b>${esc(q.answer)}</b></li>`).join("")}</ul>` : ""}
      <div class="row" style="margin-top:12px">
        <button class="btn primary" id="again">Otro quiz</button>
      </div>`));
    view.querySelector("#again").onclick = () => go("quiz");
  }

  // ---------- Tabla Make / Post-Make ----------
  function renderMatrix() {
    const posts = Object.keys(POST_MAKE_CLASSES);
    const makes = Object.keys(MAKE_CLASSES);
    const cell = (m, p) => CHEESES.filter((c) => c.make === m && c.postMake.includes(p))
      .map((c) => `<button data-id="${c.id}">${esc(c.name)}</button>`).join("");
    view.append($(`
      <h2>Tabla Make / Post-Make</h2>
      <p class="muted small">Cada queso tiene una sola clase Make y puede tener una o más Post-Make. Toca un queso para ver su ficha.</p>
      <div class="matrix-wrap"><table class="matrix">
        <thead><tr><th>Make ↓ / Post-Make →</th>${posts.map((p) => `<th>${p}</th>`).join("")}</tr></thead>
        <tbody>${makes.map((m) => `<tr><th><span class="tag ${makeClass(m)}">${m}</span></th>${posts.map((p) => `<td>${cell(m, p)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      <h3>Clases Make</h3>
      <dl class="legend">${makes.map((m) => `<dt>${m}</dt><dd>${MAKE_CLASSES[m]}</dd>`).join("")}</dl>
      <h3>Clases Post-Make</h3>
      <dl class="legend">${posts.map((p) => `<dt>${p}</dt><dd>${POST_MAKE_CLASSES[p]}</dd>`).join("")}</dl>
      <p class="note">⚠️ La clasificación Post-Make de algunos quesos (p. ej. Block Cheddar, Aged Gouda, Feta, Gruyère, Mimolette) es una interpretación; contrástala con las crib sheets oficiales de la Academy of Cheese.</p>`));
    view.querySelector("table").addEventListener("click", (e) => { const id = e.target.dataset.id; if (id) go("library-detail", id); });
  }

  // ---------- Progreso ----------
  function renderProgress() {
    const known = CHEESES.filter((c) => progress.known[c.id]).length;
    const totals = Object.values(progress.stats).reduce((a, s) => ({ ok: a.ok + s.ok, ko: a.ko + s.ko }), { ok: 0, ko: 0 });
    const answered = totals.ok + totals.ko;
    const rows = CHEESES.map((c) => ({ c, s: progress.stats[c.id] || { ok: 0, ko: 0 } }))
      .sort((a, b) => weakness(b.c.id) - weakness(a.c.id));
    view.append($(`
      <h2>Tu progreso</h2>
      <p>Tarjetas que te sabes: <b>${known} / 25</b></p>
      <div class="bar"><i style="width:${(known / 25) * 100}%"></i></div>
      <p>Preguntas respondidas: <b>${answered}</b> · Acierto global: <b>${answered ? Math.round((totals.ok / answered) * 100) : 0}%</b></p>
      <h3>Por queso (de peor a mejor)</h3>
      ${rows.map(({ c, s }) => {
        const n = s.ok + s.ko;
        return `<div class="stat-row"><span>${esc(c.name)}</span><span class="muted">${n ? `${s.ok}/${n} (${Math.round((s.ok / n) * 100)}%)` : "—"}</span></div>`;
      }).join("")}
      <div class="row" style="margin-top:16px"><button class="btn" id="reset">Borrar progreso</button></div>`));
    view.querySelector("#reset").onclick = () => {
      if (confirm("¿Seguro que quieres borrar todo tu progreso?")) {
        progress = { stats: {}, known: {}, best: null }; save(); go("progress");
      }
    };
  }

  go("library");

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
