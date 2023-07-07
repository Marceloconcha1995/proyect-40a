import { Link } from 'react-router-dom';
import './card.css';
import { addFav, removeFav } from '../../redux/action';
import { connect} from 'react-redux';
import React, {useState, useEffect} from 'react';



export function Card(props) {

   const {
      name,
      species,
      gender,
      status,
      image,
      onClose,
      id,
      removeFav,
      addFav,

   } = props

   const [isFav, setIsFav] = useState(false)

   function handleFavorite(){

      if(isFav){

         setIsFav(false)
         removeFav(id)

      }else{

         setIsFav(true)
         addFav(props)

      }

   }

   useEffect(() =>{
     props.myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   },[props.myFavorites])

   return (

      <div className="card">

{onClose ? (
 <button className='closeButton' onClick={() => onClose(id)}></button>
) : null}
        
         <Link to={`/detail/${id}`}>
         <img src={image} alt='' />
         </Link>
            
         <div className='card-name' >
            <p>{name}</p>-<p>{gender}</p>
         </div>
         <div className='card-gender'>
         <p className='card-sexo'><span className={status === 'Alive' ? 'verde' : status === 'Dead' ? 'rojo' : 'plomo'}></span>{status}</p><p>{species}</p>
         </div>

   {isFav ? (
      <button className='match' onClick={handleFavorite}>❤️</button>
   ) : (
      <button className='match' onClick={handleFavorite}>🤍</button>
   )}
      </div>
   );
}

export function mapDispatchToProps(dispatch){

   return {
      addFav: function (personaje) {
         dispatch(addFav(personaje))
      },

      removeFav: function(id) {
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(globalState){

   return{

      myFavorites: globalState.myFavorites

   };
}


export default connect(mapStateToProps,{addFav,removeFav})(Card);


