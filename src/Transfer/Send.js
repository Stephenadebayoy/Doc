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

import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';

import { Link } from 'react-router-dom';
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
    color: '#ffffff',
  },
}));

const Send = () => {
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
          <IconButton component={Link} to='/transfer'>
            <CloseOutlinedIcon
              style={{
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
      <Card>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '312px',
            height: '16px',
            top: '150px',
            left: '55px',
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
          top: '190px',
          left: '50px',
          background: '#F2F2F2',
          display: 'flex',
          textIndent: '10px',
          // flexDirection: 'row',
          // alignItems: 'center',
          // flex: 'none',
          // order: 1,
          // flexGrow: 0,
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
            top: '260px',
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
              color: '#8a8a8a',
              fontSize: '12px',
              height: '16px',
              width: '156px',
              backgroundColor: '#F2F2F2',
              padding: '16px 8px 16px 8px',
              borderRadius: '40px 0px 0px 40px',
              marginRight: '30px',
            }}
          >
            Choose Recipients
          </Typography>
          <Typography
            style={{
              fontSize: '12px',
              height: '16px',
              color: '#1e1e1e',
              marginRight: '10px',
            }}
          >
            New Recipients
          </Typography>
        </Box>
      </Card>

      <Paper
        elevation={2}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
          margin: '1.4rem 0',
          position: 'absolute',
          width: '312px',
          height: '56px',
          top: '315px',
          left: '43px',
          alignItems: 'center',
          gap: '171px',
          borderRadius: '4px',
        }}
      >
        <Paper elevation={0}>
          <Card
            elevation={0}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecorationLine: 'none',
            }}
          >
            <IconButton
              style={{
                background: ' #F5D3FA',
                borderRadius: '4px',
                width: '24px',
                height: '24px',
                flex: 'none',
                order: '0',
                flexGrow: '0',
              }}
            >
              <PersonOutlineOutlined />
            </IconButton>
            <Typography style={{ paddingLeft: '1rem', fontSize: '12px' }}>
              Dulra
            </Typography>
          </Card>
        </Paper>
        <Button>
          <Typography
            style={{
              color: '#AE1EC7',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            Edit
          </Typography>
        </Button>
      </Paper>

      {/* second */}
      <Paper
        elevation={2}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
          margin: '1.4rem 0',
          position: 'absolute',
          width: '312px',
          height: '56px',
          top: '420px',
          left: '43px',
          alignItems: 'center',
          gap: '171px',
          borderRadius: '4px',
        }}
      >
        <Paper elevation={0}>
          <Card
            elevation={0}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecorationLine: 'none',
            }}
          >
            <IconButton
              style={{
                background: ' #F5D3FA',
                borderRadius: '4px',
                width: '24px',
                height: '24px',
                flex: 'none',
                order: '0',
                flexGrow: '0',
              }}
            >
              <PersonOutlineOutlined />
            </IconButton>
            <Typography style={{ paddingLeft: '1rem', fontSize: '12px' }}>
              Ayanfe
            </Typography>
          </Card>
        </Paper>
        <Button>
          <Typography
            style={{
              color: '#AE1EC7',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            Edit
          </Typography>
        </Button>
      </Paper>
      {/* 
      third */}
      <Paper
        elevation={2}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
          margin: '1.4rem 0',
          position: 'absolute',
          width: '312px',
          height: '56px',
          top: '525px',
          left: '43px',
          alignItems: 'center',
          gap: '171px',
          borderRadius: '4px',
        }}
      >
        <Paper elevation={0}>
          <Card
            elevation={0}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecorationLine: 'none',
            }}
          >
            <IconButton
              style={{
                background: ' #F5D3FA',
                borderRadius: '4px',
                width: '24px',
                height: '24px',
                flex: 'none',
                order: '0',
                flexGrow: '0',
              }}
            >
              <PersonOutlineOutlined />
            </IconButton>
            <Typography
              style={{
                paddingLeft: '1rem',
                fontSize: '12px',
                width: '87px',
                height: '16px',
              }}
            >
              John Appleseed
            </Typography>
          </Card>
        </Paper>
        <Button>
          <Typography
            style={{
              color: '#AE1EC7',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 700,
              position: 'absolute',
              left: '-30px',
            }}
          >
            Edit
          </Typography>
        </Button>
      </Paper>
    </div>
  );
};

export default Send;
