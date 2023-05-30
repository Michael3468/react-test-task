import { UserInfoTypes } from '../../constants';
import {
  TFetchUserInfoFailure,
  TFetchUserInfoFailurePayload,
  TFetchUserInfoRequest,
  TFetchUserInfoSuccess,
  TFetchUserInfoSuccessPayload,
} from '../../types';

const fetchUserInfoRequest = (userId: string): TFetchUserInfoRequest => ({
  type: UserInfoTypes.FETCH_USER_INFO_REQUEST,
  userId,
});

const fetchUserInfoSuccess = (payload: TFetchUserInfoSuccessPayload): TFetchUserInfoSuccess => ({
  type: UserInfoTypes.FETCH_USER_INFO_SUCCESS,
  payload,
});

const fetchUserInfoFailure = (payload: TFetchUserInfoFailurePayload): TFetchUserInfoFailure => ({
  type: UserInfoTypes.FETCH_USER_INFO_FAILURE,
  payload,
});

export { fetchUserInfoRequest, fetchUserInfoSuccess, fetchUserInfoFailure };
