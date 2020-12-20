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
  import HighlightOffIcon from '@material-ui/icons/HighlightOff';
  import DescriptionIcon from '@material-ui/icons/Description';
  import CardActions from '@material-ui/core/CardActions';
  import IconButton from '@material-ui/core/IconButton';
  import { withStyles } from '@material-ui/core/styles';

  // styles
  const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'rgba(220,183,255, 1)',
    },
    media: {
        height: '100%',
        width: '100%'

      },
      actions: {
        display: 'flex',
      },
      heading: {
          fontFamily: 'Overpass, sans-serif',
          color: 'rgba(0, 0, 25, 1)',
          background: 'rgba(220,183,255, 1)',
      }
  });

class MovieList extends Component{

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Grid container spacing={1} alignItems='stretch'>
                    {this.props.reduxState.movies.map((movie) => (
                        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={4}>
                            <Card component={Card} className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.heading} variant='h4'>{movie.title}</Typography>
                                </CardContent>
                                <CardMedia
                                component='img'
                                className={classes.media}
                                image={movie.poster}
                                alt={movie.title}
                                />
                                <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton onClick={(event) => this.props.goToMovieCard(event, movie.id, movie)}
                                    aria-label="Show Movie Details">
                                    <DescriptionIcon />
                                </IconButton>
                                <IconButton aria-label="Delete">
                                    <HighlightOffIcon />
                                </IconButton>
                                </CardActions>
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
