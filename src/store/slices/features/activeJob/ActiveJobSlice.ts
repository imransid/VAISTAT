import { createSlice } from "@reduxjs/toolkit";

// TODO : Declear Initial State here

const activeJobsSlice = createSlice({
    name: 'activeJobsSlice',
    initialState: {},
    reducers:{
        deliveredJob: () => {

        },
        notDeliveredJob: () => {

        }
    }
});

export const { deliveredJob,notDeliveredJob } = activeJobsSlice.actions;

export const activeJobsReducer = activeJobsSlice.reducer;