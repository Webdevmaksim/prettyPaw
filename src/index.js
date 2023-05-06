import './index.html';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';

// ! - USE MODULES
const videoBG = document.querySelector('.video-bg');
// video.style.cssText = `
//     border: 20px solid red;
// `;
videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;

const aboutSlider = sliderInit('.about__slider', {
    speed: 2700,
    pagination: {
        el: '.about__slider-pagination',
        clickable: true,
        bulletElement: 'button'
    }
});
