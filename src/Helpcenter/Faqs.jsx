import React from 'react';
import {
  Box,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import Search from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
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

const Faqs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to='/gethelp'
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
              marginLeft: '7rem',
              marginTop: '0.7rem',
            }}
          >
            FAQs
          </Typography>
          <IconButton
            style={{
              position: 'absolute',
              width: '72px',
              height: '72px',
              left: '164px',
              top: '128px',
              borderRadius: '4px',
              background: '#f3d3f8',
            }}
          >
            <HelpOutlineOutlined
              style={{
                width: '42px',
                height: '42px',
                top: '15px',
                left: '15px',
                color: 'gray',
              }}
            />
          </IconButton>
        </div>
        <TextField
          id='filled-basic'
          label='Search'
          type={'search'}
          variant='outlined'
          required
          style={{
            width: '312px',
            height: '56px',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            top: '229px',
            left: '50px',
            background: '#F2F2F2',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {<Search style={{ background: '#F3D3F8' }} />}
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default Faqs;
