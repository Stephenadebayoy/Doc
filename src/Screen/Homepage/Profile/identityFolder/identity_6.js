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
  CardActions,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

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
    width: '278px',
    height: '24px',
    left: '30px',
    top: '120px',
    fontWeight: 700,
    fontSize: '20px',
    color: '#1E1E1E',
    display: 'flex',
    alignItems: 'flex-end',
  },
  verifyCard: {
    border: '1px solid #B5B5B5',
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.25))',
    borderRadius: '4px',
  },
  allVerifyCard: {
    position: 'absolute',
    left: '20px',
    top: '240px',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '16px',
    gap: '15px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Identity = () => {
  const classes = useStyles();
  const str = 'Submit for review';
  const submit = str.charAt(0).toLowerCase().toUpperCase() + str.slice(1);

  return (
    <Box className={classes.root}>
      <Paper elevation={0} className={classes.root2}>
        <div style={{ display: 'flex' }}>
          <IconButton
            component={Link}
            to='/profile'
            style={{
              width: '15px',
              height: '15px',
              background: ' #F5D3FA',
              borderRadius: '8px',
            }}
          >
            <NavigateBeforeOutlinedIcon />
          </IconButton>
          <Typography
            style={{
              marginLeft: '5.5rem',
              marginTop: '0.5rem',
            }}
          >
            Identity Verification
          </Typography>
        </div>
        <Paper>
          <Typography className={classes.heading}>
            Verify your identity
          </Typography>
          <Typography
            variant='body2'
            style={{
              width: '312px',
              height: '72px',
              top: '130px',
              left: '30px',
              display: 'flex',
              position: 'absolute',
              alignItems: 'flex-end',
            }}
          >
            All your documents have been verified.
          </Typography>
          <div className={classes.allVerifyCard}>
            <div>
              <Card elevation={0} className={classes.verifyCard}>
                <CardContent elevation={0}>
                  <CardActions
                    disableSpacing
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#FFC107',
                      width: '95px',
                      height: '24px',
                      top: '16px',
                      gap: '8px',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background: '#09AD0E',
                    }}
                  >
                    <IconButton
                      aria-label='add to favorites'
                      style={{
                        width: '16px',
                        height: '16px',
                        flex: 'none',
                        order: '0',
                        flexGrow: '0',
                        color: '#ffffff',
                      }}
                    >
                      <CheckCircleOutlineOutlinedIcon />
                    </IconButton>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      style={{ color: '#ffffff' }}
                    >
                      Submitted
                    </Typography>
                  </CardActions>
                  <Typography
                    style={{
                      width: '44px',
                      height: '24px',
                      fontWeight: 700,
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      flex: 'none',
                      flexGrow: '0',
                      order: '0',
                      marginTop: '2rem',
                    }}
                  >
                    Selfie
                  </Typography>
                  <Typography
                    style={{
                      width: '118px',
                      height: '28px',
                      fontSize: '10px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      order: '1',
                      marginTop: '1.5rem',
                    }}
                  >
                    Take a selfie photo to verify your identity
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#8A8A8A',
                      width: '120px',
                      height: '40px',
                      top: '156px',
                      left: '16px',
                      marginTop: '1rem',
                      gap: '8px',
                      padding: '4px',
                      borderRadius: '5px',
                    }}
                  >
                    <div>
                      <IconButton
                        style={{
                          width: '24px',
                          height: '24px',

                          background: '#F2F2F2',
                          borderRadius: '4px',
                        }}
                      >
                        <CameraAltOutlinedIcon />
                      </IconButton>
                    </div>
                    <Typography
                      style={{
                        width: '72',
                        height: '15px',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: '#fff',
                      }}
                    >
                      Retake
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div>
                <Card elevation={0} className={classes.verifyCard}>
                  <CardContent elevation={0}>
                    <CardActions
                      disableSpacing
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#FFC107',
                        width: '95px',
                        height: '24px',
                        top: '16px',
                        gap: '8px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        background: '#09AD0E',
                      }}
                    >
                      <IconButton
                        aria-label='add to favorites'
                        style={{
                          width: '16px',
                          height: '16px',
                          flex: 'none',
                          order: '0',
                          flexGrow: '0',
                          color: '#ffffff',
                        }}
                      >
                        <CheckCircleOutlineOutlinedIcon />
                      </IconButton>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        style={{ color: '#ffffff' }}
                      >
                        Submitted
                      </Typography>
                    </CardActions>
                    <Typography
                      style={{
                        height: '24px',
                        fontWeight: 700,
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        flex: 'none',
                        flexGrow: '0',
                        order: '0',
                        marginTop: '2rem',
                      }}
                    >
                      Docs Scan
                    </Typography>
                    <Typography
                      style={{
                        width: '118px',
                        height: '28px',
                        fontSize: '10px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        order: '1',
                        marginTop: '1.5rem',
                      }}
                    >
                      Scan your passport or your driver's license
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#8A8A8A',
                        width: '120px',
                        height: '40px',
                        top: '156px',
                        left: '16px',
                        marginTop: '1rem',
                        gap: '8px',
                        padding: '4px',
                        borderRadius: '5px',
                      }}
                    >
                      <div>
                        <IconButton
                          style={{
                            width: '24px',
                            height: '24px',

                            background: '#F2F2F2',
                            borderRadius: '4px',
                          }}
                        >
                          <CameraAltOutlinedIcon />
                        </IconButton>
                      </div>
                      <Typography
                        style={{
                          width: '72',
                          height: '15px',
                          fontWeight: 400,
                          fontSize: '12px',
                          color: '#fff',
                        }}
                      >
                        Retake
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Identity;
