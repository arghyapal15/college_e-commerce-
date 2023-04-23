const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("show");
    hamburger.classList.toggle("is-active");
});


//sort by features
// Get the select element and product list
const select = document.getElementById('sort-select');
const productList = document.querySelector('.product-list');

// Add an event listener to the select element
select.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = select.value;

    // Sort the product list based on the selected value
    sortProductList(selectedValue);
});

// Function to sort the product list
function sortProductList(selectedValue) {
    // Get all the product items
    const productItems = Array.from(productList.children);

    // Sort the product items based on the selected value
    productItems.sort(function(a, b) {
        if (selectedValue === 'name-asc') {
            return a.dataset.name.localeCompare(b.dataset.name);
        } else if (selectedValue === 'name-desc') {
            return b.dataset.name.localeCompare(a.dataset.name);
        } else if (selectedValue === 'price-asc') {
            return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
        } else if (selectedValue === 'price-desc') {
            return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
        }
    });

    // Remove all the product items from the product list
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }

    // Add the sorted product items back to the product list
    productItems.forEach(function(productItem) {
        productList.appendChild(productItem);
    });
}
