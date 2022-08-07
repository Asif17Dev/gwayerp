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

var rellax = new Rellax(".rellax", {
  center: true,
});

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
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 50,
  },
});
