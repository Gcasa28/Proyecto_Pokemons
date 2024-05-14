const { Router } = require('express');
const pokemonsRoutes = require('./pokemonsRouter');
const typesRoutes = require('./typeRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRoutes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRoutes.use("/pokemons", pokemonsRoutes)


mainRoutes.use("/types", typesRoutes)




module.exports = mainRoutes;
