if (document.querySelector('.infrastructure__container')) {
    let doc = new Swiper(".infrastructure__container", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".doc__pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
                direction: "vertical",
            },
        },
    });
}