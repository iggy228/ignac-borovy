import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;