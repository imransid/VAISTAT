import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type IResult } from '../../../types/types';

import { USERS } from './constants';
import { type ILogInPayload, type ISignUpPayload, type UsersStateType } from './types';
const usersInitialState: UsersStateType = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
    loginStatus: false
  }
};

export const usersSlice = createSlice({
  name: USERS,
  initialState: usersInitialState,
  reducers: {
    setUserAction: (
      state: UsersStateType,
      { payload: ISignUpPayload }: PayloadAction<ISignUpPayload>
    ) => {
      state.user.isLoading = true;
      state.user.errors = '';
      state.user.loginStatus = false;
    },

    getUserAction: (
      state: UsersStateType,
      { payload: ILogInPayload }: PayloadAction<ILogInPayload>
    ) => {
      state.user.isLoading = true;
      state.user.errors = '';
      state.user.loginStatus = false;
    },
    getUserSuccessAction: (state: UsersStateType, payload: PayloadAction<IResult>) => {
      state.user.isLoading = false;
      state.user.data = payload.payload;
      state.user.loginStatus = true;
      state.user.errors = ''; // Clear any previous errors
    },
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    logoutUser: (state: UsersStateType) => {
      state.user.isLoading = false;
      state.user.errors = '';
      state.user.loginStatus = false;
      state.user.data = null;
    },
    setSignInUser: (state: UsersStateType) => {
      state.user.isLoading = false;
      state.user.errors = '';
      state.user.loginStatus = false;
      state.user.data = null;
    }
  }
});

export const {
  getUserAction,
  getUserSuccessAction,
  getUserErrorAction,
  logoutUser,
  setUserAction,
  setSignInUser
} = usersSlice.actions;

export default usersSlice.reducer;
