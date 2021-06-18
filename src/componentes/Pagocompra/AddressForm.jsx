import { Grid, Typography, TextField, Button } from '@material-ui/core';
import React,  { Fragment } from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import AddressInput from './AddressInput';
import {Link} from "react-router-dom";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';



 const AddressForm = ({nexStep}) => {
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();
 

  return (
    <Fragment>
      <Typography  variant='h6' gutterBottom align='center'>
       Dirección de Envio
     </Typography>
     <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data=>{
          dispatch({
            type: actionTypes.SET_SHIPPINGDATA,
            shippingData: data,
          });
            nexStep();
        })}>
          <Grid container spacing={3}> 

            <AddressInput name='firstName' label='Primer Nombre'/>
            <AddressInput name="lastName" label="Apellido"/>
            <AddressInput  name="address" label="Direccion"/>
            <AddressInput  name="email" label="Direccion de Correo"/>
            <AddressInput  name="city" label="ciudad"/>
            <AddressInput  name="postCode" label="Codigo Postal"/>

          </Grid>
          <div style={{display: "flex", justifyContent:"space-between", marginTop: "1rem" }}>
          <Button component={Link} to="/carrito">Atras</Button>
          <Button type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
        </form>
      </FormProvider>

    </Fragment>
  )
}

export default AddressForm