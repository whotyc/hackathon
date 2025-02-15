document.addEventListener('DOMContentLoaded', function() {
    // Initialize Leaflet Map
    const map = L.map('map').setView([51.768199, 55.096955], 8); // Coordinates for Orenburg Region
    const layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    map.addLayer(layer);

    // Add NextGIS layer
    const nextgisLayer = L.tileLayer('https://geois2.orb.ru/api/component/render/tile?resource=8785&nd=204&z={z}&x={x}&y={y}');
    map.addLayer(nextgisLayer);

    // Handle search
    document.querySelector('#searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.querySelector('#searchInput').value;
        window.location.href = `/search.html?query=${query}`;
    });

    // Check if user is logged in and update navbar accordingly
    const isLoggedIn = false; // TODO: Implement logic to check if user is logged in
    if (isLoggedIn) {
        document.querySelector('li:nth-child(4)').style.display = 'none';
        document.querySelector('li:nth-child(5)').style.display = 'none';
        document.querySelector('li:nth-child(6)').style.display = 'block';
    }
});