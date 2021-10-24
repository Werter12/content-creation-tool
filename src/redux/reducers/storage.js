import {
  START_SAVE_TO_STORAGE,
  SAVE_TO_STORAGE,
  GET_FROM_STORAGE,
} from '../actions/storage';

import Storage from '../storage';

const initialState = {
  savedImages: Storage.getItem(Storage.defaultKey, true) ?? []
};

export default function reducer(
  state = initialState,
  { type, savedImages }
) {
  switch (type) {
    case START_SAVE_TO_STORAGE:
      return {
        ...state,
      };
    case SAVE_TO_STORAGE:
      return {
        ...state,
        savedImages
      };
    case GET_FROM_STORAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
