import '../css/Checkout.css'
import CheckoutLeft from './checkoutComponents/CheckoutLeft'
import CheckoutRight from './checkoutComponents/CheckoutRight'
import product1 from '../images/product1.jpg'
function Checkout(){
  return(
    <div className="checkout">
      <CheckoutLeft product={product1}/>
      <CheckoutRight />
    </div>
  )
}

export default Checkout
