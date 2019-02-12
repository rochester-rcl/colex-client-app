
import { WordActionConstants, WordAction } from '../actions/WordActions';

export interface WordState {
    words?: object[] | null
};

const initialState: WordState = {
    words: null
}

export default function wordReducer(state: WordState = initialState, action: WordAction): WordState {
    switch(action.type) {
        case WordActionConstants.WORDS_LOADED:
            return {
                ...state,
                ...action.words
            }
        default:
            return state;
    }
}