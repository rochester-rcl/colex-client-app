import { all, fork } from "redux-saga/effects";
import wordSaga from './words-saga';

export default function* rootSaga() {
    yield all([fork(wordSaga)])
}