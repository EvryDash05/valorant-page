// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true
});

// Animación de conteo para estadísticas
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

// Observar y animar estadísticas
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          const statValue = entry.target.querySelector('.display-4');
          const endValue = parseInt(statValue.textContent);
          animateValue(statValue, 0, endValue, 2000);
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach((card) => {
  observer.observe(card);
});