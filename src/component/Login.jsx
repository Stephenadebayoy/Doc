import React from 'react';
import { Box, Button, Typography, TextField } from '@material-ui/core';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { makeStyles } from '@material-ui/core';
//import Quickmode from '../asset/Quick.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '280px',
    height: '512px',
    left: '4631px',
    top: '265px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    padding: '4rem 3rem',
    boxShadow: '0px 4px 4px #00000',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiButton-contained': {
      color: 'white',
      background: '#000',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
      background: '#000',

      borderRadius: '0.5rem',
    },
  },
});

const Signin = () => {
  const [input, setInput] = React.useState({
    email: '',
    password: '',
  });
  const classes = useStyles();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const reset = () => {
    setInput({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.root}>
        <TextField
          margin='normal'
          value={input.email}
          type={'email'}
          name='email'
          className={classes.input}
          variant='outlined'
          placeholder='Email Address'
          onChange={handleChange}
          required
          // sx={{
          //   '.MuiOutlinedInput-root': {
          //     flexDirection: 'column',
          //   },
          // }}
          // InputProps={{
          //   endAdornment: <ArrowCircleRightIcon />,
          // }}
        />

        <TextField
          margin='normal'
          value={input.password}
          type={'password'}
          name='password'
          className={classes.input}
          variant='outlined'
          placeholder='Password'
          onChange={handleChange}
          required
          // sx={{
          //   '.MuiOutlinedInput-root': {
          //     flexDirection: 'column',
          //   },
          // }}
          // InputProps={{
          //   endAdornment: <ArrowCircleRightIcon />,
          // }}
        />
        <Button>
          <Typography variant='body2'>Forget Password ?</Typography>
        </Button>
        <Button
          onClick={reset}
          style={{
            marginTop: 20,
            borderRadius: 10,
            width: '220px',
            display: 'flex',
            background: '#000',
            color: '#fff',
            height: '5rem',

            justifyContent: 'space-between',
          }}
          type='submit'
          variant='contained'
        >
          SIGN IN
          <ArrowCircleRightIcon />
        </Button>
      </Box>
    </form>
  );
};

export default Signin;
