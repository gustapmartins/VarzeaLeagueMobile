import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Checkbox } from "expo-checkbox";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SocialMediaButton from "../Components/SocialMediaButton";
import Button from "../Components/Button";
import Input from "../Components/Input";
import useAuthContext from "../Hook/UseAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "../Services/AuthService";
import { COLORS } from "../Styles/GlobalColors";

type RootStackParamList = {
  Login: { name: string };
  Home: { name: string };
  RegisterUser: { name: string };
  ForgetPassword: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: ProfileScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const { setToken } = useAuthContext();

  useEffect(() => {
    const getRememberedCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("rememberedEmail");
        const savedPassword = await AsyncStorage.getItem("rememberedPassword");
        if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setSelection(true);
        }
      } catch (error) {
        console.error("Failed to load remembered credentials", error);
      }
    };

    getRememberedCredentials();
  }, []);

  const handleLogin = async () => {
    await AuthService.login({
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem("token", response.data.token);
          if (isSelected) {
            AsyncStorage.setItem("rememberedEmail", email);
            AsyncStorage.setItem("rememberedPassword", password);
          } else {
            AsyncStorage.removeItem("rememberedEmail");
            AsyncStorage.removeItem("rememberedPassword");
          }
          navigation.navigate("Home", { name: "Home" });
          setToken(response.data.token);
        }
      })
      .catch((err) => {
        console.error("Error login user:", err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.container_img}>
          <Image
            style={styles.img}
            source={require("../Assets/logotipo.png")}
          />
        </View>

        <Input
          Icon="mail"
          placeholder="Email"
          placeholderError="Por favor, Informe o Email corretamente"
          onChangeValue={(text) => setEmail(text)}
          value={email}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="lock"
          placeholder="Senha"
          placeholderError="Por favor, Informe a senha corretamente"
          onChangeValue={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          checkField={false}
        />

        <Button
          labelButton="Login"
          borderRadius={10}
          onPress={() => {
            handleLogin();
          }}
        />

        <View style={styles.section}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setSelection(!isSelected)}
            style={{ flexDirection: "row" }}
          >
            <Checkbox
              color={COLORS.button}
              value={isSelected}
              onValueChange={() => setSelection(!isSelected)}
            />
            <Text style={{ ...styles.text, paddingLeft: 10 }}>Lembra-me</Text>
          </TouchableOpacity>
          <Text
            style={styles.text}
            onPress={() =>
              navigation.navigate("ForgetPassword", { name: "ForgetPassword" })
            }
          >
            Esqueceu a senha?
          </Text>
        </View>

        <View style={styles.sectionSocialMedia}>
          <SocialMediaButton />
        </View>

        <View style={styles.container_register}>
          <Text style={{ fontSize: 15 }}>Ainda não possui uma conta? </Text>
          <Text
            style={styles.span}
            onPress={() =>
              navigation.navigate("RegisterUser", { name: "Register-User" })
            }
          >
            Cadastrar
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    flex: 1,
  },

  container_img: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  form: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    gap: 15,
  },

  img: {
    objectFit: "contain",
    height: 150,
  },

  sectionSocialMedia: {
    flexDirection: "column",
  },

  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },

  container_register: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  span: {
    fontWeight: "bold",
    color: "#3a1cff",
    paddingLeft: 8,
  },

  text: {
    fontWeight: "500",
    color: "#0000FF",
  },
});
