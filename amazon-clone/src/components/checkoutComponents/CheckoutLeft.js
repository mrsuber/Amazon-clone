import banner from '../../images/checkout_banner.jpg'
import {useStateValue} from '../../StateProvider'
import CheckoutProduct from './CheckoutProduct'
function CheckoutLeft(){
  const [{basket,user}, dispatch] = useStateValue()
  return(

    <div className="checkout__left">
      <img  className="checkout__ad" src={banner}  />

       <div>
       <h3>hello, {user?.email}</h3>
        <h2 className="checkout__title">YourShopping Basket</h2>
          {
            basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />

            ))
          }

       </div>
    </div>
  )
}
export default CheckoutLeft
