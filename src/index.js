import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
   currentBoard: {
    id: 1,
    owner: "carter",
    title: "We need more ideas for how to run the country",
    ideas: [
      {
        id: 1,
        owner: "carter",
        board: 1,
        text: "We need more naps throughout the day",
        comments: [ 
          {
            owner: "carter",
            text: "This my great new idea!"
          },
          {
            owner: "Conner",
            text: "wow, this idea is so great! Carter for pres 2024"
          }
        ]

      },
    ]
  }
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(promise))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
