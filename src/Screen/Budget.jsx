import React from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Frame3 from '../asset/Frame3.png';
import Logo from '../asset/bro.png';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  root: {
    width: '370px',
    height: '800px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    textAlign: 'center',
    display: 'flex',

    boxShadow: '0px 4px 4px #00000',
  },
  frame3: {
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
    width: '224.53px',
    top: '115px',
    left: '68px',
    height: '254px',
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

const Budget = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0}>
        <div>
          <img src={Frame3} alt='' className={classes.frame3} />
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
        Manage Budget
      </Typography>
      <Typography variant='body2' align='center' className={classes.body}>
        Create props and <br /> manage your expenses
      </Typography>
      <Button
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
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '16px 4.5rem',
          gap: '8px',
        }}
        type='submit'
        variant='contained'
      >
        Get started <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default Budget;
