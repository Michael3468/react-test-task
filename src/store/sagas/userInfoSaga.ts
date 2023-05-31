import axios from 'axios';
import { Action } from 'redux';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { userInfoTypes } from '../../constants';
import { TFetchUserInfoRequest } from '../../types';
import { fetchUserInfoFailure, fetchUserInfoSuccess } from '../actions/userInfoActions';

const getUserInfo = (id: number) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* fetchUserInfoSaga(action: TFetchUserInfoRequest) {
  try {
    const { data } = yield call(() => getUserInfo(action.userId));
    yield delay(500);
    yield put(fetchUserInfoSuccess({ user: data }));
  } catch (error) {
    yield put(fetchUserInfoFailure({ error: (error as Error).message }));
  }
}

function* userInfoSaga() {
  yield all([
    takeLatest<Action<string>, typeof fetchUserInfoSaga>(
      userInfoTypes.FETCH_USER_INFO_REQUEST,
      (action) => fetchUserInfoSaga(action),
    ),
  ]);
}

export default userInfoSaga;
