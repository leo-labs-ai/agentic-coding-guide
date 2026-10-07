// Two small enhancements. The site works fully without this file.
(function () {
  if (!("IntersectionObserver" in window)) return;

  // 1. Gentle reveal for blocks that start below the fold.
  var blocks = document.querySelectorAll(".reveal");
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        seen.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  blocks.forEach(function (el) {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add("is-pending");
      seen.observe(el);
    }
  });

  // 2. Highlight the current section in the guide's contents list.
  var links = document.querySelectorAll(".toc a[href^='#']");
  if (!links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
      var a = byId[e.target.id];
      if (a) { a.classList.add("is-active"); a.setAttribute("aria-current", "true"); }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  Object.keys(byId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();
