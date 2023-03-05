import * as flsFunctions from './modules/functions.js';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination ]);


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
        960: {
        slidesPerView: 2,
        spaceBetween: 20
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
  spaceBetween: 10,
  allowTouchMove: false,
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