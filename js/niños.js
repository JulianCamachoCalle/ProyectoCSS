const images = [
    'img/ninos/puma1.jpg',
    'img/ninos/puma2.jpg',
    'img/ninos/puma3.jpg'
];
let currentIndex = 0;
const imgElement = document.getElementById('slider-image');

function rotateImages() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

// Cambiar imagen cada 3 segundos
setInterval(rotateImages, 3000);
