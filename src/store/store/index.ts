import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: false,
    serializableCheck: false
  }).concat(sagaMiddleware, logger)
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
