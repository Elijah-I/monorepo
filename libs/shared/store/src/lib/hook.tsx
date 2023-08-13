import { store, useAppDispatch, useAppSelector } from './shared-store';
import counterSlice from './slice';
import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';

export const useStore = () => {
  const dispatch = useAppDispatch();

  return {
    count: useAppSelector((state) => state.counter.value),
    increment: () => dispatch(counterSlice.actions.increment()),
    decrement: () => dispatch(counterSlice.actions.decrement()),
  };
};

export const WithStore: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
