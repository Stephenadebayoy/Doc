import React from 'react';
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Card,
  CardContent,
  IconButton,
  Button,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import Profile1 from '../../../asset/profile1.png';
import User from '../../../asset/user-settings.png';
import PermIdentityOutlined from '@material-ui/icons/PermIdentityOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { LogoutOutlined } from '@ant-design/icons';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import NearMeOutlined from '@material-ui/icons/NearMeOutlined';
import SyncAltOutlined from '@material-ui/icons/SyncAltOutlined';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';

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
});

const Profile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div>
          <Card
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              position: 'absolute',
              height: '4.5rem',
              top: '748px',
              left: '1.3rem',
              width: '368px',
              zIndex: '100',
              borderBottomRightRadius: '1rem',
              borderBottomLeftRadius: '1rem',
            }}
          >
            <Button
              component={Link}
              to='/homepage'
              style={{ display: 'block', marginTop: '4px' }}
            >
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
            <Button
              component={Link}
              to='/transfer'
              style={{ display: 'block', marginTop: '4px' }}
            >
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
            <Button style={{ display: 'block' }}>
              <IconButton>
                <PersonOutlineOutlined />
              </IconButton>
              <Typography style={{ fontSize: '10px' }}>Profile</Typography>
            </Button>
          </Card>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            Profile
          </Typography>
        </div>
        <Card>
          <CardContent className={classes.titleImage}>
            <img src={Profile1} alt='' />
            <Typography
              style={{
                width: '72px',
                height: '24px',
                top: '168px',
                left: '14px',
                marginTop: '1rem',
              }}
            >
              John Doe
            </Typography>
          </CardContent>
        </Card>

        {/* cards */}

        <Paper
          component={Link}
          to='/accountsettings'
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '0.7rem 0',
            position: 'absolute',
            width: '312px',
            height: '35px',
            top: '224px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            textDecorationLine: 'none',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton
                style={{
                  background: ' #F5D3FA',
                  borderRadius: '4px',
                  width: '5px',
                  height: '5px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <Avatar
                  alt='Uset settings'
                  src={User}
                  style={{ width: '20px', height: '20px' }}
                />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Account Settings
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>

        {/* seond */}

        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '35px',
            top: '288px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
          }}
        >
          <Paper elevation={0}>
            <Card
              component={Link}
              to='/identity'
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
                <PermIdentityOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Identity Verification
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>
        {/* 
        third */}

        <Paper
          elevation={2}
          component={Link}
          to='/gethelp'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '1.8rem 0',
            position: 'absolute',
            textDecoration: 'none',
            width: '312px',
            height: '35px',
            top: '352px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
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
                <HelpOutlineOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Help Center
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>

        {/* fourth */}
        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '2.3rem 0',
            position: 'absolute',
            width: '312px',
            height: '35px',
            top: '416px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
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
                <GroupAddOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Invite Friends & Family
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>
        {/* 
        fifth */}

        <Paper
          component={Link}
          to='/settings'
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '2.8rem 0',
            position: 'absolute',
            width: '312px',
            height: '35px',
            top: '480px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
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
                <SettingsOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>Settings</Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>

        {/* logout */}

        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '3.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '35px',
            top: '544px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
          }}
        >
          <Paper elevation={0}>
            <Card
              elevation={0}
              style={{ display: 'flex', alignItems: 'center' }}
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
                <LogoutOutlined style={{ width: '20px', height: '20px' }} />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>Logout</Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Profile;
