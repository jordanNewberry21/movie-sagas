import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';


class Home extends Component{

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    // movieCard function is passed as props to movieList component as props to have access to Router history
    movieCard = (event, movieId, movie) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: movieId,
        });
        this.props.dispatch({
            type: 'SET_DETAILS',
            payload: movie
        });
        this.props.history.push('/details');
    } // two dispatches in this function to get both movie details
      // and genres sent to the MovieCard component

    render(){
        return(
            <div>
                <MovieList goToMovieCard={this.movieCard} />
            </div>
        ) // end return
    } // end render
} // end class

export default connect()(Home);
