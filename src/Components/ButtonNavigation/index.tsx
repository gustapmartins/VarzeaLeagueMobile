import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IButtonNavigation } from "../../Interface/Components/IButtonNavigation";
import { COLORS } from "../../Styles/GlobalColors";
import styles from "./styles";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function ButtonNavigation({ IconName, LabelButton, onPress }: IButtonNavigation) {

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.buttonHeader}>
        <IconMaterialCommunityIcons style={styles.icon} name={IconName} />
        <Text style={styles.text}>{LabelButton}</Text>
      </View>
      <IconAntDesign color={COLORS.icon} name="right" />
    </TouchableOpacity>
  );
}
