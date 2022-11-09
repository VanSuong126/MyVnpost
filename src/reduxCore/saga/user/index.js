import {call, takeLatest} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import {userTypes} from '~reduxCore/reducers';
import {authApi} from '~services';
import LocalDB from '~data/asyncStorage';

const userLogin = function* ({payload: {params, onSuccess, onError}}) {
  yield console.log('call saga login')
  try {
    yield LocalDB.logOut();
    const variables = yield {
      Tendangnhap: params?.ten_dang_nhap,
      Matkhau: params?.mat_khau,
    };
    const res = yield call(authApi.userLogin, variables);
    if (res.success) {
      const result = res?.data;
      yield LocalDB.setUserToken(result?.Token);
      yield onSuccess(result);
    } else {
      //thông báo lỗi từ api trả về
      yield showMessage({
        message: res?.error,
        type: 'danger',
      });
      yield onError(res?.error);
    }
  } catch (err) {
    yield onError(err);
    console.log({err});
  }
};
const watcher = function* () {
  yield takeLatest(userTypes.USER_LOGIN, userLogin);
};
export default watcher();
