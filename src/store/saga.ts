import { type PayloadAction } from '@reduxjs/toolkit';
// import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { GET_USER_BY_ID } from './slices/features/users/constants';
import { getUserSuccessAction } from './slices/features/users/slice';
import { type UserType } from './slices/features/users/types';
// Generator function
function* getUserSaga({ payload: id }: PayloadAction<string>): Generator<any, void, UserType> {
  try {
    // You can also export the axios call as a function.
    // const response: AxiosResponse<UserType> = yield axios.get(
    //   `your-server-url:port/api/users/${id}`
    // );

    const data = {
      id: '112233',
      name: 'rafa',
      lastname: 'khan',
      email: 'emailofimran',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    yield put(getUserSuccessAction(data));
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

// Generator function
export function* watchGetUser(): Generator<any, void, void> {
  yield takeLatest(GET_USER_BY_ID, getUserSaga);
}
