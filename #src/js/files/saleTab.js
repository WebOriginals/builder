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
        addApartments.remove()
    })
}