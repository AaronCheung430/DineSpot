// Getting data from data.js for both restaurants and reviews
import { restaurants, reviews } from './data.js';

// Function to generate restaurant slides for the carousel
function generateCarouselItems() {
    // Get the element from the html
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    // Repeat the following code for 3 times, as only showing the first 3 restaurants
    restaurants.slice(0, 3).forEach((restaurant, index) => {
        // Create div
        const carouselItem = document.createElement('div');
        // Add class with conditional operator to determine which classes should be applied
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        // Get the background image from the data stored in the dictionary
        carouselItem.style.backgroundImage = `url('${restaurant.image}')`;
        // Add HTML code, with restaurant's name, description, as well as button to direct to restaurant's page
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
        // Append the whole HTML code that was created above to the selected element of the HTML file
        carouselInner.appendChild(carouselItem);

        // Create new element of button for that slide
        const indicator = document.createElement('button');
        indicator.type = 'button';
        // Set target and slide index for which slide should the button navigate to
        indicator.setAttribute('data-mdb-target', '#introCarousel');
        indicator.setAttribute('data-mdb-slide-to', index);
        // Set active class if it is showing this slide
        indicator.className = index === 0 ? 'active' : '';

        // Append the HTML code to the selected element of the HTML file
        carouselIndicators.appendChild(indicator);
    });
}

// Function to generate reviews cards
function generateReviewCards() {
    // Get element from html
    const reviewContainer = document.getElementById('review-listings');
    // Only get the latest three reviews and store a new variable
    const latestReviews = reviews.slice(0, 3);
    // Loop through the 3 reviews and create the html code for them
    // By creating div, apply classes and create html code to show details of review, such as image, content, author etc.
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

        // Append the whole HTML code that was created above to the selected element of the HTML file
        reviewContainer.appendChild(card);
    });
}

// Call the functions above to generate the HTML
generateCarouselItems();
generateReviewCards();
