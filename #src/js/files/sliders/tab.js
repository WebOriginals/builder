if (document.querySelector('.HCtab')) {

    let HCtabNav = new Swiper(".HCtab-nav__container", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
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
    let swiper2 = new Swiper(".HCtab__container", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".HCtab-pane-btn-next",
            prevEl: ".HCtab-pane-btn-prev",
        },
        thumbs: {
            swiper: HCtabNav,
        },
    });
}