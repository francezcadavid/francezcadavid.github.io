// script.js
document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to my site!");

const toggleBtn = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  navList.classList.toggle('open');
});

// Example function for About overlay (optional)
function toggleAboutOverlay() {
  document.getElementById('aboutOverlay').classList.toggle('active');
}
