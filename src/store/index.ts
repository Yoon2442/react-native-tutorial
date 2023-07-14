// src/store/index.ts

import { createStore } from "redux";
import { AppState, Action, ActionType } from "./types";

const initialState: AppState = {
  difficulty: "",
};

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.SET_DIFFICULTY:
      return { ...state, difficulty: state.difficulty };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
