import { useState } from 'react';
import './searchbar.css';

export default function SearchBar(props) {


   const [id, setId] = useState('')

   function handleChange(event){

      setId(event.target.value)

   }

   return (
      <div className="boton">

         <h1>Rick <strong className='green'>and</strong> morty</h1>


         <div className="elementos">

         <input 
         value={id}
         onChange={handleChange}
         placeholder='id' 
         type='search' />
         <button onClick={()=>{
            props.onSearch(id)
         }}
         >
            Agregar</button>

         </div>

        
      </div>
   );
}
