import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import LoginPage from './components/LoginPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(promise))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
