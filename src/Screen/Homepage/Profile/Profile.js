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
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Profile1 from '../../../asset/profile1.png';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

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
            <Button style={{ display: 'block' }}>
              <IconButton>
                <HomeOutlinedIcon />
              </IconButton>
              <Typography style={{ fontSize: '10px' }}>Home</Typography>
            </Button>
            <Button style={{ display: 'block' }}>
              <IconButton>
                <NearMeOutlinedIcon />
              </IconButton>

              <Typography style={{ fontSize: '10px' }}>Pay Merchant</Typography>
            </Button>
            <Button style={{ display: 'block' }}>
              <IconButton>
                <SyncAltOutlinedIcon />
              </IconButton>
              <Typography style={{ fontSize: '10px' }}>Transfer</Typography>
            </Button>
            <Button style={{ display: 'block' }}>
              <IconButton>
                <AccessTimeOutlinedIcon />
              </IconButton>
              <Typography style={{ fontSize: '10px' }}>Budget</Typography>
            </Button>
            <Button style={{ display: 'block' }}>
              <IconButton>
                <Person2OutlinedIcon />
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
                  width: '24px',
                  height: '24px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <ManageAccountsOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Account Settings
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
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
                <PermIdentityOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Identity Verification
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Paper>
        {/* 
        third */}

        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '1.8rem 0',
            position: 'absolute',
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
                <HelpOutlineOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Help Center
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
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
                <GroupAddOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Invite Friends & Family
              </Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Paper>
        {/* 
        fifth */}

        <Paper
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
            <KeyboardArrowRightOutlinedIcon />
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
                <LogoutOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>Logout</Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Profile;
