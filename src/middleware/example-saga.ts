import { put, takeEvery, all, fork } from "redux-saga/effects";
import {
  ExampleAction,
  ExampleActionConstants,
  IExampleData
} from "../actions/ExampleActions";

export function* loadData(action: ExampleAction): Generator {
  try {
    // fetching would happen here
    const exampleAction: ExampleAction = {
      type: ExampleActionConstants.DATA_LOADED,
      payload: { data: <IExampleData[]>[{ value: "The app is working" }] }
    };
    yield put(exampleAction);
  } catch (error) {
    console.log(error);
  }
}

export function* watchForLoadData(): Generator {
  yield takeEvery(ExampleActionConstants.LOAD_DATA, loadData);
}

export default function* exampleSaga() {
  yield all([fork(watchForLoadData)]);
}
