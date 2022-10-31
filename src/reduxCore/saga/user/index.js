import { call, put, takeLatest, select } from 'redux-saga/effects';

import { store } from '~shared/redux/store';
import {
    userActions,
    userSelectors,
    userTypes,
    commonActions,
    accountActions,
} from '~reduxCore/reducers';
import { loginUser } from '~services'
import deviceInfo from '~helper/deviceInfo';
import {platform} from 'theme';
import LocalDB from '~data/asyncStorage'

const userLogin = function* ({ payload: { params } }) {
    try {
        let response = yield call(request.loginUser, params?.username, params?.password);
        yield put(userActions.setUserData(response));
    } catch (err) {
        console.log({ err })
    }
    finally {  
    }
};

const forgetPassword = function* ({ payload: { params, onSuccess } }) {
    try {
        const client = yield graphql.apolloClient();
        const variables = yield {
            forgotpassInput: {
                "email": params?.email,
            }
        }
        const mutation = yield userMt.ForgotPassword({ variables });
        const { data, error } = yield call(client.mutate, mutation);
        console.log('forget password: ', { data })
        if (data) {
            yield onSuccess(data);
        }
        else {
            //thông báo lỗi từ api trả về
            yield put(commonActions.toggleLoading(false));
            yield showMessage({
                message: error,
                type: 'danger',
            });
        }
    } catch (err) {
        console.log({ err })
        yield put(commonActions.toggleLoading(false));
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};

const otpVerify = function* ({ payload: { params, onSuccess } }) {
    try {
        const client = yield graphql.apolloClient();
        const variables = yield {
            otpInput: {
                "email": params?.email,
                "otp": params?.otp,
            }
        }
        const query = yield userQr.CheckExistOTP({ variables });
        const { data, error } = yield call(client.query, query);
        console.log('OTP verify: ', { data })
        if (data) {
            yield onSuccess(data);
        }
        else {
            //thông báo lỗi từ api trả về
            yield put(commonActions.toggleLoading(false));
            yield showMessage({
                message: error,
                type: 'danger',
            });
        }
    } catch (err) {
        console.log({ err })
        yield put(commonActions.toggleLoading(false));
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};

const resetPassword = function* ({ payload: { params, onSuccess } }) {
    try {
        const client = yield graphql.apolloClient();
        const variables = yield {
            resetpassInput: {
                "email": params?.email,
                "newPassword": params?.newPassword,
            }
        }
        const mutation = yield userMt.ResetPassword({ variables });
        const { data, error } = yield call(client.mutate, mutation);
        console.log('Reset password: ', { data })
        if (data) {
            yield onSuccess(data);
        }
        else {
            //thông báo lỗi từ api trả về
            yield put(commonActions.toggleLoading(false));
            yield showMessage({
                message: error,
                type: 'danger',
            });
        }
    } catch (err) {
        console.log({ err })
        yield put(commonActions.toggleLoading(false));
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};

const refreshToken = function* ({ payload: { onSuccess, onError } }) {
    try {
        const client = yield graphql.apolloClient(store);
        const mutation = yield userMt.RefreshToken();
        const { data, error } = yield call(client.mutate, mutation);
        console.log('Refresh token session login: ', { data })
        if (data) {
            yield onSuccess(data);
        }
        else {
            //thông báo lỗi từ api trả về
            yield onError(error);
            yield put(commonActions.toggleLoading(false));
            yield showMessage({
                message: error,
                type: 'danger',
            });
        }
    } catch (err) {
        console.log({ err })
        yield onError(err);
        yield put(commonActions.toggleLoading(false));
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};


const userLogout = function* ({ payload: { params } }) {
    try {
        const user = yield select(userSelectors.getUser);
        const client = yield graphql.apolloClient(store);
        const variables = yield {
            logoutCondition: {
                "id": params?.id,
                "uniqueId": deviceInfo?.deviceId,
            }
        }
        const mutation = yield userMt.Logout({ variables });
        const { data, error } = yield call(client.mutate, mutation);
        console.log('user logout: ', { data })
        if (data) {
            if (!user?.remember) yield LocalDB.logOut();
            yield put(userActions.userLogoutSuccess());
            yield put(graphActions.getGaError());
            yield put(commonActions.setSkipLogin(false));
            yield put(commonActions.toggleLoading(false));
        }
        else {
            //thông báo lỗi từ api trả về
            yield put(commonActions.toggleLoading(false));
            yield showMessage({
                message: error,
                type: 'danger',
            });
        }
    } catch (err) {
        console.log({ err })
        const user = yield select(userSelectors.getUser);
        if (!user?.remember) yield LocalDB.logOut();
        yield put(userActions.userLogoutSuccess());
        yield put(graphActions.getGaError());
        yield put(commonActions.setSkipLogin(false));
        yield put(commonActions.toggleLoading(false));
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};



const watcher = function* () {
    yield takeLatest(userTypes.USER_LOGIN, userLogin);
    yield takeLatest(userTypes.FORGET_PASSWORD, forgetPassword);
    yield takeLatest(userTypes.OTP_VERIFY, otpVerify);
    yield takeLatest(userTypes.RESET_PASSWORD, resetPassword);
    yield takeLatest(userTypes.REFRESH_TOKEN, refreshToken);
    yield takeLatest(userTypes.USER_LOGOUT, userLogout);
};
export default watcher();
