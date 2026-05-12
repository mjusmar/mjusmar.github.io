const avatarLight = "assets/personal/avatar_light.gif";
const avatarDark = "assets/personal/avatar_dark.gif";

// precarga
new Image().src = avatarLight;
new Image().src = avatarDark;

history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }
};

window.onbeforeunload = () => window.scrollTo(0, 0);

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  const avatar = document.querySelector(".footer-avatar");
  avatar.style.opacity = "0";
  setTimeout(() => {
    avatar.src = next === "light" ? avatarLight : avatarDark;
    avatar.style.opacity = "1";
  }, 250);
}

function copyEmail() {
  navigator.clipboard.writeText("mariajoseusma@hotmail.com");
  document.getElementById("email-text").textContent = "✓ copied!";
  setTimeout(() => {
    document.getElementById("email-text").textContent =
      "mariajoseusma@hotmail.com";
  }, 1000);
}
