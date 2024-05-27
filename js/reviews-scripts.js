// Get data for reviews
import { reviews } from './data.js';

// Function to generate review cards
function generateReviewCards() {
    // Get the element from the html
    const reviewContainer = document.getElementById('review-listings');
    // Loop through all reviews
    reviews.forEach(review => {
        // Create star rating, by create array and map the array, check if current index meets the condition, and join them in the end without separators
        const starRating = Array(5).fill(0).map((_, index) => {
            return index < review.rating ? `<i class="fas fa-star" data-index="${index}"></i>` : `<i class="fas fa-star empty" data-index="${index}"></i>`;
        }).join('');
        // Create div and classes
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 mb-4';
        // Create html code to show details of review, such as image, content, author etc.
        card.innerHTML = `
      <div class="card h-100 border shadow-0 rounded-7">
        <div class="row g-0">
          <div class="col-4">
            <img src="${review.image}" class="w-100 h-100" style="object-fit: cover;" alt="${review.restaurant}">
          </div>
          <div class="col-8">
            <div class="card-body px-3 pt-2">
              <h4 class="mb-3"><b>${review.restaurant}</b></h4>
              <div class="star-rating mb-2">
                ${starRating}
              </div>
              <p class="card-text pb-5">${review.content}</p>
              <div class="d-flex position-absolute bottom-0 pb-2 align-items-center">
                <img src="${review.author.image}" class="rounded-circle" height="35" width="35" alt="${review.author.name}" loading="lazy">
                <div class="ps-3">
                  <h6 class="link-dark mb-0">${review.author.name}</h6>
                  <p class="mb-0 small text-muted">Posted on ${review.author.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

        // Append the whole HTML code that was created above to the selected element of the HTML file
        reviewContainer.appendChild(card);
    });
}

// Call the function to generate review cards
generateReviewCards();
