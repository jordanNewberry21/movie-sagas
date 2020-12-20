import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieCard extends Component{

    backToHome = () => {
        this.props.history.push('/');
    }

    render(){
        const movie = this.props.reduxState.movieCard;
        return(
            <div>
                
                <h2>{movie.title}</h2>
                <img src={movie.poster} />
                <h4>{movie.description}</h4>
        
                    <ul>
                        <li>Genres:</li>
                    {this.props.reduxState.movieGenres.map((g) => (
                        <li>{g.name}</li>
                    ))}
                    </ul>

                    <br /><br />

                    <button onClick={this.backToHome}>Back To List</button>
                
            </div>
        ) // end return
    } // end render
} // end class

// redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapReduxStateToProps)(MovieCard);
