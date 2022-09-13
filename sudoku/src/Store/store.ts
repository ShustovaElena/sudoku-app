import { configureStore } from '@reduxjs/toolkit';
import levelSlice from './levelSlice';

export const store = configureStore({
  reducer: {
    level: levelSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;