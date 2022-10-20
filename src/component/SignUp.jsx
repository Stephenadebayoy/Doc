import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Quickmode2 from '../asset/Quick.png';
import Quickmode from '../asset/Quick2.png';
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
    '& .MuiInputBase-input': {
      borderRadius: '0.7rem',
    },
  },
});
const SignUp = ({ setUser }) => {
  const classes = useStyles();

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      input.password !== input.confirmPassword ||
      (!input.password && !input.confirmPassword)
    )
      return alert('wrong password');

    setTimeout(() => {
      setUser(input, alert('Approved'));
      navigate('/dashboard');
    }, 2000);

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.root}>
        <Typography variant='12px' padding={3}>
          Register
        </Typography>
        <TextField
          name='name'
          value={input.name}
          margin='normal'
          style={{
            color: '#fff',
          }}
          type='text'
          variant='outlined'
          placeholder='Name'
          className={classes.value}
          onChange={handleChange}
          required
          sx={{
            '.MuiOutlinedInput-root': {
              flexDirection: 'column',
            },
          }}
          InputProps={{
            endAdornment: <img src={Quickmode2} alt='' />,
          }}
        />
        <TextField
          margin='normal'
          value={input.email}
          type={'email'}
          className={classes.emai}
          name='email'
          style={{
            background: '#fff',
          }}
          variant='outlined'
          placeholder='Email Address'
          onChange={handleChange}
          required
          sx={{
            '.MuiOutlinedInput-root': {
              flexDirection: 'column',
            },
          }}
          InputProps={{
            endAdornment: <img src={Quickmode} alt='' />,
          }}
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
          InputProps={{
            endAdornment: <img src={Quickmode2} alt='' />,
          }}
        />
        <TextField
          margin='normal'
          value={input.confirmPassword}
          type={'password'}
          name='confirmPassword'
          variant='outlined'
          placeholder='Confirm Pssword'
          onChange={handleChange}
          required
          InputProps={{
            endAdornment: <img src={Quickmode} alt='' />,
          }}
        />

        <Button
          // onClick={reset}
          style={{
            marginTop: 20,
            borderRadius: 10,
            padding: '0 2rem',
            height: '3.5rem',
            background: '#000',
            justifyContent: 'space-between',
          }}
          type='submit'
          variant='contained'
        >
          Sign up
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
