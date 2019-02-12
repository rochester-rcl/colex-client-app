import { IAction } from '../constants/types';

export interface WordAction extends IAction {
    type: WordActionConstants,
    words?: Array<object>
}

export enum WordActionConstants {
    LOAD_WORDS = 'LOAD_WORDS',
    WORDS_LOADED = 'WORDS_LOADED'
};

export function loadWords(): object {
    return {
        type: WordActionConstants.LOAD_WORDS
    }
}


