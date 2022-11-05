import React from 'react';
import {
  Box,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import Call from '../asset/call.png';
const useStyles = makeStyles({
  root: {
    width: '370px',
    height: '800px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    textAlign: 'center',
    display: 'flex',
    margin: '1rem',
    boxShadow: '0px 4px 4px #00000',
  },
  root2: {
    margin: '1rem',
  },
});
const Callus = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            style={{
              width: '25px',
              height: '25px',
              background: ' #F5D3FA',
              borderRadius: '8px',
              marginTop: '0.6rem',
            }}
          >
            <NavigateBeforeOutlined />
          </IconButton>
          <Typography
            style={{
              marginLeft: '5.5rem',
              marginTop: '0.7rem',
            }}
          >
            Call Us
          </Typography>
        </div>
        <div
          style={{
            width: '72px',
            height: '72px',
            top: '128px',
            left: '144px',
            position: 'absolute',
            borderRadius: '4px',
            background: '#f3d3f8',
          }}
        >
          <Box
            component='img'
            style={{
              position: 'absolute',
              width: '48px',
              height: '48px',
              top: '12px',
              left: '12px',
            }}
            src={Call}
          />
        </div>
        <Typography
          align='center'
          style={{
            width: '230p',
            height: '24px',
            top: '248px',
            left: '65px',
            position: 'absolute',
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          Hi there, let's help you today
        </Typography>
        <Typography
          style={{
            position: 'absolute',
            width: '238px',
            height: '48px',
            left: '61px',
            top: '288px',
            fontWeight: 400,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'flex-end',
            textAlign: 'center',
          }}
        >
          We're available between on 7:00am and 5:00 pm on weekdays.
        </Typography>
        <Typography
          align='center'
          style={{
            width: '82',
            height: '24px',
            position: 'absolute',
            top: '384px',
            left: '130px',
            fontWeight: 700,
            fontSize: '16px',
            color: '#8a8a8a',
          }}
        >
          Tap to call
        </Typography>
        <Typography
          align='center'
          style={{
            position: 'absolute',
            top: '424px',
            left: '128px',
            fontWeight: 700,
            fontSize: '16px',
            color: '#09ad0e',
          }}
        >
          123456789
        </Typography>
      </Paper>
    </Box>
  );
};

export default Callus;
