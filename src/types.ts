/* eslint-disable import/prefer-default-export */
type TPostState = {
  pending: boolean;
  posts: [];
  error: Error | null;
};

const PostTypes = {
  FETCH_POST_REQUEST: 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS: 'FETCH_POST_SUCCESS',
  FETCH_POST_FAILURE: 'FETCH_POST_FAILURE',
};

type TComment = {
  title: string;
  text: string;
};

type TPost = {
  post: {
    title: string;
    userImg: string;
    text: string;
    comments: TComment[];
  };
};

type TPostActions = {
  type: string;
  payload?: {
    posts: TPost[];
    error?: string;
  };
}

export type { TPostState, TPost, TPostActions };
export { PostTypes };
