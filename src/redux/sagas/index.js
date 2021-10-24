import { spawn } from 'redux-saga/effects';

import listImagesSaga from './listImagesSaga';
import getImageSaga from './getImageSaga';
import storageSaga from './storageSaga';

export default function* rootSaga() {
  yield spawn(listImagesSaga);
  yield spawn(getImageSaga);
  yield spawn(storageSaga);
}
