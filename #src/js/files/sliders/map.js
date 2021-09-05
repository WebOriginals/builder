if (document.querySelector('.map-container')) {
    let comfort = new Swiper(".map-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        pagination: {
            el: ".map__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-tel__slider-btn-next',
            prevEl: '.slider-tel__slider-btn-prev',
        },
    });
}