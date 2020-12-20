import React, { Component } from 'react';

import './App.css';

// component imports
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <p>&copy; 2020 Jordan Newberry</p>
      </div>
    );
  }
}

export default App;
