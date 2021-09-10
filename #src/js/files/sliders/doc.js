if (document.querySelector('.doc__container')) {
    let doc = new Swiper(".doc__container", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".doc__pagination",
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
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}