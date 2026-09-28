(function () {
  const data = window.KALI_DATA || [];
  const cardsEl = document.getElementById("cards");
  const searchEl = document.getElementById("search");
  const chipsEl = document.getElementById("chips");
  const countEl = document.getElementById("count");
  const emptyEl = document.getElementById("empty");

  let activeCat = null;
  let query = "";
  const copyAllEl = document.getElementById("copyAll");

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

  // --- Filtres par catégorie ---
  function buildChips() {
    const all = document.createElement("button");
    all.className = "chip active";
    all.textContent = "Tout";
    all.onclick = () => { activeCat = null; setActiveChip(all); render(); };
    chipsEl.appendChild(all);

    data.forEach((c) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.textContent = c.icon + " " + c.cat;
      chip.onclick = () => { activeCat = c.cat; setActiveChip(chip); render(); };
      chipsEl.appendChild(chip);
    });
  }
  function setActiveChip(el) {
    chipsEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    el.classList.add("active");
  }

  // --- Recherche ---
  function esc(s) { return s.replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m])); }
  function highlight(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  }
  function matches(item, q) {
    if (!q) return true;
    return (item.tool + " " + item.desc + " " + item.cmd).toLowerCase().includes(q);
  }

  // --- Liste des commandes actuellement visibles (respecte filtre + recherche) ---
  function visibleText() {
    const q = query.trim().toLowerCase();
    let out = "# Kali Linux — commandes (usage legal et autorise uniquement)\n";
    data.forEach((cat) => {
      if (activeCat && cat.cat !== activeCat) return;
      const items = cat.items.filter((it) => matches(it, q));
      if (!items.length) return;
      out += "\n# === " + cat.cat + " ===\n";
      items.forEach((it) => { out += it.cmd + "\n"; });
    });
    return out;
  }

  // --- Rendu ---
  function render() {
    const q = query.trim().toLowerCase();
    cardsEl.innerHTML = "";
    let total = 0;

    data.forEach((cat) => {
      if (activeCat && cat.cat !== activeCat) return;
      const items = cat.items.filter((it) => matches(it, q));
      if (!items.length) return;
      total += items.length;

      const section = document.createElement("section");
      section.className = "category";
      section.innerHTML =
        '<h2><span class="cat-icon">' + cat.icon + "</span>" + esc(cat.cat) +
        '<span class="cat-desc">' + esc(cat.desc) + "</span></h2>";

      items.forEach((it) => {
        const div = document.createElement("div");
        div.className = "cmd";
        div.innerHTML =
          '<div class="cmd-head"><span class="cmd-tool">' + highlight(it.tool, q) +
          '</span><span class="cmd-desc">' + highlight(it.desc, q) + "</span></div>" +
          '<div class="cmd-code"><code>' + highlight(it.cmd, q) +
          '</code><button class="copy-btn">Copier</button></div>';
        const btn = div.querySelector(".copy-btn");
        btn.onclick = () => copy(it.cmd, btn);
        section.appendChild(div);
      });
      cardsEl.appendChild(section);
    });

    emptyEl.hidden = total > 0;
    countEl.textContent = total + " commande" + (total > 1 ? "s" : "") + " affichée" + (total > 1 ? "s" : "");
  }

  function copy(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "✓ Copié";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = "Copier"; btn.classList.remove("copied"); }, 1200);
    }).catch(() => { btn.textContent = "Erreur"; });
  }

  searchEl.addEventListener("input", (e) => { query = e.target.value; render(); });

  copyAllEl.addEventListener("click", () => {
    navigator.clipboard.writeText(visibleText()).then(() => {
      const orig = copyAllEl.textContent;
      copyAllEl.textContent = "✓ Copié !";
      copyAllEl.classList.add("copied");
      setTimeout(() => { copyAllEl.textContent = orig; copyAllEl.classList.remove("copied"); }, 1400);
    });
  });

  buildChips();
  render();
})();
