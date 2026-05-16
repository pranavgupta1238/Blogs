const themeToggle = document.querySelector(".theme-toggle");

function getSavedTheme() {
  try {
    return localStorage.getItem("blog-theme");
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("blog-theme", theme);
  } catch {
    return false;
  }

  return true;
}

function syncThemeButton() {
  if (!themeToggle) return;

  const isLight = document.body.classList.contains("light-mode");
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.querySelector(".theme-text").textContent = isLight ? "Dark" : "Light";
}

if (getSavedTheme() === "light") {
  document.body.classList.add("light-mode");
}

syncThemeButton();

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  saveTheme(isLight ? "light" : "dark");
  syncThemeButton();
});
