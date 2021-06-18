import { Button, Divider, Typography } from '@material-ui/core'
import React from 'react';
import {Link} from "react-router-dom";

const Confirmation = ({message}) => {
    return (
        <>
            <Typography variant="h6">{message}</Typography>
            <Divider/>   
            <Typography variant="subtitle2" gutterBottom>
                {
                    message === "Pago satisfactorio" ?
                    "tu codigo de referencia es #00011223"
                    : ""
                }
            </Typography>
            <Button component={Link} to='/' variant='outlined' type="button">
                Regresar a pantalla de Inicio
            </Button>
        </>
    )
}

export default Confirmation
