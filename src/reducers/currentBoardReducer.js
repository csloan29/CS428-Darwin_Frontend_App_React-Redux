import ActionTypes from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case ActionTypes.VIEW_BOARD:
      if(action.payload.status === 200) {
        console.log("Data returned from viewBoard:", action.payload.data);
        return action.payload.data;
      }
      return state;
    case ActionTypes.CREATE_BOARD:
      if (action.payload.status === 201) {
        console.log("create board promise resolved with data: ", action.payload);
        return action.payload.data;
      }
      return state;
    case ActionTypes.CREATE_IDEA:
      if (action.payload.status === 201) {
        console.log("successfully created new idea for board with data: ", action.payload);
        var newState = {
          ...state
        };
        newState.ideas = state.ideas.concat([action.payload.data]);
        return newState;
      }
    default:
      return state;
  }
}
