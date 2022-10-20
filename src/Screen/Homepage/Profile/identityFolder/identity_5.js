import React from 'react';
import { Box, Paper, Typography, makeStyles, Button } from '@material-ui/core';

import Approved from '../../../../asset/Subtract.png';

const useStyles = makeStyles({
  root: {
    width: '370px',
    height: '800px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    display: 'flex',

    margin: '1rem',
    boxShadow: '0px 4px 4px #00000',
  },
  root2: {
    margin: '1rem',
  },
  heading: {
    position: 'absolute',
    width: '278px',
    height: '24px',

    top: '306px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#1E1E1E',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  verifyCard: {
    border: '1px solid #B5B5B5',
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.25))',
    borderRadius: '4px',
  },
  allVerifyCard: {
    position: 'absolute',
    left: '20px',
    top: '240px',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '16px',
    gap: '15px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  approved: {
    width: '75.31px',
    height: '64px',
    top: '202px',
    left: '142px',
    position: 'absolute',
  },
});

const Identity = () => {
  const classes = useStyles();
  const str = 'done';
  const submit = str.charAt(0).toLowerCase().toUpperCase() + str.slice(1);

  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            style={{
              marginLeft: '5.5rem',
              marginTop: '0.5rem',
            }}
          >
            Identity Verification
          </Typography>
        </div>

        <img src={Approved} alt='' className={classes.approved} />
        <Paper>
          <Typography className={classes.heading}>We're on it !</Typography>
          <Typography
            variant='body2'
            style={{
              width: '312px',
              height: '96px',
              top: '380px',
              left: '30px',
              display: 'flex',
              position: 'absolute',
              alignItems: 'flex-end',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '14px',
            }}
          >
            We've received your information for proper verification . We'll
            notify you via email once the verification process is complete. This
            can take up to 24 hours;
          </Typography>
        </Paper>

        <Button
          style={{
            position: 'absolute',
            width: '282px',
            height: '50px',
            top: '600px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 24px',
            background: '#5D106B',
            borderRadius: '40px',
            gap: '8px',
            left: '4rem',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'helvetica',
            textTransform: 'none',
          }}
        >
          {submit}
        </Button>
      </Paper>
    </Box>
  );
};

export default Identity;
