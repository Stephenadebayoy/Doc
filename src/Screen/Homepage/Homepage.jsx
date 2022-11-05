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
import Country from '../../asset/country.png';
import CallMadeOutlined from '@material-ui/icons/CallMadeOutlined';
import Logo from '../../asset/profile.png';
import Notify from '../../asset/notify.png';
import { Link } from 'react-router-dom';

import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';
import CallReceivedOutlined from '@material-ui/icons/CallReceivedOutlined';
import RecipeReviewCard from '../../Card';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import NearMeOutlined from '@material-ui/icons/NearMeOutlined';
import SyncAltOutlined from '@material-ui/icons/SyncAltOutlined';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '370px',
    height: '765px',
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
    flexGrow: 1,
    marginLeft: '0.6rem',
  },
}));

const Homepage = () => {
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
            top: '728px',
            width: '370px',
            zIndex: '100',
            borderBottomRightRadius: '1rem',
            borderBottomLeftRadius: '1rem',
          }}
        >
          <Button style={{ display: 'block' }}>
            <IconButton>
              <HomeOutlined />
            </IconButton>
            <Typography style={{ fontSize: '10px' }}>Home</Typography>
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
          background: '#5D106B',
          width: '370px',
          height: '244px',
          left: '0',
          top: '112px',
        }}
      >
        <Toolbar>
          <Avatar alt='Logo' src={Logo} sx={{ width: 56, height: 56 }}></Avatar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            Hi, john
          </Typography>

          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
            >
              <Avatar alt='profile' src={Notify} />
            </IconButton>
          </div>
        </Toolbar>
        <Box style={{ margin: '5.5rem 1.5rem' }}>
          <Typography>R1,500</Typography>
          <div
            style={{
              float: 'left',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={Country} alt='' />
          </div>
          <div
            style={{
              fontSize: '10px',
              fontFamily: 'sans-serif',
              padding: '0.2rem 1.5rem',
              position: 'absolute',
            }}
          >
            Current Wallet Balance
          </div>
          <div
            style={{
              position: 'absolute',
              left: '12rem',
              top: '10.3rem',
              background: '#fff',
              borderRadius: '5px',
              width: '9%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <AddCircleOutlineOutlined />
            </IconButton>
            <Typography variant='12px' style={{ color: '#000' }}>
              Add funds
            </Typography>
          </div>
        </Box>
      </AppBar>

      <Paper elevation={0}>
        <Card elevation={0}>
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='12px'>CURRENT BUDGETS</Typography>
            <Typography variant='12px'>Manage Budget</Typography>
          </CardContent>
          <div>
            <RecipeReviewCard />
          </div>
        </Card>
      </Paper>

      <Paper elevation={0} style={{ margin: '2rem 1rem' }}>
        <Card elevation={0}>
          <Typography variant='body2' style={{ color: '#09AD0E' }}>
            10 Sep 2022
          </Typography>
        </Card>
        <Paper
          elevation={6}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
            margin: '0.7rem 0',
            height: '4rem',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
            >
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
              <Typography style={{ paddingLeft: '1rem' }}>
                Wallet Funding <br /> <br />{' '}
                <span style={{ color: '#09AD0E' }}> 11:30</span>
              </Typography>
            </Card>
          </Paper>
          <Typography>
            <span style={{ fontWeight: 'bold', color: '#09AD0E' }}>+$50</span>
          </Typography>
        </Paper>

        {/* second */}
        <Paper
          elevation={6}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
            margin: '0.7rem 0',
            height: '4rem',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton
                style={{
                  background: ' #FCE9E9',
                  borderRadius: '48px',
                  width: '32px',
                  height: '32px',
                }}
              >
                <CallMadeOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Dulra
                <br /> <br /> 11:30
              </Typography>
            </Card>
          </Paper>
          <Typography>
            <span style={{ fontWeight: 'bold', color: 'red' }}>+$100</span>
          </Typography>
        </Paper>
      </Paper>
    </div>
  );
};

export default Homepage;
