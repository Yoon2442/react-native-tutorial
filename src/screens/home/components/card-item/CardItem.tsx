import React, { useMemo, useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import AppContext from "../../../../../AppContext";
/**
 * ? Local Imports
 */
import createStyles from "./CardItem.style";
import { ICardItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { difficulty, description } = data;

  const dataContext = useContext(AppContext);

  const Header = () => (
    <>
      <Text style={{ fontSize: 30 }} color={colors.text}>
        {difficulty}
      </Text>
      <Text h5 color={colors.placeholder} style={styles.descriptionTextStyle}>
        {description}
      </Text>
    </>
  );

  // const Language = () => (
  //   <View style={styles.languageContainer}>
  //     <View style={styles.languageColorStyle} />
  //     <Text style={styles.valueTextStyle}>{language}</Text>
  //   </View>
  // );

  // const Star = () => (
  //   <View style={styles.starContainer}>
  //     <Icon name="star-o" type={IconType.FontAwesome} color={colors.text} />
  //     <Text style={styles.valueTextStyle}>{star}</Text>
  //   </View>
  // );

  // const Fork = () => (
  //   <View style={styles.forkContainer}>
  //     <Icon name="code-fork" type={IconType.FontAwesome} color={colors.text} />
  //     <Text style={styles.valueTextStyle}>{fork}</Text>
  //   </View>
  // );

  const customOnPress = () => {
    onPress();
    dataContext.dataSetting(data);
  };

  return (
    <RNBounceable style={[styles.container, style]} onPress={customOnPress}>
      <Header />
      <View style={styles.contentContainer}></View>
    </RNBounceable>
  );
};

export default CardItem;
