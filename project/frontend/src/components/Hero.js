import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Hero = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios.get(`/api/heroes/${id}`)
      .then(res => setHero(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!hero) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <h2>{hero.name}</h2>
      <img src={hero.photo} alt={hero.name} className="img-fluid" />
      <p><strong>Дата рождения:</strong> {new Date(hero.birthDate).toLocaleDateString()}</p>
      <p><strong>Дата смерти:</strong> {new Date(hero.deathDate).toLocaleDateString()}</p>
      <p><strong>Место рождения:</strong> {hero.placeOfBirth}</p>
      <p><strong>Военный конфликт:</strong> {hero.conflict}</p>
      <p><strong>Награды:</strong> {hero.awards.join(', ')}</p>
      <h3>Биография</h3>
      <p>{hero.bio}</p>
    </div>
  );
};

export default Hero;