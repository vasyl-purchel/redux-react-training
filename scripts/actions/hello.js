export const Actions = {
  greet : 'GREET',
};

export const greet = msg => ({ type: Actions.greet, msg });
