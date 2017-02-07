import React, { PropTypes } from 'react';

import { greet } from '../actions/hello';

export default function Hello({ greeted, greeting, dispatch }) {
  if (greeted) {
    return <div>{greeting}!</div>;
  }

  return (
    <div className="WellNegative">
      <button onClick={() => dispatch(greet('Hello, world'))}>Greet!</button>
    </div>
  );
}

Hello.propTypes = {
  greeted  : PropTypes.bool,
  greeting : PropTypes.string,
  dispatch : PropTypes.func.isRequired,
};

Hello.defaultTypes = {
  greeted  : false,
  greeting : '',
};
