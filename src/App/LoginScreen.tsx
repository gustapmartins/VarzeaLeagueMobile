import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SocialMediaButton from "../Components/SocialMediaButton";
import Button from "../Components/Button";
import Input from "../Components/Input";
import useAuthContext from "../Hook/UseAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "../Services/AuthService";

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

  const { setToken } = useAuthContext();

  const handleLogin = async () => {
    
    await AuthService.login({
      email: email,
      password: password,
    }).then((response) => {
      if (response.status === 200) {
        AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('Home', { name: 'Home' });
        setToken(response.data.token);
      }
    }).catch(err => {
      console.error('Error login user:', err);
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
          <Text
            style={styles.text}
            onPress={() =>
              navigation.navigate("RegisterUser", { name: "RegisterUser" })
            }
          >
            Primeiro acesso
          </Text>
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
    gap: 20,
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
  },

  text: {
    padding: 5,
  },
});
