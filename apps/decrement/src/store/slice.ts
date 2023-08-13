import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  number: number;
}

const initialState: CounterState = {
  number: 0,
};

export const counterDecSlice = createSlice({
  name: 'localCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
  },
});
