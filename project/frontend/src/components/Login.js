import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', { email, password })
      .then(res => {
        dispatch(loginSuccess(res.data));
        alert('Авторизация успешна');
        window.location.href = '/profile';
      })
      .catch(err => {
        alert('Ошибка при авторизации');
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>Авторизация</h2>
      <form onSubmit={onSubmit}>
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
        <button type="submit" className="btn btn-primary">Войти</button>
        <p><a href="/reset-password">Забыли пароль?</a></p>
      </form>
    </div>
  );
};

export default Login;