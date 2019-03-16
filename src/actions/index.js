import axios from 'axios';
import { getToken } from '../auth';
const baseURL = 'http://ec2-35-155-143-61.us-west-2.compute.amazonaws.com:7004';

export function login(user, password) {
  const promise = axios.post(`${baseURL}/login/`, {
    username: user,
    password
  });
  return {
    type: ActionTypes.LOGIN,
    payload: promise
  }
}

export function register(user, password, firstName, lastName) {
  const promise = axios.post(`${baseURL}/register/`, {
    username: user,
    password,
    first_name: firstName,
    last_name: lastName
  });
  return {
    type: ActionTypes.REGISTER,
    payload: promise
  }
}

export function createBoard(title) {
  console.log("Creating board with title:", title);
  const promise = axios.post(`${baseURL}/boards/`, {
    name: title
  }, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  });
  return {
    type: ActionTypes.CREATE_BOARD,
    payload: promise
  }
}

export function viewBoard(boardID) {
  console.log("Retrieving board with ID:", boardID);
  const promise = axios.get(`${baseURL}/boards/${boardID}/`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  });
  return {
    type: ActionTypes.VIEW_BOARD,
    payload: promise
  }
}

export function createIdea(title) {
  console.log("Creating idea with title: ", title);
  return {
    type: ActionTypes.CREATE_IDEA,
    payload: {}
  }
}

export function vote(ideaID) {
  console.log("Voting on idea with id: ", ideaID);
  const promise = axios.post(`${baseURL}/vote/`, {
    idea: ideaID
  }, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  });
  return {
    type: ActionTypes.VOTE,
    payload: promise
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
  VOTE: 'VOTE'
  //CREATE IDEA
  //VIEW IDEA
  //CREATE COMMENT
}

export default ActionTypes;
