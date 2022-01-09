import React from 'react';
import './App.css';
import Submission from './Components/Submission.js';
import Response from './Components/Response.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
// import Modify from './Components/Modify.js'; removed due to combining with submission component

function App() {
  return (
    <Router>
      <div className="App">
        <div className = "links">
          <Link className = "link" to = '/'> Home </Link>
          <Link className = "link" to = '/submit'> Flash Cards </Link>
          <Link className = "link" to = '/about'> About </Link>

        </div>
        <div className = "results">
          <Switch>
            <Route exact path ='/'> <Home /> </Route>
            <Route path = '/submit'> <Submission /> </Route>
            <Route path = '/response'> <Response /> </Route>
            <Route path = '/modify/:id'> <Submission /> </Route>
            <Route path = '/about'> <About /> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
