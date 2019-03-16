import { combineReducers } from 'redux';
import currentBoardReducer from './currentBoardReducer';
import currentSessionReducer from './currentSessionReducer';

const rootReducer = combineReducers({
  currentSession: currentSessionReducer,
  currentBoard: currentBoardReducer
});

export default rootReducer;

/* This is what our store looks like:
{
  currentSession: {
    isLoggedIn: <bool>,
    user: {
      ???????
    }
  },
  currentBoard: {
    id: <string>,
    ideas: [{

    }, ...],
    isAdmin: <bool>,
    etc.
  }
}
*/

export function getIsLoggedIn(state) {
  return state.currentSession.isLoggedIn;
}

export function getUserID(state) {
  return state.currentSession.user.id;
}

export function getCurrentBoardID(state) {
  return state.currentBoard.id;
}
