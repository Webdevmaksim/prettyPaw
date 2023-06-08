import './index.html';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import locationCard from './modules/location';
import { videoBgIn } from './modules/videoBg';
import { menuControl } from './modules/menuControl';



document.addEventListener('DOMContentLoaded', () => {
    // ! - USE MODULES
    // ! - video#1
    videoBgIn();
    menuControl();

    // ! - slides
    const aboutSlider = sliderInit('.about__slider', {
        speed: 2000,
        pagination: {
            el: '.about__slider-pagination',
            clickable: true,
            bulletElement: 'button'
        }
    });

    const careerSlider = sliderInit('.career__slider', {
        speed: 2000,
        pagination: {
            el: '.career__slider-pagination',
            clickable: true,
            bulletElement: 'button'
        },
        autoplay: true,
        slidesPerView: 'auto',
        spaceBetween: 0
    });

    locationCard();
});
