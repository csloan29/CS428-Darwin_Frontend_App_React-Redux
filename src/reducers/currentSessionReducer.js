import ActionTypes from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case ActionTypes.REGISTER: //this ought to change
      console.log("REGISTER", action.payload);
      return {
        isLoggedIn: true,
        user: {

        }
      };
    case ActionTypes.LOGIN: //this ought to change
      return state;
    default:
      return state;
  }
}
