
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from '~redux/reducer';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from '~redux/Saga/rootSaga';

const store = createStore(loginReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;