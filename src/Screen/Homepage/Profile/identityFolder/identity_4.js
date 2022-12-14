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

import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

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
    top: '272px',
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
              top: '168px',
              left: '30px',
              display: 'flex',
              position: 'absolute',
              alignItems: 'flex-end',
            }}
          >
            Please upload the necessary documents to secure you account in order
            to start making payments
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
                      background: '#5D106B',
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

                          background: '#F5D3FA',
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
                        background: '#5D106B',
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

                            background: '#F5D3FA',
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
        <Typography
          style={{
            fontSize: '10px',
            width: '139px',
            height: '28px',
            top: '600px',
            left: '111px',
            position: 'absolute',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          align='center'
        >
          Your data have been scanned and now awaits reviewing
        </Typography>

        <Button
          style={{
            position: 'absolute',
            width: '282px',
            height: '50px',
            top: '700px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 24px',
            background: '#5D106B',
            borderRadius: '40px',
            gap: '8px',
            left: '4rem',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'helvetica',
            textTransform: 'none',
          }}
        >
          {submit}
        </Button>
      </Paper>
    </Box>
  );
};

export default Identity;
