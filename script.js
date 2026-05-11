function copyEmail() {
  navigator.clipboard.writeText("mariajoseusma@hotmail.com");
  document.getElementById("email-text").textContent = "✓ copied!";
  setTimeout(() => {
    document.getElementById("email-text").textContent =
      "mariajoseusma@hotmail.com";
  }, 1000);
}
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}
(function () {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();
