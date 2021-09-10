if (document.querySelector('.finishing__container')) {
    let doc = new Swiper(".finishing__container", {
        slidesPerView: 1,

        spaceBetween: 30,
        navigation: {
            nextEl: '.finishing__slider-btn-next',
            prevEl: '.finishing__slider-btn-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        },
    });
}