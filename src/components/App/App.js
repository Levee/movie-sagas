import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={Movies} />
          <Route path='/details' component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
