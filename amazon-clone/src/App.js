import Header from './components/Header'
import Home from './components/Home'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
        <Route path='/checkout'>
            <Header />
            <h1>I am checkout page</h1>
        </Route>
          <Route path='/'>
              <Header />
              <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
