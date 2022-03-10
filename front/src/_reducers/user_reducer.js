import {
  SIGN_IN,
  SIGN_UP_USER,
  SIGN_OUT_USER,
  AUTH_USER,
} from '../_actions/type';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signIn: action.payload };
    case SIGN_UP_USER:
      return { ...state, signUp: action.payload };
    case SIGN_OUT_USER:
      return { ...state, signOut: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
