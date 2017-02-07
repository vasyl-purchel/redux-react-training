export default function filter(state) {
  return {
    greeted  : !!state.hello.greeted,
    greeting : state.hello.msg,
  };
}
