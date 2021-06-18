import React from 'react'
import accounting from 'accounting';
import { makeStyles, Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import {useStateValue} from '../StateProvider'

const useStyles = makeStyles((theme) => ({
    root: {
      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
}))

const Total = (props) => {
    const {artis, itemsPrice} = props

    const totalItems = artis.reduce((a, c) => a + c.qty, 0);
   
    const classes = useStyles();
    const [{user}, dispatch] = useStateValue();
  

    return ( 
        <div className={classes.root}>
             <h5>Total Items: {totalItems}</h5>
            <h5>{accounting.formatMoney(itemsPrice)}</h5>
            { user ?
            <Link to="/Pagocompra/Checkout">
            <Button className={classes.button} variant="contained" color="primary">COMPRAR</Button>   
            </Link>
            :
            <Button className={classes.button} variant="contained" color="primary" onClick={() =>  alert('¿Le Gustaria registrarse e iniciar sesión para realizar su compra?')}>COMPRAR</Button>  
            }
        </div>
     );
}
 
export default Total;