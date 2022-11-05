import React from 'react';
import {
  Typography,
  Box,
  Paper,
  makeStyles,
  IconButton,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';

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
const Confirmpin = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            style={{
              width: '30px',
              height: '30px',
              background: ' #F5D3FA',
              borderRadius: '8px',
              marginTop: '0.5rem',
            }}
          >
            <NavigateBeforeOutlined />
          </IconButton>
          <Typography
            style={{
              marginLeft: '6rem',
              marginTop: '0.7rem',
              fontWeight: 700,
            }}
          >
            Confirm PIN
          </Typography>
        </div>
        <Typography
          style={{
            width: '307px',
            height: '32px',
            top: '120px',
            left: '24px',
            position: 'absolute',
            fontSize: '12px',
            fontWeight: 400,
          }}
        >
          Enter your transaction PIN to modify Biometric Settings.
        </Typography>
        <Typography
          style={{
            width: '74px',
            height: '14px',
            top: '171px',
            left: '24px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          Transaction PIN
        </Typography>
        <TextField
          variant='outlined'
          name='pin'
          placeholder='****'
          maxlength='4'
          type='password'
          required
          sx={{ m: 1, width: '25ch' }}
          style={{
            width: '352px',
            height: '55px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '193px',
            left: '25px',
            background: '#F2F2F2',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {<VisibilityOffOutlined style={{ color: '#09AD0E' }} />}
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default Confirmpin;
