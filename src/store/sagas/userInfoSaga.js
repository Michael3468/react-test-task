import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { userInfoTypes } from '../../constants';
import { fetchUserInfoFailure, fetchUserInfoSuccess } from '../actions/userInfoActions';

const getUserInfo = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* fetchUserInfoSaga(action) {
  try {
    const response = yield call(() => getUserInfo(action.userId));
    yield delay(500);
    yield put(fetchUserInfoSuccess({ user: response.data }));
  } catch (error) {
    yield put(fetchUserInfoFailure({ error: error.message }));
  }
}

function* userInfoSaga() {
  yield all([
    takeLatest(userInfoTypes.FETCH_USER_INFO_REQUEST, (action) => fetchUserInfoSaga(action)),
  ]);
}

export default userInfoSaga;
