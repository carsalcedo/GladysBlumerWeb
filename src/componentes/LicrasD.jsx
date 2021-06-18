import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
//import Producto from './Producto';
import Tarjeta from './Tarjeta';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },

}));

const LicrasD = (props) =>  {
  const {articulos, addproducto} = props;
  const classes = useStyles();
  const licraD = articulos.filter(arti => arti.productType == "licraD" )


  return (
    <div className={classes.root}>
     <Typography align='center' gutterBottom variant='h4' color='primary'>
           Licras para Damas
     </Typography>

      <Grid container spacing={1}>
      {licraD.map(arti => (
         <Grid item xs={12} sm={6} md={3} lg={3}>
            <Tarjeta key={arti.id} arti={arti} addproducto={addproducto} />
         </Grid>))}
        
      </Grid>
    </div>
  );
}

export default LicrasD;