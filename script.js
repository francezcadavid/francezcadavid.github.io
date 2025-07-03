const toggleBtn = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
const icon = toggleBtn.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
  if (navList.classList.contains('open')) {
    icon.textContent = '✕';
    toggleBtn.setAttribute('aria-label', 'Close menu');
  } else {
    icon.textContent = '☰';
    toggleBtn.setAttribute('aria-label', 'Open menu');
  }
});
