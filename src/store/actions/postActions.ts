import { PostTypes } from '../../constants';
import {
  TFetchPostFailure,
  TFetchPostFailurePayload,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
} from '../../types';

export const fetchPostRequest = (): TFetchPostRequest => ({
  type: PostTypes.FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (payload: TFetchPostSuccessPayload): TFetchPostSuccess => ({
  type: PostTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostFailure = (payload: TFetchPostFailurePayload): TFetchPostFailure => ({
  type: PostTypes.FETCH_POST_FAILURE,
  payload,
});
