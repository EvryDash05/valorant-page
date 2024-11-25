document.addEventListener('DOMContentLoaded', function() {
  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Función para manejar el fade in de las tarjetas
  function handleFadeIn() {
      var cards = document.querySelectorAll('.feature-card');
      cards.forEach(function(card, index) {
          if (isElementInViewport(card)) {
              setTimeout(function() {
                  card.classList.add('visible');
              }, index * 200); // Añade un retraso escalonado para cada tarjeta
          }
      });
  }

  // Manejar el fade in inicial
  handleFadeIn();

  // Manejar el fade in en scroll
  window.addEventListener('scroll', handleFadeIn);
});