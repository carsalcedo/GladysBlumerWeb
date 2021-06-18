import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import useStyles from './styles';
import Confirmation from './Confirmation'
import { useStateValue } from '../../StateProvider';

const Checkout = ({artis}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [{paymentMessage}, dispatch] = useStateValue();
  const steps = ["Dirección de envio", "Datos de Pago"];

  const nexStep = () => setActiveStep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActiveStep((prevActivestep) => prevActivestep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nexStep={nexStep}/> : <PaymentForm artis={artis} nexStep={nexStep} backStep={backStep}/>

  return ( 
   <>
   <main className={classes.layout}>
     <Paper className={classes.paper}>
     <Typography component='h1' variant='h4' align='center'>
       Checkout
     </Typography>
     <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(step => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
     </Stepper>
     {
       activeStep === steps.length ? (<Confirmation message={paymentMessage}/>) 
       :
       (<Form step={activeStep}/>)
     }
     
     </Paper>
       </main>
   </>
   );
}
 
export default Checkout;