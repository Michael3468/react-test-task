import {
  CommentsTypes,
  TFetchCommentsFailure,
  TFetchCommentsFailurePayload,
  TFetchCommentsRequest,
  TFetchCommentsSuccess,
  TFetchCommentsSuccessPayload,
} from '../../types';

export const fetchCommentsRequest = (id: number): TFetchCommentsRequest => ({
  type: CommentsTypes.FETCH_COMMENTS_REQUEST,
  id,
});

export const fetchCommentsSuccess = (
  payload: TFetchCommentsSuccessPayload,
): TFetchCommentsSuccess => ({
  type: CommentsTypes.FETCH_COMMENTS_SUCCESS,
  payload,
});

export const fetchCommentsFailure = (
  payload: TFetchCommentsFailurePayload,
): TFetchCommentsFailure => ({
  type: CommentsTypes.FETCH_COMMENTS_FAILURE,
  payload,
});
