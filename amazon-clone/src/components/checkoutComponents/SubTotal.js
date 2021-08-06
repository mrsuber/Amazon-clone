import '../../css/SubTotal.css'
import CurrencyFormat from 'react-currency-format'

function SubTotal(){
  return(
    <div className="subtotal">
    <CurrencyFormat
      renderText={(value)=>(
        <>
          <p>{/*part of home work*/}
              SubTotal(0 items):<strong>0</strong>
          </p>
          <small className='subtotal__gift'>
            <input type='checkbox' />This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={0}//part of home work
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}

    />
    <button>Proceed to Checkout</button>

    </div>
  )
}


export default SubTotal
