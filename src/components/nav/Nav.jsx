import React from 'react'
import SearchBar from '../searchbar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function Nav (props){

return (
<div className='nav'>

<div className='botones'>

        <Link to={"/home"}>
        <button>Home</button>
        </Link>
      
        <Link to={"/favorites"}>
        <button>Favoritos</button>
        </Link>
        
        <Link to={"/about"} >
        <button>About</button>
        </Link>

        <button onClick={props.logout} 
        >Log out</button>
  
  </div>
      
      <SearchBar onSearch={props.onSearch} />

    </div>
  )
}
