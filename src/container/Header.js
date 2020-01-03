import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, CardMedia ,Grid, Paper, Image} from '@material-ui/core';
import Cricket from '../images/Cricket.png';
import  Card  from './Cards'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Head() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
   <Grid item lg={12} style={{backgroundColor:'#3F51B5', paddingLeft: 0 , paddingRight: 0}}>
     <img src={Cricket} style={{}} /></Grid>
    <Grid container >
      
     
      {/* <Grid item lg={12} style={{paddingLeft: 0, paddingRight: 0,height:'10vh', backgroundColor:'gray'}}></Grid>
       <Typography component="div" style={{ backgroundColor: 'red', height: '10vh', }} />  */}
     
      
      {/* <CardMedia className={'Cricket'} />
       */}
     
    <div className={classes.root}>
      <AppBar position="static">
        
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Upcoming" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Live" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Result" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card />
      </TabPanel>
    </div>
    </Grid>
    </div>

  );
}


 