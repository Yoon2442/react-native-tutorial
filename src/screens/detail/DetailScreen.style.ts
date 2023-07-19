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
  chevronButtonStyle: ViewStyle;
  missionTextStyle: TextStyle;
  chevronIconStyle: ViewStyle;
  disabledIconStyle: ViewStyle;
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
      paddingTop: 10,
      padding: 0,
      borderRadius: 10,
      width: "90%",
    },
    cardTitleTextStyle: {
      fontSize: 20,
    },
    titleTextStyle: {
      marginTop: "20%",
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: "90%",
      marginBottom: "20%",
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
    chevronButtonStyle: {
      backgroundColor: "transparent",
      height: 40,
      width: 40,
    },
    chevronIconStyle: { color: colors.primary, opacity: 0.8, fontSize: 20 },
    disabledIconStyle: { color: "gray", opacity: 0.5, fontSize: 20 },
    missionTextStyle: { fontSize: 20 },
  });
};
