import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';

export default function (store, history) {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}
