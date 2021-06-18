const express = require("express");
const Stripe = require("stripe");
const cors = require("cors"); 

const stripe = new Stripe("sk_test_51J2x3uEwM1KvWegRXDhefWHsz4t5efmCcdp6D0IoDDvhA9fFM5bvUFUi5Gi53wfjNyX77vEOy0o1T0GPlzylAzvS00eyX6EJSd")

const app = express();

//middleware
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json())

app.post("/api/checkout", async (req, res) =>{
    console.log(req.body);
    const {id, amount} = req.body;

    try {
       const payment = await stripe.paymentIntents.create({
           amount,
           currency: "USD",
           description: "articulos de compra",
           payment_method: id,
           confirm: true,
       })
       console.log(payment);

       return res.status(200).json({message: "Pago satisfactorio"});
    } catch(error){
        return res.json({message: error.raw.message})
    }
});



app.listen(3001, () =>console.log("Server listening port", 3001));