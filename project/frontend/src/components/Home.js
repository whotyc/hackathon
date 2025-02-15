import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const map = new window.L.Map('map').setView([51.768199, 55.096955], 8); // Coordinates for Orenburg Region
    const layer = new window.L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    const nextgisLayer = window.L.tileLayer('https://geois2.orb.ru/api/component/feature_layer/mvt?resource=8784&z={z}&x={x}&y={y}');
    map.addLayer(nextgisLayer);

    document.getElementById('searchForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const query = document.getElementById('searchInput').value;
      window.location.href = `/search.html?query=${query}`;
    });
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h1>Добро пожаловать на сайт памяти героев</h1>
        <p>На этом сайте вы можете найти информацию о героях, погибших в различных конфликтах, и почтить их память.</p>
      </section>
      <section className="map">
        <h2>Интерактивная карта</h2>
        <div id="map"></div>
      </section>
    </div>
  );
};

export default Home;