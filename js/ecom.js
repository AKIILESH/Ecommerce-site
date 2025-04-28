let slideIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    carousel.style.transform = `translateX(${-slideIndex * 100}%)`;

}


function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);

// Search function to filter products by name or brand
function searchProducts() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.getAttribute("data-name").toLowerCase();
        const brand = product.getAttribute("data-brand").toLowerCase();
        const category = product.getAttribute("data-category").toLowerCase();

        // Check if the search query matches product name, brand, or category
        if (name.includes(searchQuery) || brand.includes(searchQuery) || category.includes(searchQuery)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Enable real-time search as the user types
document.getElementById("searchInput").addEventListener("keyup", searchProducts);



let currentIndex = 0; // Index to keep track of the current slide
const slides = document.querySelectorAll('.gliderwrap'); // Select all slides
const totalSlides = slides.length; // Total number of slides

// Function to move the slider
function moveSlider() {
  const gliderContainer = document.querySelector('.glidercont');

  // Calculate the distance to move (width of a slide + margin)
  const slideWidth = slides[0].offsetWidth + 12; // 6px margin-left + 6px margin-right = 12px total margin

  // Apply the transform to move the slider
  gliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Increment the index to show the next slide
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first slide after the last one
}

// Set the slider to auto-play every 3 seconds (3000 ms)
setInterval(moveSlider, 3000);


