import { SIGN_IN, SIGN_UP_USER, SIGN_OUT_USER } from '../_actions/type';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, loginSuccess: action.payload };
    case SIGN_UP_USER:
      return { ...state, success: action.payload };
    case SIGN_OUT_USER:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
