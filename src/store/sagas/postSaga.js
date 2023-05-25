import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { PostsTypes } from '../../constants';
import { fetchPostFailure, fetchPostSuccess } from '../actions/postActions';

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');

function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);

    yield delay(500);
    yield put(fetchPostSuccess({ posts: response.data }));
  } catch (error) {
    yield put(fetchPostFailure({ error: error.message }));
  }
}

function* postsSaga() {
  yield all([takeLatest(PostsTypes.FETCH_POSTS_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
