import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Material-UI styles
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        width: 400,
    },
    container: {
        display: 'flex',
        flexWrap: 'row',
        flexDirection: 'column',
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    heading: {
        fontFamily: 'PermanentMarker, sans-serif',
        color: 'rgba(220,183,255, 1)',
        },
});

class AddMovie extends Component{

    // local state
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''

        }
    }

    cancel = () => { // cancel function pushes back to Home view
        this.props.history.push('/');
    }

    handleChange = (event, input) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [input]: event.target.value,
            } // storing current information in local state
        })
    } 

    handleSubmit = (event, newMovie) => {
        this.props.history.push('/');
        this.props.dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    } // this function dispatches two actions, one to POST to the database,
      // and another to run the GET route to get the new list of movies

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Typography className={classes.heading} variant='h4'>
                    Want to Add a New Movie?
                </Typography>
                <Paper className={classes.root} elevation={1}>
                    <form className={classes.container}>
                        <TextField
                            required
                            id="standard-name"
                            label="Title"
                            className={classes.textField}
                            value={this.state.newMovie.title}
                            onChange={(event) => this.handleChange(event, 'title')}
                            variant="outlined" />
                        <TextField
                            required
                            id="standard-name"
                            label="Image URL"
                            className={classes.textField}
                            value={this.state.newMovie.poster}
                            onChange={(event) => this.handleChange(event, 'poster')}
                            variant="outlined" />
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows="5"
                            value={this.state.newMovie.description}
                            onChange={(event) => this.handleChange(event, 'description')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"/>
                        <Select onChange={(event) => this.handleChange(event, 'genre_id')}
                            value={this.state.newMovie.genre_id}
                            input={
                            <OutlinedInput
                                labelWidth={100}
                                label='Genres'
                                name="Genres"
                                id="genres-simple"/>}>

                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Adventure</MenuItem>
                            <MenuItem value={2}>Animated</MenuItem>
                            <MenuItem value={3}>Biographical</MenuItem>
                            <MenuItem value={4}>Comedy</MenuItem>
                            <MenuItem value={5}>Disaster</MenuItem>
                            <MenuItem value={6}>Drama</MenuItem>
                            <MenuItem value={7}>Epic</MenuItem>
                            <MenuItem value={8}>Fantasy</MenuItem>
                            <MenuItem value={9}>Musical</MenuItem>
                            <MenuItem value={10}>Romantic</MenuItem>
                            <MenuItem value={11}>Sci-Fi</MenuItem>
                            <MenuItem value={12}>Space-Opera</MenuItem>
                            <MenuItem value={13}>Superhero</MenuItem>
                        </Select>
                        <Button onClick={(event) => this.handleSubmit(event, this.state.newMovie)}
                                className={classes.button}
                                variant='contained'
                                color='primary'>
                            Save
                        </Button>
                        <Button onClick={this.cancel}
                                className={classes.button}
                                variant='contained'
                                color='secondary'>
                            Cancel
                        </Button>
                    </form>
                </Paper>
            </div>
        ) // end return
    } // end render
} // end class

export default withStyles(styles)(connect()(AddMovie));
