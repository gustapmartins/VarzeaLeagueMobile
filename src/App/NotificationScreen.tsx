import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import globalStyles from "../Styles/Global";
import NotificationCard from "../Components/NotificationCard";

type RootStackParamList = {
  Notification: { name: string };
  Profile: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export default function NotificationScreen({ navigation }: ProfileScreenProps) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack
          onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        />
      </View>

      <TextComponent>Notificação</TextComponent>

      <View style={styles.container}>
        <NotificationCard
          TextNotification="You spent Rp 32.000 for Coffe Cetar back Tugu Sentral"
          dateCreated="29 June 2021, 9.02 AM"
          readNotification={false}
        />

        <NotificationCard
          TextNotification="You spent Rp 32.000 for Coffe Cetar back Tugu Sentral"
          dateCreated="29 June 2021, 9.02 AM"
          readNotification={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
