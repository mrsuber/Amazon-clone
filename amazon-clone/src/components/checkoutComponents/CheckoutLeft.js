import banner from '../../images/checkout_banner.jpg'
function CheckoutLeft(){
  return(
    <div className="checkout__left">
      <img  className="checkout__ad" src={banner}  />

       <div>
        <h2 className="checkout__title">YourShopping Basket</h2>
       </div>
    </div>
  )
}
export default CheckoutLeft
