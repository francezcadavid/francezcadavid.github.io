document.addEventListener('DOMContentLoaded', () => {
  const videoCards = document.querySelectorAll('.video-card');

  // Example click handler
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.title').innerText;
      alert(`You clicked on "${title}"`);
    });
  });
});
