import { combineReducers } from 'redux';
import wordReducer, { WordState } from './WordReducer';

export interface IAppState {
    words: WordState
}

const appReducer = combineReducers<IAppState, any>({
    words: wordReducer
});

export default appReducer;