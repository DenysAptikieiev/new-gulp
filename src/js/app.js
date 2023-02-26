import * as flsFunctions from './modules/functions.js';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination ]);

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },

  navigation: false,
  autoHeight: true,
  spaceBetween: 10,
  allowTouchMove: true,
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