import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { INotification } from "../../Interface/Components/INotification";

export default function NotificationButton({ onPress, counter }: INotification) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.counter}> {counter} </Text>
        <Icon style={styles.notification} name="notifications-outline" />
      </View>
    </TouchableWithoutFeedback>
  );
}
