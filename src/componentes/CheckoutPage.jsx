import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Total from './Total';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Icon, IconButton } from '@material-ui/core'
import accounting from 'accounting'; //libreria para dar formato de meneda a numeros

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "3rem",
    },
    estilacho: {
        color: "transparent",
        backgroundImage: "linear-gradient(to right, #ea80fc, #3d5afe)",
        webkitBackgroundClip: "text",
        backgroundClip: "text",
    },
    table: {
        minWidth: 150,
      },
})); 

const CheckoutPage = (props) => {
    const {artis, addproductoM, onRemove} = props;
    const classes = useStyles();
  

      const itemsPrice = artis.reduce((a, c) => a + c.qty * c.price, 0);
      const totalItems = artis.reduce((a, c) => a + c.qty, 0);
    

    return (  
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h3' className={classes. estilacho}>
                        Carrito de Compras
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={9} container spacing={2}>
                    <TableContainer>
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                      
                        <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="left">Produto</TableCell>
                            <TableCell >P.Unidad</TableCell>
                            <TableCell >Cantidad</TableCell>
                            <TableCell >Accion</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                        {artis.length === 0 &&  <TableCell align="right" >Carrito vacío - comience a comprar!</TableCell>}
                      
                        {artis.map(item => (
                            <TableRow key={item.id}>
                            <TableCell align="right">
                                <img src={item.image} alt="" width="50" height="50" />    
                            </TableCell>                          
                            <TableCell align="left">{item.name}</TableCell>
                            <TableCell >{accounting.formatMoney(item.price)}</TableCell>
                            <TableCell>{item.qty}</TableCell>
                            <TableCell align="left" >
                            <IconButton onClick={() => addproductoM(item)}>
                                <Icon color='primary' fontSize="short">
                                add_circle
                                </Icon>
                            </IconButton>
                            <IconButton onClick={() => onRemove(item)}>
                                    <Icon color='secondary' fontSize="short">
                                    delete
                                    </Icon>
                            </IconButton>
                            </TableCell>
                            </TableRow>
                        ))}

                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                <Typography align='center' variant='h4'>
                      <Total itemsPrice={itemsPrice} artis={artis}/>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
}
 
export default CheckoutPage;