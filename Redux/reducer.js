import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useState, useEffect} from 'react';
import 'localstorage-polyfill';

// object User
const initialState = {
  User: {
    Username: '',
    Password: '',
    TokenAccess: '',
    isLogin: false,
  },
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login/loginApp': {
      let Username = action?.payload?.Username;
      let Password = action?.payload?.Password;
      let Token = action?.payload?.Token;
      if(Username!==''&&Password!==''&&Token!=='')
      return {
        ...state,
        User: {
          ...state.User,
          TokenAccess:Token,
          Username: Username,
          Password: Password,
          isLogin: true,
        },
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
