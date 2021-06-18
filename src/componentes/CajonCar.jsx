import React from 'react';
import {makeStyles, Drawer, Divider, Typography, Button} from '@material-ui/core';
import ListCar from './ListCar';
import Total from './Total';
import {Link} from "react-router-dom";

const estilos= makeStyles(theme => ({
    drawer: {
        width: 300,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
    },
    divTotal:{
        marginLeft: theme.spacing(10),
    },
    toolbar: theme.mixins.toolbar,

}))

const CajonCar = (props) => {
    const {artis, addproductoM, onRemove} = props;
    const itemsPrice = artis.reduce((a, c) => a + c.qty * c.price, 0);
    const classes = estilos();
    return (
        <Drawer className={classes.drawer} variant='permanent'
        classes={{paper: classes.drawerPaper}}
        anchor='right'
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}>
            <Typography align='center' gutterBottom variant='h5' color='primary'>
            Carrito de compras
     </Typography>
            <Divider/>
            <ListCar artis={artis} addproductoM={addproductoM} onRemove={onRemove}/>
            <Divider/>
            <div align="center">
            <Total artis={artis} itemsPrice={itemsPrice}/>
            </div>
            <Button component={Link} to="/carrito">Ver en Pantalla completa</Button>
        </Drawer>
    )
}

export default CajonCar
