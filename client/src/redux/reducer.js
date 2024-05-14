import { ORDER, FILTER, GET_POKEMONS, ADD_POKEMON } from "./action-types";

const initialState = {
    allPokemons: [],
    originalPokemons: []
}

 
const rootReducer = (state = initialState, action) =>{
        switch (action.type) {

            case FILTER:
                if(action.payload === "All") return {
                    ...state,
                    allPokemons: [...state.originalPokemons]
                }
                return {
                    ...state, allPokemons: [ ...state.allPokemons.filter((poke) => poke.type === action.payload)]
                }

                case ORDER:
                    const orderCopy = [...state.allPokemons];
                    if (action.payload === "Ascendente") {
                        orderCopy.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        });
                    }
                    if (action.payload === "Descendente") {
                        orderCopy.sort((a, b) => {
                            if (a.name > b.name) return -1;
                            if (a.name < b.name) return 1;
                            return 0;
                        });
                    }
                    if (action.payload === "Ataque") {
                        orderCopy.sort((a, b) => {
                            if (a.attack > b.attack) return -1;
                            if (a.attack < b.attack) return 1;
                            return 0;
                        });
                    }
                    if (action.payload === "Defensa") {
                        orderCopy.sort((a, b) => {
                            if (a.defense > b.defense) return -1;
                            if (a.defense < b.defense) return 1;
                            return 0;
                        });
                    }
                    return {
                        ...state,
                        allPokemons: orderCopy
                    };

            case ADD_POKEMON:
                return { 
                    ...state,
                     allPokemons: [...state.allPokemons, action.payload],
                     originalPokemons: [...state.originalPokemons, action.payload]
                    };

            case GET_POKEMONS:
                return {
                    ...state,
                    allPokemons: action.payload,
                    originalPokemons: action.payload
                }
        
            default:
                return {...state}
        }
}

export default rootReducer;