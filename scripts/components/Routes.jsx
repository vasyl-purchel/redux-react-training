import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppLayout from './AppLayout';
import Hello from '../views/Hello';

export default function Routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute onEnter={(newState, redirectTo, callback) => callback()} />
        <Route path="hello" component={Hello} />
      </Route>
    </Router>
  );
}

Routes.propTypes = {
  history : PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};
