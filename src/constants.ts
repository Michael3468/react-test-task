const routes = {
  HOME: '/',
  ABOUT_ME: '/about-me',
  USER_INFO: '/user-info',
};

// TODO: begin types lower case
const PostsTypes = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
};

const CommentsTypes = {
  FETCH_COMMENTS_REQUEST: 'FETCH_COMMENTS_REQUEST',
  FETCH_COMMENTS_SUCCESS: 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAILURE: 'FETCH_COMMENTS_FAILURE',
};

const UserInfoTypes = {
  FETCH_USER_INFO_REQUEST: 'FETCH_USER_INFO_REQUEST',
  FETCH_USER_INFO_SUCCESS: 'FETCH_USER_INFO_SUCCESS',
  FETCH_USER_INFO_FAILURE: 'FETCH_USER_INFO_FAILURE',
};

const aboutMe = {
  email: 'mikhail3468@yandex.ru',
};

const expandVariants = {
  false: false,
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};
export { routes, PostsTypes, CommentsTypes, UserInfoTypes, aboutMe, expandVariants };
