import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  Toolbar,
  makeStyles,
  AppBar,
  Card,
  CardContent,
  IconButton,
} from '@material-ui/core';

import HomeOutlined from '@material-ui/icons/HomeOutlined';
import NearMeOutlined from '@material-ui/icons/NearMeOutlined';
import SyncAltOutlined from '@material-ui/icons/SyncAltOutlined';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

import SendOutlined from '@material-ui/icons/SendOutlined';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined';
import CallReceivedOutlined from '@material-ui/icons/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
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

const History = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Card
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            position: 'absolute',
            height: '4.5rem',
            top: '782px',
            width: '360px',
            zIndex: '100',
            borderBottomRightRadius: '1rem',
            borderBottomLeftRadius: '1rem',
          }}
        >
          <Button component={Link} to='/homepage' style={{ display: 'block' }}>
            <IconButton>
              <HomeOutlined />
            </IconButton>
            <Typography
              style={{ fontSize: '10px', position: 'absolute', right: '15px' }}
            >
              Home
            </Typography>
          </Button>
          <Button style={{ display: 'block' }}>
            <IconButton>
              <NearMeOutlined />
            </IconButton>

            <Typography style={{ fontSize: '10px' }}>Pay Merchant</Typography>
          </Button>
          <Button component={Link} to='/transfer' style={{ display: 'block' }}>
            <IconButton>
              <SyncAltOutlined />
            </IconButton>
            <Typography style={{ fontSize: '10px' }}>Transfer</Typography>
          </Button>
          <Button style={{ display: 'block' }}>
            <IconButton>
              <AccessTimeOutlined />
            </IconButton>
            <Typography style={{ fontSize: '10px' }}>Budget</Typography>
          </Button>
          <Button component={Link} to='/profile' style={{ display: 'block' }}>
            <IconButton>
              <PersonOutlineOutlined />
            </IconButton>
            <Typography style={{ fontSize: '10px' }}>Profile</Typography>
          </Button>
        </Card>
      </div>
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
            History
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        style={{
          fontSize: '12px',
          color: '#09AD0E',
          padding: '16px 24px',
          height: '16px',
        }}
      >
        10 Sep 2022
      </Typography>
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '175px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#ECFEEC',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallReceivedOutlined />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Wallet funding
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              11:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#09ad0e',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          +50
        </Typography>
      </Paper>

      {/* second */}
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '265px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#FCE9E9',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallMadeOutlinedIcon />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Durla
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              14:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#D72222',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          -100
        </Typography>
      </Paper>

      {/* third */}
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '355px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#ECFEEC',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallReceivedOutlined />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Wallet funding
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              11:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#09ad0e',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          +50
        </Typography>
      </Paper>

      {/* fourth */}
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '445px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#FCE9E9',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallMadeOutlinedIcon />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Durla
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              14:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#D72222',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          -100
        </Typography>
      </Paper>

      <Typography
        style={{
          fontSize: '12px',
          color: '#09AD0E',
          padding: '16px 24px',
          height: '16px',
          position: 'absolute',
          top: '530px',
        }}
      >
        06 Sep 2022
      </Typography>
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '580px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#ECFEEC',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallReceivedOutlined />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Wallet funding
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              11:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#09ad0e',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          +50
        </Typography>
      </Paper>

      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '670px',
          left: '50px',
          width: '312px',
          height: '80px',
          gap: '171px',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '312px', alignItems: 'center' }}>
          <IconButton
            style={{
              background: '#FCE9E9',
              borderRadius: '48px',
              width: '32px',
              height: '32px',
            }}
          >
            <CallMadeOutlinedIcon />
          </IconButton>
          <div style={{ marginLeft: '5px' }}>
            <Typography
              style={{ width: '95px', height: '24px', fontSize: '14px' }}
            >
              Durla
            </Typography>
            <Typography style={{ fontSize: '12px', color: '#8a8a8a' }}>
              14:23
            </Typography>
          </div>
        </div>
        <Typography
          style={{
            color: '#D72222',
            fontWeight: 700,
            width: '41px',
            height: '24px',
            position: 'absolute',
            left: '280px',
            fontSize: '16px',
          }}
        >
          -100
        </Typography>
      </Paper>
    </div>
  );
};

export default History;
