import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieCard extends Component{
    render(){
        return(
            <div>
                <h2>hello from MovieCard component</h2>
                <p>{JSON.stringify(this.props.reduxState.movieCard)}</p>
            </div>
        ) // end return
    } // end render
} // end class

// redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(MovieCard);
