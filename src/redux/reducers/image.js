import {
  LIST_IMAGES,
  LIST_IMAGES_RESULT,
  LIST_IMAGES_FAIL,
  GET_IMAGE,
  GET_IMAGE_RESULT,
  GET_IMAGE_FAIL,
  UPDATE_DRAFT_IMAGE,
  SET_DRAFT_IMAGE,
} from '../actions/images';

const initialState = {
  loading: false,
  error: '',
  items: [],
  item: null,
};

export default function reducer(
  state = initialState,
  { type, loading, items, item, attributes, error },
) {
  switch (type) {
    case LIST_IMAGES:
      return {
        ...state,
        loading,
      };
    case LIST_IMAGES_RESULT:
      return {
        ...state,
        items,
        loading,
      };
    case LIST_IMAGES_FAIL:
      return {
        ...state,
        loading,
        error,
      };
    case GET_IMAGE:
      return {
        ...state,
        loading,
      };
    case GET_IMAGE_RESULT:
      return {
        ...state,
        item,
        loading,
      };
    case GET_IMAGE_FAIL:
      return {
        ...state,
        loading,
        error,
      };
    case UPDATE_DRAFT_IMAGE:
      return {
        ...state,
        item: {
          ...state.item,
          ...attributes,
        },
      };
    case SET_DRAFT_IMAGE:
      return {
        ...state,
        item,
      };
    default:
      return state;
  }
}
