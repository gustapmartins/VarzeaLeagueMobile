import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import globalStyles from "../Styles/Global";
import NotificationCard from "../Components/NotificationCard";
import { useState } from "react";
import { INotificationViewDto } from "../Interface/Dto/INotificationDto";
import { ActivityIndicator } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import useAuthContext from "../Hook/UseAuthContext";
import UseNotificationContext from "../Hook/UseNotificationContext";

type RootStackParamList = {
  Notification: { name: string };
  Profile: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export default function NotificationScreen({ navigation }: ProfileScreenProps) {

  const [loading, setLoading] = useState(true);
  const { notifications } = UseNotificationContext(); // Usando o NotificationContext

  const fetchMatches = async () => {
    try {

      if(notifications != null) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useFocusEffect(() => {
    fetchMatches();
  });

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ToBack
            onPress={() => navigation.navigate("Profile", { name: "Profile" })}
          />
        </View>
        <View
          style={[
            globalStyles.container,
            { flex: 1, justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack
          onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        />
      </View>

      <TextComponent>Notificação</TextComponent>

      <View>

      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item, index) =>
          item.Id ? item.Id.toString() : index.toString()
        }
        renderItem={({ item, index }) => (
          <NotificationCard
            key={item.Id ?? index.toString()}
            TextNotification={item.NotificationType ?? "Unknown"}
            dateCreated={item.DateCreated ?? "Unknown"}
            readNotification={false}
          />
        )}
      />
    </SafeAreaView>
  );
}
