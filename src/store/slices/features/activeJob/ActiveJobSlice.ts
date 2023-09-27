import { createSlice } from '@reduxjs/toolkit';

// TODO : Dealer Initial State here
interface ActivejobState {
  jobId: number;
  jobName: string;
  jobDescription: string;
  status: string;
}

const initialState: ActivejobState[] = [
  {
    jobId: 1,
    jobName: 'Deliver Medicine',
    jobDescription: 'Description .....',
    status: 'Deliverd'
  },
  {
    jobId: 2,
    jobName: 'Deliver Injection',
    jobDescription: 'Description .....',
    status: 'Not deliverd'
  }
];

const activeJobsSlice = createSlice({
  name: 'activeJobsSlice',
  initialState,
  reducers: {
    deliveredJob: state => {
      return state.filter(el => el.status === 'Deliverd');
    },
    notDeliveredJob: state => {
      return state.filter(el => el.status === 'Not deliverd');
    }
  }
});

export const { deliveredJob, notDeliveredJob } = activeJobsSlice.actions;

export const activeJobsReducer = activeJobsSlice.reducer;
