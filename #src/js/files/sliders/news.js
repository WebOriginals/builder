if (document.querySelector('.new-container')) {

    let news = new Swiper(".new-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop:true,
        pagination: {
            el: ".new-pagination",
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
                initialSlide: 1,
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}
