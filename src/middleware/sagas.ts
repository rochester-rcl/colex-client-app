import { all, fork } from "redux-saga/effects";
import translationSaga from './translation-saga';

export default function* rootSaga() {
    yield all([fork(translationSaga)])
}