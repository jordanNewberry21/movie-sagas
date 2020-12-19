import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import {
    Grid,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from '@material-ui/core';
  import { withStyles } from '@material-ui/core/styles';

  // styles
  const styles = (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });

class MovieList extends Component{

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }

    // movieCard = (event, movieId) => {
    //     this.props.dispatch({
    //         type: 'FETCH_DETAILS',
    //         payload: movieId,
    //     });
    //     console.log(this.props.history);
    //     this.props.history.push('/details');
    // }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>hello from MovieList component</h2>
                <Grid container spacing={3} alignItems='stretch'>
                    {this.props.reduxState.movies.map((movie) => (
                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={4}>
                            <Card onClick={(event) => this.props.goToMovieCard(event, movie.id)}
                                component={Card} className={classes.root}>
                                <CardContent>
                                    <Typography variant='h4'>{movie.title}</Typography>
                                </CardContent>
                                <CardMedia
                                component='img'
                                className={classes.media}
                                image={movie.poster}
                                alt={movie.title}
                              />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        ) // end return
    } // end render
} // end class

// redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default withStyles(styles)(connect(mapReduxStateToProps)(MovieList));
