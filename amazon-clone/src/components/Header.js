import '../css/Header.css'
import SearchForm from './headerComponents/SearchForm'
import HeaderNav from './headerComponents/HeaderNav'
import logo from '../images/amazon_logo.png'
import {Link} from 'react-router-dom'
function Header(){
  return(
    <div className='header'>
    <Link to="/"><img src={logo} className = "header-logo"/></Link>

        <SearchForm />
        <HeaderNav />
    </div>
  )
}

export default Header
