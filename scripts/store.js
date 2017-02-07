import { createStore, compose } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

const extraCompose =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose;

export default createStore(reducers, extraCompose(middlewares));
