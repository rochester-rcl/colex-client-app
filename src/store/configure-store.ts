import { createStore, applyMiddleware, StoreCreator } from 'redux';
import appReducer, { IAppState } from '../reducers';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';


export const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store = createStore<IAppState, any, any, any>(appReducer, applyMiddleware(sagaMiddleware));

export default store;