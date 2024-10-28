const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section");

// Inicializar el primer slider como activo
sliderSection[0].classList.add("active");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());

setInterval(() => {
  moveToRight();
}, 10000);

let operacion = 0,
  counter = 0,
  widthImg = 100 / sliderSection.length;

function moveToRight() {
  // Remover la clase "active" del slider actual
  sliderSection[counter].classList.remove("active");

  counter++;
  if (counter >= sliderSection.length) {
    counter = 0; // Reinicia el contador al principio
  }

  operacion = counter * widthImg;
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = "all ease .6s"; // Mantén la transición

  // Agregar la clase "active" al nuevo slider
  sliderSection[counter].classList.add("active");
}

function moveToLeft() {
    // Remover la clase "active" del slider actual
    sliderSection[counter].classList.remove("active");

    if (counter <= 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
    } else {
        counter--;
        operacion = operacion - widthImg;
    }

    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";

    // Agregar la clase "active" al nuevo slider
    sliderSection[counter].classList.add("active");
}
