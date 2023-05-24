import { TCommentState, CommentsTypes, TCommentActions } from '../../types';

const initialState: TCommentState = {
  pending: false,
  comments: {
    data: [],
    postId: null,
  },
  error: null,
};

export default (state = initialState, action: TCommentActions = { type: '' }) => {
  switch (action.type) {
    case CommentsTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          data: [],
          postId: null,
        },
        pending: true,
      };
    case CommentsTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: action.payload?.comments ?? [],
        error: null,
      };
    case CommentsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        comments: {
          data: [],
          postId: null,
        },
        error: action.payload?.error ?? null,
      };
    default:
      return { ...state };
  }
};