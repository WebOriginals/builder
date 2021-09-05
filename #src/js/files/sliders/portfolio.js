if(document.querySelector('.portfolio-column__slider')) {
    let firstScreen = new Swiper('.portfolio-column__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.portfolio-column__slider-btn-next',
            prevEl: '.portfolio-column__slider-btn-prev',
        },
    });
};