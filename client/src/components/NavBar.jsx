import React from 'react'
import SearchBarByName from './SearchBarByName'
import { NavLink } from 'react-router-dom'

function NavBar({onSearch}) {
  return (
    <div>
        <SearchBarByName onSearch={onSearch}/>

        <NavLink to={"/home"}>
            <button>
                Home
            </button>
        </NavLink>

        <NavBar to={"/form"}>
          <button>
            Crear Pokemon
          </button>
        </NavBar>
    </div>
  )
}

export default NavBar