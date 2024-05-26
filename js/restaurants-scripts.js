import { restaurants } from './data.js';

function generateRestaurantCards() {
  const restaurantListings = document.getElementById('restaurant-listings');
  restaurants.forEach(restaurant => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
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
    restaurantListings.appendChild(card);
  });

  // Add the "More restaurants coming..." card
  const moreCard = document.createElement('div');
  moreCard.className = 'col-md-4 mb-4';
  moreCard.innerHTML = `
    <div class="card h-100">
      <div class="card-body text-center d-flex align-items-center justify-content-center">
        <h5 class="card-title" style="font-family: 'Lobster', cursive; font-size: 2rem;">More restaurants coming...</h5>
      </div>
    </div>
  `;
  restaurantListings.appendChild(moreCard);
}

// Call the function to generate restaurant cards
generateRestaurantCards();
