import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailPage() {

    const [pokemon, setPokemon] = useState({})

    const {name} = useParams()

    useEffect(() => {
          axios(`http://localhost:3001/pokemons?name=${name}`).then(
             ({ data }) => {
                if (data) {
                   setPokemon(data.pokeApi)
                } else {
                   window.alert('No hay personajes con ese nombre')
                }
             }
          )
          return setPokemon({});
       }, [name])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name}/>
      <h2> <span style={{ color: '#999' }}>Vida:</span> {pokemon.life} </h2>
      <h2> <span style={{ color: '#999' }}>Ataque:</span> {pokemon.attack} </h2>
      <h2> <span style={{ color: '#999' }}>Defensa:</span> {pokemon.defense} </h2>
      <h2> <span style={{ color: '#999' }}>Velocidad:</span> {pokemon.speed} </h2>
      <h2> <span style={{ color: '#999' }}>Altura:</span> {pokemon.height} </h2>
      <h2> <span style={{ color: '#999' }}>Peso:</span> {pokemon.weight} </h2>
      <h2> <span style={{ color: '#999' }}>Tipo:</span> {pokemon.type} </h2>
    </div>
  )
}

export default DetailPage