import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'

function HeaderNav(){
  const [{basket}, dispatch] = useStateValue()

  return(
    <div className="header-nav">
    <Link to='/login'>
      <div className="header-nav-option">
        <span className="header-nav-option-line1">Hello Guest</span>
        <span className="header-nav-option-line2">Sign In</span>
      </div>
      </Link>

      <div className="header-nav-option">
        <span className="header-nav-option-line1">Returns</span>
        <span className="header-nav-option-line2">& Orders</span>
      </div>

      <div className="header-nav-option">
        <span className="header-nav-option-line1">Your</span>
        <span className="header-nav-option-line2">Prime</span>
      </div>
      <Link to='/checkout'>
      <div className="header-nav-optionBasket">
      <ShoppingBasketIcon />
      <span className="header-nav-option-line2  header-nav-basketCount">{basket?.length}</span>
      </div>
      </Link>


    </div>
  )
}

export default HeaderNav
