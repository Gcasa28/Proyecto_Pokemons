const createPokemon = require('../controllers/createPokemon')

createPokemonHandler = async (req, res) => {
    const {name, image, life, attack, defense, speed, height, weight, typeId1, typeId2} = req.body
    
    try {
        var newPokemon = await createPokemon(name.toLowerCase(), image, life, attack, defense, speed, height, weight, typeId1, typeId2)
    
        res.status(200).json(newPokemon)
    
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}





module.exports = createPokemonHandler