import React from 'react';
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Button,
  TextField,
} from '@material-ui/core';
import profile from '../../../asset/profile1.png';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Link } from 'react-router-dom';
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
  titleImage: {
    position: 'absolute',
    width: '64px',
    height: '64px',
    left: '148px',
    top: '88px',
  },
  dateTimer: {
    width: '500px',
    position: 'absolute',
  },
});

const AccountSettings = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            component={Link}
            to='/profile'
            style={{
              width: '25px',
              height: '25px',
              background: ' #F5D3FA',
              borderRadius: '8px',
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
            Account Setting
          </Typography>
        </div>
        <Card>
          <CardContent className={classes.titleImage}>
            <img src={profile} alt='' style={{ marginLeft: '1.2rem' }} />
            <Button
              style={{
                width: '72px',
                height: '38px',
                top: '5px',
                left: '14px',
                marginTop: '1rem',
                boxSizing: 'border-box',
                border: '1px solid #5D106B',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Edit
            </Button>
          </CardContent>
        </Card>

        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            type={'text'}
            label='Account name'
            variant='outlined'
            required
            style={{
              width: '312px',
              height: '54px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              top: '282px',
              left: '50px',
              background: '#F2F2F2',
            }}
          />
          <Typography
            style={{
              height: '14px',
              position: 'absolute',

              top: '340px',
              left: '60px',
              fontSize: '10px',
            }}
          >
            to change your name contact <strong>support@dotinc.com</strong>
          </Typography>
          <TextField
            id='filled-basic'
            label='Email address'
            type={'email'}
            variant='outlined'
            required
            style={{
              width: '312px',
              height: '54px',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              top: '375px',
              left: '50px',
              background: '#F2F2F2',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {<KeyboardArrowRightOutlined />}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant='outlined'
            label='Country'
            id='country'
            type={'text'}
            required
            sx={{ m: 1, width: '25ch' }}
            style={{
              width: '312px',
              height: '54px',
              position: 'absolute',
              flexDirection: 'column',
              justifyContent: 'center',
              top: '440px',
              left: '50px',
              background: '#F2F2F2',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {<KeyboardArrowRightOutlined />}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant='outlined'
            label='Phone number'
            id='number'
            type={'number'}
            required
            sx={{ m: 1, width: '25ch' }}
            style={{
              width: '312px',
              height: '54px',
              position: 'absolute',
              flexDirection: 'column',
              justifyContent: 'center',
              top: '505px',
              left: '50px',
              background: '#F2F2F2',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {<KeyboardArrowRightOutlined />}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type={'date'}
            variant='outlined'
            required
            sx={{ m: 1, width: '25ch' }}
            style={{
              position: 'absolute',
              top: '570px',
              width: '312px',
              height: '54px',
              background: '#F2F2F2',
              borderRadius: '5px',
              left: '50px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {<KeyboardArrowRightOutlined />}
                </InputAdornment>
              ),
            }}
          />
          {/* <input
            type='date'
            name=''
            id=''
            style={{
              position: 'absolute',
              top: '570px',
              width: '312px',
              height: '54px',
              background: '#F2F2F2',
              border: '1px solid #c0c0c0',
              borderRadius: '5px',
              left: '50px',
            }}
          /> */}
          {/* date-fns and @mui/x-date-pickers */}
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label='Date of birth'
              format='MM/dd/yyy'
              disableCloseOnSelect={false}
              value={date}
              onChange={onChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {<KeyboardArrowRightOutlined />}
                      </InputAdornment>
                    ),
                  }}
                  style={{
                    width: '312px',
                    height: '54px',
                    position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    top: '585px',
                    left: '50px',
                    background: '#F2F2F2',
                  }}
                />
              )}
            />
          </LocalizationProvider> */}
        </Box>
        <Button
          style={{
            width: '312px',
            height: '54px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '700px',
            left: '50px',
            background: ' #5D106B',
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

export default AccountSettings;
