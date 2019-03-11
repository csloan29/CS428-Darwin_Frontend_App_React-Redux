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
  CREATE_BOARD: 'CREATE_BOARD',
  VIEW_BOARD: 'VIEW_BOARD',
  //CREATE IDEA
  //VIEW IDEA
  //CREATE COMMENT
}

export default ActionTypes;
