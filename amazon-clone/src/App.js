import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/authComponet/Login'
import Payment from './components/Payment'

import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {useEffect} from 'react'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'

function App() {
  const [{},dispatch]=useStateValue()

  useEffect(()=>{
    // this only runs once when the app component is loader
    auth.onAuthStateChanged(authUser=>{

      if(authUser){
        // this means the user just logged in or was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        // the user is logout
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>

            <Route path='/login'>  <Login />  </Route>
            <Route path='/payment'><Header />  <Payment />  </Route>
            <Route path='/checkout'><Header />  <Checkout /></Route>
            <Route path='/'><Header /> <Home /> </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
