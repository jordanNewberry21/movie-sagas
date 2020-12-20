import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieCard.css';

// material-ui
import {
    Card,
    CardMedia,
    Typography,
    Button,
  } from '@material-ui/core';
  import { withStyles } from '@material-ui/core/styles';

  // styles
  const styles = (theme) => ({
    root: {
        display: 'inline-block',
        flexDirection: 'row',
        justifyContent: 'center',
        background: 'rgba(0, 0, 25, 1)'
    },
    media: {
        height: '100%',
        width: '100%'

      },
      actions: {
        display: 'flex',
      },
      heading: {
          fontFamily: 'PermanentMarker, sans-serif',
          color: 'rgba(220,183,255, 1)',
      },
      text: {
          fontFamily: 'Overpass, sans-serif',
          color: 'rgba(220,183,255, 1)',
      },
  });

class MovieCard extends Component{

    backToHome = () => {
        this.props.history.push('/');
    }

    render(){
        const {classes} = this.props;
        const movie = this.props.reduxState.movieCard;
        return(
            <div className="movieCard">
               
                    <Typography className={classes.heading} variant='h3'>{movie.title}</Typography>
                    <Card component={Card} className={classes.root}>
                        <CardMedia
                            component='img'
                            className={classes.media}
                            image={movie.poster}
                            alt={movie.title} />
                    </Card>
                    <Typography className={classes.text} variant='h6'>
                        {movie.description}
                    <ul className="genreList">
                        <li>Genres:</li>
                    {this.props.reduxState.movieGenres.map((g, i) => (
                        <li key={i}>{g.name}</li>
                    ))}
                    </ul>
                    </Typography>
                
                    <Button onClick={this.backToHome}
                            variant='outlined'
                            color='primary'>
                        Back To List
                    </Button>
                
            </div>
        ) // end return
    } // end render
} // end class

// redux state
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });

export default withStyles(styles)(connect(mapReduxStateToProps)(MovieCard));
