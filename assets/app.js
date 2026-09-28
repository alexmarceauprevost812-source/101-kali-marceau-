(function () {
  const data = window.KALI_DATA || [];
  const catalog = window.KALI_CATALOG || [];
  const cardsEl = document.getElementById("cards");
  const searchEl = document.getElementById("search");
  const chipsEl = document.getElementById("chips");
  const countEl = document.getElementById("count");
  const emptyEl = document.getElementById("empty");
  const copyAllEl = document.getElementById("copyAll");
  const viewCheatEl = document.getElementById("viewCheat");
  const viewCatalogEl = document.getElementById("viewCatalog");

  let view = "cheat"; // "cheat" | "catalog"
  let activeCat = null;
  let query = "";

  // --- Thème ---
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("kali-theme");
  if (saved === "light") { document.documentElement.setAttribute("data-theme", "light"); themeToggle.checked = true; }
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("kali-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("kali-theme", "dark");
    }
  });

  // --- Utilitaires ---
  function esc(s) { return String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m])); }
  function highlight(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  }
  function copy(text, btn, label) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = "✓ Copié";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = label || orig; btn.classList.remove("copied"); }, 1200);
    }).catch(() => { btn.textContent = "Erreur"; });
  }
  function codeRow(cmd, q) {
    const wrap = document.createElement("div");
    wrap.className = "cmd-code";
    wrap.innerHTML = '<code>' + highlight(cmd, q) + '</code><button class="copy-btn">Copier</button>';
    wrap.querySelector(".copy-btn").onclick = (e) => copy(cmd, e.target, "Copier");
    return wrap;
  }

  const dataset = () => (view === "cheat" ? data : catalog);

  // --- Chips (catégories de la vue active) ---
  function buildChips() {
    chipsEl.innerHTML = "";
    const all = document.createElement("button");
    all.className = "chip" + (activeCat === null ? " active" : "");
    all.textContent = "Tout";
    all.onclick = () => { activeCat = null; render(); buildChips(); };
    chipsEl.appendChild(all);
    dataset().forEach((c) => {
      const chip = document.createElement("button");
      chip.className = "chip" + (activeCat === c.cat ? " active" : "");
      chip.textContent = c.icon + " " + c.cat;
      chip.onclick = () => { activeCat = c.cat; render(); buildChips(); };
      chipsEl.appendChild(chip);
    });
  }

  // --- Recherche ---
  function matchCheat(it, q) {
    if (!q) return true;
    return (it.tool + " " + it.desc + " " + it.cmd).toLowerCase().includes(q);
  }
  function matchTool(t, q) {
    if (!q) return true;
    let hay = t.n + " " + t.d + " " + t.i;
    if (t.b) t.b.forEach((b) => { hay += " " + b[0] + " " + b[1]; });
    return hay.toLowerCase().includes(q);
  }

  // --- Rendu vue Aide-mémoire ---
  function renderCheat(q) {
    let total = 0;
    data.forEach((cat) => {
      if (activeCat && cat.cat !== activeCat) return;
      const items = cat.items.filter((it) => matchCheat(it, q));
      if (!items.length) return;
      total += items.length;
      const section = document.createElement("section");
      section.className = "category";
      section.innerHTML = '<h2><span class="cat-icon">' + cat.icon + "</span>" + esc(cat.cat) +
        '<span class="cat-desc">' + esc(cat.desc) + "</span></h2>";
      items.forEach((it) => {
        const div = document.createElement("div");
        div.className = "cmd";
        div.innerHTML = '<div class="cmd-head"><span class="cmd-tool">' + highlight(it.tool, q) +
          '</span><span class="cmd-desc">' + highlight(it.desc, q) + "</span></div>";
        div.appendChild(codeRow(it.cmd, q));
        section.appendChild(div);
      });
      cardsEl.appendChild(section);
    });
    return total;
  }

  // --- Rendu vue Catalogue complet ---
  function renderCatalog(q) {
    let total = 0;
    catalog.forEach((cat) => {
      if (activeCat && cat.cat !== activeCat) return;
      const tools = cat.tools.filter((t) => matchTool(t, q));
      if (!tools.length) return;
      total += tools.length;
      const section = document.createElement("section");
      section.className = "category";
      section.innerHTML = '<h2><span class="cat-icon">' + cat.icon + "</span>" + esc(cat.cat) +
        '<span class="cat-desc">' + tools.length + " outil" + (tools.length > 1 ? "s" : "") + "</span></h2>";
      tools.forEach((t) => {
        const div = document.createElement("div");
        div.className = "cmd tool";
        div.innerHTML = '<div class="cmd-head"><span class="cmd-tool">' + highlight(t.n, q) +
          '</span><span class="cmd-desc">' + highlight(t.d || "", q) + "</span></div>";
        div.appendChild(codeRow(t.i, q));
        if (t.b && t.b.length) {
          const det = document.createElement("details");
          det.className = "bins";
          const openByQuery = !!q;
          if (openByQuery) det.open = true;
          const sum = document.createElement("summary");
          sum.textContent = t.b.length + " commande" + (t.b.length > 1 ? "s" : "");
          det.appendChild(sum);
          t.b.forEach((b) => {
            const line = document.createElement("div");
            line.className = "bin";
            line.innerHTML = '<span class="bin-desc">' + highlight(b[1] || "", q) + "</span>";
            det.appendChild(line);
            det.appendChild(codeRow(b[0], q));
          });
          div.appendChild(det);
        }
        section.appendChild(div);
      });
      cardsEl.appendChild(section);
    });
    return total;
  }

  function render() {
    const q = query.trim().toLowerCase();
    cardsEl.innerHTML = "";
    const total = view === "cheat" ? renderCheat(q) : renderCatalog(q);
    emptyEl.hidden = total > 0;
    const unit = view === "cheat" ? "commande" : "outil";
    countEl.textContent = total + " " + unit + (total > 1 ? "s" : "") + " affiché" + (total > 1 ? "s" : "");
  }

  // --- Copier tout (vue active, respecte filtre/recherche) ---
  function visibleText() {
    const q = query.trim().toLowerCase();
    let out = "# Kali Linux — usage legal et autorise uniquement\n";
    if (view === "cheat") {
      data.forEach((cat) => {
        if (activeCat && cat.cat !== activeCat) return;
        const items = cat.items.filter((it) => matchCheat(it, q));
        if (!items.length) return;
        out += "\n# === " + cat.cat + " ===\n";
        items.forEach((it) => { out += it.cmd + "\n"; });
      });
    } else {
      catalog.forEach((cat) => {
        if (activeCat && cat.cat !== activeCat) return;
        const tools = cat.tools.filter((t) => matchTool(t, q));
        if (!tools.length) return;
        out += "\n# === " + cat.cat + " ===\n";
        tools.forEach((t) => { out += t.i + "\n"; });
      });
    }
    return out;
  }

  // --- Bascule de vue ---
  function setView(v) {
    view = v;
    activeCat = null;
    viewCheatEl.classList.toggle("active", v === "cheat");
    viewCatalogEl.classList.toggle("active", v === "catalog");
    buildChips();
    render();
  }
  viewCheatEl.onclick = () => setView("cheat");
  viewCatalogEl.onclick = () => setView("catalog");

  searchEl.addEventListener("input", (e) => { query = e.target.value; render(); });
  copyAllEl.addEventListener("click", (e) => copy(visibleText(), e.target, "📋 Tout copier"));

  buildChips();
  render();
})();
