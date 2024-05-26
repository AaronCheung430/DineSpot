import { restaurants } from './data.js';

function getRestaurantById(id) {
  return restaurants.find(restaurant => restaurant.id === id);
}

function loadRestaurantDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get('id');
  const restaurant = getRestaurantById(restaurantId);

  if (restaurant) {
    document.getElementById('restaurantName').textContent = restaurant.name;
    document.querySelector('img[alt="Restaurant Image"]').src = restaurant.image;
    document.querySelector('img[alt="Restaurant Image"]').style.width = "50%";
    document.getElementById('restaurantDescription').textContent = restaurant.description;
    document.getElementById('restaurantLocation').textContent = restaurant.location;
    document.getElementById('restaurantHours').textContent = restaurant.hours;

    const menuList = document.getElementById('restaurantMenu');
    restaurant.menu.forEach(item => {
      const menuItem = document.createElement('li');
      menuItem.textContent = `${item.name}: ${item.description} - £${item.price}`;
      menuList.appendChild(menuItem);
    });
  } else {
    document.getElementById('restaurantName').textContent = 'Restaurant Not Found';
    document.querySelector('img[alt="Restaurant Image"]').style.display = 'none';
    document.getElementById('restaurantDescription').textContent = 'The restaurant you are looking for does not exist or has been removed.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadRestaurantDetails();

  const reservationForm = document.getElementById('reservationForm');
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Booking is confirmed. We are looking forward to your visit!');
    reservationForm.reset(); // Reset the form
  });
});
