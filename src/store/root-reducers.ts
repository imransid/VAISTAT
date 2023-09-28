import usersReducer from './slices/features/users/slice';
import { type UsersStateType } from './slices/features/users/types';

export interface StateType {
  users: UsersStateType;
}

const rootReducers = {
  users: usersReducer
};

export default rootReducers;
