if (document.querySelector('.show-offs__container')) {
    let show_offs = new Swiper(".show-offs__container", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".show-offs__pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
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