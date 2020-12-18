import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';


class Home extends Component{
    render(){
        return(
            <div>
                <h2>hello from Home component</h2>
                <MovieList />
            </div>
        ) // end return
    } // end render
} // end class

export default connect()(Home);
