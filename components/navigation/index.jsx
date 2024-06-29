import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { FaRegUser, FaMoon } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navigation () {
  const toggleWhite = () => {
    document.querySelectorAll('.buttonMenu').forEach(button => {
      button.classList.toggle('White')
    })
  }
  return (
    <nav>
      <div className='navWrapped'>
        <NavLink to='/signup' className='buttonMenu'>
          <FaRegUser />
        </NavLink>
        <button className='buttonMenu'>
          <RxHamburgerMenu />
        </button>
        <div className='spacer'></div>
        <button className='buttonMenu' onClick={toggleWhite}>
          <FaMoon />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
