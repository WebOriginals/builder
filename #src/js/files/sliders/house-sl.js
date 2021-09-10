if (document.querySelector('.house__container')) {
    let doc = new Swiper(".house__container", {
        slidesPerView: 1,

        spaceBetween: 30,
        pagination: {
            el: ".house__pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },

        },
    });
}