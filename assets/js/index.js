const header = document.getElementById("header");
const headerScrolled = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.onscroll = () => {
  headerScrolled();
};
const menu = document.querySelector(".moblie__menu");

menu.onclick = () => {
  document.querySelector(".nav").classList.toggle("active");
};

// Modal

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

document.addEventListener("keydown", function keyPress(e) {
  e = e || window.e;
  const modals = document.querySelectorAll(".modal.active");
  if (e.keyCode === 27 || e.key === "Escape" || e.key === "Esc") {
    modals.forEach((modal) => {
      closeModal(modal);
    });
  }
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// // Rellax js Animation

var rellax = new Rellax(".rellax", {
  center: true,
});

// Swiper js

var swiper = new Swiper(".ctm_crsl", {
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 40,
    },
  },
});

var swiper = new Swiper(".testimoial__all_items", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },
  loop: true,
});

SmoothScroll({
  // Scrolling Core
  animationTime: 400, // [ms]
  stepSize: 100, // [px]

  // Acceleration
  accelerationDelta: 50, // 50
  accelerationMax: 3, // 3

  // Keyboard Settings
  keyboardSupport: true, // option
  arrowScroll: 50, // [px]

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Other
  touchpadSupport: false, // ignore touchpad by default
  fixedBackground: true,
  excluded: "",
});
