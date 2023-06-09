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

    // ! - careerSlider
    const careerSlides = document.querySelectorAll('.career__img-item');
    
    careerSlides.forEach((elem, i)=>{
        elem.classList.add(`career__img-item--${ i % 2 ? 'even' : 'odd'}`);
    });
    const careerSlider = sliderInit('.career__slider', {
        speed: 2000,
        pagination: {
            el: '.career__slider-pagination',
            clickable: true,
            bulletElement: 'button'
        },
        autoplay: true,
        spaceBetween: 12,
        breakpoints: {
            576: {
                slidesPerView: 'auto',
                spaceBetween: 20
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 26
            },
            1240: {
                slidesPerView: 'auto',
                spaceBetween: 30
            }
        }
    });

    // ! - cards initialization
    locationCard();
});
