const axios = require("axios")
const { Pokemon } = require('../db')
const {extractPokemonInfo} = require('../utils')


const getPokemons = async () => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
              
        const pokemonsApi = data.results.map( poke => {
          return poke
        })

        const mapApi = await Promise.all(pokemonsApi.map( async pokeapi => {
          const {data} = await axios.get(pokeapi.url)
          return extractPokemonInfo(data)
        }))

        const pokemonDB = await Pokemon.findAll()
      
        return {"pokeDB": pokemonDB, "pokeApi": mapApi}
        }

module.exports = getPokemons