import React, { useState } from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { FaRegUser, FaMoon } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navigation ({ isDark, setIsDark }) {
  const changeTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <nav>
      <div className={isDark ? 'navWrapped white' : 'navWrapped '}>
        <NavLink
          to='/login'
          className={isDark ? 'buttonMenu white' : 'buttonMenu '}
        >
          <FaRegUser />
        </NavLink>
        <button className={isDark ? 'buttonMenu white' : 'buttonMenu '}>
          <RxHamburgerMenu />
        </button>
        <div className='spacer'></div>
        <button
          className={isDark ? 'buttonMenu white' : 'buttonMenu '}
          onClick={changeTheme}
        >
          <FaMoon />
        </button>
      </div>
    </nav>
  )
}

export default Navigation
