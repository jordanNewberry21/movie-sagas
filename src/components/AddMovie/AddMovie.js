import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

// Material-UI styles
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'block',
    flexWrap: 'none',
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

    cancel = () => {
        this.props.history.push('/');
    }

    handleChange = (event, input) => {
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [input]: event.target.value,
            }
        })
    } 

    handleSubmit = (event, newMovie) => {
        this.props.dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        this.props.history.push('/');
    }

    render(){
        const classes = this.props.classes;
        return(
            <div>
                <h2>Want to Add a New Movie?</h2>
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
                    <Select
                        value={this.state.newMovie.genre_id}
                        onChange={(event) => this.handleChange(event, 'genre_id')}
                        input={
                        <OutlinedInput
                            labelWidth={100}
                            label="Genres"
                            name="Genres"
                            id="age-simple"
                        />
                        }
                        >
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
            </div>
        ) // end return
    } // end render
} // end class

export default withStyles(styles)(connect()(AddMovie));
