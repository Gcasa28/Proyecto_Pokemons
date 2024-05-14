const { Router } = require('express');
const getPokemonTypesHandler = require('../handlers/getPokemonsTypesHandler')

const typesRoutes = Router()

typesRoutes.get('/', getPokemonTypesHandler)

module.exports = typesRoutes