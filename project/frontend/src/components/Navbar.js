import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Главная</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Галерея</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/help">Справка</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Регистрация</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Авторизация</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Личный кабинет</Link>
            </li>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0" id="searchForm">
          <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск" id="searchInput" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;