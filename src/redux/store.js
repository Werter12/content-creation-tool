import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduxSearch } from 'redux-search';

import reducers from './reducers';
import rootSaga from './sagas';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    reduxSearch({
      resourceIndexes: {
        images: ['author'],
      },
      resourceSelector: (resourceName, state) => {
        return state.content[resourceName];
      },
    }),
  ),
);
sagaMiddleware.run(rootSaga);

export default store;
