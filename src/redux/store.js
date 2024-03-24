import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { campersListReducer } from './campers/campersListSlice';

export const rootReducer = combineReducers({
  campers: campersListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
