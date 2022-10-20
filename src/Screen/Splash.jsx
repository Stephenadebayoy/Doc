import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from '../asset/Vector.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '280px',
    height: '512px',
    left: '463px',
    top: '265px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    padding: '4rem 3rem',
    boxShadow: '0px 4px 4px #00000',
    justifyContent: 'center',
    alignItems: 'center',
    // '& .MuiButton-contained': {
    //   color: 'white',
    //   background: '#000',
    // },
  },
});

const Splash = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div>
        <Link to='/account'>
          <img src={Logo} alt='' />
        </Link>
      </div>

      <Typography variant='body2' style={{ marginTop: '2rem' }}>
        Follow your heart!
      </Typography>
    </Box>
  );
};

export default Splash;
