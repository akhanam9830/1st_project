// Simple carousel script
let index = 0;
const images = document.querySelectorAll('#carousel img');
const totalImages = images.length;

function showNextImage() {
    images[index].style.display = 'none';
    index = (index + 1) % totalImages;
    images[index].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initialize carousel
images.forEach((img, idx) => {
    img.style.display = idx === 0 ? 'block' : 'none';
});
