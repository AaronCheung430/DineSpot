// Get data from data.js for restaurants
import { restaurants } from './data.js';

// Function to get restaurant's details through id
function getRestaurantById(id) {
    // Search through array and if id matches, return object
    return restaurants.find(restaurant => restaurant.id === id);
}

// Function to load up the page with restaurant's details
function loadRestaurantDetails() {
    // Decompose the url and get details of restaurantId
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('id');
    const restaurant = getRestaurantById(restaurantId);

    // If restaurant exist, place details to the element
    if (restaurant) {
        document.getElementById('restaurantName').textContent = restaurant.name;
        document.querySelector('img[alt="Restaurant Image"]').src = restaurant.image;
        document.querySelector('img[alt="Restaurant Image"]').style.width = "50%";
        document.getElementById('restaurantDescription').textContent = restaurant.description;
        document.getElementById('restaurantLocation').textContent = restaurant.location;
        document.getElementById('restaurantHours').textContent = restaurant.hours;

        // Create menu by loop
        const menuList = document.getElementById('restaurantMenu');
        restaurant.menu.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = `${item.name}: ${item.description} - £${item.price}`;
            menuList.appendChild(menuItem);
        });
    } else {
        // If restaurant doesnt' exist in the array, show following
        document.getElementById('restaurantName').textContent = 'Restaurant Not Found';
        document.querySelector('img[alt="Restaurant Image"]').style.display = 'none';
        document.getElementById('restaurantDescription').textContent = 'The restaurant you are looking for does not exist or has been removed.';
    }
}

// Once DOM is loaded, call the above function
document.addEventListener('DOMContentLoaded', () => {
    loadRestaurantDetails();

    // Script when submit button is clicked, an alert will show and the form will be reset.
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking is confirmed. We are looking forward to your visit!');
        reservationForm.reset();
    });
});
