import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';


class Home extends Component{

    movieCard = (event, movieId) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: movieId,
        });
        this.props.history.push('/details');
    }

    render(){
        return(
            <div>
                <h2>hello from Home component</h2>
                <MovieList goToMovieCard={this.movieCard} />
            </div>
        ) // end return
    } // end render
} // end class

export default connect()(Home);
