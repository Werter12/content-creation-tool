import { takeLatest, select, put, call } from 'redux-saga/effects';

import {
  LIST_IMAGES,
  listImagesResult,
  listImagesFail,
  emptyEvent,
} from '../actions/content';
import {
  callApi,
  asyncFlow,
  optimizeImage,
  sagaErrorBoundaries,
} from '../utils';

function reduceImages(savedImages, images) {
  return images.reduce((acc, image) => {
    const foundSavedImage = savedImages.find(
      (savedImage) => savedImage.id === image.id,
    ) ?? { preview_url: optimizeImage(image.download_url) };
    acc.push({ ...image, ...foundSavedImage });
    return acc;
  }, []);
}

function* mergeWithSavedImages(images) {
  let readyImages = images;
  const savedImages = yield select((state) => state.storage.savedImages);
  readyImages = yield call(reduceImages, savedImages, images);
  yield put(listImagesResult(readyImages));
}

const listImagesFlow = asyncFlow(
  callApi('/v2/list'),
  emptyEvent,
  listImagesFail,
  mergeWithSavedImages,
);

export default function* listImagesSaga() {
  yield takeLatest(LIST_IMAGES, sagaErrorBoundaries(listImagesFlow));
}
