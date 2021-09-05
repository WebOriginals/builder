if (window.screen.width < 1199) {
    if (document.querySelector('.comfort__slider')) {
        let comfort = new Swiper(".comfort__slider", {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
            spaceBetween: 30,
            pagination: {
                el: ".comfort__pagination",
                clickable: true,
            },
        });
    }
}