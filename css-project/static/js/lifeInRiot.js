let currentIndex = 0;
const locations = document.querySelectorAll('.location');
const totalLocations = locations.length;

function showLocation(index) {
    locations.forEach((location, i) => {
        location.style.display = i === index ? 'flex' : 'none';
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalLocations) % totalLocations;
    showLocation(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalLocations;
    showLocation(currentIndex);
});

// Muestra la primera ubicación al cargar la página
showLocation(currentIndex);
