import { call, put, takeLatest } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import {
    userActions,
    userTypes,
    commonActions,
    accountActions,
    configActions,
} from '~reduxCore/reducers';
import {  authApi } from '~services'
import LocalDB from '~data/asyncStorage'

const userLogin = function* ({ payload: { params, onSuccess, onError } }) {
    try {
        yield LocalDB.logOut();
        const variables = yield {
            "Tendangnhap": params?.username,
            "matkhau": params?.password,
        }
        const res = yield call(authApi.userLogin, variables);
        if (res.success) {
            const result = res?.data;
            yield LocalDB.setUserToken(result?.authorization_token);
            yield put(userActions.setToken(result?.authorization_token));
            yield put(commonActions.setSkipLogin(true));
            yield put(accountActions.getProfile());
            yield onSuccess(result);
        }
        else {
            //thông báo lỗi từ api trả về
            yield showMessage({
                message: res?.error,
                type: 'danger',
            });
            yield onError(res?.error);
        }
    } catch (err) {
        yield onError(err);
        console.log({ err })
    }
};




const userLogout = function* ({ payload: { onSuccess, onError } }) {
    try {
        const res = yield call(authApi.userLogout);
        if (res.success) {
            yield LocalDB.logOut();
            yield put(accountActions.setProfileEmpty());
            yield put(configActions.setBadgeCount(null));
            yield put(commonActions.setSkipLogin(false));
            yield put(commonActions.toggleLoading(false));
            yield onSuccess();
        }
        else {
            //thông báo lỗi từ api trả về
            yield put(commonActions.toggleLoading(false));
            yield onError();
            yield showMessage({
                message: res?.error,
                type: 'danger',
            });
        }
    } catch (err) {
        yield put(commonActions.toggleLoading(false));
        yield onError();
        console.log({ err })
    }
    finally {
        yield put(commonActions.toggleLoading(false));
    }
};


const watcher = function* () {
    yield takeLatest(userTypes.USER_LOGIN, userLogin);
    yield takeLatest(userTypes.USER_LOGOUT, userLogout);
};
export default watcher();
