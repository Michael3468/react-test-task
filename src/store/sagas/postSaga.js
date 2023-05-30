import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { postsTypes } from '../../constants';
import { fetchPostFailure, fetchPostSuccess } from '../actions/postActions';

const getPosts = (id) =>
  (id
    ? axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    : axios.get('https://jsonplaceholder.typicode.com/posts'));

function* fetchPostsSaga(action) {
  try {
    const response = yield call(action.userId ? () => getPosts(action.userId) : getPosts);
    yield delay(500);
    yield put(fetchPostSuccess({ posts: response.data }));
  } catch (error) {
    yield put(fetchPostFailure({ error: error.message }));
  }
}

function* postsSaga() {
  yield all([takeLatest(postsTypes.FETCH_POSTS_REQUEST, (action) => fetchPostsSaga(action))]);
}

export default postsSaga;
