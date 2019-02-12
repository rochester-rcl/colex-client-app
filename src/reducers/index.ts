import { combineReducers } from "redux";
import translationReducer, { ITranslationState } from "./TranslationReducer";

export interface IAppState {
  translationState: ITranslationState;
}

const appReducer = combineReducers<IAppState, any>({
  translationState: translationReducer
});

export default appReducer;
