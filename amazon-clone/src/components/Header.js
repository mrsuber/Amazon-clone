import '../css/Header.css'
import SearchForm from './headerComponents/SearchForm'
import HeaderNav from './headerComponents/HeaderNav'
import logo from '../images/amazon_logo.png'
function Header(){
  return(
    <div className='header'>
      <img src={logo} className = "header-logo"/>
        <SearchForm />    
        <HeaderNav />
    </div>
  )
}

export default Header
