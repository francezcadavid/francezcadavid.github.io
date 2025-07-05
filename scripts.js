document.addEventListener('DOMContentLoaded', () => {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const titleElement = card.querySelector('p');
      const title = titleElement ? titleElement.innerText : 'Untitled Video';
      alert(`You clicked on "${title}"`);
    });
  });
});
