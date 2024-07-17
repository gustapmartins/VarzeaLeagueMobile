import ControlPainelScreen from "../Stacks/ControlPainelScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";
import HomeStackScreen from "../Stacks/HomeStackScreen";
import Icon from "react-native-vector-icons/AntDesign";
import ButtonNew from "../../Components/ButtoNew";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { AuthService } from "../../Services/AuthService";
import { IUserModel } from "../../Interface/Model/IUserModel";
import { COLORS } from "../../Styles/GlobalColors";
import { Role } from "../../Enum/Role";

type ProfileStackParamList = {
  HomeStack: { name: string }; // Defina os nomes das telas corretamente
  ProfileStack: { name: string };
  ControlPainelStack: { name: string };
};

const Tab = createBottomTabNavigator<ProfileStackParamList>();

export function TabNavigator() {

  const { token, setToken } = useContext(AuthContext)!; // Usando o AuthContext
  const [user, setUser] = useState<IUserModel>();

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        try {
          const response = await AuthService.decodeToken(token);
          const deserializer = response as IUserModel;
          console.log(deserializer);
          setUser(deserializer);
        } catch (error) {
          console.error('Error decoding token:', error);
          // Handle error appropriately, e.g., show a message to the user
        }
      }
    };

    checkToken();
  }, [token]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: COLORS.navigation,
        },
        headerTransparent: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          title: "Home",
          headerShown: false,
        }}
      />

      {user?.role === Role.Admin && (
        <Tab.Screen
          name="ControlPainelStack"
          component={ControlPainelScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <ButtonNew iconButton={focused ? "close" : "plus"} size={size} />
            ),
            title: "",
            headerShown: false,
          }}
        />
      )}

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
