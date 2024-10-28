const images = document.querySelectorAll('.clickable-image');

// Función para manejar el clic en la imagen
function playAudioAndEnlarge(image) {
    const audioId = image.id.replace('image-', 'audio-'); // Obtener el ID del audio correspondiente
    const audio = document.getElementById(audioId);
    
    if (audio) {
        audio.currentTime = 0; // Reinicia el audio
        audio.play(); // Reproduce el audio
    }
    
    // Añadir la clase 'enlarge' para agrandar la imagen
    image.classList.add('enlarge');
    
    // Opcional: Eliminar la clase 'enlarge' después de un tiempo
    setTimeout(() => {
        image.classList.remove('enlarge');
    }, 1000); // 1000 ms = 1 segundo
}

// Asignar el evento de clic a cada imagen
images.forEach(image => {
    image.addEventListener('click', () => playAudioAndEnlarge(image));
});
