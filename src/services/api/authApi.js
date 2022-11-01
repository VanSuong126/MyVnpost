import {Axios} from '../configApi';
import {POST, GET, PUT, DELETE} from '~shared/constants';

//AUTH API
export const userSignUp = (payload) => {
  return Axios(POST, '/v1/users/sign_up', payload);
};

export const userLogin = (payload) => {
  return Axios(POST, '/api/api/MobileAuthentication/GetAccessToken', payload);
};

export const userLogout = (payload) => {
  return Axios(DELETE, '/logout', payload);
};

export const userDelete = (payload) => {
  return Axios(DELETE, '/deleteAccount', payload);
};
