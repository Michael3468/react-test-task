import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { postsTypes } from '../../constants';
import { TFetchPostRequest } from '../../types';
import { fetchPostFailure, fetchPostSuccess } from '../actions/postActions';

const getPosts = (id?: number) =>
  (id
    ? axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    : axios.get('https://jsonplaceholder.typicode.com/posts'));

function* fetchPostsSaga(action: TFetchPostRequest) {
  try {
    const { data } = yield call(action.userId ? () => getPosts(action.userId) : getPosts);
    yield delay(500);
    yield put(fetchPostSuccess({ posts: data }));
  } catch (error) {
    yield put(fetchPostFailure({ error: (error as Error).message }));
  }
}

function* postsSaga() {
  yield all([takeLatest(postsTypes.FETCH_POSTS_REQUEST, (action) => fetchPostsSaga(action))]);
}

export default postsSaga;
