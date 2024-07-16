import React from "react";
import { GestureResponderEvent, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

export default function ToBack({ onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.titleBar}>
        <Icon style={styles.icon} name="left" />
      </View>
    </TouchableWithoutFeedback>
  );
}
