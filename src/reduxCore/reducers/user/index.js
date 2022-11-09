import { createAction, handleActions } from "redux-actions";

const initialUser = {
    Username: null,
    Password: null,
    Token: null,
    isLogin: false,
  };    

export const types = {
    //AUTH
    USER_LOGIN: 'USER_LOGIN',
    SET_USER_DATA: 'SET_USER_DATA',

    FORGET_PASSWORD: "FORGET_PASSWORD",
    OTP_VERIFY: "OTP_VERIFY",
    RESET_PASSWORD: "RESET_PASSWORD",

    REFRESH_TOKEN: 'REFRESH_TOKEN',

    USER_LOGOUT: 'USER_LOGOUT',
    USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
}

export const actions = {
    //AUTH
    userLogin: createAction(types.USER_LOGIN),
    setUserData: createAction(types.SET_USER_DATA),

    forgetPassword: createAction(types.FORGET_PASSWORD),
    otpVerify: createAction(types.OTP_VERIFY),
    resetPassword: createAction(types.RESET_PASSWORD),

    refreshToken: createAction(types.REFRESH_TOKEN),

    userLogout: createAction(types.USER_LOGOUT),
    userLogoutSuccess: createAction(types.USER_LOGOUT_SUCCESS),
}

export const selectors = {
    isLoginSuccess: (state) => state.isLogin,
    Token: (state) => state.TokenAccess
};

export default handleActions(
    {
        [types.SET_TOKEN]: (state, { payload }) => {
            return { ...state, Token: payload.Token, isLogin: true };
        },
    },
    initialUser,
);