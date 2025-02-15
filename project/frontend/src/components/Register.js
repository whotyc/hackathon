import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    axios.post('/api/auth/register', { name, email, password })
      .then(res => {
        alert('Регистрация успешна');
        window.location.href = '/login';
      })
      .catch(err => {
        alert('Ошибка при регистрации');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Регистрация</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>ФИО</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Подтвердите пароль</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;