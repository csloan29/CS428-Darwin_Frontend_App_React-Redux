import axios from 'axios';
const baseURL = 'http://ec2-35-155-143-61.us-west-2.compute.amazonaws.com:7004';

export function login(user, password) {
  //make some API call...
  return {
    type: ActionTypes.LOGIN,
    payload: {}
  }
}

export function register(user, password, email) {
  //make some API call...
  //const promise = axios.post(`${baseURL}/register`);
  return {
    type: ActionTypes.REGISTER,
    payload: {}//promise
  }
}

export function createBoard(title) {
  //make some API call...
  console.log("Creating board with title:", title);
  return {
    type: ActionTypes.CREATE_BOARD,
    payload: {}
  }
}

export function viewBoard(boardID) {
  //make some API call...
  console.log("Retrieving board with ID:", boardID);
  return {
    type: ActionTypes.VIEW_BOARD,
    payload: {}
  }
}

export function createIdea(title) {
  console.log("Creating idea with title: ", title);
  return {
    type: ActionTypes.CREATE_IDEA,
    payload: {}
  }
}

export function ViewIdea(ideaID) {
  console.log("Retreiving idea with id: ", ideaID);
  return {
    type: ActionTypes.VIEW_IDEA,
    payload: {}
  }
}

export function createComment(text) {
  console.log("Createing idea with text: ", text);
  return {
    type: ActionTypes.CREATE_COMMENT,
    payload: {}
  }
}

let ActionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  CREATE_BOARD: 'CREATE_BOARD',
  VIEW_BOARD: 'VIEW_BOARD',
  //CREATE IDEA
  //VIEW IDEA
  //CREATE COMMENT
}

export default ActionTypes;
