//click hiện thanh menu
document.querySelector('.icon-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});



//slider chuyển động
document.addEventListener('DOMContentLoaded', function () {
    // Select the required elements
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const sliderContainer = document.querySelector('.h-special-room-1-prince-all');

    // Define the product data for each slide
    const products = [
        {
            title: "Prince's Room",
            size: "25m² / 269ft²",
            people: "1–2 People",
            bed: "King Size Bed",
            image: "img/home/product/pro-1.webp",
            link: "book.html"
        },
        {
            title: "Queen's Room",
            size: "30m² / 322ft²",
            people: "1–3 People",
            bed: "Queen Size Bed",
            image: "img/home/product/product-1.jpg",
            link: "book.html"
        },
        {
            title: "Prince`s VIP Room",
            size: "30m² / 322ft²",
            people: "1–3 People",
            bed: "Queen Size Bed",
            image: "img/home/product/product-2.jpg",
            link: "book.html"
        },
        {
            title: "Prince`s Luxe Room",
            size: "30m² / 322ft²",
            people: "1–3 People",
            bed: "Queen Size Bed",
            image: "img/home/product/product-3.jpg",
            link: "book.html"
        },
        {
            title: "Queen's Room",
            size: "30m² / 322ft²",
            people: "1–3 People",
            bed: "Queen Size Bed",
            image: "img/home/product/product-4.jpg",
            link: "book.html"
        },
        {
            title: "Royal Suite",
            size: "50m² / 538ft²",
            people: "2–4 People",
            bed: "Super King Bed",
            image: "img/home/product/product-5.jpg",
            link: "book.html"
        }
    ];

    let currentIndex = 0;

    // Function to update the slider content
    function updateSlider(index) {
        sliderContainer.innerHTML = `
            <div class="h-special-room-1-prince-1">
                <div class="h-prince-detail">
                    <h3><a href="#">${products[index].title}</a></h3>
                    <div class="h-prince-detail-1">
                        <p>${products[index].size}</p>
                        <p>${products[index].people}</p>
                        <p>${products[index].bed}</p>
                    </div>
                    <a class="h-prince-detail-2" href="${products[index].link}">Book now</a>
                </div>
            </div>
            <div class="h-special-room-1-prince-2">
                <img src="${products[index].image}" alt="">
            </div>
        `;
    }

    // Event listeners for arrow buttons
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length; // Go to the next product
        updateSlider(currentIndex);
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length; // Go to the previous product
        updateSlider(currentIndex);
    });

    // Initialize the first slide
    updateSlider(currentIndex);
});



