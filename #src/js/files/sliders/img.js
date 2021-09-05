if (document.querySelector('.banner-container')) {
    let comfort = new Swiper(".banner-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        pagination: {
            el: ".banner__pagination",
            clickable: true,
        },
    });
}