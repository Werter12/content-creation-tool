import { takeLatest, call, put, select } from 'redux-saga/effects';
import { START_SAVE_TO_STORAGE, saveToStorage } from '../actions/storage';
import { sagaErrorBoundaries, formatImageUrl } from '../utils';

import Storage from '../storage';

function filterSavedImages(savedImages, image) {
  const localImage = {
    ...image,
    preview_url: formatImageUrl(image.download_url),
  };
  const filtered = savedImages.filter(
    (savedImage) => savedImage?.id !== image?.id,
  );
  filtered.push(localImage);
  return filtered;
}

function* saveToStorageFlow({ image }) {
  const savedImages = yield select((state) => state.storage.savedImages);
  const freshSavedImages = yield call(filterSavedImages, savedImages, image);
  yield put(saveToStorage(freshSavedImages));
  yield call(Storage.setItem, Storage.defaultKey, freshSavedImages, true);
}

export default function* storageSaga() {
  yield takeLatest(
    START_SAVE_TO_STORAGE,
    sagaErrorBoundaries(saveToStorageFlow),
  );
}
