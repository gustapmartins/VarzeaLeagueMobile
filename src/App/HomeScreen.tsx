import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, View } from "react-native";
import FootballCard from "../Components/FootballCard";
import Search from "../Components/Search";
import globalStyles from "../Styles/Global";
import { useEffect, useState } from "react";
import { MatchService } from "../Services/MatchService";
import { MatchViewDto } from "../Dto/MatchDto";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "../Components/Button";

type RootStackParamList = {
  Home: { name: string };
  Register: { name: string };
  Login: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: ProfileScreenProps) {
  const [matches, setMatches] = useState<MatchViewDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await MatchService.getMatches(1, 10);
        console.log("test" + response);
        setMatches(response);

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // if (loading) {
  //   return (
  //     <View style={globalStyles.container}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />

      <Search IconName="search1" />

      <ThemeContext.Consumer>
        {(themeContext) => {
          return (
            <Button
              labelButton={themeContext?.theme} // Use labelButton em vez de children
              onPress={themeContext?.toggleTheme}
            />
          );
        }}
      </ThemeContext.Consumer>
      <FlatList
        data={matches}
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
