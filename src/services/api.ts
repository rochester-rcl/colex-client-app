import { TRANSLATIONS_BACKEND } from '../constants/backend';
import { put } from 'redux-saga/effects';

interface IAPIService {
    get(url: string, params: object): Promise<object | []>
    /*post(url: string, body: Object | FormData): Promise<object>
    put(url: string, body: Object | FormData): Promise<object>*/
}

export default class ColexAPIService implements IAPIService {
    get(url: string, params: object): Promise<object | []> {
        return fetch(url, params)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    }
}