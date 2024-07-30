import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../Styles/GlobalColors";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from "../Styles/Global";
import ToBack from "../Components/ToBack";
import NotificationButton from "../Components/NotificationButton";
import { AuthService } from "../Services/AuthService";
import { IUserModel } from "../Interface/Model/IUserModel";
import { NotificationService } from "../Services/NotificationService";
import useAuthContext from "../Hook/UseAuthContext";
import UseUserContext from "../Hook/UseUserContext";
import UseNotificationContext from "../Hook/UseNotificationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Profile: { name: string };
  Login: { name: string };
  Register: { name: string };
  Home: { name: string };
  Notification: { name: string };
  Configuration: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: ProfileScreenProps) {

  const { notifications, setNotifications } = UseNotificationContext();
  const { token, setToken } = useAuthContext();
  const { user, setUser } = UseUserContext();

  const loadUser = async () => {
    try {
      if (!token) {
        return;
      }

      const response = await AuthService.decodeToken(token);

      const deserializer = JSON.parse(JSON.stringify(response)) as IUserModel;

      setUser(deserializer);
    } catch (error) {
      console.error("Erro ao verificar token:", error);
    }
  };

  const fetchNotifications = async () => {
    try {
      
      if(!token){
        return;
      }

      const response = await NotificationService.getNotification(
        token,
        1,
        10
      );

      console.log(response);

      if (!response || response.length === 0) {
        return null;
      }

      setNotifications(response);
    } catch (error) {
      console.error("Erro ao buscar notificações:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    loadUser();
  }, [token]);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken("");
    } catch (error) {
      console.error("Erro ao verificar token:", error);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack onPress={() => navigation.navigate("Home", { name: "Home" })} />
        <NotificationButton
          counter={notifications.length}
          onPress={() =>
            navigation.navigate("Notification", { name: "Notification" })
          }
        />
      </View>

      <View style={{ alignSelf: "center" }}>
        <View style={styles.profileImage}>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSvoyfTuW2nTVkhl-WGkaDPVsD9e0dKARnv7v3xJWcQ&s",
            }}
          />
        </View>
        <View style={styles.edit}>
          <Icon
            name="cog"
            size={24}
            color="#FFF"
            onPress={() =>
              navigation.navigate("Configuration", { name: "Configuration" })
            }
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={[
            {
              fontWeight: "400",
              marginTop: 12,
              fontSize: 28,
              color: COLORS.text,
            },
          ]}
        >
          {user?.username ? user?.username.toUpperCase() : ""}
        </Text>
      </View>

      <View style={styles.infoUserContainer}>
        <View style={styles.infoUser}>
          <Icon style={styles.icon} name="person" />
          <Text style={styles.text}>{user?.id}</Text>
        </View>

        <View style={styles.infoUser}>
          <Icon style={styles.icon} name="mail" />
          <Text style={styles.text}> {user?.email} </Text>
        </View>

        <View style={styles.infoUser}>
          <Icon style={styles.icon} name="reader-sharp" />
          <Text style={styles.text}>{user?.cpf}</Text>
        </View>

        <View style={styles.infoUser}>
          <Icon style={styles.icon} name="calendar" />
          <Text style={styles.text}> {user?.dataCreated ? user.dataCreated.split(" ")[0] : ""} </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          logout();
        }}
      >
        <Icon name="exit-outline" color={COLORS.button} size={22} />
        <Text style={styles.textInput}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    overflow: "hidden",
  },

  notification: {
    fontSize: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  edit: {
    position: "absolute",
    backgroundColor: COLORS.button,
    width: 50,
    height: 50,
    bottom: 0,
    right: 0,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    objectFit: "cover",
  },

  infoContainer: {
    alignSelf: "center",
  },

  textInput: {
    fontSize: 18,
    color: COLORS.button,
    fontWeight: "500",
    marginTop: 12,
  },

  infoUserContainer: {
    flexDirection: "column",
    marginTop: 10,
  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 10,
  },

  icon: {
    fontSize: 16,
    color: COLORS.text,
  },

  text: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: "center",
    paddingLeft: 32,
  },

  logout: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 52,
  },
});
