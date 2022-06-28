/* MENU // NAV */
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("move");
  menu.classList.toggle("fixed");
  notification.classList.remove("active");
};

// Notifications //
let notification = document.querySelector(".notification");

document.getElementById("bell-icon").onclick = () => {
  notification.classList.toggle("active");
};

// Swiper //
var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/* Scroll */
window.onscroll = function () {
  mufunction();
};

function mufunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  document.getElementById("scroll-bar").style.width = scrolled + "%";
}
