import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import AppContext from "./AppContext";
import { ICardItem } from "@services/models";

/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const [data, setData] = useState<ICardItem>({
    difficulty: "",
    description: "",
    language: "",
    star: 0,
    fork: 0,
    gameData: { mission: [] },
  });

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  const dataSetting = (cardItem: ICardItem) => {
    setData(cardItem);
  };

  const contextSettings = {
    data,
    dataSetting,
  };

  return (
    <>
      <AppContext.Provider value={contextSettings}>
        <Navigation />
      </AppContext.Provider>
    </>
  );
};

export default App;
