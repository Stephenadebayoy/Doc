import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Toolbar,
  makeStyles,
  AppBar,
  Card,
  IconButton,
  TextField,
} from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '360px',
    height: '820px',
    margin: '2rem',
    borderRadius: '15px',
    border: '3px solid #000000',
    flexGrow: 1,
    boxShadow: '0px 4px 4px #00000',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: '107px',
    height: '28px',
    top: '18px',
    left: '80px',
    fontWeight: 700,
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
  },
}));

const Send_2 = () => {
  const [submit, setSubmit] = React.useState('Next');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{
          background: '#AE1EC7',
          width: '360px',
          height: '88px',
          left: '0',
          top: '112px',
        }}
      >
        <Toolbar style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <CloseOutlinedIcon
              style={{
                color: 'black',
                width: '40px',
                height: '40px',
                color: '#ffffff',
                position: 'absolute',
                left: '16.67%',
                right: '16.67%',
              }}
            />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            Send
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        style={{
          fontSize: '12px',
          width: '277px',
          height: '16px',
          position: 'absolute',
          top: '144px',
          left: '50px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        Send money to a DOT-registered email
      </Typography>
      <Card>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '312px',
            height: '16px',
            top: '200px',
            left: '50px',
            gap: '8px',
            position: 'absolute',
          }}
        >
          <Typography
            style={{
              fontSize: '12px',
              color: '#8a8a8a',
              fontSize: '10px',
              height: '16px',
            }}
          >
            Amount
          </Typography>
          <Typography
            style={{ fontSize: '12px', height: '16px', color: '#1e1e1e' }}
          >
            Balance:R1,500
          </Typography>
        </Box>
      </Card>

      <TextField
        type={'number'}
        label='Amount'
        style={{
          width: '312px',
          height: '50px',
          borderRadius: '4px',
          position: 'absolute',
          top: '230px',
          left: '50px',
          background: '#F2F2F2',
          display: 'flex',
          textIndent: '10px',
        }}
      />
      <Card>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '312px',
            height: '48px',
            top: '300px',
            left: '55px',
            gap: '8px',
            position: 'absolute',
            border: '1px solid #b5b5b5',
            borderRadius: '40px',
          }}
        >
          <Typography
            style={{
              fontSize: '12px',
              height: '16px',
              color: '#1e1e1e',
              marginLeft: '20px',
              width: '156px',
              padding: '16px 8px 16px 8px',
            }}
          >
            Choose Recipients
          </Typography>
          <Typography
            style={{
              fontSize: '12px',
              color: '#8a8a8a',
              fontSize: '12px',
              height: '16px',
              width: '156px',
              backgroundColor: '#F2F2F2',
              padding: '16px 8px 16px 8px',
              borderRadius: '0px 40px 40px 0px',
            }}
          >
            New Recipients
          </Typography>
        </Box>
      </Card>

      <Typography
        style={{
          width: '55px',
          height: '14px',
          top: '400px',
          left: '55px',
          position: 'absolute',
          fontSize: '10px',
          color: '#8a8a8a',
          lineHeight: '13.62px',
        }}
      >
        Enter email
      </Typography>
      <TextField
        variant='outlined'
        name='email'
        type='email'
        placeholder='name@gmail.com'
        required
        sx={{ m: 1, width: '25ch' }}
        style={{
          width: '342px',
          height: '55px',
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'center',
          top: '425px',
          left: '45px',
          background: '#F2F2F2',
        }}
      />

      {/* second */}
      <Typography
        style={{
          width: '55px',
          height: '14px',
          top: '500px',
          left: '55px',
          position: 'absolute',
          fontSize: '10px',
          color: '#8a8a8a',
          lineHeight: '13.62px',
        }}
      >
        Add a note
      </Typography>
      <TextField
        variant='outlined'
        name='message'
        type='message'
        placeholder="What's this for"
        required
        sx={{ m: 1, width: '25ch' }}
        style={{
          width: '342px',
          height: '55px',
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'center',
          top: '525px',
          left: '45px',
          background: '#F2F2F2',
        }}
      />

      <Button
        style={{
          position: 'absolute',
          width: '312px',
          height: '50px',
          top: '630px',
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
    </div>
  );
};

export default Send_2;
