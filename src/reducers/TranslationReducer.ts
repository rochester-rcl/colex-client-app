import {
  TranslationActionConstants,
  TranslationAction,
  ITranslationData
} from "../actions/TranslationActions";

export interface ITranslationState {
  translations: ITranslationData[];
  error?: string;
}

const initialState: ITranslationState = {
  translations: <ITranslationData[]>[]
};

export default function translationReducer(
  state: ITranslationState = initialState,
  action: TranslationAction
): ITranslationState {
  switch (action.type) {
    case TranslationActionConstants.TRANSLATIONS_LOADED:
      return {
        ...state,
        ...action.payload
      };
    case TranslationActionConstants.TRANSLATIONS_ERROR:
      return {
        ...state,
        ...{ error: action.error }
      };
    default:
      return state;
  }
}
