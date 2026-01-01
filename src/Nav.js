import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <h3>Menu</h3>
        
        <ul>
            <li><NavLink to='/'>Home Page</NavLink></li>
            <li><NavLink to='/tododashboard'>Todo Dashboard</NavLink></li>
            <li><NavLink to='/todocalendar'>Calendar View</NavLink></li>
        </ul>
        
        <button><NavLink to='/addtodo'>Add Todo</NavLink></button>
    </div>
  )
}

export default Nav