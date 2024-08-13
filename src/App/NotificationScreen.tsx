import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import globalStyles from "../Styles/Global";
import NotificationCard from "../Components/NotificationCard";
import UseNotificationContext from "../Hook/UseNotificationContext";

type RootStackParamList = {
  Notification: { name: string };
  Profile: { name: string };
};

type NotificationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export default function NotificationScreen({ navigation }: NotificationScreenProps) {
  const { notifications } = UseNotificationContext();

  const filterNotificationRead = notifications.filter(
    (notification) => notification.ReadNotification === false
  );

  const filterNotificationUnread = notifications.filter(
    (notification) => notification.ReadNotification === true
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack
          onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        />
      </View>

      <TextComponent>Notificação</TextComponent>

      {filterNotificationRead.length > 0 && (
        <>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: 18,
              marginTop: 16,
            }}
          >
            Novo
          </Text>

          <FlatList
            data={filterNotificationRead}
            keyExtractor={(item, index) =>
              item.Id ? item.Id.toString() : index.toString()
            }
            renderItem={({ item, index }) => (
              <NotificationCard
                key={item.Id ?? index.toString()}
                TextNotification={item.NotificationType ?? "Unknown"}
                dateCreated={item.DateCreated ?? "Unknown"}
                readNotification={false}
                onPress={() => console.log("Notification")} 
              />
            )}
          />
        </>
      )}

      {filterNotificationUnread.length > 0 && (
        <>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "300",
              fontSize: 18,
              marginTop: 16,
            }}
          >
            Lidas
          </Text>

          <FlatList
            data={filterNotificationUnread}
            keyExtractor={(item, index) =>
              item.Id ? item.Id.toString() : index.toString()
            }
            renderItem={({ item, index }) => (
              <NotificationCard
                key={item.Id ?? index.toString()}
                TextNotification={item.NotificationType ?? "Unknown"}
                dateCreated={item.DateCreated ?? "Unknown"}
                readNotification={true}
              />
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}
