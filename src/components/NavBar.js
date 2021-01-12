import React from 'react'
import "tailwindcss/tailwind.css"
import { NavLink } from 'react-router-dom'


 const About = () => {
  return (
    <header className = 'bg-gray-600'>
      <div className = 'container mx-auto flex justify-between'>
        <nav className = 'flex'>
          <NavLink 
            to = '/' 
            exact activeClassName = 'text-black' 
            className = 'inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-black text-4xl font-TT tracking-widest'>
            Home
          </NavLink>
          <NavLink 
            to = '/about' 
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black'
            activeClassName = 'bg-gray-800'>
            About
          </NavLink>
          <NavLink 
            to = '/projects'
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black'
            activeClassName = 'bg-gray-800'>
            Projects
          </NavLink>
          <NavLink 
            to = '/resume'
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black'
            activeClassName = 'bg-gray-800'>
            Resume
          </NavLink>
          <NavLink 
            to = '/contacts'
            className = 'inline-flex items-center py-3 px-3 m-6 rounded text-white hover:text-black'
            activeClassName = 'bg-gray-800'>
            Conctacts
          </NavLink>
        </nav>
      </div>
    </header>
  )
}


export default About