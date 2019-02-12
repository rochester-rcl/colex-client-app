import { IAction } from "../constants/types";

export interface ExampleAction extends IAction {
  type: ExampleActionConstants;
  payload: { data: IExampleData[] };
}

export interface IExampleData {
  value: string;
}

export enum ExampleActionConstants {
  LOAD_DATA = "LOAD_DATA",
  DATA_LOADED = "DATA_LOADED"
}

export const loadData = (): object => {
  return {
    type: ExampleActionConstants.LOAD_DATA
  };
};
