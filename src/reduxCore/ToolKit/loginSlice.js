import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// object User
const initialState = {
  Username: '',
  Password: '',
  TokenAccess: null,
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      var axios = require('axios');
      var data = JSON.stringify({
        TenDangNhap: action.payload.Username,
        MatKhau: action.payload.Password,
      });
      var config = {
        method: 'post',
        url: 'https://donhang.vnpost.vn/api/api/MobileAuthentication/GetAccessToken',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          let token = JSON.stringify(response.data.Token).toString();
          state.TokenAccess = token;
        })
        .catch(function (error) {
          console.log(error);
        });
  
    },
    loginSuccess(state, action) {
      state.isLogin = false;
      state.TokenAccess = action.payload.TokenAccess;
    },
    loginFail(state) {
      state.isLogin = false;
      state.Username = '';
      state.Password = '';
      state.TokenAccess = '';
    },
  },

});
// action
export const loginAction = loginSlice.actions;

export const TokenAccess = (state =>state.login.TokenAccess);
//Reducer
export default loginSlice.reducer;
