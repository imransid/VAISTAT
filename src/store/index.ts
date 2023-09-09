import { configureStore } from '@reduxjs/toolkit';

import { activeJobsReducer } from './slices/features/activeJob/ActiveJobSlice';

export const store = configureStore({
  reducer: {
    activeJobs: activeJobsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
