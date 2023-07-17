import { createContext } from "react";
import { ICardItem } from "@services/models";

interface DataContext {
  data: ICardItem;
  dataSetting(cardItem: ICardItem): void;
}

const defaultValue = {
  data: {
    difficulty: "",
    description: "",
    language: "",
    star: 0,
    fork: 0,
    gameData: { mission: [] },
  },
  dataSetting: () => {},
};

const AppContext = createContext<DataContext>(defaultValue);

export default AppContext;
