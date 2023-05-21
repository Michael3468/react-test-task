import { combineReducers } from 'redux';

import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
