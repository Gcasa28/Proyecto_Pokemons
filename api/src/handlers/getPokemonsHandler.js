const getPokemonByName = require('../controllers/getPokemonByName')
const getPokemons = require('../controllers/getPokemons')

const getPokemonsHandler = async (req, res) => {
    const {name} = req.query

    try {
        if (name) {
            const pokemonByName = await getPokemonByName(name.toLowerCase())

            res.status(200).json(pokemonByName)
        } else{
            const response = await getPokemons()

            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getPokemonsHandler