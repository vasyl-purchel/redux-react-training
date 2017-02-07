import { Actions } from '../actions/hello';

const initialState = {
  greeted : false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.greet:
      return Object.assign({}, state, { greeted: true, msg: action.msg });
    default:
      return state;
  }
}
