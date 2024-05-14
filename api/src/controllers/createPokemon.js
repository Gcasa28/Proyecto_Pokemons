const { Pokemon, Type } = require('../db')

const createPokemon = async (name, image, life, attack, defense, speed , height , weight, typeId1, typeId2) => {


    const post = await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
    
    const type1 = await Type.findByPk(typeId1);
    const pokemon1 = await Pokemon.findByPk(post.id);
    await type1.addPokemon(pokemon1);

    const type2 = await Type.findByPk(typeId2);
    const pokemon2 = await Pokemon.findByPk(post.id);
    await type2.addPokemon(pokemon2);

    return post

}

module.exports = createPokemon