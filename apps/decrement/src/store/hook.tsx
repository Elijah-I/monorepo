import { store, useAppDispatch, useAppSelector } from './shared-store';
import { counterDecSlice } from './slice';
import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';

export const useLocalStore = () => {
  const dispatch = useAppDispatch();

  return {
    count: useAppSelector((state) => state?.localCounter?.number),
    increment: () => dispatch(counterDecSlice.actions.increment()),
    decrement: () => dispatch(counterDecSlice.actions.decrement()),
  };
};

export const WithStore: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
