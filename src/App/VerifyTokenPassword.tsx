import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import globalStyles from "../Styles/Global";
import { COLORS } from "../Styles/GlobalColors";
import ToBack from "../Components/ToBack";
import OTPInputView from "@twotalltotems/react-native-otp-input";

type RootStackParamList = {
  VerifyTokenPassword: { name: string };
  NewPassword: { name: string };
  ForgetPassword: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyTokenPassword"
>;

export default function VerifyTokenPassword({
  navigation,
}: ProfileScreenProps) {
  const [showModal, setShowModal] = useState(false);
  const [isForgetPasswordCalled, setIsForgetPasswordCalled] = useState(false);
  const [code, setCode] = useState("");

  const ForgetPassword = async () => {
    try {
      setIsForgetPasswordCalled(true); // Marcar que a função foi chamada

      if (code.length === 6) {
        setShowModal(true);
        setTimeout(() => {
          navigation.navigate("NewPassword", { name: "ForgetPassword" }); // Navegação para a tela 'Home'
        }, 1800);
      } else {
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error sending forget password request:", error);
      setShowModal(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <ToBack
        onPress={() =>
          navigation.navigate("ForgetPassword", { name: "ForgetPassword" })
        }
      />

      <View style={styles.form}>
        <View style={styles.container_img}>
          <Icon style={styles.iconSecurity} name="email" />
        </View>

        <View>
          <Text style={styles.h1}>Verificação de e-mail</Text>
          <Text style={styles.h2}>
            Enviamos um código de verificação de 6 dígitos para o seu e-mail.
            Por favor, insira o código abaixo para confirmar sua identidade.
          </Text>
        </View>

        <OTPInputView
          style={{ width: "100%", height: 100, paddingHorizontal: 12 }}
          pinCount={6}
          code={code}
          onCodeChanged={(code) => setCode(code)}
          keyboardType="number-pad"
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 45,
            height: 45,
            color: COLORS.text,
            fontSize: 20,
            borderWidth: 0,
            borderBottomWidth: 3,
            borderBottomColor: "red",
            borderColor: COLORS.button,
          }}
          codeInputHighlightStyle={{
            borderColor: COLORS.button,
            borderWidth: 3,
            borderRadius: 10,
          }}
        />

        <Button
          labelButton="Enviar"
          onPress={ForgetPassword}
          borderRadius={10}
        />
      </View>

      {isForgetPasswordCalled && (
        <View style={styles.containerModal}>
          <Modal active={showModal} />
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
