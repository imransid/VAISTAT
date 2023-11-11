import { combineReducers } from '@reduxjs/toolkit';

import { activeJobsApi } from './apis/ActiveJobsApi';
import { upcomingJobsApi } from './apis/UpcomingJobApi';
import { activeJobsReducer } from './slices/features/activeJob/ActiveJobSlice';
import usersReducer from './slices/features/users/slice';
import { type UsersStateType } from './slices/features/users/types';

export interface StateType {
  users: UsersStateType;
}

// const rootReducers = {
//   users: usersReducer
// };

const rootReducers = combineReducers({
  activeJobs: activeJobsReducer,
  users: usersReducer,
  [upcomingJobsApi.reducerPath]: upcomingJobsApi.reducer,
  [activeJobsApi.reducerPath]: activeJobsApi.reducer
});

export default rootReducers;
