import React, { useState } from 'react'
import Card from "./Card";
import { styles } from "../utils";
import { useDispatch, useSelector} from "react-redux"
import { orderCards, filterCards } from '../redux/actions'
import ScrollTopPage from './ScrollTopPage';



    export default function Cards () {

        const allPokemons = useSelector((state) => state.allPokemons)

        const dispatch = useDispatch()

        const [currentPage, setCurrentPage] = useState(1)

        const pokemonsPerPage = 12

        const indexOfLastPokemon = currentPage * pokemonsPerPage;

        const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

        const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    

        const handlePrevPage = () => {
            setCurrentPage((prevPage) => prevPage - 1);
        };
    
        const handleNextPage = () => {
            setCurrentPage((prevPage) => prevPage + 1);
        };
    
        const handleOrder = (evento) => {
          dispatch(orderCards(evento.target.value))
        }
    
        const  handleFilter = (evento) => {
          dispatch(filterCards(evento.target.value))
        }

        return (
            <div>
                <select onChange={handleOrder} name='order'>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                    <option value="Ataque">Ataque</option>
                    <option value="Defensa">Defensa</option>
                </select>

                <select onChange={handleFilter} name='filter'>
                    <option value="All">Todos</option>
                    <option value='fighting'>fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="normal">normal</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="stellar">stellar</option>
                    <option value="unknown">unknown</option>
                </select>
                

                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <button onClick={handleNextPage} disabled={indexOfLastPokemon >= allPokemons.length}>
                        Siguiente
                    </button>
                </div>
                
                
                <div style={styles.cardContainer}>

                    {
                        currentPokemons.map((pokemon, index) => {
                            return <Card
                                id = {pokemon.id}
                                key = {index}
                                name = {pokemon.name}
                                type = {pokemon.type}
                                image = {pokemon.image}
                                />
                            })
                    }

                    <div>
                        <ScrollTopPage />
                    </div>
                </div>
            </div>
        )
    }