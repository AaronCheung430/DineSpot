// index-scripts.js

import { restaurants, reviews } from './data.js';

// Function to generate restaurant cards for the carousel
function generateCarouselItems() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselIndicators = document.querySelector('.carousel-indicators');

  restaurants.slice(0, 3).forEach((restaurant, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    carouselItem.style.backgroundImage = `url('${restaurant.image}')`;
    carouselItem.innerHTML = `
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <h1 class="mb-3">${restaurant.name}</h1>
            <p class="mb-4">${restaurant.description}</p>
            <a class="btn btn-outline-light btn-lg m-2" href="restaurant.html?id=${restaurant.id}" role="button">View Details</a>
          </div>
        </div>
      </div>
    `;
    carouselInner.appendChild(carouselItem);

    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-mdb-target', '#introCarousel');
    indicator.setAttribute('data-mdb-slide-to', index);
    indicator.className = index === 0 ? 'active' : '';
    carouselIndicators.appendChild(indicator);
  });
}

function generateReviewCards() {
  const reviewContainer = document.getElementById('review-listings');
  const latestReviews = reviews.slice(0, 3); // Get the latest three reviews
  latestReviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${review.image}" class="card-img-top" alt="Review Image">
        <div class="card-body">
          <h5 class="card-title">${review.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${review.restaurant}</h6>
          <p class="card-text">${review.content}</p>
          <div class="d-flex align-items-center">
            <img src="${review.author.image}" class="rounded-circle me-2" alt="Author Image" width="50" height="50">
            <div>
              <p class="mb-0">${review.author.name}</p>
              <small class="text-muted">Posted on ${review.author.date}</small>
            </div>
          </div>
        </div>
      </div>
    `;
    reviewContainer.appendChild(card);
  });
}

generateCarouselItems();
generateReviewCards();
