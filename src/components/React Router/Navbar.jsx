import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-4 items-center text-lg font-medium'>
        <NavLink to="/" className="hover:text-blue-800 hover:underline">Home</NavLink>
        <NavLink to="/about" className="hover:text-blue-800 hover:underline">About</NavLink>
        <NavLink to="/contact" className="hover:text-blue-800 hover:underline">Contact</NavLink>
      
    </div>
  )
}

export default Navbar
