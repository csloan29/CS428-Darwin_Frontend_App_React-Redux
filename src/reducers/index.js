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
    name: <string>,
    id: <string>,
    votes_remaining,
    is_owner: <bool>,
    ideas: [{
    		id: <int>,
    		title: <string>,
    		description: <string>,
    		owner: {id: <int> }, //this attaches to a user ID,
    		is_owner: <boolean>,
    		board: {id: <int>},
    		alive: <bool>,
    		has_voted: <bool>,
    		comments: [{ //this is ordered by time
    			user: <int>, //this int is an owner ID
    			idea: <int>,
    			message: <string>,
    			timestamp: <string>
    		}, ...]
    }, ...],
    alive: <bool>, //whether or not the admin started the voting process
    total_votes: <int>
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

export function getCurrentBoard(state) {
  return state.currentBoard;
}
