import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react';
import Review from './Review';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'; //libreria de Stripe para API de tarjeta de credito
import { loadStripe } from '@stripe/stripe-js'; //libreria de Stripe para API de tarjeta de credito
import accounting from 'accounting';
import axios from 'axios';
import { actionTypes } from '../../reducer';
import {useStateValue} from '../../StateProvider';

//clave obtenida de stripe.com
const stripePromise = loadStripe("pk_test_51J2x3uEwM1KvWegRDcF68xA5zgYzqeY6E1KwRfTjREjZJm7faFHKoCHZHSiqzhg15ixbIhNwFlyS3kpDQBJzuT3k001U8FMgxP")

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidepostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: '#333',
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: '#e5424d',
      ":focus": {
        color: "#303238",
      },
    },
  },
};


const CreditCardForm = ({backStep, nexStep, artis}) => {
  const itemsPrice = artis.reduce((a, c) => a + c.qty * c.price, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [{shippingData}, dispatch] = useStateValue();

  //funcion para el submit del formulario de la tarjeta de creditoy comunicacion con el backend
  const handleSubmit = async(e) => {
    e.preventDefault();
   const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    console.log(paymentMethod)
    if (!error) {
      const {id} = paymentMethod;

      try {
        const {data} = await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: (itemsPrice) * 100,
        }
       );
      {/* alert(data.message)*/}
      dispatch({
        type: actionTypes.SET_PAYMENT_MESSAGE,
        paymentMessage: data.message,
      });
       elements.getElement(CardElement).clear();
       nexStep();
    }
      catch(error){
        console.log(error);
        nexStep();
      }
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS}/>

      <div style={{display: "flex", justifyContent:"space-between", marginTop: "1rem" }}>
      <Button variant="outlined" onClick={backStep}>Atras</Button>
      <Button disabled={false} type="submit" variant="contained" color="primary">Pagar {accounting.formatMoney(itemsPrice)}</Button>
      </div>

    </form>
  )
}

const PaymentForm = ({backStep, nexStep, artis}) => {
  return (
    <>
      <Review artis={artis}/>
      <Divider/>

      <Typography variant='h6' gutterBottom style={{margin: "20px 0"}}>
        Metodo de Pago
      </Typography>

      <Elements stripe={stripePromise}>
        <CreditCardForm backStep={backStep} nexStep={nexStep} artis={artis}/>
      </Elements>


    </>
  )
}

export default PaymentForm
