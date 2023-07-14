import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./DetailScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { GameData } from "@services/models";

interface DetailScreenProps {
  difficulty: string;
  gameData: GameData;
}

const DetailScreen: React.FC<DetailScreenProps> = ({
  difficulty,
  gameData,
}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { mission } = gameData;

  const Content = () => (
    <View style={styles.contentContainer}>
      <Text>{difficulty}</Text>
      <Text>{mission}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Detail Screen
      </Text>
      <Content />
      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text color={colors.white}>Go back to Home</Text>
      </RNBounceable>
    </View>
  );
};

export default DetailScreen;
