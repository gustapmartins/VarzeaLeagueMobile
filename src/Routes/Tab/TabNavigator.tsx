import ControlPainelScreen from "../Stacks/ControlPainelScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";
import HomeStackScreen from "../Stacks/HomeStackScreen";
import Icon from "react-native-vector-icons/AntDesign";
import ButtonNew from "../../Components/ButtoNew";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../Styles/GlobalColors";
import { Role } from "../../Enum/Role";[]
import UseUserContext from "../../Hook/UseUserContext";


type ProfileStackParamList = {
  HomeStack: { name: string }; // Defina os nomes das telas corretamente
  ProfileStack: { name: string };
  ControlPainelStack: { name: string };
};

const Tab = createBottomTabNavigator<ProfileStackParamList>();

export function TabNavigator() {
  
  const { user } = UseUserContext(); // Usando o UserContext

  console.log(user)

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

      {user !== null && Object.keys(user).length > 0 && (
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
