import { combineReducers } from 'redux';

import postReducer from './postReducer';

const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
