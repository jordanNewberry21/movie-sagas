import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieCard extends Component{

    

    render(){
        const movie = this.props.reduxState.movieCard;
        return(
            <div>
                
                <h2>{movie.title}</h2>
                <img src={movie.poster} />
                <h4>{movie.description}</h4>
                <h5>
                    Genres:
                    <ul>
                    {this.props.reduxState.movieGenres.map((g) => (
                        <li>{g.name}</li>
                    ))}
                    </ul>
                </h5>
            </div>
        ) // end return
    } // end render
} // end class

// redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(MovieCard);
