import { all, fork } from 'redux-saga/effects';

import commentsSaga from './commentSaga';
import postsSaga from './postSaga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
  yield all([fork(postsSaga)]);
  yield all([fork(commentsSaga)]);
}
