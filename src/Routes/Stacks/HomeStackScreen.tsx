import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../App/HomeScreen";
import ProfileParamList from "./ProfileParamList";

const HomeStack = createNativeStackNavigator<ProfileParamList>();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}/>
        </HomeStack.Navigator>
    );
}