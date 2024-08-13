import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Modal from "../Components/Modal";
import globalStyles from "../Styles/Global";
import { COLORS } from "../Styles/GlobalColors";
import ToBack from "../Components/ToBack";
import { AuthService } from "../Services/AuthService";

type RootStackParamList = {
  ForgetPassword: { name: string };
  NewPassword: { name: string };
  Login: { name: string };
  VerifyTokenPassword: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgetPassword"
>;

export default function ForgetPasswordScreen({
  navigation,
}: ProfileScreenProps) {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ForgetPassword = async () => {
    try {
      navigation.navigate("VerifyTokenPassword", { name: "VerifyTokenPassword" }); // Navegação para a tela 'Home'

      // var response = await AuthService.forgetPassword(email);

      // if (response.status === 200) {
      //   setShowModal(true);
      //   setTimeout(() => {
      //     navigation.navigate("VerifyTokenPassword", { name: "VerifyTokenPassword" }); // Navegação para a tela 'Home'
      //   }, 1800);
      // }
    } catch (error) {
      console.error("Error sending forget password request:", error);
      return;
    }
  };

  return (
    <View style={globalStyles.container}>
      <ToBack onPress={() => navigation.navigate("Login", { name: "Login" })} />

      <View style={styles.form}>
        <View style={styles.container_img}>
          <Icon style={styles.iconSecurity} name="security" />
        </View>

        <View>
          <Text style={styles.h1}>Redefinição de senha!</Text>
          <Text style={styles.h2}>
            Informe um email e enviaremos um codigo para recuperação da sua
            senha
          </Text>
        </View>

        <Input
          placeholder="Email"
          Icon="mail"
          onChangeValue={(text) => setEmail(text)}
          value={email}
          secureTextEntry={false}
          placeholderError="Por favor, Informe o email corretamente"
          checkField={false}
        />

        <Button
          labelButton="Enviar"
          onPress={ForgetPassword}
          borderRadius={10}
        />
      </View>
      {showModal && (
        <View style={styles.containerModal}>
          <Modal active={true} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container_img: {
    flexDirection: "row",
    justifyContent: "center",
  },

  h1: {
    fontSize: 36,
    paddingBottom: 25,
    fontWeight: "500",
    color: COLORS.text,
    textAlign: "center",
  },

  h2: {
    fontSize: 18,
    paddingBottom: 10,
    color: "#a9a1a1",
    textAlign: "center",
  },

  form: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    flex: 1,
  },

  iconSecurity: {
    fontSize: 120,
    marginBottom: 25,
    color: COLORS.icon,
  },

  containerModal: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
