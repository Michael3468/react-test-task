import { PostsTypes } from '../../constants';
import {
  TFetchPostFailure,
  TFetchPostFailurePayload,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
} from '../../types';

const fetchPostRequest = (userId: string | null = null): TFetchPostRequest => ({
  type: PostsTypes.FETCH_POSTS_REQUEST,
  userId,
});

const fetchPostSuccess = (payload: TFetchPostSuccessPayload): TFetchPostSuccess => ({
  type: PostsTypes.FETCH_POSTS_SUCCESS,
  payload,
});

const fetchPostFailure = (payload: TFetchPostFailurePayload): TFetchPostFailure => ({
  type: PostsTypes.FETCH_POSTS_FAILURE,
  payload,
});

export { fetchPostRequest, fetchPostSuccess, fetchPostFailure };
