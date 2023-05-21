import { combineReducers } from 'redux';

import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
