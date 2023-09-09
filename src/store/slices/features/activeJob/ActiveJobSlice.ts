import { createSlice } from '@reduxjs/toolkit';

// TODO : Dealer Initial State here

const activeJobsSlice = createSlice({
  name: 'activeJobsSlice',
  initialState: {},
  reducers: {
    deliveredJob: () => {
      return 'deliveredJob';
    },
    notDeliveredJob: () => {
      return 'notDeliveredJob';
    }
  }
});

export const { deliveredJob, notDeliveredJob } = activeJobsSlice.actions;

export const activeJobsReducer = activeJobsSlice.reducer;
