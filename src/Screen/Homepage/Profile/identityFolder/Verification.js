import React from 'react';
import {
  Box,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  Card,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const useStyles = makeStyles({
  root: {
    width: '370px',
    height: '800px',
    background: '#fff',
    borderRadius: '15px',
    border: '3px solid #000000',
    display: 'flex',
    margin: '1rem',
    boxShadow: '0px 4px 4px #00000',
  },
  root2: {
    margin: '1rem',
  },
  heading: {
    position: 'absolute',
    width: '256px',
    height: '24px',
    left: '30px',
    top: '124px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#1E1E1E',
    display: 'flex',
    alignItems: 'flex-end',
  },
});

const Verification = () => {
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
              marginTop: '0.5rem',
              padding: '1.3rem',
            }}
          >
            <NavigateBeforeOutlinedIcon />
          </IconButton>
          <Typography
            style={{
              marginLeft: '5.5rem',

              marginTop: '1rem',
              color: '#8A8A8A',
              fontWeight: 700,
            }}
          >
            ID DOCUMENT
          </Typography>
        </div>
        <Typography className={classes.heading}>
          Select the document type
        </Typography>
        <Paper
          component={Link}
          to='/passport'
          elevation={2}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '205px',
            left: '30px',
            alignItems: 'center',
            gap: '16px',
            borderRadius: '4px',
            textDecorationLine: 'none',
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
                <LibraryBooksIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Passport/National ID
              </Typography>
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
            padding: '16px',
            margin: '1.4rem 0',
            position: 'absolute',
            width: '312px',
            height: '56px',
            top: '310px',
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
                <PermIdentityOutlinedIcon />
              </IconButton>
              <Typography style={{ paddingLeft: '1rem' }}>
                Driver's License
              </Typography>
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

export default Verification;
