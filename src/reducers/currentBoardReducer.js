import ActionTypes from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case ActionTypes.VIEW_BOARD:
      if(action.payload.status === 200) {
        console.log("Data returned from viewBoard:", action.payload.data);
      }
      return state;
    default:
      return state;
  }
}
