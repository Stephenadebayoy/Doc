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
const Transactionpin = () => {
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
            Transaction PIN
          </Typography>
        </div>

        <Typography
          style={{
            width: '55px',
            height: '14px',
            top: '120px',
            left: '30px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          Current PIN
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
            width: '342px',
            height: '55px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '142px',
            left: '30px',
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

        {/* second */}

        <Typography
          style={{
            width: '55px',
            height: '14px',
            top: '226px',
            left: '25px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          New PIN
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
            width: '342px',
            height: '55px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '250px',
            left: '30px',
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

        {/* third */}
        <Typography
          style={{
            width: '81px',
            height: '14px',
            top: '335px',
            left: '30px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          Confirm New PIN
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
            width: '342px',
            height: '55px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '360px',
            left: '30px',
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
export default Transactionpin;
