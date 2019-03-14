import { takeEvery } from 'redux-saga/effects';
import ActionTypes from '../actions';

function* execute(action) {
  console.log("do something");
}

export default function* watchExample() {
  yield takeEvery(ActionTypes.LOGIN, execute);
}
