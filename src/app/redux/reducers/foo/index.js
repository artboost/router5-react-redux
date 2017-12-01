export default function fooReducer(state = 'bar', action) {
  switch (action.type) {
    case 'FOO_SET':
      return action.foo;
    default:
      return state;
  }
}
