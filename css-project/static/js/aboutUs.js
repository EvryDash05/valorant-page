let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Avanza al siguiente slide o vuelve al primero
    showSlide(currentSlideIndex);
  }
  
  showSlide(currentSlideIndex);
  
  setInterval(nextSlide, 5000);