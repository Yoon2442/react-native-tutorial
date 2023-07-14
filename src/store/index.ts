// src/store/index.ts

import { createStore } from "redux";
import { AppState, Action, ActionType } from "./types";

const initialState: AppState = {
  difficulty: "easy",
  mission: ["mission1", "mission2"],
};

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.SET_DIFFICULTY:
      return { ...state, difficulty: state.difficulty, mission: state.mission };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
