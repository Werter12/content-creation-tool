import { takeLatest, select, put, call } from 'redux-saga/effects';

import {
  GET_IMAGE,
  getImageResult,
  getImageFail,
  emptyEvent,
} from '../actions/images';
import { callApi, asyncFlow, sagaErrorBoundaries } from '../utils';

function findSavedImage(savedImages, draftImage) {
  return savedImages.find((savedImage) => {
    return savedImage?.id === draftImage?.id;
  });
}

function* mergeWithSavedImage(draftImage) {
  const savedImages = yield select((state) => state.storage.savedImages);
  let savedImage = {};
  if (savedImages.length) {
    savedImage = yield call(findSavedImage, savedImages, draftImage);
  }
  yield put(getImageResult({ ...draftImage, ...savedImage }));
}

const getImageFlow = asyncFlow(
  callApi('/id'),
  emptyEvent,
  getImageFail,
  mergeWithSavedImage,
);

export default function* getImageSaga() {
  yield takeLatest(GET_IMAGE, sagaErrorBoundaries(getImageFlow));
}
