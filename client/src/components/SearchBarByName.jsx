import React, { useState } from 'react'

function SearchBarByName({onSearch}) {

    const [name, setName] = useState("")

    const handleChange = (evento) => {
        setName(evento.target.value)
    }

    const handleClick = () => {
      onSearch(name);
      setName('')
  };

  return (
    <div>
        <h2>Busqueda por nombre</h2>
        <input type="search" onChange={handleChange} value={name}/>

        <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default SearchBarByName