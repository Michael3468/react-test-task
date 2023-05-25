import { combineReducers } from 'redux';

import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
