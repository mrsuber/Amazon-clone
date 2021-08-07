import '../../css/CheckoutProduct.css'
import SubTotal from './SubTotal'
import {useStateValue} from '../../StateProvider'

function CheckoutProduct({id,image,title,price,rating,hideButton}){
const [{basket}, dispatch] = useStateValue();
const removeFromBasket =()=>{
  dispatch({
    type:'REMOVE_FROM_BASKET',
    id:id,
  })
}
  return(
    <div className='checkoutProduct'>
        <img src={image} className='checkoutProduct__image'/>
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>
            {title}
          </p>
          <p className="checkoutProdut__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {
              Array(rating)
              .fill()
              .map((_,i)=>(
                <p>&#11088;</p>
              ))
            }
          </div>
          {!hideButton && <button onClick={removeFromBasket}>Remove From Basket</button>}
        </div>
    </div>
  )
}

export default CheckoutProduct
