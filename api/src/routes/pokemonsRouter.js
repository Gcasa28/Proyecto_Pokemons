const { Router } = require('express');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler')
const getPokemonsHandler = require('../handlers/getPokemonsHandler')
const createPokemonHandler = require('../handlers/createPokemonHandler')

const pokemonsRoutes = Router()

pokemonsRoutes.get('/', getPokemonsHandler)

pokemonsRoutes.get('/:id', getPokemonByIdHandler)

pokemonsRoutes.post('/', createPokemonHandler)


module.exports = pokemonsRoutes;