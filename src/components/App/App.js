import React, { Component } from 'react';

import './App.css';

// component imports
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        {/* bringing in Header component which is now the main component */}
        <Header />
        <p>&copy; 2020 Jordan Newberry</p>
      </div>
    );
  }
}

export default App;
