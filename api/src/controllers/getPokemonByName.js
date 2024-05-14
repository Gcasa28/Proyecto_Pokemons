const axios = require("axios");
const { Pokemon } = require('../db.js')
const {extractPokemonInfo} = require('../utils.js')



const getPokemonByName = async (name) => {

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

        const pokemonApi = extractPokemonInfo(data)

        const pokemonDB = await Pokemon.findAll({where : {name:name}})
        

        return {"pokeDB": pokemonDB, "pokeApi": pokemonApi}
    }

module.exports = getPokemonByName