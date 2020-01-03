import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {requestUpcomingMatches} from '../actions/UpcomingMatches'




const useStyles = makeStyles({
  card: {
    width: '350px',
    height: '150px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  
  

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.name}>
          Name: India vs Pakistan at 
        </Typography>
         <Typography variant="h6" component="h2">
         Date: 21-06-2019
         </Typography>
         <Button color="default">Click Me</Button>

      </CardContent>
      
    </Card>
  );
}
