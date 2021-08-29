import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import Tarjeta from './Tarjeta';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },

}));

const ProductSection = (props) =>  {
  const {articulos, addproducto, titleProduct} = props;
  const classes = useStyles();
  


  return (
    <div className={classes.root}>
     <Typography align='center' gutterBottom variant='h4' color='primary'>
            {titleProduct}
     </Typography>

      <Grid container spacing={1}>
      {articulos.map(arti => (
         <Grid item xs={12} sm={6} md={3} lg={3}>
            <Tarjeta key={arti.id} arti={arti} addproducto={addproducto} />
         </Grid>))}
        
      </Grid>
    </div>
  );
}

export default ProductSection;