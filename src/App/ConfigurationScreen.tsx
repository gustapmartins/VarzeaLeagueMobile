import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../Styles/Global";

type RootStackParamList = {
  Configuration: { name: string };
  Profile: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Configuration"
>;

export default function ConfigurationScreen({ navigation }: ProfileScreenProps) {
  return (
    <SafeAreaView style={globalStyles.container}>

    </SafeAreaView>
  );
}
