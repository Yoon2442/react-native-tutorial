// src/store/types.ts

export interface AppState {
  difficulty: string;
  mission: string[];
}

export enum ActionType {
  SET_DIFFICULTY = "SET_DIFFICULTY",
}

interface SetDifficultyAction {
  type: ActionType.SET_DIFFICULTY;
}

export type Action = SetDifficultyAction;
