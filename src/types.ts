/* eslint-disable import/prefer-default-export */
type TComment = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TPostState = {
  pending: boolean;
  posts: TPost[];
  error: string | null;
};

type TCommentState = {
  pending: false;
  comments: TComment[];
  error: string | null;
};

// TODO: move to constants and rename to _POSTS_
const PostTypes = {
  FETCH_POST_REQUEST: 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS: 'FETCH_POST_SUCCESS',
  FETCH_POST_FAILURE: 'FETCH_POST_FAILURE',
};

const CommentsTypes = {
  FETCH_COMMENTS_REQUEST: 'FETCH_COMMENTS_REQUEST',
  FETCH_COMMENTS_SUCCESS: 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAILURE: 'FETCH_COMMENTS_FAILURE',
};

type TPostActions = {
  type: string;
  payload?: {
    posts: TPost[];
    error?: string;
  };
};

type TCommentActions = {
  type: string;
  payload?: {
    comments: TComment[];
    error?: string;
  };
};

// Fetch Posts
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

// Fetch Comments
type TFetchCommentsRequest = {
  type: typeof CommentsTypes.FETCH_COMMENTS_REQUEST;
  id: number;
};

type TFetchCommentsSuccessPayload = {
  comments: TComment[];
};

type TFetchCommentsFailurePayload = {
  error: string;
};

type TFetchCommentsSuccess = {
  type: typeof CommentsTypes.FETCH_COMMENTS_SUCCESS;
  payload: TFetchCommentsSuccessPayload;
};

type TFetchCommentsFailure = {
  type: typeof CommentsTypes.FETCH_COMMENTS_FAILURE;
  payload: TFetchCommentsFailurePayload;
};

export type {
  TComment,
  TPost,
  TPostState,
  TCommentState,
  TPostActions,
  TCommentActions,
  TFetchPostRequest,
  TFetchPostSuccess,
  TFetchPostSuccessPayload,
  TFetchPostFailure,
  TFetchPostFailurePayload,
  TFetchCommentsRequest,
  TFetchCommentsSuccess,
  TFetchCommentsSuccessPayload,
  TFetchCommentsFailure,
  TFetchCommentsFailurePayload,
};

export { PostTypes, CommentsTypes };
