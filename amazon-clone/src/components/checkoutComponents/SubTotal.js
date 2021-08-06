import '../../css/SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../StateProvider'
import {getBasketTotal} from '../../reducer'
import {useHistory} from 'react-router-dom'

function SubTotal(){
  const history = useHistory()
  const [{basket}, dispatch]= useStateValue()
    // console.log(getBasketTotal(basket))
    const total =()=>{
      let totalPrice = 0;
      for(let i=0;i<basket.length;i++){
        totalPrice+=basket[i].price
      }
    return totalPrice
    }
  return(
    <div className="subtotal">


                        <p>
                 (Subtotal {basket.length} items ) : <strong>$ {total()}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains
                        </small>



            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
    </div>
  )}


export default SubTotal
