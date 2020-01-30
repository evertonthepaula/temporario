export default function auth(state = false, action = null) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}
