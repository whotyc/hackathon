const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const { isAdmin } = require('../utils/auth');

router.get('/', heroController.getAllHeroes);
router.get('/:id', heroController.getHeroById);
router.post('/', isAdmin, heroController.addHero);
router.put('/:id', isAdmin, heroController.updateHero);
router.delete('/:id', isAdmin, heroController.deleteHero);
router.get('/search', heroController.searchHeroes);
router.get('/municipality/:municipality', heroController.getHeroesByMunicipality);

module.exports = router;