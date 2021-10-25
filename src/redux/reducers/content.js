import {
  LIST_IMAGES,
  LIST_IMAGES_RESULT,
  LIST_IMAGES_FAIL,
  GET_IMAGE,
  GET_IMAGE_RESULT,
  GET_IMAGE_FAIL,
  UPDATE_DRAFT_IMAGE,
  SET_DRAFT_IMAGE,
} from '../actions/content';

const initialState = {
  loading: false,
  error: '',
  images: [],
  draftImage: null,
};

export default function reducer(
  state = initialState,
  { type, loading, images, draftImage, error },
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
        images,
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
        draftImage,
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
        draftImage: {
          ...state.draftImage,
          ...draftImage,
        },
      };
    case SET_DRAFT_IMAGE:
      return {
        ...state,
        draftImage,
      };
    default:
      return state;
  }
}
