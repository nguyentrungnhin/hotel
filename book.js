//click hiện thanh menu
document.querySelector('.icon-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});


//slider chuyen anh
const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageCount = images.length;
const visibleImages = Math.floor(1300 / 400);
const maxIndex = imageCount - visibleImages;

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 400;
    slider.style.transform = `translateX(${offset}px)`;

    if (currentIndex >= maxIndex) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(0px)`;
        }, 1000); // Wait for transition to finish
    }

    setTimeout(() => {
        slider.style.transition = 'transform 1s ease-in-out';
    }, 1100); // Delay to reset transition
}

nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    }
    updateSlider();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
});

updateSlider();

