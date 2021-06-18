import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import Producto from './Producto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));

const Galeria = (props) =>  {
  const {articulos, addproducto} = props;
  const classes = useStyles();
  const shores = articulos.filter(arti => arti.productType == "Short" )


  return (
    <div className={classes.root}>
     <Typography align='center' gutterBottom variant='h4' color='primary'>
            Shores para Caballeros
     </Typography>

      <Grid container spacing={1}>
      {shores.map(arti => (
         <Grid item xs={12} sm={6} md={3} lg={3}>
            <Producto key={arti.id} arti={arti} addproducto={addproducto} />
         </Grid>))}
        
      </Grid>
    </div>
  );
}

export default Galeria;