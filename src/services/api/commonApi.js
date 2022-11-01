import { Axios } from '../configApi';
import { POST, GET, PUT, DELETE } from '~shared/constants';

//COMMON API
export const getBanners = (payload) => {
  return Axios(GET, '/banners', payload);
};
export const getBannerPromotionEvents = (payload) => {
  return Axios(GET, '/banners', payload);
};
export const getBannerNews = (payload) => {
  return Axios(GET, '/banners', payload);
};

export const getBranches = (payload) => {
  return Axios(GET, '/branches', payload);
};

export const getCountries = (payload) => {
  return Axios(GET, '/nations', payload);
};

export const getServices = (payload) => {
  return Axios(GET, '/services', payload);
};
export const getHotServices = (payload) => {
  return Axios(GET, `/getHotProduct`, payload);
};

export const getOldServices = (payload) => {
  return Axios(GET, '/getOldservice', payload);
};

export const getTechnicals = (payload) => {
  return Axios(GET, '/getTechnicals', payload);
};

export const getCatProducts = (payload) => {
  return Axios(GET, '/getCategoryProduct', payload);
};
export const getProducts = (payload) => {
  return Axios(GET, '/getProduct', payload);
};
export const getProduct = (payload) => {
  return Axios(GET, `/getProduct`, payload);
};
export const getHotProducts = (payload) => {
  return Axios(GET, `/getHotProduct`, payload);
};

export const getCatServicesOrder = (payload) => {
  return Axios(GET, '/getCategoryProduct', payload);
};
export const getServicesOrder = (payload) => {
  return Axios(GET, '/getProduct', payload);
};
export const getServiceOrder = (payload) => {
  return Axios(GET, `/getProduct`, payload);
};
