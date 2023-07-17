// src/store/types.ts

import { ICardItem } from "@services/models";

export interface AppState {
  data: ICardItem;
}

export enum ActionType {
  SET_DATA = "SET_DATA",
}

interface SetDataAction {
  type: ActionType.SET_DATA;
}

export type Action = SetDataAction;
