import { UserInfoTypes } from '../../constants';
import {
  TFetchUserInfoFailure,
  TFetchUserInfoFailurePayload,
  TFetchUserInfoRequest,
  TFetchUserInfoSuccess,
  TFetchUserInfoSuccessPayload,
} from '../../types';

export const fetchUserInfoRequest = (userId: string): TFetchUserInfoRequest => ({
  type: UserInfoTypes.FETCH_USER_INFO_REQUEST,
  userId,
});

export const fetchUserInfoSuccess = (
  payload: TFetchUserInfoSuccessPayload,
): TFetchUserInfoSuccess => ({
  type: UserInfoTypes.FETCH_USER_INFO_SUCCESS,
  payload,
});

export const fetchUserInfoFailure = (
  payload: TFetchUserInfoFailurePayload,
): TFetchUserInfoFailure => ({
  type: UserInfoTypes.FETCH_USER_INFO_FAILURE,
  payload,
});
