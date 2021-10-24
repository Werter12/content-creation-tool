export const START_SAVE_TO_STORAGE = 'START_SAVE_TO_STORAGE';
export const SAVE_TO_STORAGE = 'SAVE_TO_STORAGE';
export const GET_FROM_STORAGE = 'GET_FROM_STORAGE';

export function startSaveToStorage(savedImages, image) {
  return {
    type: START_SAVE_TO_STORAGE,
    savedImages,
    image
  };
}

export function saveToStorage(savedImages) {
  return {
    type: SAVE_TO_STORAGE,
    savedImages
  };
}

export function getFromStorage() {
  return {
    type: GET_FROM_STORAGE,
  };
}