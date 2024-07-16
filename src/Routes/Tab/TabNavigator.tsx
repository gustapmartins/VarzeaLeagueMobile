import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../Stacks/HomeStackScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";
import NewStackScreen from "../Stacks/NewStackScreen";
import Icon from "react-native-vector-icons/AntDesign";
import ButtonNew from "../../Components/ButtoNew";
import { COLORS } from "../../Styles/GlobalColors";

type ProfileStackParamList = {
  HomeStack: { name: string }; // Defina os nomes das telas corretamente
  ProfileStack: { name: string };
  NewStack: { name: string };
};

const Tab = createBottomTabNavigator<ProfileStackParamList>();

export function TabNavigator() {
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
          tabBarIcon: ({ color, focused, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          title: "Home",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="NewStack"
        component={NewStackScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew iconButton={focused ? "close" : "plus"} size={size} />
          ),
          title: "",
          headerShown: false,
        }}
      />

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
