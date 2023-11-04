import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

import { usersSlice } from '../slices/features/users/slice';
import { type LoginResponse } from '../types/types';

import ToastPopUp from './Toast.android';
const { call } = Effects;

const apiUrl = 'https://vaistat-dev-pharma-driver-api.azurewebsites.net/api/v6/driver/driverLogin';
const apiUrlSign =
  'https://vaistat-dev-pharma-driver-api.azurewebsites.net/api/v6/driver/driverSignup';

interface IPayload {
  email: string;
  password: string;
}

interface ISignInPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
}

const loginAPI = async (payload: IPayload): Promise<LoginResponse | undefined> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestData = {
      email: payload.email,
      password: payload.password
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.post(apiUrl, requestData, config);
    return response.data;
  } catch (error) {
    console.error('Error in loginAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

const signInAPI = async (payload: ISignInPayload): Promise<LoginResponse | undefined> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestData = {
      email: 'Akakany@gmail.com',
      password: '123456',
      driver_internet_plan: '123456',
      driver_availability: '123456',
      driver_speak_languages: '123456',
      fullname: '123456',
      username: '123456'
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.post(apiUrlSign, requestData, config);

    return response.data;
  } catch (error) {
    console.error('Error in loginAPI:', error);
    return undefined; // Or you could return a specific error object here
  }
};

interface IGetUserActionPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}

interface ISetUserActionPayload {
  payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userName: string;
  };
  type: string;
}

export function* loginSaga(
  payload: IGetUserActionPayload
): Generator<any, void, LoginResponse | undefined> {
  try {
    const response: LoginResponse | undefined = yield call(loginAPI, payload.payload);

    if (response !== undefined) {
      if (response.code === 404) {
        const data = 'The email or password you entered is incorrect. Please try again.';
        ToastPopUp(data);

        yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
      }

      if (response.code === 200) {
        yield put(usersSlice.actions.getUserSuccessAction(response.result));
      }
    } else {
      // case undefined
    }
  } catch (error) {
    // if (callback) {
    //   callback({ success: false, data: null });
    // }
  }
}

export function* signInSaga(
  payload: ISetUserActionPayload
): Generator<any, void, LoginResponse | undefined> {
  try {
    const response: LoginResponse | undefined = yield signInAPI(payload.payload);

    if (response !== undefined) {
      if (response.code === 404) {
        const data = response.message;
        ToastPopUp(data);

        yield put(usersSlice.actions.getUserErrorAction('Login failed')); // Handle error case
      }

      if (response.code === 200) {
        ToastPopUp('Sign Up Successfully.');
        // yield put(usersSlice.actions.getUserSuccessAction(response.result));
      }
    } else {
      // case undefined
    }
  } catch (error) {
    // if (callback) {
    //   callback({ success: false, data: null });
    // }
  }
}
