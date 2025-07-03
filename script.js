// script.js
document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to my site!");

  // Hamburger dropdown
  const hamburger = document.querySelector(".hamburger");
  const dropdown = document.getElementById("navDropdown");

  if (hamburger && dropdown) {
    hamburger.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }

  // Optional: Theme toggle, music control
});
