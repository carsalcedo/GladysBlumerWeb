import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../img/logo.png';
import {Badge, Icon} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Link, 
  useHistory
} from "react-router-dom";
import {useStateValue} from '../StateProvider'
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
   
  },


  fondo:{
    background: "linear-gradient(to right, #ea80fc, #3d5afe)",
    opacity: 1,
  },

  grow:{
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  bienveido: {
    marginRight: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  title: {
    flexGrow: 1,
  },

  Button:{
    marginLeft: theme.spacing(1),
  },

  image: {
    marginRight: "5px",
    height: "3rem",
    width: "3rem",
  },

  badge: {
    backgroundColor: '#44b700',
   
  },

//esta clase oculta los elementos cuando son minimos a la medida md
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbarra = (props) =>  {
  const {artis, desloguear, desplegar, desplegarCar} = props;
  const totalItems = artis.reduce((a, c) => a + c.qty, 0);
  const classes = useStyles();
  const [{user}, dispatch] = useStateValue();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  //estructura de la lista

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <MenuItem>
      <p>{user ? user.email : null}</p>
      </MenuItem>
      <MenuItem>
       <Link to='/carrito'>
        <IconButton aria-label="productos" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">  
                    <Icon
                    >
                    shopping_cart
                    </Icon> 
            </Badge>
        </IconButton>
        </Link>
        <p>CARRITO</p>
      </MenuItem>

      <MenuItem>
       <Link to='/Isesion'>  
        <IconButton aria-label="show 11 new notifications" color="inherit"  onClick={desloguear}>
            <Badge color="secondary" variant="dot">
                      <Icon
                      color='info'>
                      account_circle
                      </Icon> 
              </Badge>
            </IconButton>
            </Link>
            <p>{user ? "LOGOUT" : "LOGIN"}</p>
      </MenuItem>
      

    </Menu> );
  //aqui termina


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.fondo}>

        <Toolbar>
            <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => desplegar()}>
              <MenuIcon />
            </IconButton>

            <Link to='/'>
            <IconButton  color="inherit">
            <img src={Logo} className={classes.image}/>
            </IconButton>
            </Link>

            <Typography  variant="h6" className={classes.title} > 
              Gladys Blumer's c.a
            </Typography>
      
           <Typography  variant="h6" className={classes.bienveido} component="p"> 
              {user ? user.email : "Bienvenido"}
           </Typography>
        
             <div className={classes.sectionDesktop}>
             <Link to='/Isesion'>  
             { user ?      
                <Button 
                  onClick={desloguear}
                  variant="contained"
                  color="primary"
                  endIcon= {
                  <Badge color='secondary' variant="dot" >
                  <Icon
                  color='info'>
                  account_circle
                  </Icon>  </Badge>}>
                  LOGOUT
                </Button>
                :
                <Button 
                
                variant="contained"
                color="primary"
                endIcon= {
                <Icon
                color='info'>
                account_circle
                </Icon>}>
                LOGIN
              </Button>}

              </Link>
            
            {/*  <Link to='/carrito'> */}  
              <Button 
                onClick={() => desplegarCar()}
                className={classes.Button}
                variant="contained"
                color="primary"
                endIcon= {
                <Badge badgeContent={totalItems} color="secondary">  
                <Icon
                 >
                shopping_cart
                </Icon>  </Badge>}>
                comprar
            </Button>
           {/* </Link>*/} 
          </div>
             
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Icon
                color='info'>
                more_vert
                </Icon>
            </IconButton>
          </div>       

          </Toolbar>
        
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Navbarra;