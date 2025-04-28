document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("show");
        });
    });

    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");

    priceRange.addEventListener("input", function() {
        priceValue.textContent = this.value;
    });

    const discountRange = document.getElementById("discountRange");
    const discountValue = document.getElementById("discountValue");

    discountRange.addEventListener("input", function() {
        discountValue.textContent = this.value;
    });
});


// JavaScript code to handle filtering functionality

document.addEventListener('DOMContentLoaded', () => {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const discountRange = document.getElementById('discountRange');
    const discountValue = document.getElementById('discountValue');
  
    // Update range values dynamically
    priceRange.addEventListener('input', () => {
      priceValue.textContent = priceRange.value;
      filterProducts();
    });
  
    discountRange.addEventListener('input', () => {
      discountValue.textContent = discountRange.value;
      filterProducts();
    });
  
    // Add event listeners for all checkboxes
    document.querySelectorAll('.dropdown-content input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', filterProducts);
    });
  
    function filterProducts() {
      const selectedFilters = {
        gender: getSelectedValues('Gender'),
        size: getSelectedValues('Size'),
        brand: getSelectedValues('Brand'),
        occasion: getSelectedValues('Occasion'),
        color: getSelectedValues('Color'),
        material: getSelectedValues('Material'),
        neck: getSelectedValues('Neck Type'),
        price: parseInt(priceRange.value),
        discount: parseInt(discountRange.value)
      };
  
      document.querySelectorAll('.product').forEach(product => {
        const productName = product.dataset.name.toLowerCase();
        const productBrand = product.dataset.brand.toLowerCase();
        const productCategory = product.dataset.category.toLowerCase();
        const productPrice = parseInt(product.dataset.price);
        const productDiscount = parseInt(product.dataset.discount);
        const productColor = product.dataset.color.toLowerCase();
        const productOccasion = product.dataset.occasion.toLowerCase();
        const productMaterial = product.dataset.material.toLowerCase();
  
        const matchesGender = selectedFilters.gender.length === 0 || selectedFilters.gender.some(g => productCategory.includes(g));
        const matchesBrand = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(productBrand);
        const matchesPrice = productPrice <= selectedFilters.price;
        const matchesDiscount = productDiscount >= selectedFilters.discount;
        const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(productColor);
        const matchesOccasion = selectedFilters.occasion.length === 0 || selectedFilters.occasion.includes(productOccasion);
        const matchesMaterial = selectedFilters.material.length === 0 || selectedFilters.material.includes(productMaterial);
  
        product.style.display = matchesGender && matchesBrand && matchesPrice && matchesDiscount && matchesColor && matchesOccasion && matchesMaterial ? 'block' : 'none';
      });
    }
  
    function getSelectedValues(category) {
      const categoryElements = Array.from(document.querySelectorAll('.filter-category'));
      for (const element of categoryElements) {
        const button = element.querySelector('.dropdown-btn');
        if (button && button.textContent.includes(category)) {
          const checkboxes = element.querySelectorAll('input[type="checkbox"]:checked');
          return Array.from(checkboxes).map(cb => cb.parentElement.textContent.trim().toLowerCase());
        }
      }
      return [];
    }
  
  });

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}


function displayProducts() {
    const category = getCategoryFromURL();  
    const products = document.querySelectorAll(".product"); // Get all product elements
    products.forEach(product => {
        const productCategory = product.getAttribute("data-category");
        if (category && productCategory !== category) {
            product.style.display = "none"; 
        } else {
            product.style.display = "block"; 
        }
    });
}


window.onload = displayProducts;
