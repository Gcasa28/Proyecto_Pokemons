const axios = require("axios");
const {extractPokemonInfo} = require("../utils")
const { Pokemon } = require('../db.js')


const getPokemonById = async (id, source) => {

    const pokemon = source === "api"
        ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        : await Pokemon.findByPk(id)

        if (source === "api") {
            return extractPokemonInfo(pokemon)
        } else {
            return pokemon
        }
}


module.exports = getPokemonById

