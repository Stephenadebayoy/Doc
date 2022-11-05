import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core';
import ArrowRightAltOutlined from '@material-ui/icons/ArrowRightAltOutlined';
import AddIcon from '@material-ui/icons/Add';
import { ThemeProvider, createTheme } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    borderRadius: '12px',
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '280px',
    height: '512px',
    left: '4631px',
    top: '265px',
    background: '#ffffff',
    borderRadius: '15px',
    border: '3px solid #000000',
    padding: '4rem 3rem',
    boxShadow: '0px 4px 4px #00000',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiButton-contained': {
      color: 'white',
      background: 'black',
    },
  },
});

const GetStarted = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.password !== input.confirmPassword ||
      (!input.password && !input.confirmPassword)
    )
      return alert('wrong password');
  };

  const reset = () => {
    setIsSignup(!isSignup);
    setInput({ name: '', email: '', password: '', confirmPassword: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.root}>
        <Typography variant='12px' padding={3}>
          {isSignup ? 'REGISTER' : 'SIGN IN'}
        </Typography>
        {isSignup && (
          <TextField
            name='name'
            value={input.name}
            margin='normal'
            type='text'
            variant='outlined'
            placeholder='Name'
            className={classes.value}
            onChange={handleChange}
            required
          />
        )}

        <TextField
          margin='normal'
          value={input.email}
          type={'email'}
          name='email'
          variant='outlined'
          placeholder='Email Address'
          onChange={handleChange}
          required
        />
        <TextField
          margin='normal'
          value={input.password}
          type={'password'}
          name='password'
          variant='outlined'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        {!isSignup && (
          <Button>
            <Typography variant='body2'>Forget Password ?</Typography>
          </Button>
        )}

        {isSignup && (
          <TextField
            margin='normal'
            value={input.confirmPassword}
            type={'password'}
            name='confirmPassword'
            variant='outlined'
            placeholder='Confirm Pssword'
            onChange={handleChange}
            required
          />
        )}

        {isSignup ? (
          <Button
            type='submit'
            style={{
              marginTop: 25,
              borderRadius: 10,
              padding: '0.8rem 1.3rem',
              display: 'flex',

              justifyContent: 'center',
            }}
            variant='contained'
          >
            {isSignup ? 'Sign Up' : 'SIGN IN'}
            {!isSignup ? <ArrowRightAltOutlined /> : ''}
          </Button>
        ) : (
          <Button
            onClick={reset}
            style={{
              marginTop: 20,
              borderRadius: 10,
              width: '220px',
              display: 'flex',
              height: '4rem',
              justifyContent: 'space-between',
            }}
            type='submit'
            variant='contained'
          >
            {isSignup ? 'Sign up' : ' SIGN IN'}
            <ArrowCircleRightIcon />
          </Button>
        )}
      </Box>
    </form>
  );
};

export default GetStarted;
