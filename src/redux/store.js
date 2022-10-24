
/*// use redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
//Redux Saga
import rootSaga from './Saga/rootSaga';
import loginReducer from './ToolKit/loginSlice';
const sagaMiddleware = createSagaMiddleware();

import { combineReducers } from 'redux'

const store = configureStore({
    reducer:loginReducer,
    middleware :(getDefaultMiddleware) =>getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);*/


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import rootReducer from './rootReducer';
import loginReducer from './reducer';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './Saga/rootSaga';

const store = createStore(loginReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;