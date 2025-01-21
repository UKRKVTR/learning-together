import React, { useEffect } from 'react'
import './styles.css'
import Navigation from '../../components/navigation'
import { NavLink } from 'react-router-dom'
function Main ({ isDark, setIsDark }) {
  return (
    <div className='container'>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <div className='main'>
        <header>
          <div className={isDark ? 'mainText' : 'mainText mainWhite'}>
            <h1>Greetings traveler!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              neque tenetur veniam nostrum enim nobis saepe unde aliquid sunt
              aspernatur. Alias temporibus excepturi officia blanditiis quisquam
              harum consectetur ad reprehenderit?
            </p>
          </div>
          <div className='mainImage'>
            <img src='' alt='' />
          </div>
        </header>
        <main>
          <div className='cardMenu'>
            <NavLink
              to='/programming'
              className={isDark ? 'card prog' : 'cardWhite prog'}
            >
              <h2>Programming</h2>
            </NavLink>
            <NavLink
              to='ling'
              className={isDark ? 'card ling' : 'cardWhite ling'}
            >
              <h2>Linguistics</h2>
            </NavLink>
            <NavLink
              to='design'
              className={isDark ? 'card desig' : 'cardWhite desig'}
            >
              <h2>Design</h2>
            </NavLink>
          </div>
          <div className='about'></div>
        </main>
      </div>
    </div>
  )
}

export default Main
