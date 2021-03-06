import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* addMovie(action) {
    console.log('in add movie saga......');
    console.log('movie to add........', action.payload);
    try {
        axios.post('/api/movie', action.payload); // sending new movie to POST
        yield put({ type: 'FETCH_MOVIES' }); // get updated movie list
    } catch (error) {
        console.log('error with movie detail get request.....', error);
        alert('something went wrong. please try again.');
      }
}

function* fetchDetails(action) {
    console.log('in fetch movie details saga.......');
    try { // getting genres for movie by ID
        const response = yield axios.get('/api/genre/' + action.payload);
        yield put({ type: 'SET_GENRES', payload: response.data }) // sending to reducer
    } catch (error) {
        console.log('error with movie detail get request.....', error);
        alert('something went wrong. please try again.');
      }

}

function* fetchMovies() {
    console.log('in fetch movies saga.......');
    try { // getting whole movie list from server
        const response = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: response.data }) // send to reducer
    } catch (error) {
        console.log('error with movie get request.....', error);
        alert('something went wrong. please try again.');
      }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store individual movie details
const movieCard = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store individual movie genres
const movieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store all movie genres
const allGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        allGenres,
        movieCard,
        movieGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
