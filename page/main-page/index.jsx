import React from 'react'
import './styles.css'
import Navigation from '../../components/navigation'

function Main () {
  return (
    <div className='container'>
      <Navigation />
      <div className='main'>
        <header>
          <div className='mainText'>
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
            <div className='card'>
              <h2>Programming</h2>
            </div>
            <div className='card'>
              <h2>Linguistics</h2>
            </div>
            <div className='card'>
              <h2>Design</h2>
            </div>
          </div>
          <div className='about'></div>
        </main>
      </div>
    </div>
  )
}

export default Main
