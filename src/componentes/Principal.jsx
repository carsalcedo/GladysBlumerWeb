import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid, Typography} from '@material-ui/core';
import Publicidad1 from '../img/jogger.jpg';
import Publicidad2 from '../img/publicidad 2.jpg';
import Publicidad3 from '../img/publicidad 3.jpg';
import Publicidad4 from '../img/publicidad 4.jpg';
import Publicidad5 from '../img/publicidad 5.jpg';
import contacto from '../img/tarjeta.jpg'
import {Link} from "react-router-dom";
import ButtonBases from './ButtonBases'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        //overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
       
      },

      epaciado:{
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
          },
      },
     
      image:{
          width: '100%',
          height: 400,
          borderColor: "#d500f9",
      },

      image2:{
        width: '100%',
        height: 400,
      },

      titulu:{
        marginTop: theme.spacing(2),
      }


}));


const Principal = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Typography align='center' gutterBottom variant='h4' color='primary'>
           Bienvenido! Vea aqui nuestras novedades
        </Typography>

        <Grid container spacing={1} className={classes.epaciado} p={1}>

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to='/JoggerA'>   
            <IconButton  color="inherit">   
             <CardMedia borderColor="primary.main">
                <img src={Publicidad1} className={classes.image} id="iefect" />
             </CardMedia>   
             </IconButton>
             </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to='/LicrasD'>   
            <IconButton  color="inherit" id="iefect">   
             <CardMedia >
                <img src={Publicidad4} className={classes.image}  />
             </CardMedia>   
             </IconButton>
             </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to='/JoggerN'>   
            <IconButton  color="inherit">   
             <CardMedia >
                <img src={Publicidad2} className={classes.image} borderColor="primary.main" id="iefect"/>
             </CardMedia>   
             </IconButton>
             </Link>
            </Grid>


        </Grid>

       
        <ButtonBases />
       

        <Typography align='center' gutterBottom variant='h4' color='primary' className={classes.titulu}>
          ¿Quienes Somos?
        </Typography>

             <CardMedia id="tpresen" >
                <img src={contacto} className={classes.image2} />
             </CardMedia>   

        </div>

      );
}
 
export default Principal;