import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className='navbar' style={{justifyContent: "spaceAround"}}>
    <NavLink to='/' style={{justifyContent: "spaceAround"}} >Home</NavLink>

    <NavLink to='/movies' style={{justifyContent: "spaceAround"}}>Movies</NavLink>
    <NavLink to='/directors' style={{justifyContent: "spaceAround"}}>Directors</NavLink>
    <NavLink to='/actors' style={{justifyContent: "spaceAround"}}>Actors</NavLink>
    </div>
  )
}

export default NavBar;
