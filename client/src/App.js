import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import News from "./components/api/news/news.js";
import Voting from "./components/api/voting/voting-api.js";


class App extends Component {
  render() {
    return (
      <div className="App">


      <Router> 
      <div>
       {/* <Route exact path="/" component={Home}/>  */}
        <Route exact path="/" component={News}/>
        <Route path="/voting" component={Voting}/>
        {/* <Route path="/navigation" component={Navigation}/> */}
        </div>
      </Router>



      </div>
    );
  }
}

export default App;
