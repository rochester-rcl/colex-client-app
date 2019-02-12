import { put, takeEvery, all, fork } from "redux-saga/effects";
import {
  TranslationAction,
  TranslationActionConstants,
  ITranslationData
} from "../actions/TranslationActions";
import TranslationAPIService from "../services/translation-api";

const service: TranslationAPIService = new TranslationAPIService();


export function* loadTranslations(action: TranslationAction): Generator {
  try {
    // fetching would happen here
    const translations: object | [] = yield service.getTranslations();
    if (!translations) {
      const translationsErrorAction: TranslationAction = {
        type: TranslationActionConstants.TRANSLATIONS_ERROR,
        payload: { translations: <ITranslationData[]>[]},
        error: 'unable to load translations' 
      }
      yield put(translationsErrorAction);
    } else {
      const loadedTranslationsAction: TranslationAction = {
        type: TranslationActionConstants.TRANSLATIONS_LOADED,
        payload: { translations: <ITranslationData[]>translations }
      };
      yield put(loadedTranslationsAction);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchForLoadTranslations(): Generator {
  yield takeEvery(TranslationActionConstants.LOAD_TRANSLATIONS, loadTranslations);
}

export default function* exampleSaga() {
  yield all([fork(watchForLoadTranslations)]);
}
