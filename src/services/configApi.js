import axios from 'axios'
import { showMessage } from 'react-native-flash-message';
import { CommonActions } from '@react-navigation/native';
import i18n from "i18next";
//import auth from '@react-native-firebase/auth';

import { domain_url_api } from "~config"
import {
    TIME_OUT,
    SUCCESS,
    SUCCESS_POST,
    NO_CONTENT,
    NOT_FOUND,
    INVALID_DATA,
    UNAUTHORIZED,
} from '~shared/constants';
import * as utils from '~helper/utils'
import {
    accountActions,
    commonActions,
    configActions,
} from '~reduxCore/reducers'
import LocalDB from '~data/asyncStorage'
import { store } from '~reduxCore/store'
import Navigation from "~navigators";

const apiPath = domain_url_api;
let Headers = {
    headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        "Access-Control-Request-Method": "*",
        "Access-Control-Request-Headers": "*",
    },
    timeout: TIME_OUT,
}

export const Axios = async (method, path, params) => {
    let getQuery = await (method === "get") ? "?" + utils.objectToQueryString(params) : "";
    console.log("[API Axios] : " + method + ": " + apiPath + path);
    Headers.method = method;
    Headers.data = await (method === "get") ? '' : (params);
    Headers.url = apiPath + path + getQuery;

    const authToken = store.getState().user.userToken;
    const country = store.getState().common.country;
    Headers.headers = await {
        lang_code: country?.lang_code || "vie",
    }
    if (authToken) {
        Headers.headers = await {
            ...Headers.headers,
            Authorization: authToken ? `${authToken}` : null,
        };
    } else {
        Headers.headers = await {
            ...Headers.headers,
            Cookie: null,
        };
        delete Headers.headers['Authorization'];
    }

    return axios(Headers)
        .then(res => {
            console.log(`Result api ${path} ::: `, res);
            const status = res?.status;
            const dataResult = res?.data?.data;
            const errorStatus = res?.data?.error;
            const codeStatus = res?.data?.code;
            const errorMessage = res?.data?.message;
            // data badge number for notification api
            const badge = res?.data?.total_read || 0;

            //SUCCESS PUT/GET/DELETE 200
            if (status == SUCCESS && codeStatus === SUCCESS) {
                return Promise.resolve({
                    success: true,
                    error: null,
                    data: dataResult,
                    badge
                });
            }
            //SUCCESS POST 201
            else if (status === SUCCESS_POST || errorStatus === SUCCESS_POST) {
                return Promise.resolve({
                    success: true,
                    error: errorMessage || i18n.t(`errMsg`),
                    data: dataResult,
                });
            }
            //ERROR 202
            else if (status === INVALID_DATA || errorStatus === INVALID_DATA) {
                return Promise.resolve({
                    success: false,
                    error: errorMessage || i18n.t(`errMsg`),
                    data: null,
                });
            }
            //ERROR NO CONTENT 204
            else if (status === NO_CONTENT || errorStatus === NO_CONTENT) {
                return Promise.resolve({
                    success: false,
                    error: errorMessage || i18n.t(`errMsg`),
                    data: null,
                });
            }
            //ERROR NOT FOUND 404
            else if (status === NOT_FOUND || errorStatus === NOT_FOUND) {
                return Promise.resolve({
                    success: false,
                    error: errorMessage || i18n.t(`errMsg`),
                    data: null,
                });
            }
            // OTHER
            else {
                return Promise.resolve({
                    success: false,
                    error: (errorMessage || i18n.t(`errMsg`)),
                    data: null,
                });
            }
        })
        .catch(error => {
            console.log(`===================Error api : ${path}====================`);
            console.log(error);
            console.log('===================END====================');

            let dataError = error?.response;
            const status = dataError?.status;
            //ERROR UNAUTHORIZED 401
            if (status === UNAUTHORIZED) {
                return failAuthorization();
            } else {
                return Promise.resolve({
                    success: false,
                    error: dataError?.data?.error || i18n.t(`errMsg`)
                });
            }
        });
}

const onResetRoute = async () => {
    Navigation?.current.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Home' }
            ],
        })
    );
}

const failAuthorization = async () => {
    await LocalDB.logOut();
    await store.dispatch(accountActions.setProfileEmpty());
    await store.dispatch(configActions.setBadgeCount(null));
    await store.dispatch(commonActions.setSkipLogin(false));
    await auth()
        .signOut()
        .then(async (data) => {
            console.log('Logout Firebase auth success: ', { data });
        })
        .catch((error) => {
            console.log('Logout Firebase auth failed: ', { error });
        });
    await onResetRoute();

    //token hết hạn => force logOut
    showMessage({
        message: i18n.t(`sessionExpired`),
        type: 'danger',
    });
}