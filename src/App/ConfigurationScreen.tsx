import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../Context/Theme/ThemeContext";
import { COLORS } from "../Styles/GlobalColors";
import ToBack from "../Components/ToBack";
import globalStyles from "../Styles/Global";
import Icon from "react-native-vector-icons/Ionicons";
import TextComponent from "../Components/TextComponent";
import IconTheme from "react-native-vector-icons/Fontisto";
import { ConfigurationMock } from "../Mock/ConfigurationMock";
import { useContext } from "react";

type RootStackParamList = {
  Configuration: { name: string };
  Profile: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Configuration"
>;

export default function ConfigurationScreen({
  navigation,
}: ProfileScreenProps) {

  const themeContext = useContext(ThemeContext); // Usando o AuthContext

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ToBack
          onPress={() => navigation.navigate("Profile", { name: "Profile" })}
        />
      </View>
      <View>
        <TextComponent> Configurações </TextComponent>

        <FlatList
          data={ConfigurationMock}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.infoContainer} key={index}>
              <View style={styles.infoUser}>
                <Icon style={styles.icon} name={item.iconName} />
                <Text style={styles.text}> {item.title} </Text>
              </View>
              <View>
                <Icon style={{ fontSize: 18 }} name="chevron-forward" />
              </View>
            </TouchableOpacity>
          )}
        />

        <ThemeContext.Consumer>
          {(themeContext) => {
            return (
              <TouchableOpacity
                style={styles.infoContainer}
                onPress={themeContext?.toggleTheme}
              >
                <View style={styles.infoUser}>
                  <IconTheme
                    style={styles.icon}
                    name={
                      themeContext?.theme == "Light"
                        ? "day-sunny"
                        : "night-clear"
                    }
                  />
                  <Text style={styles.text}>{themeContext?.theme}</Text>
                </View>
                <View>
                  <Icon style={{ fontSize: 18 }} name="chevron-forward" />
                </View>
              </TouchableOpacity>
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
    marginTop: 22,
    padding: 12,
  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
    color: COLORS.text,
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6.5,
  },

  text: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: "400",
    textAlign: "center",
    paddingLeft: 28,
  },
});
