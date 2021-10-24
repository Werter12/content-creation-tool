export const LIST_IMAGES = 'LIST_IMAGES';
export const LIST_IMAGES_RESULT = 'LIST_IMAGES_RESULT';
export const LIST_IMAGES_FAIL = 'LIST_IMAGES_FAIL';
export const GET_IMAGE = 'GET_IMAGE';
export const GET_IMAGE_RESULT = 'GET_IMAGE_RESULT';
export const GET_IMAGE_FAIL = 'GET_IMAGE_FAIL';
export const UPDATE_DRAFT_IMAGE = 'UPDATE_DRAFT_IMAGE';
export const SET_DRAFT_IMAGE = 'SET_DRAFT_IMAGE';

export function listImages({
  page,
  limit
}) {
  return {
    type: LIST_IMAGES,
    loading: true,
    queryParams: {
      page,
      limit
    }
  };
}

export function listImagesResult(items) {
  return {
    type: LIST_IMAGES_RESULT,
    loading: false,
    items
  };
}

export function listImagesFail(error) {
  return {
    type: LIST_IMAGES_FAIL,
    error,
    loading: false
  };
}

export function getImage(urlPath) {
  return {
    type: GET_IMAGE,
    loading: true,
    urlPath
  };
}

export function getImageResult(item) {
  return {
    type: GET_IMAGE_RESULT,
    loading: false,
    item
  };
}

export function getImageFail(error) {
  return {
    type: GET_IMAGE_FAIL,
    error,
    loading: false
  };
}

export function updateDraftImage(attributes) {
  return {
    type: UPDATE_DRAFT_IMAGE,
    attributes
  };
}

export function setDraftImage(item) {
  return {
    type: SET_DRAFT_IMAGE,
    item
  };
}

export function emptyEvent() {
  return {
    type: 'EMPTY_EVENT',
  };
}