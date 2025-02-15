import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [userData, setUserData] = useState({ name: '', email: '', birthDate: '', city: '' });
  const [heroData, setHeroData] = useState({
    name: '', birthDate: '', deathDate: '', placeOfBirth: '', conflict: '', awards: '', photo: '', bio: ''
  });
  const userId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    axios.get(`/api/users/me`)
      .then(res => setUserData(res.data));
  }, []);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/users/update`, userData)
      .then(res => alert('Данные обновлены'))
      .catch(err => console.error(err));
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/heroes/`, heroData)
      .then(res => alert('Данные о бойце отправлены'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>Личный кабинет</h2>
      <form onSubmit={handleUserSubmit}>
        <div className="form-group">
          <label>ФИО</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userData.name}
            onChange={handleUserChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={handleUserChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Дата рождения</label>
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={userData.birthDate}
            onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label>Город рождения</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={userData.city}
            onChange={handleUserChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Обновить данные</button>
      </form>

      <h2>Добавить бойца</h2>
      <form onSubmit={handleHeroSubmit}>
        <div className="form-group">
          <label>ФИО</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={heroData.name}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Дата рождения</label>
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={heroData.birthDate}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Дата смерти</label>
          <input
            type="date"
            className="form-control"
            name="deathDate"
            value={heroData.deathDate}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Место рождения</label>
          <input
            type="text"
            className="form-control"
            name="placeOfBirth"
            value={heroData.placeOfBirth}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Военный конфликт</label>
          <input
            type="text"
            className="form-control"
            name="conflict"
            value={heroData.conflict}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Награды</label>
          <input
            type="text"
            className="form-control"
            name="awards"
            value={heroData.awards}
            onChange={handleHeroChange}
          />
        </div>
        <div className="form-group">
          <label>Фотография</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            value={heroData.photo}
            onChange={handleHeroChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Биография</label>
          <textarea
            className="form-control"
            name="bio"
            value={heroData.bio}
            onChange={handleHeroChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Отправить данные</button>
      </form>
    </div>
  );
};

export default Profile;