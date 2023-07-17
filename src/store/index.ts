// src/store/index.ts

import { createStore } from "redux";
import { AppState, Action, ActionType } from "./types";

const initialState: AppState = {
  data: {
    difficulty: "",
    description: "",
    language: "",
    star: 0,
    fork: 0,
    gameData: { mission: [] },
  },
};

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return { ...state, data: state.data };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
