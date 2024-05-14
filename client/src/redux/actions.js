import {  ORDER, FILTER, GET_POKEMONS, ADD_POKEMON } from "./action-types";
import axios from "axios"

export const getPokemons = () => {
  return async (dispatch) => {
      try {

          const response = await axios.get("http://localhost:3001/pokemons/");
          dispatch({ 
            type: GET_POKEMONS, 
            payload: response.data.pokeApi })

      } catch (error) {
          console.error("Error fetching pokemons:", error);
      }
  };
};


export const addPokemon = (pokemon) => {
  const endpoint = `http://localhost:3001/pokemons?name=${pokemon}`
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint)
         return dispatch({
            type: ADD_POKEMON,
            payload: data.pokeApi,
         });
      
    } catch (error) {
      alert(error.message)
    }
  };
}

export const orderCards = (orden) => {
    return {
      type: ORDER,
      payload: orden
    }
  }

  export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender
    }
  }

  

