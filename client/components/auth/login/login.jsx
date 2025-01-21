import { Button, TextField, Typography } from '@mui/material'
import React, { Fragment } from 'react'

function Login () {
  return (
    <>
      <Typography
        variant='h2'
        fontFamily='Vinque'
        textAlign='center'
        color='black'
      >
        Login
      </Typography>
      <Typography
        variant='body1'
        marginBottom={3}
        fontFamily='Vinque'
        textAlign='center'
        color='black'
      >
        Enter your email and password
      </Typography>
      <TextField
        fullWidth={true}
        fontFamily='Vinque'
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Email'
      />
      <TextField
        fullWidth={true}
        sx={{ fontFamily: 'Vinque' }}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Password'
      />
      <Button
        sx={{
          fontFamily: 'Vinque',
          marginTop: 2,
          marginBottom: 2,
          width: '60%'
        }}
        variant='contained'
      >
        Login
      </Button>
      <Typography
        variant='body1'
        fontFamily='Vinque'
        color='black'
        sx={{ fontFamily: 'Vinque' }}
      >
        No have account?<span className='incitingText'>Registration</span>
      </Typography>
    </>
  )
}

export default Login
