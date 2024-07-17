import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import globalStyles from "../Styles/Global";
import NotificationCard from "../Components/NotificationCard";
import { useContext, useEffect, useState } from "react";
import { NotificationService } from "../Services/NotificationService";
import { INotificationViewDto } from "../Interface/Dto/INotificationDto";
import { AuthContext } from "../Context/AuthContext";
import { ActivityIndicator } from "react-native-paper";

type RootStackParamList = {
  Notification: { name: string };
  Profile: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notification"
>;

export default function NotificationScreen({ navigation }: ProfileScreenProps) {

  const [notification, setNotification] = useState<INotificationViewDto[]>([]);
  const [loading, setLoading] = useState(true);

  const authContext = useContext(AuthContext); // Usando o AuthContext

  const fetchMatches = async () => {
    try {
      if (!authContext?.token) {
        return;
      }
      const response = await NotificationService.getNotification(authContext?.token, 1, 10);
      setNotification(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ToBack
            onPress={() => navigation.navigate("Profile", { name: "Profile" })}
          />
        </View>
        <View style={[globalStyles.container, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
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
        <FlatList
          data={notification}
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
      </View>
    </SafeAreaView>
  );
}