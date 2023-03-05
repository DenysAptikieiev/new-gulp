import * as flsFunctions from './modules/functions.js';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination ]);


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  autoplay: {
    delay: 1000,
  },

  breakpoints: {
        768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        allowTouchMove: false,
        },
    },

  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
  autoHeight: true,
  mousewheel: {
      invert: true,
  },
});

flsFunctions.isWebP();

const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    navigation.classList.toggle("navigation_active");
});