import { Axios } from '../configApi';
import { POST, GET, PUT, DELETE } from '~shared/constants';

//ACCOUNT API
export const getProfile = (payload) => {
  return Axios(GET, '/customer', payload);
};

export const updateProfile = (payload) => {
  return Axios(POST, '/updatecustomer', payload);
};
export const updateAvatar = (payload) => {
  return Axios(POST, '/avatar', payload);
};

export const createBooking = (payload) => {
  return Axios(POST, '/bookings', payload);
};
export const getBookings = (payload) => {
  return Axios(GET, '/bookings', payload);
};
export const getBooking = (id) => {
  return Axios(GET, `/bookings/${id}`);
};
export const getBookingsHistory = (payload) => {
  return Axios(GET, '/ordered_services', payload);
};

export const getWallet = (payload) => {
  return Axios(GET, '/wallet', payload);
};

export const getInvoices = (payload) => {
  return Axios(GET, '/invoices', payload);
};
export const getInvoice = (id) => {
  return Axios(GET, `/invoices/${id}`);
};

export const getVouchers = (payload) => {
  return Axios(GET, '/vouchers', payload);
};

export const createOrder = (payload) => {
  return Axios(POST, '/orderProduct', payload);
};
export const getOrders = (payload) => {
  return Axios(GET, '/getOrdered', payload);
};

export const getRatedServices = (payload) => {
  return Axios(GET, '/rated_services', payload);
};
export const getUnRatedServices = (payload) => {
  return Axios(GET, '/unrated_services', payload);
};
export const createRating = (payload) => {
  return Axios(POST, '/rateProduct', payload);
};

export const getNotifications = (payload) => {
  return Axios(GET, '/getNotices', payload);
};
export const getNotification = (payload) => {
  return Axios(GET, `/getNotices`, payload);
}
export const markReadNotification = (payload) => {
  return Axios(POST, `/readNotice`, payload);
}