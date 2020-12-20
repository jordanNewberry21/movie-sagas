import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// component imports
import Home from '../Home/Home';
import AddMovie from '../AddMovie/AddMovie';
import MovieCard from '../MovieCard/MovieCard';

const styles = (theme) => ({
  appBar: {
    borderRadius: 45,
    margin: '1.8rem 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 25, 1)',
  },
  heading: {
    fontFamily: 'PermanentMarker, sans-serif',
    color: 'rgba(220,183,255, 1)',
  },
});

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <>
        <Router>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>
            Movie Time!
          </Typography>
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
              <Route path='/details' component={MovieCard} />
          </AppBar>
          </Router>
      </>
    );
  }
}

export default withStyles(styles)(Header);
