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
import PhoneOutlined from '@material-ui/icons/PhoneOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import MailOutlined from '@material-ui/icons/MailOutlineOutlined';
import CommentOutlined from '@material-ui/icons/CommentOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';

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
const GetHelp = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            style={{
              width: '25px',
              height: '25px',
              background: ' #F5D3FA',
              borderRadius: '8px',
              marginTop: '0.6rem',
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
            Get Help
          </Typography>
        </div>
        <Typography
          style={{
            left: '60px',
            width: '268px',
            height: '48px',
            top: '128px',
            position: 'absolute',
            fontSize: '16px',
            color: '#1e1e1e',
            display: 'flex',
            alignItem: 'flex-end',
          }}
        >
          Got a problem? Let us know how we can help
        </Typography>
        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '208px',
            left: '24px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            paddingLeft: '10px',
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
                  width: '14px',
                  height: '10px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <PhoneOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>Call Us</Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Paper>

        {/* second */}
        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '271px',
            left: '24px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            paddingLeft: '10px',
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
                  width: '14px',
                  height: '10px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <MailOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>Email Us</Typography>
            </Card>
          </Paper>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Paper>

        {/* third */}
        <Paper
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '336px',
            left: '24px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            paddingLeft: '10px',
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
                  width: '14px',
                  height: '10px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <CommentOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Chat with Us
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
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '400px',
            left: '24px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            paddingLeft: '10px',
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
                  width: '14px',
                  height: '10px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '0',
                }}
              >
                <HelpOutlineOutlined />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>FAQs </Typography>
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

export default GetHelp;
