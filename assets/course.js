(function () {
  // Thème (partagé avec l'aide-mémoire via localStorage)
  const t = document.getElementById("themeToggle");
  const saved = localStorage.getItem("kali-theme");
  if (saved === "light") { document.documentElement.setAttribute("data-theme", "light"); if (t) t.checked = true; }
  if (t) t.addEventListener("change", () => {
    if (t.checked) { document.documentElement.setAttribute("data-theme", "light"); localStorage.setItem("kali-theme", "light"); }
    else { document.documentElement.removeAttribute("data-theme"); localStorage.setItem("kali-theme", "dark"); }
  });

  // Boutons « Copier »
  document.querySelectorAll(".cmd-code").forEach((row) => {
    const code = row.querySelector("code");
    const btn = row.querySelector(".copy-btn");
    if (!code || !btn) return;
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = "✓ Copié";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "Copier"; btn.classList.remove("copied"); }, 1200);
      }).catch(() => { btn.textContent = "Erreur"; });
    });
  });
})();
