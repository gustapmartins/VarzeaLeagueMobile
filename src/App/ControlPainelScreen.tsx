import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ButtonNavigationMock } from "../Mock/ButtonNavigationMock";
import globalStyles from "../Styles/Global";
import ButtonNavigation from "../Components/ButtonNavigation";
import ToBack from "../Components/ToBack";
import { COLORS } from "../Styles/GlobalColors";
import TextComponent from "../Components/TextComponent";

type RootStackParamList = {
  ControlPainel: { name: string };
  RegisterMatch: { name: string };
  RegisterPlayer: { name: string };
  RegisterTeam: { name: string };
  Home: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ControlPainel"
>;

export default function NewScreen({ navigation }: ProfileScreenProps) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ToBack onPress={() => navigation.navigate("Home", { name: "" })} />

      <TextComponent>Painel de controle</TextComponent>

      {ButtonNavigationMock.map((item, index) => (
        <ButtonNavigation
          key={index}
          IconName={item.IconName}
          LabelButton={item.LabelButton}
          onPress={() =>
            navigation.navigate(item.RouteName, { name: item.LabelButton })
          }
        />
      ))}
    </SafeAreaView>
  );
}
