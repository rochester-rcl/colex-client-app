import ColexAPIService from './api';
import { TRANSLATIONS_BACKEND } from '../constants/backend';
import { ITranslationData } from "../actions/TranslationActions";
import { format } from 'url';

export default class TranslationAPIService extends ColexAPIService {
    private backend: string = TRANSLATIONS_BACKEND;
    // TODO this is set to no-cors for now but we may need to look into what's going on on lddtech
    private defaultParams: object = { method: 'GET' };
    getTranslations(params: object = {}): Promise<object | []> {
        return this.get(this.backend, {...this.defaultParams, ...params});
    }
}