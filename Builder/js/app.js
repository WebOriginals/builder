var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }, any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let unlock = true;
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// menu ==================================
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    let liSecondLevel = document.querySelectorAll('.menuSecondLevel__li');
    let liOneLevel = document.querySelectorAll('.menu__list > li');
    let logo = document.querySelector('.header__logo');


    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {

                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// menu ==================================
/*//Tabs =====================
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll("._tabs-item");
    let tabs_blocks = tab.querySelectorAll("._tabs-block");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}
//Tabs =================*/
//BodyLock ======================
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}

function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}

function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//BodyLock ======================
//Popups =====================
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');

for (let index = 0; index < popup_link.length; index++) {
    const el = popup_link[index];
    el.addEventListener('click', function (e) {
        if (unlock) {
            let item = el.getAttribute('href').replace('#', '');
            let video = el.getAttribute('data-video');
            popup_open(item, video);
        }
        e.preventDefault();
    })
}
for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}

function popup_open(item, video = '') {
    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}

function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}

let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        })
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});
//Popups =====================
const header = document.querySelector('.header');

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        header.classList.add('stickytop');
    } else {
        header.classList.remove('stickytop');
    }
};
if (document.querySelector('.mortgage__calculator')) {
    const sliderCostElement = document.querySelector('#costEstateSlider');
    const valueCostElement = document.querySelector('#costEstateValue');

    noUiSlider.create(sliderCostElement, {
        range: {
            min: 1500000,
            max: 10000000,
        },
        start: 2000000,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },

    });
    sliderCostElement.noUiSlider.on('update', (values, handle) => {
        valueCostElement.value = values[handle];
    });
    valueCostElement.addEventListener('change', () => {
        sliderCostElement.noUiSlider.updateOptions({
            start: valueCostElement.value,
        })
    });

    const sliderPaymentElement = document.querySelector('#initialPaymentSlider');
    const valuePaymentElement = document.querySelector('#initialPaymentValue');

    noUiSlider.create(sliderPaymentElement, {
        range: {
            min: 10000,
            max: 1000000,
        },
        start: 80000,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },
    });
    sliderPaymentElement.noUiSlider.on('update', (values, handle) => {
        valuePaymentElement.value = values[handle];
    });
    valuePaymentElement.addEventListener('change', () => {
        sliderPaymentElement.noUiSlider.updateOptions({
            start: valuePaymentElement.value,
        })
    });

    const sliderMortgageTermElement = document.querySelector('#mortgageTermSlider');
    const valueMortgageTermElement = document.querySelector('#mortgageTermValue');

    noUiSlider.create(sliderMortgageTermElement, {
        range: {
            min: 2,
            max: 35,
        },
        start: 5,
        step: 1,
        connect: 'lower',
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        },
    });
    sliderMortgageTermElement.noUiSlider.on('update', (values, handle) => {
        valueMortgageTermElement.value = values[handle];
    });
    valueMortgageTermElement.addEventListener('change', () => {
        sliderMortgageTermElement.noUiSlider.updateOptions({
            start: valueMortgageTermElement.value,
        })
    });
}


// кноаки литера
let liters = document.querySelectorAll('.sale-nav-top__element');
//сами элементы сортируемые
let apartments = document.querySelectorAll('.sale-apartments');
// кнопки кол-во комнат
let rooms = document.querySelectorAll('.sale__nav-bottom__element');
let dataElementLiter = 'all';
let dataElementRoom = 'all';
let addApartments = document.querySelector('.add-apartments');

for (let liter of liters) {
    liter.addEventListener('click', function (event) {
        let target = event.target;

        if (target.dataset.mainliter === undefined) {
            dataElementLiter = target.parentNode.dataset.mainliter
            target = target.parentNode;
        } else {
            dataElementLiter = target.dataset.mainliter;
        }

        if (target.classList.contains('sale-nav-top__element')) {
            for (let i = 0; i < liters.length; i++) {
                liters[i].classList.remove('active');
            }
            target.classList.add('active');
        }

        let count_showed = 0;
        for (let i = 0; i < apartments.length; i++) {
            apartments[i].classList.remove('showed');
            if ((apartments[i].dataset.room !== dataElementRoom && dataElementRoom !== 'all' ) || (apartments[i].dataset.liter !== dataElementLiter && dataElementLiter !== 'all' )) {
                apartments[i].classList.add('hide');
            } else if( count_showed > 3 ){
                apartments[i].classList.add('hide');
                apartments[i].classList.add('showed');
            } else {
                apartments[i].classList.remove('hide');
                count_showed++;
            }
        }
    });
};

for (let room of rooms) {
    room.addEventListener('click', function (event) {
        let target = event.target;
        if (target.dataset.mainliter === undefined) {
            dataElementRoom = target.parentNode.dataset.mainroom
            target = target.parentNode;
        } else {
            dataElementRoom = target.dataset.mainroom;
        }

        if (target.classList.contains('sale__nav-bottom__element')) {
            for (let i = 0; i < rooms.length; i++) {
                rooms[i].classList.remove('active');
            }
            target.classList.add('active');
        }

        let count_showed = 0;
        for (let apartment of apartments) {
            apartment.classList.remove('showed');
            /*если  элемент не равен выбранному то его скрыть*/
            if (document.querySelector('.sale-nav-top')) {
                if ((apartment.dataset.room !== dataElementRoom && dataElementRoom !== 'all' ) || (apartment.dataset.liter !== dataElementLiter && dataElementLiter !== 'all' )) {
                    apartment.classList.add('hide');
                } else if( count_showed > 3 ){
                    apartment.classList.add('hide');
                    apartment.classList.add('showed');
                } else {
                    apartment.classList.remove('hide');
                    count_showed++;
                }
            } else {
                if (apartment.dataset.room !== dataElementRoom && dataElementRoom !== 'all') {
                    apartment.classList.add('hide');
                } else if( count_showed > 3 ){
                    apartment.classList.add('hide');
                    apartment.classList.add('showed');
                } else {
                    apartment.classList.remove('hide');
                    count_showed++;
                }
            }
        }
    });

};

if (document.querySelector('.sale')) {
    for (let i = 0; i < apartments.length; i++) {
        if (i > 1) {
            apartments[i].classList.add('showed')
        }
    }
    addApartments.addEventListener('click', () => {
        console.log('2');
        for (let i = 0; i < apartments.length; i++) {
            if(apartments[i].classList.contains('showed')){
                console.log('1');
                apartments[i].classList.remove('hide');
            }
            apartments[i].classList.remove('showed')
        }
        addApartments.classList.add('hide')
    })
}



//slider
if(document.querySelector('.portfolio-column__slider')) {
    let firstScreen = new Swiper('.portfolio-column__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.portfolio-column__slider-btn-next',
            prevEl: '.portfolio-column__slider-btn-prev',
        },
    });
};
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
if (document.querySelector('.slider-tel__container')) {
    let sliderTel = new Swiper(".slider-tel__container", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.slider-tel__slider-btn-next',
            prevEl: '.slider-tel__slider-btn-prev',
        },
    });
}
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
if (document.querySelector('.map-container')) {
    let comfort = new Swiper(".map-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        pagination: {
            el: ".map__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-tel__slider-btn-next',
            prevEl: '.slider-tel__slider-btn-prev',
        },
    });
}
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
if (document.querySelector('.show-offs__container')) {
    let show_offs = new Swiper(".show-offs__container", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".show-offs__pagination",
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
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}
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
if (document.querySelector('.doc__container')) {
    let doc = new Swiper(".doc__container", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".doc__pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
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
if (document.querySelector('.house__container')) {
    let doc = new Swiper(".house__container", {
        slidesPerView: 1,

        spaceBetween: 30,
        pagination: {
            el: ".house__pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },

        },
    });
}
if (document.querySelector('.infrastructure__container')) {
    let doc = new Swiper(".infrastructure__container", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.infrastructure__slider-btn-next',
            prevEl: '.infrastructure__slider-btn-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
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
if (document.querySelector('.finishing__container')) {
    let doc = new Swiper(".finishing__container", {
        slidesPerView: 1,

        spaceBetween: 30,
        navigation: {
            nextEl: '.finishing__slider-btn-next',
            prevEl: '.finishing__slider-btn-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        },
    });
}
if (document.querySelector('.purchase__container')) {

    let news = new Swiper(".purchase__container", {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop:true,
        pagination: {
            el: ".purchase__pagination",
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

if(document.querySelector('.new-slider__container')) {
    let newsInt = new Swiper('.new-slider__container', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: '.new-slider__slider-btn-next',
            prevEl: '.new-slider__slider-btn-prev',
        },
    });
};
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
//slider