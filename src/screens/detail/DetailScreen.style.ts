import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  cardContainer: ViewStyle;
  cardTitleTextStyle: TextStyle;
  nextButtonStyle: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    cardContainer: {
      borderRadius: 10,
      width: "90%",
    },
    cardTitleTextStyle: {
      fontSize: 20,
    },
    titleTextStyle: {
      marginTop: 50,
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: "90%",
      marginTop: 10,
      marginBottom: 50,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.text,
      fontWeight: "700",
    },
    nextButtonStyle: {
      height: 45,
      width: "30%",
      marginTop: 10,
      marginBottom: 50,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
  });
};
