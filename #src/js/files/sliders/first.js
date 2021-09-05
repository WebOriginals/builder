if (document.querySelector('.first-container')) {
    let comfort = new Swiper(".first-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        pagination: {
            el: ".first__pagination",
            clickable: true,
        },
    });
}