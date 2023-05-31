import { userInfoTypes } from '../../constants';
import {
  TFetchUserInfoFailure,
  TFetchUserInfoFailurePayload,
  TFetchUserInfoRequest,
  TFetchUserInfoSuccess,
  TFetchUserInfoSuccessPayload,
} from '../../types';

const fetchUserInfoRequest = (userId: number): TFetchUserInfoRequest => ({
  type: userInfoTypes.FETCH_USER_INFO_REQUEST,
  userId,
});

const fetchUserInfoSuccess = (payload: TFetchUserInfoSuccessPayload): TFetchUserInfoSuccess => ({
  type: userInfoTypes.FETCH_USER_INFO_SUCCESS,
  payload,
});

const fetchUserInfoFailure = (payload: TFetchUserInfoFailurePayload): TFetchUserInfoFailure => ({
  type: userInfoTypes.FETCH_USER_INFO_FAILURE,
  payload,
});

export { fetchUserInfoRequest, fetchUserInfoSuccess, fetchUserInfoFailure };
