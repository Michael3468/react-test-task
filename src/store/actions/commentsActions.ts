import { commentsTypes } from '../../constants';
import {
  TFetchCommentsFailure,
  TFetchCommentsFailurePayload,
  TFetchCommentsRequest,
  TFetchCommentsSuccess,
  TFetchCommentsSuccessPayload,
} from '../../types';

const fetchCommentsRequest = (id: number): TFetchCommentsRequest => ({
  type: commentsTypes.FETCH_COMMENTS_REQUEST,
  id,
});

const fetchCommentsSuccess = (payload: TFetchCommentsSuccessPayload): TFetchCommentsSuccess => ({
  type: commentsTypes.FETCH_COMMENTS_SUCCESS,
  payload,
});

const fetchCommentsFailure = (payload: TFetchCommentsFailurePayload): TFetchCommentsFailure => ({
  type: commentsTypes.FETCH_COMMENTS_FAILURE,
  payload,
});

export { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure };
