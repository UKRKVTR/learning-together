import React from 'react'
import './styles.css'
import Navigation from '../../components/navigation'
function Programming ({ isDark, setIsDark }) {
  return (
    <div>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <h2>Programming</h2>
      <p>dfd</p>
    </div>
  )
}

export default Programming
