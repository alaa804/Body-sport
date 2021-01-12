
import React from 'react';
import './App.css';
import HOME from "./components/HomePage"
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import Conatct from './components/Contact';
import About from './components/About';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={HOME}/>
        <Route path = "/contact" component={Conatct} />
        <Route path = "/about" component={About} />
      </Switch>
    </Router>
    
    
  );
}

export default App;

    