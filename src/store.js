import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(routerMiddleware(browserHistory)),
  ];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      /* eslint-disable global-require */
      const nextReducers = require('./reducers').default;

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
