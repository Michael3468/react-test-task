import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { CommentsTypes } from '../../types';
import { fetchCommentsFailure, fetchCommentsSuccess } from '../actions/commentsActions';

const getComments = (id) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);

function* fetchCommentsSaga(action) {
  try {
    const response = yield call(() => getComments(action.id));

    yield delay(500);
    yield put(fetchCommentsSuccess({ comments: { data: response.data, postId: action.id } }));
  } catch (error) {
    yield put(fetchCommentsFailure({ error: error.message }));
  }
}

function* commentsSaga() {
  yield all([
    takeLatest(CommentsTypes.FETCH_COMMENTS_REQUEST, (action) => fetchCommentsSaga(action)),
  ]);
}

export default commentsSaga;
