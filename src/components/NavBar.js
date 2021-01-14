import React from 'react'
import "tailwindcss/tailwind.css"
import { NavLink } from 'react-router-dom'


 const NavBar = () => {
  return (
    <header className = 'bg-gray-900'>
      <div className = 'container mx-auto flex justify-between'>
        <nav className = 'flex'>
          <NavLink 
            to = '/' 
            exact 
            activeClassName = 'text-black' 
            className = 'inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-400 text-4xl font-TT tracking-widest'>
            Home
          </NavLink>
          <NavLink 
            to = '/post' 
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black hover:bg-gray-500'
            activeClassName = 'bg-gray-500'>
            Blog Posts
          </NavLink>
          <NavLink 
            to = '/projects'
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black hover:bg-gray-500'
            activeClassName = 'bg-gray-500'>
            Projects
          </NavLink>
          <NavLink 
            to = '/about'
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black hover:bg-gray-500'
            activeClassName = 'bg-gray-500'>
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  )
}


export default NavBar