import React from 'react';

import {
  makeStyles,
  Paper,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from '@material-ui/core';

import House from '../src/asset/home2.png';

import House2 from '../src/asset/home1.png';

const useStyles = makeStyles({
  skills: {
    fontSize: '10px',
    overflow: 'hidden',
    margin: '0.3rem 0',
  },
  skill_bar: {
    width: '212px',
    height: '4px',
    position: 'relative',
    background: ' #CBC3E3',
    borderRadius: '1000px',
  },
  skill_area: {
    zIndex: 1,
    position: 'absolute',
    marginTop: '10px',
    marginLeft: '15px',
  },
  per: {
    zIndex: 3,
    position: 'relative',
    marginRight: '15px',
    marginTop: '10px',
    float: 'right',
  },
  rate: {
    width: '60px',
    height: '4px',
    position: 'relative',
    borderRadius: '8px',
    background: '#5D106B',
  },
});

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto',
        flexWrap: 'nowrap',
        padding: '0 0.5rem',
      }}
      className={classes.root}
    >
      <Card
        sx={{
          width: '230px',
          height: '210px',
          borderRadius: '8px',
          padding: '0.5rem',
        }}
      >
        <Paper elevation={0}>
          <Typography>college</Typography>
          <Paper
            elevation={0}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
            }}
          >
            <Card elevation={0}>
              <Typography style={{ fontSize: '12px' }}>Amount</Typography>
            </Card>
            <Card elevation={0}>
              <Typography style={{ fontWeight: 'bold' }}>R300</Typography>
            </Card>
          </Paper>
        </Paper>
        <CardMedia
          component='img'
          height='72px'
          width='198px'
          image={House}
          alt='castle'
        />
        <section>
          <div className={classes.skills}>
            <div className={classes.skill_bar}>
              <div className={classes.rate}>
                <span className={classes.skill_area}></span>
                <span className={classes.per}></span>
              </div>
            </div>
          </div>
        </section>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '-0.7rem',
          }}
        >
          <Typography
            style={{
              fontSize: '10px',
              fontWeight: 400,
            }}
          >
            R0
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
            }}
          >
            R300
          </Typography>
        </CardActions>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography
            style={{
              fontSize: '10px',
              fontWeight: 400,
            }}
          >
            Amount left to spend
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'green',
            }}
          >
            R175
          </Typography>
        </CardActions>
      </Card>
      {/* second card */}

      <Card
        sx={{
          width: '230px',
          height: '210px',
          borderRadius: '8px',
          padding: '0.5rem',
        }}
      >
        <Paper elevation={0}>
          <Typography>housing</Typography>
          <Paper
            elevation={0}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
            }}
          >
            <Card elevation={0}>
              <Typography style={{ fontSize: '12px' }}>Amount</Typography>
            </Card>
            <Card elevation={0}>
              <Typography style={{ fontWeight: 'bold' }}>R500</Typography>
            </Card>
          </Paper>
        </Paper>
        <CardMedia
          component='img'
          height='72px'
          width='158px'
          image={House2}
          alt='castle'
        />
        <section>
          <div className={classes.skills}>
            <div className={classes.skill_bar}>
              <div className={classes.rate}>
                <span className={classes.skill_area}></span>
                <span className={classes.per}></span>
              </div>
            </div>
          </div>
        </section>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '-0.7rem',
          }}
        >
          <Typography
            style={{
              fontSize: '10px',
              fontWeight: 400,
            }}
          >
            R0
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
            }}
          >
            R500
          </Typography>
        </CardActions>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography
            style={{
              fontSize: '10px',
              fontWeight: 400,
            }}
          >
            Amount left to spend
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'green',
            }}
          >
            R350
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
