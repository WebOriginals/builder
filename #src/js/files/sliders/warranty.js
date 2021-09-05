if (document.querySelector('.warranty__slider')) {

    let warranty = new Swiper(".warranty__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop:true,

        navigation: {
            nextEl: '.warranty__slider-btn-next',
            prevEl: '.warranty__slider-btn-prev',
        },
        pagination: {
            el: ".warranty__pagenation",
            clickable: true,
        },

    });
}
