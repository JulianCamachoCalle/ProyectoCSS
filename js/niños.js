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

const imagenes = document.querySelectorAll('.imagen-ninos-shop');

imagenes.forEach((imagen) => {
    const originalSrc = imagen.src; // Guardamos la ruta original de la imagen
    const hoverSrc = imagen.getAttribute('data-hover'); // Obtenemos la imagen de hover desde el atributo data-hover

    // Cambiamos la imagen cuando el cursor está sobre ella
    imagen.addEventListener('mouseenter', () => {
        imagen.src = hoverSrc;
    });

    // Restauramos la imagen original cuando el cursor sale de la imagen
    imagen.addEventListener('mouseleave', () => {
        imagen.src = originalSrc;
    });
});

// Selecciona todas las imágenes que pueden agrandarse
const zoomableImages = document.querySelectorAll('.figura-ninos-shop');

zoomableImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Alterna la clase 'agrandada' al hacer clic
    image.classList.toggle('agrandada');
  });
});
