const getPokemonById = require('../controllers/getPokemonById')

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params

    const source = isNaN(id) ? "bdd" : "api"

    try {
        const response = await getPokemonById(id, source)

        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getPokemonByIdHandler