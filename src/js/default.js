import $ from 'jquery'
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const obj = {
  a: "Apple",
  b: "Peanut Butter"
}
console.log(obj, obj.c?.fa);
