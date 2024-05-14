const { Pokemon, Type} = require("./db.js")
const axios = require('axios')

const extractPokemonInfo = (poke) => {
    return {
        id: poke.id,

        name: poke.name,

        image: poke.sprites?.front_default,

        life: getStatValue(poke.stats, "hp"),

        attack: getStatValue(poke.stats, "attack"),

        defense: getStatValue(poke.stats, "defense"),

        speed: getStatValue(poke.stats, "speed") || 0,

        height: poke.height || 0 ,

        weight: poke.weight || 0,
        
        type: poke.types[0].type?.name,

        created: false
    };
};

const getStatValue = (stats, statName) => {
    const stat = stats.find(stat => stat.stat.name === statName);
    return stat ? stat.base_stat : 0;
};

const nuevoPokemon = async (name, image, life, attack, defense, speed, height, weight) => {

    const pokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight
    })

        return pokemon
}

const checkIfEmpty = async () => {
    try {
        const count = await Type.count();
        const empty = count === 0 ? true : false
        return empty;
    } catch (error) {
        console.error('Error al verificar si la tabla está vacía:', error)
        throw error
    }
};

const populateTypes = async () => {

    const response = await axios.get("https://pokeapi.co/api/v2/type");

    try {

        const pokemonTypes = response.data.results.map(poketypes => (
            {name: poketypes.name}
        ))

        await Type.bulkCreate(pokemonTypes)

    } catch (error) {
        console.error(error)
    }

}

module.exports = {extractPokemonInfo, nuevoPokemon, checkIfEmpty, populateTypes}