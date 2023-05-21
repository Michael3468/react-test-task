import { TPostState, PostTypes, TPostActions } from '../../types';

const initialState: TPostState = {
  pending: false,
  posts: [],
  error: null,
};

export default (action: TPostActions, state = initialState) => {
  switch (action.type) {
    case PostTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case PostTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload?.posts ?? [],
        error: null,
      };
    case PostTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload?.error ?? null,
      };
    default:
      return { ...state };
  }
};
