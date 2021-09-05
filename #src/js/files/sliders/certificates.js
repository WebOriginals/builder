if (document.querySelector('.certificates__slider')) {

    let certificates = new Swiper(".certificates__slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop:true,


        navigation: {
            nextEl: '.certificates__slider-btn-next',
            prevEl: '.certificates__slider-btn-prev',
        },
        pagination: {
            el: ".certificates__slider-pagination",
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
                slidesPerView: 4.6,
                spaceBetween: 30,
                slidesOffsetBefore: 260,
            },
        },
        // on: {
        //     init: function init() {
        //         document.querySelector('.swiper-slide-active').style.marginRight = "80px";
        //     }
        // }
    });
}
