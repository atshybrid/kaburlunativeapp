import { combineReducers } from '@reduxjs/toolkit';
import { splashReducer } from './splashReducer';
import { connectionReducer } from './connectionReducer';
import { languageReducer } from './languageReducer';

const rootReducer = combineReducers({
  splash: splashReducer,
  connection: connectionReducer,
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;