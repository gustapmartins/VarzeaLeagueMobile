import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileParamList from "./ProfileParamList";
import NewScreen from "../../App/ControlPainelScreen";
import RegisterPlayer from '../../App/RegisterPlayerScreen';
import RegisterTeam from "../../App/RegisterTeamScreen";
import RegisterMatch from "../../App/RegisterMatchScreen";

const HomeStack = createNativeStackNavigator<ProfileParamList>();

export default function ControlPainelScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="ControlPainel"
                component={NewScreen}
                options={{ headerShown: false }} />

            <HomeStack.Screen
                name="RegisterMatch"
                component={RegisterMatch}
                options={{ headerShown: false }} />

            <HomeStack.Screen
                name="RegisterPlayer"
                component={RegisterPlayer}
                options={{ headerShown: false }} />

            <HomeStack.Screen
                name="RegisterTeam"
                component={RegisterTeam}
                options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}