import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='h-20 flex justify-between items-center px-10 bg-amber-200'>
      <div>
        logo
      </div>

      <ul className='flex items-center gap-10'>
        
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
                ? "text-red-500 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) =>
              isActive 
                ? "text-red-500 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) =>
              isActive 
                ? "text-red-500 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header