import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right, #f3e5f5, #bbdefb)",
  },

}));

const PiePage = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

 
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root} 
      maxWidth="xs">
      
    
      {/*<BottomNavigationAction  label="gladysblumers@gmail.com" icon={<MailIcon fontSize='large'/>}/>*/}
  
      <BottomNavigationAction  label="Gladys Blumers" href="https://www.facebook.com/profile.php?id=100017604877604" target="_blank" icon={<FacebookIcon fontSize='large'  />}/>
     
      <BottomNavigationAction  label="gladysblumers" href="https://www.instagram.com/gladysblumers/?hl=es-la" target="_blank"  icon={<InstagramIcon fontSize='large' />} />
     
      <BottomNavigationAction  label="0424-2363128" icon={<WhatsAppIcon fontSize='large' />} />
     
    </BottomNavigation>
  );
}

export default PiePage;