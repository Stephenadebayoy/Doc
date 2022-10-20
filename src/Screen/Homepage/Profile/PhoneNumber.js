import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  makeStyles,
  Paper,
  InputAdornment,
  TextField,
  Button,
} from '@material-ui/core';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

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
  heading: {
    position: 'absolute',
    width: '278px',
    height: '24px',
    left: '30px',
    top: '120px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#1E1E1E',
    display: 'flex',
    alignItems: 'flex-end',
  },
});
const PhoneNumber = () => {
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
            <NavigateBeforeOutlinedIcon />
          </IconButton>
          <Typography
            style={{
              marginLeft: '5.5rem',
              marginTop: '0.7rem',
            }}
          >
            Phone Number
          </Typography>
        </div>
        <Paper elevation={0}>
          <Typography className={classes.heading}>
            Update your phone number
          </Typography>
        </Paper>
        <Typography
          variant='body2'
          style={{
            width: '216px',
            height: '24px',
            top: '150px',
            left: '30px',

            display: 'flex',
            position: 'absolute',

            alignItems: 'flex-end',
          }}
        >
          Please enter your phone number
        </Typography>
        <TextField
          label='Phone number'
          id='number'
          variant='outlined'
          type={'number'}
          required
          sx={{ m: 1, width: '25ch' }}
          style={{
            width: '312px',
            height: '54px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '200px',
            left: '30px',
            background: '#F2F2F2',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {<KeyboardArrowRightOutlinedIcon />}
              </InputAdornment>
            ),
          }}
        />
        <Button
          style={{
            width: '312px',
            height: '54px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '600px',
            left: '50px',
            background: '  #F5D3FA',
            color: '#fff',
            fontWeight: 700,
          }}
        >
          Update
        </Button>
      </Paper>
    </Box>
  );
};

export default PhoneNumber;
