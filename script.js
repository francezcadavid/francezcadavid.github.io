// script.js
document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to my site!");

  document.querySelector(".menu-toggle").addEventListener("click", function() {
      this.classList.toggle("open");
      document.querySelector(".nav-list").classList.toggle("open");
    });
