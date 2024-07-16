import React, { useState } from "react";
import { Text, View, Animated } from "react-native";
import { IModal } from "../../Interface/Components/IModal";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

export default function Modal({ text, IconName }: IModal) {
  const [lenght, setLenght] = useState(new Animated.Value(160));

  Animated.sequence([
    Animated.timing(lenght, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),

    Animated.timing(lenght, {
      toValue: 160,
      delay: 1000,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <Animated.View
      style={{
        ...styles.card,
        transform: [{ translateX: lenght }] // Use translateX instead of right: ;
      }}
    >
      <Icon style={styles.icon} name={IconName} />
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}
