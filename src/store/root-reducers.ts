import { combineReducers } from '@reduxjs/toolkit';

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
  users: usersReducer
});

export default rootReducers;
