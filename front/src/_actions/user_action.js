import axios from 'axios';
import { SIGN_IN } from './type';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((res) => res.data);
  return {
    type: SIGN_IN,
    payload: request,
  };
}
