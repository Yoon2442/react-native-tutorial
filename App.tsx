import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import AppContext from "./AppContext";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const [data, setData] = useState(null);

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

  const dataSetting = (data: any) => {
    setData(data);
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
