import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome My Portfolio!</h1>
            <Navbar />
          </header>
            <Route exact path='/' component={Home} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
          <div>
            <p>GOING TO TEST GOOGLE VISION API HERE</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
