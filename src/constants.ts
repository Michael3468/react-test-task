const routes = {
  HOME: '/',
  ABOUT_ME: '/about-me',
  USER_INFO: '/user-info',
};

const PostTypes = {
  FETCH_POST_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POST_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POST_FAILURE: 'FETCH_POSTS_FAILURE',
};

const CommentsTypes = {
  FETCH_COMMENTS_REQUEST: 'FETCH_COMMENTS_REQUEST',
  FETCH_COMMENTS_SUCCESS: 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAILURE: 'FETCH_COMMENTS_FAILURE',
};

const aboutMe = {
  email: 'mikhail3468@yandex.ru',
};

export { routes, PostTypes, CommentsTypes, aboutMe };
