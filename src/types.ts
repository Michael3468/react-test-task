import { commentsTypes, postsTypes, userInfoTypes } from './constants';

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

type TUserInfo = {
  id: number | null;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number | null;
      lng: number | null;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
} | null;

type TPostState = {
  pending: boolean;
  posts: TPost[];
  error: string | null;
};

type TCommentState = {
  pending: boolean;
  comments: {
    data: TComment[];
    postId: number | null;
  };
  error: string | null;
};

type TUserInfoState = {
  pending: boolean;
  user: TUserInfo;
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

type TUserInfoActions = {
  type: string;
  payload?: {
    user: TUserInfo;
    error?: string;
  };
};

// Fetch Posts
type TFetchPostRequest = {
  type: typeof postsTypes.FETCH_POSTS_REQUEST;
  userId?: number;
};

type TFetchPostSuccessPayload = {
  posts: TPost[];
};

type TFetchPostFailurePayload = {
  error: string;
};

type TFetchPostSuccess = {
  type: typeof postsTypes.FETCH_POSTS_SUCCESS;
  payload: TFetchPostSuccessPayload;
};

type TFetchPostFailure = {
  type: typeof postsTypes.FETCH_POSTS_FAILURE;
  payload: TFetchPostFailurePayload;
};

// Fetch Comments
type TFetchCommentsRequest = {
  type: typeof commentsTypes.FETCH_COMMENTS_REQUEST;
  id: number;
};

type TFetchCommentsSuccessPayload = {
  comments: {
    data: TComment[];
    postId: number;
  };
};

type TFetchCommentsFailurePayload = {
  error: string;
};

type TFetchCommentsSuccess = {
  type: typeof commentsTypes.FETCH_COMMENTS_SUCCESS;
  payload: TFetchCommentsSuccessPayload;
};

type TFetchCommentsFailure = {
  type: typeof commentsTypes.FETCH_COMMENTS_FAILURE;
  payload: TFetchCommentsFailurePayload;
};

// Fetch UserInfo
type TFetchUserInfoRequest = {
  type: typeof userInfoTypes.FETCH_USER_INFO_REQUEST;
  userId: number;
};

type TFetchUserInfoSuccessPayload = {
  user: TUserInfo;
};

type TFetchUserInfoFailurePayload = {
  error: string;
};

type TFetchUserInfoSuccess = {
  type: typeof userInfoTypes.FETCH_USER_INFO_SUCCESS;
  payload: TFetchUserInfoSuccessPayload;
};

type TFetchUserInfoFailure = {
  type: typeof userInfoTypes.FETCH_USER_INFO_FAILURE;
  payload: TFetchCommentsFailurePayload;
};

export type {
  TComment,
  TPost,
  TUserInfo,
  TPostState,
  TCommentState,
  TUserInfoState,
  TPostActions,
  TCommentActions,
  TUserInfoActions,
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
  TFetchUserInfoRequest,
  TFetchUserInfoSuccessPayload,
  TFetchUserInfoFailurePayload,
  TFetchUserInfoSuccess,
  TFetchUserInfoFailure,
};
