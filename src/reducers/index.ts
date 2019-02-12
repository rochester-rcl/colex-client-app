import { combineReducers } from "redux";
import exampleReducer, { ExampleState } from "./ExampleReducer";

export interface IAppState {
  exampleState: ExampleState;
}

const appReducer = combineReducers<IAppState, any>({
  exampleState: exampleReducer
});

export default appReducer;
