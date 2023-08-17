import React, { useState } from 'react'
import { connect, useDispatch, useSelector} from 'react-redux'
import Card from '../card/Card'
import './Favorites.css'
import { orderCards, filterCards, resetCards} from '../../redux/action'



export default function Favorites(){


  const [aux, setAux] = useState(false)
  const {myFavorites} = useSelector((state) => state)
  const dispatch = useDispatch();

  function handleOrder(event){
    dispatch(orderCards(event.target.value))
    setAux(true)
    
  }

  function handleFilter(event){
    event.preventDefault();
    dispatch(filterCards(event.target.value))

  }

  function onReset(){
    dispatch(resetCards())
  }


  return (

    <div className='elemento'>

    <div className='filtros' >

    <button onClick={onReset}>Reset</button>

    <select onChange={handleOrder} defaultValue={'DEFAULT'} >
    <option disabled value={'DEFAULT'} >Seleccionar Order</option>
    <option value="Ascendente">Ascendente</option>
    <option value="Descendente">Descendente</option>

    </select>

    <select onChange={handleFilter}  defaultValue={'DEFAULT'} >
    <option disabled value={'DEFAULT'} >Seleccionar Filter</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>

   </select>


    </div>

      <div className='favorito'>

      {myFavorites.map((char,indice) =>{

      return (
      <Card
      key={indice}
      id={char.id}
      name={char.name}
      species={char.species}
      gender={char.gender}
      status={char.status}
      image={char.image}
      />
)

})}


      </div>

    </div>
   
  )
}


//function mapStateToProps(globalState){

  //  return{

    //    myFavorites: globalState.myFavorites
 
  //  }
//}


//export function mapDispatchToProps(dispatch){

 // return {
   //  orderCards: function (orden) {
     //   dispatch(orderCards(orden))
    // },

    // filterCards: function(gender) {
      //  dispatch(filterCards(gender))
    // }
 // }
//}

//export default connect(mapStateToProps,{orderCards,filterCards})(Favorites);


