import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import { isLoggedIn, getUser } from './auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  currentBoard: {
  },
  currentSession: {
    isLoggedIn: isLoggedIn(),
    user: getUser()
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(promise, sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
