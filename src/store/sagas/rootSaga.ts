import { all, fork } from 'redux-saga/effects';

import commentsSaga from './commentSaga';
import postsSaga from './postSaga';
import userInfoSaga from './userInfoSaga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
  yield all([fork(postsSaga)]);
  yield all([fork(commentsSaga)]);
  yield all([fork(userInfoSaga)]);
}
