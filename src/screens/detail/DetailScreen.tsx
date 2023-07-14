import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
import { connect } from "react-redux";
import { AppState } from "../../store/types";
/**
 * ? Local Imports
 */
import createStyles from "./DetailScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";
// import { GameData } from "@services/models";

const mapStateToProps = (state: AppState) => ({
  difficulty: state.difficulty,
  mission: state.mission,
});

interface DetailScreenProps {
  difficulty: string;
  mission: string[];
}

const DetailScreen: React.FC<DetailScreenProps> = ({ difficulty, mission }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

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

export default connect(mapStateToProps)(DetailScreen);
