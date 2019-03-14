import watchExample from './exampleSaga';
import { all } from 'redux-saga/effects';

export default function*  rootSaga() {
  yield all([
    watchExample()
  ])
};
