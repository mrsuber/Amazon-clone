import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/authComponet/Login'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    //BEM
    <Router>
      <div className="App">

        <Switch>

            <Route path='/login'>  <Login />  </Route>
            <Route path='/checkout'><Header />  <Checkout /></Route>
            <Route path='/'><Header /> <Home /> </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
