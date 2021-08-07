const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require("stripe")('sk_test_51JLaHtBBZYlnWgxJ702DTSpbRwuhWxqDVGg5vry8znqV0bKXObtQK8NnR5rhAh5LGgjGOMIiPU6o5Aeg05BBhZAq00FaXlpnmX')
//Api
//App config
const app = express();
//middleware
app.use(cors({origin:true}));
app.use(express.json());
// Api routes
// app.get('/', (request,response)=>res.status(200).send('hello word'));
app.get('/',(request,response)=>response.status(200).send('hello world'))
// app.get('/msb',(request,response)=>response.status(200).send('like seriously it works'))
app.post('/payments/create',async(request,response)=>{
  const total = request.query.total;
  console.log('payment request recied BooM::: for this amouth >>>',total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total,
    currency:'usd',
  })
  //201 is response status of ok, everything is good
  response.status(201).send({
    clientSecret:paymentIntent.client_secret,
  })
})



//Listen command
exports.api=functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/challenge-da442/us-central1/api
