import React, { useMemo, useContext, useState } from "react";
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

  const [missions, setMissions] = useState(dataContext.data.gameData.mission);

  const Title = () => (
    <Text h1 color={colors.text} style={styles.titleTextStyle}>
      {dataContext.data.difficulty} Mode
    </Text>
  );

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
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginTop: "10%",
          }}
        >
          {missions.length == 0 ? "Game Over" : missions[0]}
        </Text>
        <NextButton />
      </View>
    </Card>
  );

  const NextButton = () =>
    missions.length == 0 ? (
      <></>
    ) : (
      <RNBounceable style={styles.nextButtonStyle} onPress={onPressNextButton}>
        <Text style={{ fontSize: 20 }} color={colors.white}>
          Next
        </Text>
      </RNBounceable>
    );

  const GoBackButton = () => (
    <RNBounceable style={styles.buttonStyle} onPress={onPressGoBackButton}>
      <Text style={{ fontSize: 20 }} color={colors.white}>
        Go back to Home
      </Text>
    </RNBounceable>
  );

  const onPressGoBackButton = () => {
    NavigationService.goBack();
  };

  const onPressNextButton = () => {
    const tempMission = [...missions];
    tempMission.shift();
    setMissions([...tempMission]);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Content />
      <GoBackButton />
    </View>
  );
};

export default DetailScreen;
