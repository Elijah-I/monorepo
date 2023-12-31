import { counterDecSlice } from '@mf/decrement';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from './slice';

export const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    localCounter: counterDecSlice.reducer,
  }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
