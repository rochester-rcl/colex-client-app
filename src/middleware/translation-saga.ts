import { put, takeEvery, all, fork } from "redux-saga/effects";
import {
  TranslationAction,
  TranslationActionConstants,
  ITranslationData
} from "../actions/TranslationActions";
import TranslationAPIService from "../services/translation-api";
import { IWordData } from "../actions/WordActions";
import { ILanguageData } from "../actions/LanguageActions";

const service: TranslationAPIService = new TranslationAPIService();

// TODO while waiting for translation data here is a dummy one 
const translation: ITranslationData = {
  id: 1,
  word: <IWordData> {
    id: 1,
    word: 'banana',
    partOfSpeech: 'n',
  },
  language: <ILanguageData> {
    id: 1,
    language: 'english'
  },
  targetWord: 'banane',
  sentence: 'I have a banana',
  targetSentence: "J'ai une banane.",
  accepted: true
}

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
      // TODO change this when there are actually translations
      const loadedTranslationsAction: TranslationAction = {
        type: TranslationActionConstants.TRANSLATIONS_LOADED,
        payload: { translations: [translation] }
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
