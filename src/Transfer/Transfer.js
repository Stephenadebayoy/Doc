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
import { Link } from 'react-router-dom';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import NearMeOutlined from '@material-ui/icons/NearMeOutlined';
import SyncAltOutlined from '@material-ui/icons/SyncAltOutlined';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import Country from '../asset/country.png';
import SendOutlined from '@material-ui/icons/SendOutlined';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined';
import CallReceivedOutlined from '@material-ui/icons/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '360px',
    height: '820px',
    margin: '2rem',
    borderRadius: '15px',
    border: '3px solid #000000',
    flexGrow: 1,
    boxShadow: '0px 4px 4px #00000',
    overflow: 'scroll',
    scrollBehavior: 'smooth',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: '107px',
    height: '28px',
    top: '24px',
    left: '24px',
    fontWeight: 700,
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    color: '#ffffff',
  },
}));
const Transfer = () => {
  const [send, setSend] = React.useState('Send');
  const [request, setRequest] = React.useState('Request');

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
              style={{ fontSize: '10px', marginLeft: '10px', marginTop: '4px' }}
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
          <Button style={{ display: 'block' }}>
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
          <Button
            component={Link}
            to='/profile'
            style={{ display: 'block', marginTop: '4px' }}
          >
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
          height: '244px',
          left: '0',
          top: '112px',
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            Transfers
          </Typography>

          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
            ></IconButton>
          </div>
        </Toolbar>

        <Box
          style={{
            margin: '0 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: '108px',
            gap: '16px',
            padding: '16px 24px',
            left: 0,
            width: '360px',
            height: '130px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '48px',
              top: '41px',
              left: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '4px',
              flex: 'none',
              order: 0,

              flexGrow: 0,
            }}
          >
            <Typography
              style={{
                fontSize: '24px',
                fontWeight: 700,
                width: '77px',
                height: '28px',
                color: '#ffffff',
              }}
            >
              R1,500
            </Typography>
            <Box component='img' src={Country} />
            <Typography
              style={{
                fontSize: '10px',
                fontFamily: 'sans-serif',
                padding: '0.2rem 1.5rem',
                position: 'absolute',
                top: '85px',
                left: '24px',
                color: '#ffffff',
              }}
            >
              Current Wallet Balance
            </Typography>
          </div>
          <div
            style={{
              width: '140px',
              height: '96px',
              left: '196px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              top: '35px',
              position: 'absolute',
            }}
          >
            <Button
              component={Link}
              to='/send'
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                background: '#ffffff',
                borderRadius: '5px',
                width: '140px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                borderRadius: '40px',
                flexDirection: 'row',
              }}
            >
              <IconButton>
                <SendOutlined style={{ color: '#AE1EC7' }} />
              </IconButton>
              <Typography
                variant='12px'
                style={{ color: '#AE1EC7', textTransform: 'none' }}
              >
                {send}
              </Typography>
            </Button>

            <Button
              elevation={0}
              style={{
                position: 'absolute',
                left: 0,
                top: '56px',
                background: '#ffffff',
                borderRadius: '5px',
                width: '140px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px 16px',
                borderRadius: '40px',
              }}
            >
              <IconButton>
                <ArrowDownwardOutlined style={{ color: '#AE1EC7' }} />
              </IconButton>
              <Typography
                variant='12px'
                style={{ color: '#AE1EC7', textTransform: 'none' }}
              >
                {request}
              </Typography>
            </Button>
          </div>
        </Box>
      </AppBar>
      <Paper
        elevation={0}
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '360px',
          height: '56px',
          top: '260px',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '137.5px',
            height: '40px',
            background: '#f2f2f2',
            borderRadius: '4px',
            padding: '8px',
            gap: '10px',
            position: 'absolute',
            left: '24px',
            top: '8px',
          }}
        >
          <Typography
            style={{
              width: '92px',
              height: '16px',
              fontSize: '12px',
              padding: '8px',
              color: '#AE1EC7',
            }}
          >
            My Transactions
          </Typography>
        </div>
        <div
          style={{
            width: '137.5px',
            height: '40px',
            gap: '10px',
            padding: '8px',
            position: 'absolute',
            left: '198.5px',
            top: '8px',
          }}
        >
          <Typography
            style={{
              width: '92px',
              height: '16px',
              fontSize: '12px',
              padding: '8px',
              left: '39.75',
              position: 'absolute',
              color: '#8a8a8a',
            }}
          >
            Recipients
          </Typography>
        </div>
      </Paper>
      <Card>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '312px',
            height: '16px',
            top: '350px',
            left: '55px',
            position: 'absolute',
          }}
        >
          <Typography
            style={{
              fontSize: '12px',
              color: '#09AD0E',

              height: '16px',
            }}
          >
            10 Sep 2022
          </Typography>
          <Typography style={{ fontSize: '12px', height: '16px' }}>
            See all
          </Typography>
        </Box>
      </Card>

      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '390px',
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
          top: '480px',
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
          top: '570px',
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
      {/* 
      fourth */}
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '660px',
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
          position: 'absolute',
          top: '750px',
          height: '16px',
          left: '50px',
        }}
      >
        04 Sep 2022
      </Typography>
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '776px',
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
    </div>
  );
};

export default Transfer;
