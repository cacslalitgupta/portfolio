(function () {
  try {
    var root = document.documentElement;
    var mode = localStorage.getItem("ca_mode") || localStorage.getItem("ca_site_mode") || "system";
    var dark = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) root.classList.add("dark");
    var vars = JSON.parse(localStorage.getItem("ca_vars") || "null");
    if (vars) { var set = vars[dark ? "dark" : "light"]; for (var k in set) root.style.setProperty(k, set[k]); }
  } catch (e) {}
})();
