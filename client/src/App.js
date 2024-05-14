import './App.css';
import { useEffect } from 'react';
import { Routes , Route, useNavigate, useLocation } from 'react-router-dom';
import Cards from './components/Cards';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import DetailPage from './components/DetailPage.jsx'
import NavBar from './components/NavBar.jsx';
import { useSelector } from 'react-redux';
import { getPokemons, addPokemon } from './redux/actions.js';
import { useDispatch } from 'react-redux';
import FormPage from './components/FormPage.jsx';


function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const allPokemons = useSelector((state) => state.allPokemons)

  const goHome = () => {
    navigate("/home")
  }


  useEffect(() => {
    dispatch(getPokemons())
  }, []);


 async function onSearch(name) {
  if( name === "" || Number.isInteger(parseInt(name))){
     return alert("Ingrese un nombre")
  }

  try {
  const pokemonName = allPokemons.filter(
     poke => poke.name === name
  )

  if(pokemonName.length){
     return alert(`${pokemonName[0].name} ya existe!`)
  }

      dispatch(addPokemon(name))

      navigate('/home')

    } catch (error) {

      console.error("Hubo un error al obtener el personaje:", error)
      window.alert('¡No hay personajes con este Nombre!');
  }
}

  return (
    <div className="App" >

      {
        location.pathname !== "/" ? <NavBar onSearch={onSearch}/> : null
      }

      <Routes>
        
        <Route path="/" element={<LandingPage goHome={goHome}/>} />

        <Route path="/home" element={<Cards/> }/>
        
        <Route path='/detail/:name' element={<DetailPage/>} />

        <Route path='/form' element={<FormPage />}/>

      </Routes>
    </div>
  );
}

export default App;
