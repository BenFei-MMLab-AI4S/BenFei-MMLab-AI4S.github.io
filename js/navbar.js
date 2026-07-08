(function () {
  const root = document.documentElement;
  const body = document.body;

  function setModeLabel() {
    const btn = document.getElementById("mode-toggle");
    if (!btn) return;
    const isDark = root.classList.contains("dark-mode") || body.classList.contains("dark-mode");
    btn.textContent = isDark ? "Light Mode" : "Dark Mode";
  }

  const saved = localStorage.getItem("theme_mode") || localStorage.getItem("mode");
  if (saved === "dark") {
    root.classList.add("dark-mode");
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    root.classList.remove("dark-mode");
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
  setModeLabel();

  document.addEventListener("click", (e) => {
    const menu = document.getElementById("navbarMenu");
    const toggleBtn = e.target.closest(".nav-toggle");
    const modeBtn = e.target.closest("#mode-toggle");

    if (modeBtn) {
      const isDark = !(root.classList.contains("dark-mode") || body.classList.contains("dark-mode"));
      root.classList.toggle("dark-mode", isDark);
      body.classList.toggle("dark-mode", isDark);
      body.classList.toggle("light-mode", !isDark);
      localStorage.setItem("theme_mode", isDark ? "dark" : "light");
      localStorage.setItem("mode", isDark ? "dark" : "light");
      setModeLabel();
      return;
    }

    if (!menu) return;

    if (toggleBtn) {
      const open = menu.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }

    if (menu.classList.contains("is-open")) {
      const clickedInsideMenu = e.target.closest("#navbarMenu");
      if (!clickedInsideMenu) {
        menu.classList.remove("is-open");
        const btn = document.querySelector(".nav-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    }
  });
})();
