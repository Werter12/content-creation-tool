import { combineReducers } from 'redux';

import image from './image';
import storage from './storage';
import { reducer as searchReducer } from 'redux-search'

export default combineReducers({
  image,
  storage,
  search: searchReducer
});
