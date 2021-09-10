if (window.screen.width < 1199) {
    if (document.querySelector('.sale__content')) {

        let room = new Swiper(".sale__content", {
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            watchOverflow: true,
            speed: 800,
            loop: true,

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
}