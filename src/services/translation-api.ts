import ColexAPIService from './api';
import { TRANSLATIONS_BACKEND } from '../constants/backend';
import { ITranslationData } from "../actions/TranslationActions";
import { format } from 'url';

export default class TranslationAPIService extends ColexAPIService {
    backend = TRANSLATIONS_BACKEND;
    getTranslations(params: object = {}): Promise<object | []> {
        return this.get(this.backend, params);
    }
}