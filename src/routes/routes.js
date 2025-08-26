const express = require('express');
const router = express.Router();

const { getPokemon } = require('../controllers/controllers');


router.get('/pokemons{/:id}', getPokemon);

module.exports = router;