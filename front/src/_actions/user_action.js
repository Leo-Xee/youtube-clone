import axios from 'axios';
import { AUTH_USER, SIGN_IN, SIGN_UP_USER } from './type';

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
    payload: request,
  };
}

export function logoutUser() {
  const request = axios.get('/api/users/logout').then((res) => res.data);
  return {
    type: SIGN_UP_USER,
    payload: request,
  };
}

export function authUser() {
  const request = axios.get('/api/users/auth').then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}
