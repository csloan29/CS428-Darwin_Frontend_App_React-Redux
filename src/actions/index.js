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

let ActionTypes = {
  CREATE_BOARD: 'CREATE_BOARD',
  VIEW_BOARD: 'VIEW_BOARD'
}

export default ActionTypes;
