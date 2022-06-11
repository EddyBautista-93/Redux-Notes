import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// provides simplified config options and good defaults.
// 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
