// Mobile Navbar
const hamburgerBtn = document.getElementById("mobile_menu_btn");
const sidebar = document.getElementById("sidebar");

// Toggle sidebar on button click
hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Functionality for contact us form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Define fields and their associated error popup IDs
  const fields = [
    { name: "firstName", popupId: "firstNamePopup" },
    { name: "lastName", popupId: "lastNamePopup" },
    { name: "email", popupId: "emailPopup" },
    { name: "company", popupId: "companyPopup" },
    { name: "country", popupId: "countryPopup" },
  ];

  // Function to toggle popup visibility
  function myFunction(popupId, show) {
    const popup = document.getElementById(popupId);
    if (show) {
      popup.classList.add("show");
    } else {
      popup.classList.remove("show");
    }
  }

  // Function to validate a single field
  function validateField(field) {
    const input = document.querySelector(`[name="${field.name}"]`);
    const isEmpty = !input.value.trim();
    myFunction(field.popupId, isEmpty);
    return !isEmpty;
  }

  // Attach input event listeners for real-time validation
  fields.forEach((field) => {
    const input = document.querySelector(`[name="${field.name}"]`);
    input.addEventListener("input", () => validateField(field));
  });

  // Form submission handler
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate all fields on form submission
    fields.forEach((field) => {
      const fieldIsValid = validateField(field);
      if (!fieldIsValid) {
        isValid = false;
      }
    });

    // If all fields are valid, proceed to the thank you page
    if (isValid) {
      window.location.href = "thankyou.html";
    }
  });
});

// testimonials code
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  if (index < 0) {
    currentIndex = slide.length - 1;
  } else if (index >= slide.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

prevButton.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

goToSlide(0);

setInterval(() => {
  goToSlide(currentIndex + 1);
}, 3000);



 document.addEventListener("DOMContentLoaded", () => {
   const modal = document.getElementById("videoModal");
   const openButton = document.getElementById("openModal");
   const closeButton = document.getElementById("closeModal");
   const youtubePlayer = document.getElementById("youtubePlayer");

   // Open the modal and autoplay the video
   openButton.addEventListener("click", () => {
     modal.style.display = "flex";
     // Append autoplay=1 to the YouTube iframe src to play the video automatically
     youtubePlayer.src = "https://www.youtube.com/embed/-lF8cdZe81A?autoplay=1";
   });

   // Close the modal and stop the video
   closeButton.addEventListener("click", () => {
     modal.style.display = "none";
     // Reset the src to stop the video
     youtubePlayer.src = "https://www.youtube.com/embed/-lF8cdZe81A";
   });

   // Close the modal when clicking outside the modal content
   modal.addEventListener("click", (event) => {
     if (event.target === modal) {
       modal.style.display = "none";
       youtubePlayer.src = "https://www.youtube.com/embed/-lF8cdZe81A";
     }
   });
 });
