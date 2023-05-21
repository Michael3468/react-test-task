/* eslint-disable import/prefer-default-export */
type TComment = {
  title: string;
  text: string;
};

type TPost = {
  userId: number;
  id: number;
  title: string;
  userImg: string;
  body: string;
  comments: TComment[];
};

type TPostState = {
  pending: boolean;
  posts: TPost[];
  error: Error | null;
};

const PostTypes = {
  FETCH_POST_REQUEST: 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS: 'FETCH_POST_SUCCESS',
  FETCH_POST_FAILURE: 'FETCH_POST_FAILURE',
};

type TPostActions = {
  type: string;
  payload?: {
    posts: TPost[];
    error?: string;
  };
};

type TFetchPostRequest = {
  type: typeof PostTypes.FETCH_POST_REQUEST;
};

type TFetchPostSuccessPayload = {
  posts: TPost[];
};

type TFetchPostFailurePayload = {
  error: string;
};

type TFetchPostSuccess = {
  type: typeof PostTypes.FETCH_POST_SUCCESS;
  payload: TFetchPostSuccessPayload;
};

type TFetchPostFailure = {
  type: typeof PostTypes.FETCH_POST_FAILURE;
  payload: TFetchPostFailurePayload;
};

export type {
  TPostState,
  TPost,
  TPostActions,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
  TFetchPostFailure,
  TFetchPostFailurePayload,
};

export { PostTypes };
