history.scrollRestoration = "manual";
window.onload = () => window.scrollTo(0, 0);

window.onload = () => {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
    window.scrollTo(0, 0);
  }
};

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

function copyEmail() {
  navigator.clipboard.writeText("mariajoseusma@hotmail.com");
  document.getElementById("email-text").textContent = "✓ copied!";
  setTimeout(() => {
    document.getElementById("email-text").textContent =
      "mariajoseusma@hotmail.com";
  }, 1000);
}
