import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import {
    Grid,
    Card,
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });

class MovieList extends Component{

    render(){
        const classes = this.props;
        return(
            <div>
                <Grid container spacing={0} alignItems='stretch'>
                    {this.props.reduxState.movies.map((movie) => (
                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={4}>
                            <Card onClick={(event) => this.props.goToMovieCard(event, movie.id, movie)}
                                component={Card} className={classes.root}>
                                <CardContent>
                                    <Typography variant='h4'>{movie.title}</Typography>
                                </CardContent>
                                <CardMedia
                                component='img'
                                className={classes.media}
                                src={movie.poster}
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
