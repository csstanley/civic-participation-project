import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from "./components/nytimes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router> 
        <Route exact path="/search" component={News}/>
      </Router>


      </div>
    );
  }
}

export default App;
