const routes = {
  HOME: '/',
  ABOUT_ME: '/about-me',
  USER_INFO: '/user-info',
};

const postsTypes = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
};

const commentsTypes = {
  FETCH_COMMENTS_REQUEST: 'FETCH_COMMENTS_REQUEST',
  FETCH_COMMENTS_SUCCESS: 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAILURE: 'FETCH_COMMENTS_FAILURE',
};

const userInfoTypes = {
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
export { routes, postsTypes, commentsTypes, userInfoTypes, aboutMe, expandVariants };
