import { UserInfoTypes } from '../../constants';
import { TUserInfoState, TUserInfoActions } from '../../types';

const initialState: TUserInfoState = {
  pending: false,
  user: {
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: null,
        lng: null,
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
  error: null,
};

export default (state = initialState, action: TUserInfoActions = { type: '' }) => {
  switch (action.type) {
    case UserInfoTypes.FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        user: null,
        pending: true,
      };
    case UserInfoTypes.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload?.user ?? null,
        error: null,
      };
    case UserInfoTypes.FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload?.error ?? null,
      };
    default:
      return { ...state };
  }
};
