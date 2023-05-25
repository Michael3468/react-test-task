import { PostsTypes } from '../../constants';
import { TPostState, TPostActions } from '../../types';

const initialState: TPostState = {
  pending: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: TPostActions = { type: '' }) => {
  switch (action.type) {
    case PostsTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case PostsTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload?.posts ?? [],
        error: null,
      };
    case PostsTypes.FETCH_POSTS_FAILURE:
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
