import { CommentsTypes, PostTypes } from './constants';

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
  comments: {
    data: TComment[];
    postId: number | null;
  };
  error: string | null;
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
  data: TComment[];
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
