// script.js
document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to my site!");
});

// Toggle About Overlay
function toggleAboutOverlay() {
  const overlay = document.getElementById("aboutOverlay");
  if (overlay) {
    overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
  }
}

// Optional: Theme toggle, music control, etc.
// function toggleTheme() { ... }
// function toggleMusic() { ... }

