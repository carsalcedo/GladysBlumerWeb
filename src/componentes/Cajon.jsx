import React from 'react'
import {makeStyles, Drawer, Divider, Typography} from '@material-ui/core';
import ListaVertical from './ListaVertical'

const estilos= makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,

}))

 const Cajon = (props) => {
    const classes = estilos();
 

    return (
        <Drawer className={classes.drawer} variant='permanent'
        classes={{paper: classes.drawerPaper}}
        anchor='left'
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}>
            <Typography align='center' gutterBottom variant='h5' color='primary'>
            Nuestros productos
     </Typography>
            <Divider/>
            <ListaVertical/>
        </Drawer>
    )
}

export default Cajon;