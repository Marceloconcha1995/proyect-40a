import React, {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import { Form } from './components/form/Form.jsx';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import './App.css';
import Favorites from './components/favoritos/Favorites.jsx';


function App() {

   
   const [access, setAccess] = useState(false)


   const location = useLocation();
   const navigate = useNavigate();

   const EMAIL = 'ejemplo@gmail.com'
   const PASSWORD = '123456'

 
function login(user){

   if(user.email === EMAIL && user.password === PASSWORD){
      setAccess(true)
      navigate('/home')

   }else{
      
      alert('Los campos son obligatorios.')
   }

}

useEffect(()=>{
   !access && navigate('/')
}, [access])
   

function logout(){
   setAccess(false)
   navigate('/')
}

function onSearch(name){
   fetch(`https://rickandmortyapi.com/api/character/${name}`)
   .then(respuesta => respuesta.json())
   .then((respuestaJson) => {

   if (respuestaJson.name) {

      if(characters.some(p => p.id === respuestaJson.id)){

         window.alert('¡Ya hay personajes con este ID!');

      }else{

         setCharacters([...characters, respuestaJson]);

      }

   } else {

      window.alert('¡No hay personajes con este ID!');

   }

 })

}

function onRandom(){

   const randoms = Math.ceil(Math.random() * 183) 

   fetch(`https://rickandmortyapi.com/api/character/${randoms}`)
   .then(respuesta => respuesta.json())
   .then((respuestaJson) => {

   if (respuestaJson.name) {

      if(characters.some(p => p.id === respuestaJson.id)){

         window.alert('¡Ya hay personajes con este ID!');

      }else{

         setCharacters([...characters, respuestaJson]);

      }

   } else {

      window.alert('¡No hay personajes con este ID!');

   }

 })

}

function onClose(id){

   setCharacters(characters.filter(p =>{
      return p.id !== Number(id)
   }))


}

const [characters, setCharacters] = useState([]);

   return (
      <div className='contenido'>

       {location.pathname !== '/' && <Nav onSearch={onSearch} onRandom={onRandom} logout={logout} />}

       {location.pathname === '/home' && !characters.length ? <div className='text'><h1>Aun no has agregado ninguna card.</h1></div> : ''}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/detail/:id" element={<Deatil/>}/>
            <Route path='/' element={<Form login={login}/>}/> 
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>

      </div>
   );
}

export default App;



