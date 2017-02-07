import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

export default function AppLayout({ children }) {
  return (
    <div>
      <header>
        <div>
          <IndexLink to="/">
            <span className="glyphicon glyphicon-home text--xl va--middle" />
          </IndexLink>
        </div>
      </header>

      <span>
        Navigation:<br />
        <Link to="/hello">Go to hello page</Link>
      </span>

      <div className="container-fluid WellNegative">
        <div className="row">
          <div className="col-xs-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  children : PropTypes.element,
};

AppLayout.defaultProps = {
  children : null,
};
