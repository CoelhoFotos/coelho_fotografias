(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (!toggle || !nav) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.setAttribute("aria-label", expanded ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", expanded);
  };

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });

  // fecha o menu ao clicar em um link
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("a")) {
      setExpanded(false);
    }
  });

  // fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setExpanded(false);
  });

  // fecha ao voltar pro desktop (acima de 800px)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) setExpanded(false);
  });
})();
