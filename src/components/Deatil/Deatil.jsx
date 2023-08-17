import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'


export default function Deatil(){

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(respuesta => respuesta.json())
   .then((respuestaJson) => {

    if(respuestaJson.name){

        setCharacter(respuestaJson);

      } else {
   
        window.alert('¡No hay personajes con este ID!');
    }

 })
 .catch((err) => window.alert('Error'))
 
},[]);


  return (
    
    <div className='cards'>

      <div className='card-primero'>
      <img src={character.image} alt='' /> 
      </div>

      <div className='card-segundo'>
      <div className='cards-name' >
            <p>{character.name}</p>-<p>{character.gender}</p>
         </div>
         <div className='cards-gender'>
         <p className='cards-sexo'><span className={character.status === 'Alive' ? 'verdes' : character.status === 'Dead' ? 'rojos' : 'plomos'}></span>{character.status}</p><p>{character.species}</p>
         </div>
      </div>

    </div>
  )
}
