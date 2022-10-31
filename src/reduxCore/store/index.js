import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['configuration', 'user'],
  };

const sagaMiddleware = createSagaMiddleware();

// import rootReducer from '~reduxCore/reducers/rootReducer';
// import rootSaga from '~reduxCore/saga/rootSaga';
import rootReducer from '~reduxCore/reducers';
import rootSaga from '~reduxCore/saga';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};