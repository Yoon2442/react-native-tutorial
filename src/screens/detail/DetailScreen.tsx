import React, { useMemo, useContext } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
import AppContext from "../../../AppContext";
import { Card } from "@rneui/base";
/**
 *  Local Imports
 */
import createStyles from "./DetailScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dataContext = useContext(AppContext);

  const Content = () => (
    <View style={styles.contentContainer}>
      <CardContent />
    </View>
  );

  const CardContent = () => (
    <Card
      containerStyle={styles.cardContainer}
      wrapperStyle={{ height: "70%" }}
    >
      <Card.Title style={styles.cardTitleTextStyle}>Mission</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center",
        }}
      >
        <Text style={styles.cardTitleTextStyle}>
          {dataContext.data.gameData.mission}
        </Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text} style={styles.titleTextStyle}>
        {dataContext.data.difficulty} Mode
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
