import React from 'react';
import {
  Typography,
  Box,
  Paper,
  makeStyles,
  IconButton,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined } from '@ant-design/icons';

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
const ResetPassword = () => {
  const classes = useStyles();
  const str = 'Finish';
  const submit = str.charAt(0).toLowerCase().toUpperCase() + str.slice(1);

  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to='/settings'
            style={{
              width: '24px',
              height: '24px',
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
              marginTop: '1rem',
              fontWeight: 700,
            }}
          >
            Reset Password
          </Typography>
        </div>

        <Typography
          style={{
            width: '84px',
            height: '14px',
            top: '120px',
            left: '30px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          Current Password
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
                {<EyeInvisibleOutlined style={{ width: '40px' }} />}
              </InputAdornment>
            ),
          }}
        />

        {/* second */}

        <Typography
          style={{
            width: '69px',
            height: '14px',
            top: '226px',
            left: '30px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          New Password
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
                <EyeInvisibleOutlined style={{ width: '40px' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* third */}
        <Typography
          style={{
            width: '109px',
            height: '14px',
            top: '335px',
            left: '30px',
            position: 'absolute',
            fontSize: '10px',
            color: '#8a8a8a',
            lineHeight: '13.62px',
          }}
        >
          Confirm New Password
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
                <EyeInvisibleOutlined style={{ width: '40px' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          style={{
            position: 'absolute',
            width: '312px',
            height: '50px',
            top: '470px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 24px',
            background: '#AE1EC7',
            borderRadius: '40px',
            gap: '8px',
            left: '50px',
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
export default ResetPassword;
