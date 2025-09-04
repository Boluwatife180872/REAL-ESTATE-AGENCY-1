// // Mobile Navigation Toggle
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// // Close mobile menu when clicking on a link
// document.querySelectorAll(".nav-menu a").forEach((link) => {
//   link.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   });
// });

// // Property Filter Functionality
// const filterButtons = document.querySelectorAll(".filter-btn");
// const propertyCards = document.querySelectorAll(".property-card");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Remove active class from all buttons
//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     // Add active class to clicked button
//     button.classList.add("active");

//     const filterValue = button.getAttribute("data-filter");

//     propertyCards.forEach((card) => {
//       if (
//         filterValue === "all" ||
//         card.getAttribute("data-category") === filterValue
//       ) {
//         card.style.display = "block";
//         card.style.animation = "fadeInUp 0.6s ease forwards";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

// // Navbar background change on scroll
// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 100) {
//     navbar.style.background = "rgba(255, 255, 255, 0.98)";
//     navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
//   } else {
//     navbar.style.background = "rgba(255, 255, 255, 0.95)";
//     navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
//   }
// });

// // Contact Form Submission
// const contactForm = document.querySelector(".contact-form");
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Get form data
//   const formData = new FormData(contactForm);

//   // Simple form validation
//   const name = contactForm.querySelector('input[type="text"]').value;
//   const email = contactForm.querySelector('input[type="email"]').value;
//   const message = contactForm.querySelector("textarea").value;

//   if (!name || !email || !message) {
//     alert("Please fill in all required fields.");
//     return;
//   }

//   // Simulate form submission
//   const submitBtn = contactForm.querySelector(".submit-btn");
//   const originalText = submitBtn.textContent;

//   submitBtn.textContent = "Sending...";
//   submitBtn.disabled = true;

//   setTimeout(() => {
//     alert("Thank you for your message! We will get back to you soon.");
//     contactForm.reset();
//     submitBtn.textContent = originalText;
//     submitBtn.disabled = false;
//   }, 2000);
// });

// // Newsletter Subscription
// const newsletterForm = document.querySelector(".newsletter");
// newsletterForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = newsletterForm.querySelector('input[type="email"]').value;

//   if (!email) {
//     alert("Please enter your email address.");
//     return;
//   }

//   const button = newsletterForm.querySelector("button");
//   const originalText = button.textContent;

//   button.textContent = "Subscribing...";
//   button.disabled = true;

//   setTimeout(() => {
//     alert("Thank you for subscribing to our newsletter!");
//     newsletterForm.reset();
//     button.textContent = originalText;
//     button.disabled = false;
//   }, 1500);
// });

// // Search functionality
// const searchBtn = document.querySelector(".search-btn");
// const searchInput = document.querySelector(".search-bar input");

// searchBtn.addEventListener("click", () => {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm) {
//     alert(
//       `Searching for: "${searchTerm}"\nThis would typically redirect to a search results page.`
//     );
//   }
// });

// searchInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     searchBtn.click();
//   }
// });

// // Animate elements on scroll
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = "1";
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, observerOptions);

// // Observe elements for animation
// document
//   .querySelectorAll(
//     ".service-card, .property-card, .about-content, .contact-content"
//   )
//   .forEach((el) => {
//     el.style.opacity = "0";
//     el.style.transform = "translateY(30px)";
//     el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
//     observer.observe(el);
//   });

// // Property card view details functionality
// document.querySelectorAll(".view-btn").forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const propertyCard = e.target.closest(".property-card");
//     const propertyName = propertyCard.querySelector("h3").textContent;
//     alert(
//       `Viewing details for: ${propertyName}\nThis would typically open a detailed property page.`
//     );
//   });
// });

// // Add loading animation for images
// document.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("load", () => {
//     img.style.opacity = "1";
//   });

//   img.addEventListener("error", () => {
//     img.style.opacity = "0.5";
//     img.alt = "Image failed to load";
//   });
// });

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Property Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    propertyCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";
        card.style.animation = "fadeInUp 0.6s ease forwards";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);

  // Simple form validation
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  setTimeout(() => {
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

// Newsletter Subscription
const newsletterForm = document.querySelector(".newsletter");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = newsletterForm.querySelector('input[type="email"]').value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  const button = newsletterForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Subscribing...";
  button.disabled = true;

  setTimeout(() => {
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
    button.textContent = originalText;
    button.disabled = false;
  }, 1500);
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".service-card, .property-card, .about-content, .contact-content"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Property card view details functionality
document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const propertyCard = e.target.closest(".property-card");
    const propertyName = propertyCard.querySelector("h3").textContent;
    alert(
      `Viewing details for: ${propertyName}\nThis would typically open a detailed property page.`
    );
  });
});

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });

  img.addEventListener("error", () => {
    img.style.opacity = "0.5";
    img.alt = "Image failed to load";
  });
});

// Hero CTA Button functionality
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Add a subtle animation when clicked
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
});
