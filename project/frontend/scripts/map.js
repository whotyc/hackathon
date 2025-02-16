ymaps.ready(() => {
    const map = new ymaps.Map("map", {
        center: [51.768205, 55.096955], // Координаты Оренбургской области
        zoom: 7,
    });

    // Добавление маркеров (пример)
    map.geoObjects.add(new ymaps.Placemark([51.768205, 55.096955], { balloonContent: "Боец" }));
});
