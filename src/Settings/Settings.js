import React from 'react';
import {
  Box,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  Card,
} from '@material-ui/core';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import Toggle from '../asset/toggle.png';
import { Link } from 'react-router-dom';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import ShareAltOutlined from '@material-ui/icons/ShareOutlined';
import Key from '../asset/key.png';
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

const Settings = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to='/profile'
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
              marginLeft: '5.5rem',
              marginTop: '0.7rem',
              fontWeight: 700,
            }}
          >
            Settings
          </Typography>
        </div>
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
            top: '128px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
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
                <ShareAltOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Share with friends
              </Typography>
            </Card>
          </Paper>

          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>

        {/* second */}

        <Paper
          component={Link}
          to='/resetpassword'
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '230px',
            left: '30px',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '16px',
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
                <Typography
                  style={{
                    width: '20px',
                    height: '4px',
                    top: '5px',
                    left: '0.1px',
                    position: 'absolute',
                  }}
                >
                  <Box component='img' style={{ width: '20px' }} src={Key} />
                </Typography>
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Reset Password
              </Typography>
            </Card>
          </Paper>

          <IconButton>
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Paper>

        {/* third */}
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
            top: '330px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
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
                <DescriptionOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Terms & Privacy Policy
              </Typography>
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

export default Settings;
