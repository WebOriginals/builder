if (document.querySelector('.slider-tel__container')) {
    let sliderTel = new Swiper(".slider-tel__container", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.slider-tel__slider-btn-next',
            prevEl: '.slider-tel__slider-btn-prev',
        },
    });
}