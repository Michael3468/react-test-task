import { postsTypes } from '../../constants';
import {
  TFetchPostFailure,
  TFetchPostFailurePayload,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
} from '../../types';

const fetchPostRequest = (userId: string | null = null): TFetchPostRequest => ({
  type: postsTypes.FETCH_POSTS_REQUEST,
  userId,
});

const fetchPostSuccess = (payload: TFetchPostSuccessPayload): TFetchPostSuccess => ({
  type: postsTypes.FETCH_POSTS_SUCCESS,
  payload,
});

const fetchPostFailure = (payload: TFetchPostFailurePayload): TFetchPostFailure => ({
  type: postsTypes.FETCH_POSTS_FAILURE,
  payload,
});

export { fetchPostRequest, fetchPostSuccess, fetchPostFailure };
