if (document.querySelector('.HCfirst__container')) {

    let news = new Swiper(".HCfirst__container", {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop:true,

        breakpoints: {
            320: {
                slidesPerView: 1.3,
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