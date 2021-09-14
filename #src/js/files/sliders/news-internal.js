if(document.querySelector('.new-slider__container')) {
    let newsInt = new Swiper('.new-slider__container', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.new-slider__slider-btn-next',
            prevEl: '.new-slider__slider-btn-prev',
        },
    });
};