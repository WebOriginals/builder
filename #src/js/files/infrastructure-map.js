if(document.querySelector('.infrastructure__map')) {
    const map = L.map('infrastructure__map')
        .setView({
            lat: 45.010184,
            lng: 38.967309,
        }, 13);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
    ).addTo(map);

//красная метка
    const mainPinIcon = L.icon({
        iconUrl: 'img/icons/point.svg',
        iconSize: [62, 62],
        iconAnchor: [26, 35],
    });
//даем метке координаты и разрешаем передвижение draggable
    const mainPinMarker = L.marker(
        {
            lat: 45.010184,
            lng: 38.967309,
        },
        {
            icon: mainPinIcon,
        },
    );
    mainPinMarker
        .addTo(map)
        .bindPopup("Наш офис");

// координаты и названия ЖК
    const points = [
        {
            title: 'ЖК "Яблоновский"',
            lat: 44.990226,
            lng: 38.926537,
            id: '0',
        },
        {
            title: 'ЖК "Космос"',
            lat: 44.999666,
            lng: 38.932607,
            id: '1',
        },
        {
            title: 'ЖК "Солнечный"',
            lat: 45.017465,
            lng: 38.958228,
            id: '2',
        },
    ];

//Берем верстку с подкидываем в нее контент
    const createCustomPopup = (point) => {
        const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
        const popupElement = balloonTemplate.cloneNode(true);

        popupElement.querySelector('.balloon__title').textContent = point.title;
        //popupElement.querySelector('.balloon').id = point.id;

        return popupElement;
    };

//Пробегаем по в сем меткам и наполняем их
    points.forEach((point) => {
        const {lat, lng} = point;

        const icon = L.icon({
            iconUrl: 'img/icons/point.svg',
            iconSize: [52, 52],
            iconAnchor: [26, 25],
        });

        const marker = L.marker(
            {
                lat,
                lng,
            },
            {
                icon,
            },
        );

        marker
            .addTo(map)
            .bindPopup(
                createCustomPopup(point),
            );
    });

    let btns = document.querySelectorAll('.map_main-btn');
    for (let btn of btns){
        btn.addEventListener('click', () => {

        })
    }
}