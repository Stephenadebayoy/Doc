import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

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

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button
        component={Link}
        to={'/signup'}
        style={{
          marginTop: 20,
          borderRadius: 10,
          width: '220px',
          display: 'flex',
          height: '6rem',

          justifyContent: 'space-between',
        }}
        type='submit'
        variant='contained'
      >
        Get started
      </Button>
      <Button
        component={Link}
        to={'/login'}
        style={{
          marginTop: 20,
          borderRadius: 10,
          width: '220px',
          display: 'flex',
          background: 'white',
          color: '#000',
          height: '4rem',
          justifyContent: 'space-between',
        }}
        type='submit'
        variant='contained'
      >
        SIGN IN
      </Button>
    </Box>
  );
};

export default Home;
