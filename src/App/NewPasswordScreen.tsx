import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../Styles/GlobalColors";
import Icon from "react-native-vector-icons/AntDesign";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Modal from "../Components/Modal";

type RootStackParamList = {
  ForgetPassword: { name: string };
  NewPassword: { name: string };
  Login: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "NewPassword"
>;

export default function NewPasswordScreen({ navigation }: ProfileScreenProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const NewPassword = () => {
    setShowModal(true);
    setTimeout(() => {
      navigation.navigate("Login", { name: "Login" }); // Navegação para a tela 'Home'
    }, 1800);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.container_img}>
          <Icon style={styles.iconSecurity} name="lock1" />
        </View>

        <View style={styles.text_container}>
          <Text style={styles.h1}>Redefinição de senha! </Text>

          <Text style={styles.h2}>
            Informe uma nova senha válida para o seu usuário
          </Text>
        </View>

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

        <Button
          labelButton="Redefinir"
          borderRadius={10}
          onPress={NewPassword}
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
  container: {
    flexDirection: "column",
    padding: 10,
    flex: 1,
  },

  container_img: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text_container: {
    justifyContent: "center",
  },

  h1: {
    fontSize: 36,
    paddingBottom: 10,
    paddingTop: 10,
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
    marginBottom: 40,
    color: COLORS.icon,
  },

  containerModal: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  }
});
