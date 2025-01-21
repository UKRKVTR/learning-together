import Navigation from '../components/navigation'
import Main from '../page/main-page'
import Programming from '../page/programming/programmingPage'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRootComponent from '../components/auth'

function App () {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    document.body.className = isDark ? 'appWhite' : ''
  }, [isDark])
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={
              <AuthRootComponent isDark={isDark} setIsDark={setIsDark} />
            }
          />
          <Route
            path='/register'
            element={
              <AuthRootComponent isDark={isDark} setIsDark={setIsDark} />
            }
          />
          <Route
            path='/'
            element={<Main isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route
            path='/programming'
            element={<Programming isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route path='/ling' />
          <Route path='/design' />
        </Routes>
      </Router>
    </>
  )
}
export default App
