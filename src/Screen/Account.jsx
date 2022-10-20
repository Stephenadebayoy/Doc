import React from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Frame1 from '../asset/Frame1.png';
import Logo from '../asset/Shopping.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '370px',
    height: '800px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',

    boxShadow: '0px 4px 4px #00000',
  },
  frame1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',

    position: 'absolute',
    width: '72px',
    height: '8px',
    left: '142px',
    top: '64px',
  },
  logo: {
    width: '271px',
    top: '168px',
    left: '45px',
    height: '201px',
    position: 'absolute',
  },
  body: {
    width: '251px',
    height: '48px',
    top: '523px',
    left: '55px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const Account = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0}>
        <div>
          <img src={Frame1} alt='' className={classes.frame1} />
        </div>
      </Paper>
      <img src={Logo} alt='' className={classes.logo} />
      <Typography
        variant='h6'
        style={{
          fontStyle: 'normal',
          fontFamily: 'helvetica',
          fontWeight: '700',
          width: '100%',
          left: '48px',
          height: '28px',
          top: '447px',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          fontSize: '24px',
        }}
      >
        Account-2-Account
      </Typography>
      <Typography variant='body2' align='center' className={classes.body}>
        Buy from your favourite store <br /> directly from your DOT wallaet
      </Typography>
      <Button
        component={Link}
        to={'/instant'}
        style={{
          width: '312px',
          height: '50px',
          borderRadius: 8,
          padding: '16px 24px 16px 24px',
          background: '#5d106b',
          color: '#fff',
          top: '649px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px 24px',
          gap: '8px',
        }}
        type='submit'
        variant='contained'
      >
        Next
      </Button>
      <Button
        component={Link}
        to={'/instant'}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '16px',
          gap: '8px',
          justifyContent: 'center',
          position: 'absolute',
          width: '63px',
          height: '48px',
          left: '123px',
          top: '708px',
        }}
      >
        Skip
      </Button>
    </Box>
  );
};

export default Account;
