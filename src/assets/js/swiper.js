// import Swiper JS
import Swiper from 'swiper';
import {Navigation, Pagination, Thumbs} from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
// import 'swiper/css/thumbs';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:

const nakoSwipers = document.querySelectorAll('.nako-swiper');

nakoSwipers.forEach(swiperElement => {
    const swiperId = swiperElement.id
    const dataSlidePerView = swiperElement.dataset.slidesPerView ?? 3;

    const swiper = new Swiper(swiperElement.querySelector('.swiper'), {
        slidesPerView: dataSlidePerView,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        modules: [Navigation, Pagination],
        breakpoints: {
            1024: {
                slidesPerView: dataSlidePerView,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: `#${swiperId} .swiper-button-next`,
            prevEl: `#${swiperId} .swiper-button-prev`,
        },
    });
})

const objectSwiperThumbs = new Swiper('.object-swiper-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
        1200: {
            direction: 'vertical',
            slidesPerView: 4,
        }
    }
})

const objectSwiper = new Swiper('.object-swiper', {
    spaceBetween: 10,
    modules: [Navigation, Thumbs],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: objectSwiperThumbs,
    }
})