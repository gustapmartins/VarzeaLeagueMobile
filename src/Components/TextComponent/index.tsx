import React from "react";
import { Text, View } from "react-native";
import { IText } from "../../Interface/Components/IText";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default function TextComponent({ children, IconName }: IText) {
  return (
    <View style={styles.container}>
      {IconName != null && <Icon style={styles.icon} name={IconName} />}
      <Text style={styles.h1}>{children}</Text>
    </View>
  );
}
