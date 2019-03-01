import { combineReducers } from 'redux';
import currentBoardReducer from './currentBoardReducer';

const rootReducer = combineReducers({
  currentBoard: currentBoardReducer
});

export default rootReducer;

/* This is what our store looks like:
{
  currentBoard: {
    boardID: <string>,
    ideas: [{

    }, ...],
    isAdmin: <bool>,
    etc.
  }
}
*/
