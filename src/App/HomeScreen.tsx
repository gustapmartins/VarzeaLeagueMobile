import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import FootballCard from "../Components/FootballCard";
import Search from "../Components/Search";
import globalStyles from "../Styles/Global";
import { useEffect, useState } from "react";
import { MatchService } from "../Services/MatchService";
import { SafeAreaView } from "react-native-safe-area-context";
import UseMatchContext from "../Hook/UseMatchContext";
import Filter from "../Components/Filter";

type RootStackParamList = {
  Home: { name: string };
  Register: { name: string };
  Login: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: ProfileScreenProps) {

  const [loading, setLoading] = useState(true);
  const { matchs, setMatchs } = UseMatchContext();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await MatchService.getMatches(1, 10);

        setMatchs(response);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={[globalStyles.container, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      <Search matches={matchs} />

      <Filter />

      <FlatList
        data={matchs}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item, index }) => (
          <FootballCard
            id={item.id ?? index.toString()}
            homeTeamModel={item.homeTeamModel ?? "Unknown"}
            visitingTeamModel={item.visitingTeamModel ?? "Unknown"}
            onPress={() => console.log("selected")}
          />
        )}
      />
    </View>
  );
}
