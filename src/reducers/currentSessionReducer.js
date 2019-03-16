import ActionTypes from '../actions';
import { saveToken, saveUser } from '../auth';

export default function(state = {}, action){
  switch (action.type) {
    case ActionTypes.REGISTER: //this ought to change
      if(action.payload.status === 201) {
        saveToken(action.payload.data.token);
        saveUser(action.payload.data.user);
        return {
          isLoggedIn: true,
          user: action.payload.data.user
        }
      }
      console.log("TEST", action.payload);
      return state;
    case ActionTypes.LOGIN: //this ought to change
      if(action.payload.status === 200) {
        saveToken(action.payload.data.token);
        saveUser(action.payload.data.user);
        return {
          isLoggedIn: true,
          user: action.payload.data.user
        };
      }
      console.log("TEST", action.payload);
      return state;
    case ActionTypes.SIGN_OUT:
      return {
        isLoggedIn: false,
      }
      return state;
    default:
      return state;
  }
}
