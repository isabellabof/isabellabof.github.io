(function () {
  var STORAGE_KEY = "isabella-portfolio-lang";
  var html = document.documentElement;

  function setLang(lang) {
    html.setAttribute("lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing / storage unavailable — ignore */
    }
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.dataset.lang);
    });
  });

  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}

  if (saved === "pt" || saved === "en") {
    setLang(saved);
  } else {
    var browserLang = (navigator.language || "pt").slice(0, 2);
    setLang(browserLang === "en" ? "en" : "pt");
  }

  // Smooth-scroll offset for sticky nav when following in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  // current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
