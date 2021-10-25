import { combineReducers } from 'redux';

import content from './content';
import storage from './storage';
import { reducer as searchReducer } from 'redux-search'

export default combineReducers({
  content,
  storage,
  search: searchReducer
});
