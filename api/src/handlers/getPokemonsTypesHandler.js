const {checkIfEmpty , populateTypes} = require('../utils')


const getPokemonsTypesHandler = async (req, res) => {
    try {
        const empty = await checkIfEmpty()
        if (empty) {
            const response = await populateTypes()
            res.status(200).json(response)
        } else {
            res.status(200).send("La tabla 'Types' ya tiene datos")
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getPokemonsTypesHandler