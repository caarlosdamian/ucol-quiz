import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice/userSlice';

const reducers = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});