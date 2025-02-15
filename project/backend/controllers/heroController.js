const { Hero } = require('../models');

exports.getAllHeroes = (req, res) => {
  Hero.findAll().then(heroes => res.json(heroes));
};

exports.getHeroById = (req, res) => {
  Hero.findByPk(req.params.id).then(hero => res.json(hero));
};

exports.addHero = (req, res) => {
  Hero.create(req.body).then(hero => res.json(hero));
};

exports.updateHero = (req, res) => {
  Hero.update(req.body, { where: { id: req.params.id } }).then(hero => res.json(hero));
};

exports.deleteHero = (req, res) => {
  Hero.destroy({ where: { id: req.params.id } }).then(() => res.json({ success: true }));
};

exports.searchHeroes = (req, res) => {
  const { query } = req.query;
  Hero.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${query}%` } },
        { conflicts: { [Op.iLike]: `%${query}%` } }
      ]
    }
  }).then(heroes => res.json(heroes));
};

exports.getHeroesByMunicipality = (req, res) => {
  const { municipality } = req.params;
  Hero.findAll({ where: { burialPlace: municipality } }).then(heroes => res.json(heroes));
};