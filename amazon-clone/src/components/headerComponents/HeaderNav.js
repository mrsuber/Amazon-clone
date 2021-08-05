import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
function HeaderNav(){
  return(
    <div className="header-nav">
      <div className="header-nav-option">
        <span className="header-nav-option-line1">Hello Guest</span>
        <span className="header-nav-option-line2">Sign In</span>
      </div>

      <div className="header-nav-option">
        <span className="header-nav-option-line1">Returns</span>
        <span className="header-nav-option-line2">& Orders</span>
      </div>

      <div className="header-nav-option">
        <span className="header-nav-option-line1">Your</span>
        <span className="header-nav-option-line2">Prime</span>
      </div>

      <div className="header-nav-optionBasket">
      <ShoppingBasketIcon />
      <span className="header-nav-option-line2  header-nav-basketCount">0</span>
      </div>

    </div>
  )
}

export default HeaderNav
