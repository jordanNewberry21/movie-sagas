import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// component imports
import Home from '../Home/Home';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/add'>AddMovie</Link>
                </li>
              </ul>
            </nav>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddMovie} />
        </Router>
        <p>&copy; 2020 Jordan Newberry</p>
      </div>
    );
  }
}

export default App;
