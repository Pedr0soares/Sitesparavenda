const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(image.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = 'flex';
    lightboxImage.src = src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
}
