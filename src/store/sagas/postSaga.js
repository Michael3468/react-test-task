import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { PostTypes } from '../../types';
import { fetchPostFailure, fetchPostSuccess } from '../actions/postActions';

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');

function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(fetchPostSuccess({ posts: response.data }));
  } catch (error) {
    yield put(fetchPostFailure({ error: error.message }));
  }
}

function* postsSaga() {
  yield all([takeLatest(PostTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
