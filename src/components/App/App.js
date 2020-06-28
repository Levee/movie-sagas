import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
