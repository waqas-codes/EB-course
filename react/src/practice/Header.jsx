import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='h-20 flex justify-between items-center px-10 bg-white shadow-lg'>
      <div>
        logo
      </div>

      <ul className='flex items-center gap-10'>
        
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive 
                ? "text-gray-700 font-bold border-b-2 border-red-500"
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
                ? "text-gray-700 font-bold border-b-2 border-red-500"
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
                ? "text-gray-700 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/signup"
            className={({ isActive }) =>
              isActive 
                ? "text-gray-700 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/github"
            className={({ isActive }) =>
              isActive 
                ? "text-gray-700 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Github
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/users"
            className={({ isActive }) =>
              isActive 
                ? "text-gray-700 font-bold border-b-2 border-red-500"
                : "text-black"
            }
          >
            Users
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header