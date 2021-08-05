import Navbar from './components/Navbar'

import Aboat from './pages/Aboat'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path='/'>
              <Aboat />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;