document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('adminMap').setView([51.8106, 57.6854], 7);
    L.tileLayer('https://geois2.orb.ru/api/component/render/tile?resource=8785,2092,7975,7986,8785&nd=204&z={z}&x={x}&y={y}', {
        attribution: 'NextGIS'
    }).addTo(map);

    let newMarker;

    document.getElementById("addPoint").addEventListener("click", function () {
        map.on('click', function (e) {
            if (newMarker) {
                map.removeLayer(newMarker);
            }
            newMarker = L.marker(e.latlng).addTo(map);
            console.log(`Добавлена точка: ${e.latlng.lat}, ${e.latlng.lng}`);
        });
    });

    document.getElementById("editLayer").addEventListener("click", function () {
        alert("Функция редактирования слоя пока не реализована");
    });

    document.getElementById("deleteFeature").addEventListener("click", function () {
        if (newMarker) {
            map.removeLayer(newMarker);
            console.log("Объект удалён");
        }
    });
});
