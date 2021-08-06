import '../../css/SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../StateProvider'
import {getBasketTotal} from '../../reducer'


function SubTotal(){
  const [{basket}, dispatch]= useStateValue()
    // console.log(getBasketTotal(basket))
  return(
    <div className="subtotal">
    {/* price */}
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                ( Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains
                        </small>
                    </>
                )}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>Proceed to checkout</button>
    </div>
  )
}


export default SubTotal
