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

import { isLoggedIn } from './auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  currentBoard: {
   id: 1,
   owner: "Carter",
   title: "We need more ideas for how to run the country",
   ideas: [
     {
       id: 1,
       owner: "Carter",
       board: 1,
       votes: 5,
       text: "We need more naps throughout the day",
       explanation: "This is my great explanation of my idea",
       comments: [ 
         {
           owner: "Carter",
           text: "This my great new idea!"
         },
         {
           owner: "Connor",
           text: "wow, this idea is so great! Carter for pres 2024"
         }
       ]

     },
     {
      id: 2,
      owner: "Connor",
      board: 2,
      votes: 2,
      text: "We need to actually be productive and fill out our spreadsheets on time",
      explanation: "This is my great explanation of my idea",
      comments: [ 
        {
          owner: "Connor",
          text: "This my idea. I'm right, too"
        },
        {
          owner: "Carter",
          text: "wow, this idea is so great, also!"
        }
      ]

    },
   ]
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
