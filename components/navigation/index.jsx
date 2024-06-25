import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navigation () {
  return (
    <nav>
      <div className='navWrapped'>
        <NavLink to='/signup' className='buttonMenu'>
          <FaRegUser />
        </NavLink>
        <div className='buttonMenu'>
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
