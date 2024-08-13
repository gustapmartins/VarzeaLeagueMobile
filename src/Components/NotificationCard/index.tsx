import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { INotificationCard } from "../../Interface/Components/NotificationCard";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../Styles/GlobalColors";

export default function NotificationCard({
  TextNotification,
  dateCreated,
  readNotification,
  onPress,
}: INotificationCard) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardNotification}>
          <View style={styles.sectionText}>
            <Text style={styles.textNotification}>{TextNotification}</Text>
            <Text style={styles.dateCreatedNotification}>{dateCreated?.toString()}</Text>
          </View>
          <View style={styles.sectionIcon}>
            <Icon style={{...styles.icon, color: readNotification ? COLORS.fail : COLORS.success}} name={readNotification ? "caret-down-circle-outline" : "caret-up-circle-outline"} />
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
