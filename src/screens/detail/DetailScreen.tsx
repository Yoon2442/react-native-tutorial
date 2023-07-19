import React, { useMemo, useContext, useState } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
import AppContext from "../../../AppContext";
import { Card, LinearProgress, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";

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

  const [missions] = useState(dataContext.data.gameData.mission);
  const [missionNumber, setMissionNumber] = useState(0);
  const [missionCount] = useState(dataContext.data.gameData.mission.length);

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
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Mission />
        <BackandForthButton />
        <LinearProgress
          style={{
            width: "100%",
            height: "5%",
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
          }}
          color={colors.primary}
          value={(missionNumber + 1) / missionCount}
          animation={false}
        />
      </View>
    </Card>
  );

  const Mission = () => (
    <Text style={styles.missionTextStyle}>
      {missionNumber == missionCount ? "Game Over" : missions[missionNumber]}
    </Text>
  );

  const BackandForthButton = () => (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button
        style={styles.prevButtonStyle}
        disabled={missionNumber == 0}
        icon={<Icon name="chevron-left" size={10} color="white" />}
        onPress={onPressPrevButton}
      ></Button>
      <Button
        style={styles.nextButtonStyle}
        disabled={missionNumber == missionCount}
        icon={<Icon name="chevron-right" size={10} color="white" />}
        onPress={onPressNextButton}
      ></Button>
    </View>
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
    if (missionNumber == missionCount) return;
    setMissionNumber(missionNumber + 1);
  };

  const onPressPrevButton = () => {
    if (missionNumber == 0) return;
    setMissionNumber(missionNumber - 1);
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
