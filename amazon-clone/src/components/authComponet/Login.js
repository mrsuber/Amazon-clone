import logo from '../../images/Amazon_logo.svg'
import {Link} from 'react-router-dom'
import '../../css/Login.css'
import {useState} from 'react'


function Login(){
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const signIn=(e)=>{
    e.preventDefault()


  }
  const register =(e)=>{
    e.preventDefault()
  }
  return(
    <div className="login">
    <Link to='/'>
    <img src={logo}className="login__logo"  />
    </Link>
    <div className='login__container'>
    <h1>Sign-In</h1>
    <form>
      <h5>E-mail</h5>
      <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

      <h5>Password</h5>
      <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />

      <button className="login__signin__button" onClick={signIn} type="submit">Sign In</button>

    </form>
    <p>
      By signing-in you agree to Amazon's conditions of Use &
      Sale. Please see our Privacy Notice, our Cookies Notice and our
      Intrest-Based Ads
    </p>
    <button className='login__register__button' onClick={register}>Create Your Amazon Account</button>

    </div>

    </div>
  )
}
export default Login
