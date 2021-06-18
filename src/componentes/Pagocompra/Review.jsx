import React from 'react';
import {Typography, List, ListItem, ListItemText } from '@material-ui/core';
import accounting from 'accounting';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = ({artis}) => {
  const classes = useStyles();
  const totalItems = artis.reduce((a, c) => a + c.qty, 0);
  const itemsPrice = artis.reduce((a, c) => a + c.qty * c.price, 0);
 

  return (
    <>
      <Typography variant='h6' gutterBottom>Resumen de Compra</Typography>
      <List disablePadding>
         <ListItem className={classes.listItem}>
            <ListItemText primary="Articulos" className={classes.total} />
            <Typography variant="subtitle1" className={classes.total}>Total Precios</Typography>
          </ListItem>

          {artis.map((item) => (
              <ListItem className={classes.listItem} key={item.id}>
                <ListItemText primary={item.name} secondary={item.qty} />
                <Typography variant="body2">${item.qty*item.price}.00</Typography>
              </ListItem>
            ))}

            <ListItem className={classes.listItem}>
              <Typography variant="body2" >
               Total Articulos: {totalItems}
              </Typography>
            </ListItem>

            <ListItem className={classes.listItem}>
              <ListItemText primary="Total a Pagar" />
              <Typography variant="subtitle1" className={classes.total}>
              {accounting.formatMoney(itemsPrice)}
              </Typography>
            </ListItem>

      </List>


    </>
  )
}

export default Review
