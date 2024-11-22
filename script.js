// Placeholder for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('CropConnect frontend loaded!');
  });
  
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }

  //Seller Section
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // Clear any previous error message
    errorMessage.textContent = "";
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in both fields.";
      return;
    }
  
    // Basic login logic (can be replaced with actual authentication)
    if (username === "seller" && password === "password123") {
      window.location.href = "dashboard.html"; // Redirect to seller dashboard
    } else {
      errorMessage.textContent = "Invalid credentials. Please try again.";
    }
  });
  
  // Logout functionality
function logout() {
    // Redirect to login page (you can replace with actual logout logic later)
    window.location.href = "seller.html";
  }
 // script.js
// const slides = document.querySelectorAll('.slide');
// const sliderContainer = document.querySelector('.slider-container');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentIndex = 0;
// const autoSlideInterval = 3000; // 3 seconds

// function updateSlides() {
//   const offset = -currentIndex * 100;
//   sliderContainer.style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slides.length; // Cycle to next slide
//   updateSlides();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle to previous slide
//   updateSlides();
// }

// // Event listeners for manual controls
// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// // Auto-slide functionality
// setInterval(nextSlide, autoSlideInterval);

// // Initialize
// updateSlides();
