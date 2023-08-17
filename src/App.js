import React, {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import { Form } from './components/form/Form.jsx';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import './App.css';
import Favorites from './components/favoritos/Favorites.jsx';
import axios from 'axios';

const URL_BASE = "http://localhost:3001/rickandmorty/character";

function App() {

   
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();

   function login(userData) {
      const { email , password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


useEffect(()=>{
   !access && navigate('/')
}, [access])

   

function logout(){
   setAccess(false)
   navigate('/')
}

function onSearch(id){
   axios(`${URL_BASE}/${id}`)
   .then(({ data }) => {
      if (data.name) {

         if(characters.some((x) => x.id === id)){

            alert(`Ya existe ese personaje con este ID: ${id}`)

         }else{

            setCharacters((oldChars) => [...oldChars, data]);

         }

      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });

}

function onClose(id){

   setCharacters(characters.filter(p =>{
      return p.id !== id
   }))


}

const [characters, setCharacters] = useState([]);

   return (
      <div className='contenido'>

       {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}

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



