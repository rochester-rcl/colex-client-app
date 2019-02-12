import {
  ExampleActionConstants,
  ExampleAction,
  IExampleData
} from "../actions/ExampleActions";

export interface ExampleState {
  data: IExampleData[];
}

const initialState: ExampleState = {
  data: <IExampleData[]>[]
};

export default function exampleReducer(
  state: ExampleState = initialState,
  action: ExampleAction
): ExampleState {
  switch (action.type) {
    case ExampleActionConstants.DATA_LOADED:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
