import { combineReducers } from '@reduxjs/toolkit';
import splashReducer from './splashReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;