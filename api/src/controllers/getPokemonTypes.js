const axios = require("axios")

const getPokemonTypes = async (req, res) => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/type`)
              
        const character = data.results.map( poke => {
          return poke.name
        })
      
        res.status(200).send(character)
        }

module.exports = getPokemonTypes