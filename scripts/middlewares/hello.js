const hello = store => next => (action) => {
  console.log('received action ', action, store.getState());
  const result = next(action);
  console.log('received result from action ', action, result);
  return result;
};

export default hello;
