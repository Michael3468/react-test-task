import { PostsTypes } from '../../constants';
import {
  TFetchPostFailure,
  TFetchPostFailurePayload,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
} from '../../types';

export const fetchPostRequest = (userId: string | null = null): TFetchPostRequest => ({
  type: PostsTypes.FETCH_POSTS_REQUEST,
  userId,
});

export const fetchPostSuccess = (payload: TFetchPostSuccessPayload): TFetchPostSuccess => ({
  type: PostsTypes.FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostFailure = (payload: TFetchPostFailurePayload): TFetchPostFailure => ({
  type: PostsTypes.FETCH_POSTS_FAILURE,
  payload,
});
