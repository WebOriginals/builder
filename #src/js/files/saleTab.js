// кноаки литера
let liters = document.querySelectorAll('.sale-nav-top__element');
//сами элементы сортируемые
let apartments = document.querySelectorAll('.sale-apartments');
// кнопки кол-во комнат
let rooms = document.querySelectorAll('.sale__nav-bottom__element');
let dataElementLiter = 'all';
let dataElementRoom = 'all';

for(let liter of liters) {
    liter.addEventListener('click', function (event) {
        let target = event.target;

        if(target.dataset.mainliter === undefined){
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


        for (let apartment of apartments){
            if (apartment.dataset.liter !== dataElementLiter &&  dataElementLiter !== 'all') {
                apartment.classList.add('hide')
            } else {
                apartment.classList.remove('hide')
            }
        }

    });
};

for(let room of rooms) {
    room.addEventListener('click', function (event) {
        let target = event.target;
        if(target.dataset.mainliter === undefined){
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


        for (let apartment of apartments){
            /*если  элемент не равен выбранному то его скрыть*/
            if(document.querySelector('.sale-nav-top')){
                if (apartment.dataset.room !== dataElementRoom && dataElementRoom !== 'all'  ||  apartment.dataset.liter !== dataElementLiter && dataElementLiter !== 'all') {
                    apartment.classList.add('hide')
                } else {
                    apartment.classList.remove('hide')
                }
            } else {
                if (apartment.dataset.room !== dataElementRoom &&  dataElementRoom !== 'all') {
                    apartment.classList.add('hide')
                } else {
                    apartment.classList.remove('hide')
                }
            }
        }
    });
};
