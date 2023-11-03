import { takeLatest } from 'redux-saga/effects';

import { loginSaga } from './sagas/auth.saga';

export function* watchGetUser(): Generator {
  yield takeLatest('users/getUserAction', loginSaga);
}
