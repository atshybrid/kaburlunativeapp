import { combineReducers } from '@reduxjs/toolkit';
import splashReducer from './splashReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;