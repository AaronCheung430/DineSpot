// Get data for restaurants
import { restaurants } from './data.js';

// Function to generate restaurant cards
function generateRestaurantCards() {
    // Get the element from the HTML
    const restaurantListings = document.getElementById('restaurant-listings');
    // Loop through all restaurants from the variable
    restaurants.forEach(restaurant => {
        // Create div and classes
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        // Create html code to show details of restaurants, such as image, description, button etc.
        card.innerHTML = `
      <div class="card h-100">
        <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
        <div class="card-body">
          <h5 class="card-title">${restaurant.name}</h5>
          <p class="card-text">${restaurant.description}</p>
          <a href="restaurant.html?id=${restaurant.id}" class="btn btn-primary">View Restaurant</a>
        </div>
      </div>
    `;

        // Append the HTML code that was created above to the selected element of the HTML file
        restaurantListings.appendChild(card);
    });

    // Create the "More restaurants coming..." card
    const moreCard = document.createElement('div');
    moreCard.className = 'col-md-4 mb-4';
    moreCard.innerHTML = `
    <div class="card h-100">
      <div class="card-body text-center d-flex align-items-center justify-content-center">
        <h5 class="card-title" style="font-family: 'Lobster', cursive; font-size: 2rem;">More restaurants coming...</h5>
      </div>
    </div>
  `;

    // Append the whole HTML code that was created above to the selected element of the HTML file
    restaurantListings.appendChild(moreCard);
}

// Call the function to generate restaurant cards
generateRestaurantCards();
