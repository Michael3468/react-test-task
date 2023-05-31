import axios from 'axios';
import { Action } from 'redux';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { commentsTypes } from '../../constants';
import { TFetchCommentsRequest } from '../../types';
import { fetchCommentsFailure, fetchCommentsSuccess } from '../actions/commentsActions';

const getComments = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);

function* fetchCommentsSaga(action: TFetchCommentsRequest) {
  try {
    const { data } = yield call(() => getComments(action.id));

    yield delay(500);
    yield put(fetchCommentsSuccess({ comments: { data, postId: action.id } }));
  } catch (error) {
    yield put(fetchCommentsFailure({ error: (error as Error).message }));
  }
}

function* commentsSaga() {
  yield all([
    takeLatest<Action<string>, typeof fetchCommentsSaga>(
      commentsTypes.FETCH_COMMENTS_REQUEST,
      (action) => fetchCommentsSaga(action),
    ),
  ]);
}

export default commentsSaga;
