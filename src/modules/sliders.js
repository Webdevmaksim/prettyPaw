import {Swiper, Pagination, Autoplay} from "swiper";

const params ={
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    modules: [Autoplay, Pagination]
};

export const sliderInit = (selectorSlider, newParams) => {
    new Swiper(selectorSlider, {
        ...params,
        ...newParams
    });
};