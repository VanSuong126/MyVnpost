import {Axios} from '~services';
import {POST, GET, PUT, DELETE} from '~shared/constants';

//CONFIG API
export const getInfo = (payload) => {
  return Axios(GET, '/getInfo', payload);
};
