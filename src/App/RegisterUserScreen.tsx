import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { AuthService } from "../Services/AuthService";
import SocialMediaButton from "../Components/SocialMediaButton";
import Button from "../Components/Button";
import Input from "../Components/Input";
import globalStyles from "../Styles/Global";

type RootStackParamList = {
  RegisterUser: { name: string };
  Home: { name: string }; // Defina a tela 'Home' no RootStackParamList
  Login: { name: string };
  ForgetPassword: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterUser'>;

export default function RegisterUserScreen({ navigation }: ProfileScreenProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [cpf, setCpf] = useState("")
      
  const handleRegister = async () => {
    try {
      var response = await AuthService.registerUser(userName, email, password, confirmPassword, cpf, 1);
      
      if (!response) {
        throw new Error("No response received from the server");
      }
      
      return response;
    } catch (error) {
    
      console.error('Error registering user:', error);
    } finally {
      navigation.navigate('Login', { name: 'Register' });
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.form}>
        <View style={styles.container_img}>
          <Image
            style={styles.img}
            source={require('../Assets/logotipo.png')}
          />
        </View>

        <Input
          placeholder="UserName"
          Icon="user"
          placeholderError="Por favor, Informe o Email corretamente"
          onChangeValue={(text) => setUserName(text)}
          value={userName}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          placeholder="Email"
          Icon="mail"
          placeholderError="Por favor, Informe o Email corretamente"
          onChangeValue={(text) => setEmail(text)}
          value={email}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          placeholder="Senha"
          Icon="lock"
          placeholderError="Por favor, Informe a senha corretamente"
          onChangeValue={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          checkField={false}
        />

        <Input
          placeholder="Confirmar-Senha"
          Icon="lock"
          placeholderError="Por favor, verifique se digitou a mesma senha nos dois campos"
          onChangeValue={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
          checkField={false}
        />

        <Input
          Icon="file-text"
          placeholder="Cnpj"
          placeholderError="Por favor, verifique se digitou o Cnpj correto"
          onChangeValue={(text) => setCpf(text)}
          value={cpf}
          secureTextEntry={true}
          checkField={false}
        />

        <Button
          labelButton="Cadastrar"
          onPress={handleRegister}
          borderRadius={10}
        />

        <View style={styles.section}>
          <SocialMediaButton />
        </View>

        <View style={styles.container_register}>
          <Text style={styles.h2}>Já tem uma conta? </Text>
          <Text style={styles.span} onPress={() => navigation.navigate("Login", { name: "Login-User" })}>Acessar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_img: {
    flexDirection: "row",
    justifyContent: "center"
  },

  form: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    gap: 10,
  },

  img: {
    flexDirection: "column",
    justifyContent: "center",
    objectFit: "contain",
    height: 150,
  },

  container_register: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  h2: {
    fontSize: 15,
  },

  span: {
    fontWeight: 'bold',
    color: '#3a1cff',
    paddingLeft: 8
  },

  section: {
    flexDirection: "column",
    gap: 20
  },

  icon: {
    fontSize: 20,
    paddingRight: 10
  },
});
