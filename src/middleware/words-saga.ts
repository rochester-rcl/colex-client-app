import { put, takeEvery, call, all, fork } from "redux-saga/effects";
import { WordAction, WordActionConstants } from "../actions/WordActions";

export function* loadWords(action: WordAction): Generator {
    try {
        // get words here
        console.log('this is working');
    } catch(error) {
        console.log(error);
    }
}

export function* watchForLoadWords(): Generator {
    yield takeEvery(WordActionConstants.LOAD_WORDS, loadWords);
}

export default function* wordSaga() {
    yield all([
        fork(watchForLoadWords),
    ]);
}