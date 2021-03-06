import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchMovies);
  yield takeEvery('FETCH_GENRES', fetchGenres);
  yield takeEvery('FETCH_DETAILS', fetchDetails);
  yield takeEvery('DISPATCH_EDITS', dispatchEdits);
}

function* fetchMovies() {
  try {
    const response = yield Axios.get('/movies');
    yield put({ type: 'SET_MOVIES', payload: response.data });
  } catch (error) {
    alert('Unable to retrieve movies from server.');
  }
}

function* fetchGenres(action) {
  try {
    console.log(action.payload);
    const response = yield Axios.get(`/genres/${action.payload}`);
    yield put({ type: 'SET_GENRES', payload: response.data[0].genres });
  } catch (error) {
    alert('Unable to retrieve genres from server.');
  }
}

// remembers which movie to show details for
function* fetchDetails(action) {
  try {
    yield put({ type: 'SET_DETAILS', payload: action.payload });
  } catch (error) {
    alert('Unable to retrieve details from server.');
  }
}

// sends edits to the server to save in the database
function* dispatchEdits(action) {
  try {
    yield Axios.put(`/edit/${action.payload.id + 1}`, action.payload.values);
    yield put({ type: 'FETCH_MOVIES' });
  } catch (error) {
    alert('Unable to send changes to server.');
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

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the current details page
const details = (state = null, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
