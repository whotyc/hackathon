import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/api/heroes?page=${page}`)
      .then(res => setHeroes(res.data))
      .catch(err => console.error(err));
  }, [page]);

  return (
    <div className="container">
      <h2>Галерея героев</h2>
      <div className="row">
        {heroes.map(hero => (
          <div className="col-md-4" key={hero.id}>
            <div className="card mb-4">
              <img src={hero.photo} className="card-img-top" alt={hero.name} />
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">{hero.shortBio}</p>
                <Link to={`/hero/${hero.id}`} className="btn btn-primary">Подробнее</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setPage(page - 1)}>Предыдущая</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>Следующая</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Gallery;