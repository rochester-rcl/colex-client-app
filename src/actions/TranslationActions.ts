import { IAction } from "../constants/types";
import { ILanguageData } from "./LanguageActions";
import { IWordData } from "./WordActions";
import { IUserData } from "./UserActions";

export interface TranslationAction extends IAction {
  type: TranslationActionConstants;
  payload: { translations: ITranslationData[] };
  error?: string;
}

export interface ITranslationData {
  id: number;
  user: IUserData;
  word: IWordData;
  language: ILanguageData;
  targetWord: string;
  sentence: string;
  targetSentence: string;
  accepted: boolean;
  submissionTime: string;
}

export enum TranslationActionConstants {
  LOAD_TRANSLATIONS = "LOAD_TRANSLATIONS",
  TRANSLATIONS_LOADED = "TRANSLATIONS_LOADED",
  TRANSLATIONS_ERROR = "TRANSLATIONS_ERROR"
}

export const loadTranslations = (): object => {
  return {
    type: TranslationActionConstants.LOAD_TRANSLATIONS
  };
};