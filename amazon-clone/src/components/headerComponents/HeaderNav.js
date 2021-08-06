import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import {auth} from '../../firebase'

function HeaderNav(){
  const [{basket,user}, dispatch] = useStateValue()
  const handleAuthentication = ()=>{
    if(user){
      auth.signOut();
    }
  }

  return(

    <div className="header-nav">

    <Link to={!user && '/login'}>
      <div onClick={handleAuthentication} className="header-nav-option">
        <span className="header-nav-option-line1">Hello {user?.email}</span>
        <span className="header-nav-option-line2">{user ? 'Sign Out':'Sign In'}</span>
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
