import React from 'react'
import { useLocation } from 'react-router'
import Login from './login/login'
import Register from './register/register'
import './style.scss'
import { Box } from '@mui/material'

function AuthRootComponent () {
  const location = useLocation()
  return (
    <div className='root'>
      <div className='form'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px black'}
        >
          {location.pathname === '/login' ? (
            <Login />
          ) : location.pathname === '/register' ? (
            <Register />
          ) : null}
        </Box>
      </div>
    </div>
  )
}

export default AuthRootComponent
