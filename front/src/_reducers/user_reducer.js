import { SIGN_IN } from '../_actions/type';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
