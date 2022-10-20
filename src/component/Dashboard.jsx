import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Box, Button } from '@material-ui/core';

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

const Dashboard = ({ user }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
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
        Next
      </Button>
    </Box>
  );
};

export default Dashboard;
