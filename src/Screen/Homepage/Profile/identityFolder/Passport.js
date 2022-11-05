import React from 'react';
import {
  Box,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooksOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

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
    width: '137px',
    height: '24px',
    left: '140px',
    top: '300px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#1E1E1E',
    display: 'flex',
    alignItems: 'flex-end',
  },
});
const Passport = () => {
  const str = 'take photo';
  const btn = str.split('');
  btn
    .map((e) => {
      return e[0].toLowerCase().toUpperCase() + e.substring(1);
    })
    .join(' ');

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            component={Link}
            to='/verification'
            style={{
              width: '25px',
              height: '25px',
              background: ' #F5D3FA',
              borderRadius: '8px',
              marginTop: '0.5rem',
            }}
          >
            <NavigateBeforeOutlinedIcon />
          </IconButton>
          <Typography
            style={{
              marginLeft: '6rem',
              marginTop: '1.5rem',
              color: '#8A8A8A',
              fontWeight: 700,
            }}
          >
            Passport
          </Typography>
        </div>
        <IconButton
          style={{
            width: '60px',
            height: '60px',
            top: '80px',
            left: '144px',
            borderRadius: '4px',
            position: 'absolue',
            background: '#F3D3F8',
          }}
        >
          <LibraryBooksIcon />
        </IconButton>
        <Typography className={classes.heading}>Verify your ID</Typography>
        <Typography
          align='center'
          style={{
            width: '210px',
            height: '32px',
            top: '356px',
            left: '100px',
            position: 'absolute',
            fontWeight: 400,
            color: '#1E1E1E',
            fontSize: '12px',
          }}
        >
          Please take a photo of the biodata page of your passport
        </Typography>
        <ul
          style={{
            fontSize: '12px',
            fontWeight: 400,
            position: 'absolute',
            width: '238px',
            height: '56px',
            top: '420px',
            left: '65px',
            color: '#1E1E1E',
          }}
        >
          <li>Make sure the image is of high quality</li>
          <li>Make sure the enviroment is well lit</li>
          <li>Try to minimize glare</li>
        </ul>

        <Button
          style={{
            width: '312px',
            height: '56px',
            position: 'absolute',
            top: '600px',
            left: '40px',
            padding: '16px',
            border: '1px solid #AE1EC7',
            borderRadius: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          <IconButton
            style={{
              width: '24px',
              height: '24px',
              background: '#F3D3F8',
              borderRadius: '4px',
              padding: '1rem',
              marginRight: '1rem',
            }}
          >
            <CameraAltOutlinedIcon />
          </IconButton>
          {btn}
        </Button>
        <Typography
          style={{
            fontSize: '14px',
            position: 'absolute',
            width: '20px',
            height: '24px',
            top: '670px',
            left: '180px',
          }}
        >
          OR
        </Typography>
        <Button
          style={{
            width: '312px',
            height: '56px',
            position: 'absolute',
            top: '700px',
            left: '40px',
            padding: '16px',
            border: '1px solid #AE1EC7',
            borderRadius: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}
        >
          <IconButton
            style={{
              width: '24px',
              height: '24px',
              background: '#F3D3F8',
              borderRadius: '4px',
              padding: '1rem',
              marginRight: '1rem',
            }}
          >
            <CloudDownloadOutlinedIcon />
          </IconButton>
          Upload photo
        </Button>
      </Paper>
    </Box>
  );
};

export default Passport;
