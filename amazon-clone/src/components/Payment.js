import '../css/Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './checkoutComponents/CheckoutProduct'
import {Link,useHistory} from 'react-router-dom'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import {useState, useEffect} from 'react'
import axios from './axios'


function Payment(){
  const history = useHistory()
  const [{basket, user},dispatch]=useStateValue()
  const total =()=>{
    let totalPrice = 0;
    for(let i=0;i<basket.length;i++){
      totalPrice+=basket[i].price
    }
  return totalPrice
  }
  const stripe = useStripe()
  const elements = useElements()
  const [succeeded, setSucceeded]=useState(false)
  const [processing,setProcessing]=useState("")
  const[error,setError]=useState(null)
  const[disabled,setDisabled] = useState(true);
  const [clientSecret,setClientSecret]=useState(true)
  useEffect(()=>{
    //generat the specialstrip secrete which allow us to charge a customer
    const getClientSecret = async()=>{
      const response = await axios({
        method:'post',
        url:`/payments/create?total=${total() *100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  },[basket])
  const handleSubmit= async(event)=>{
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      setSucceeded(true)
      setError(null)
      setProcessing(false)

      history.replace('/order')
    })
    //paymentIntent equals payment confirmation
  }
  const handleChange=(event)=>{
    // e.preventDefault()
    //listen for changes on the CardElement
    //and display any error as the customer type their card details
    setDisabled(event.empty);
    setError(event.error? event.error.message :'');
  }


  return(
    <div className="payment">
        <div className="payment__container">
          <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
          </h1>


            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__adress">
                  <p>{user?.email}</p>
                  <p>123 React line</p>
                  <p>Los Angels,CA</p>
              </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items And Delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item =>(
                      <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />
                    ))}
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items And Delivery</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                          <h3>Order Total: ${total()}</h3>
                          <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                          </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>


        </div>

    </div>
  )
}

export default Payment
