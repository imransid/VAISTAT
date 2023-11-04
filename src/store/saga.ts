import { takeLatest } from 'redux-saga/effects';

import { loginSaga, signInSaga } from './sagas/auth.saga';

export function* watchGetUser(): Generator {
  yield takeLatest('users/getUserAction', loginSaga);
  yield takeLatest('users/setUserAction', signInSaga);
}
