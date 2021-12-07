import axios from 'axios';
import { SIGN_IN, SIGN_UP_USER } from './type';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((res) => res.data);
  return {
    type: SIGN_IN,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((res) => res.data);

  return {
    type: SIGN_UP_USER,
    payload: request, // {success: true}
  };
}
