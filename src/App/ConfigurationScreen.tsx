import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../Context/ThemeContext";
import { COLORS } from "../Styles/GlobalColors";
import ToBack from "../Components/ToBack";
import globalStyles from "../Styles/Global";
import Button from "../Components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import TextComponent from "../Components/TextComponent";

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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack onPress={() => navigation.navigate("Profile", { name: "Profile" })} />
      </View>
      <View>

        <TextComponent> Configurações </TextComponent>


        <View style={styles.infoContainer}>
          <View style={styles.infoUser}>
            <Icon style={styles.icon} name="person-outline" />
            <Text style={styles.text}>Profile</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon name="chevron-forward" />
          </View>
        </View>

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
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    padding: 12,
  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {

  },

  icon: {
    fontSize: 28,
    color: COLORS.text,

    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff", // Defina uma cor de fundo para garantir que a sombra apareça no Android
    // iOS sombra
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    // Android sombra
    elevation: 4,
  },

  text: {
    fontSize: 24,
    color: COLORS.text,
    fontWeight: "400",
    textAlign: "center",
    paddingLeft: 24,
  },

});
