// import Action
import { fork, take } from '@redux-saga/core/effects';
import {loginAction} from  '../ToolKit/loginSlice'

function * handleLogin(payload){
 console.log('handel Login',payload)
}

function * handleLogout(){
    console.log('handel Logout')
}
function* watchLoginFlow(){
yield fork(handleLogin,payload)
}
export function * loginSaga(){
    watchLoginFlow();
}