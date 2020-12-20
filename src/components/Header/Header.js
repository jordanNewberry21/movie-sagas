import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const styles = (theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '1.8em 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
});

class Header extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Movie Time!
        </Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
