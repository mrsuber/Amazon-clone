import '../../css/Order.css'
import CheckoutProduct from '../checkoutComponents/CheckoutProduct'
import moment from 'moment'
function Order({order}){
  return(
    <div className='order'>
    <h2>Order</h2>
    <p>{moment.unix(order.data.created).format('MMM Do YYYY,h:mma')}</p>
    <p className="order__id">
      <small>{order.id}</small>
    </p>
    {order.data.basket?.map(item=>(
      <CheckoutProduct
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      hideButton
       />
    ))}
    <h3>Order Total:</h3>
    </div>
  )
}

export default Order
