import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { MatchService } from "../Services/MatchService";
import { AuthService } from "../Services/AuthService";
import { matchCreateDto } from "../Dto/MatchDto";
import { StyleSheet, View } from "react-native";
import CustomDatePicker from "../Components/CustomDatePicker";
import TextComponent from "../Components/TextComponent";
import Button from "../Components/Button";
import Input from "../Components/Input";
import globalStyles from "../Styles/Global";
import ToBack from "../Components/ToBack";

type RootStackParamList = {
  RegisterMatch: { name: string };
  ControlPainel: { name: string }; // Defina a tela 'Home' no RootStackParamList
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RegisterMatch"
>;

export default function RegisterMatch({ navigation }: ProfileScreenProps) {
  const [homeTeamName, setHomeTeamName] = useState("");
  const [visitingTeamName, setVisitingTeamName] = useState("");
  const [local, setLocal] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  const handleRegisterMatch = async () => {
    try {
      const token = await AuthService.getToken();
      console.log(token);

      console.log(formattedDate);
        
      if (!token) {
        throw new Error("No token found");
      }

      const matchData: matchCreateDto = {
        HomeTeamName: homeTeamName,
        VisitingTeamName: visitingTeamName, // Convert to number
        Local: local,
        Date: formattedDate
      };

      var response = await MatchService.createMatch(matchData, token);
      console.log(response);
      return response;
    } catch (error) {
      console.error('Error login user:', error);
    } finally {
      navigation.navigate('ControlPainel', { name: 'ControlPainel' });
    }
  };

  return (
    <View style={globalStyles.container}>
      <ToBack
        onPress={() =>
          navigation.navigate("ControlPainel", { name: "ControlPainel" })
        }
      />

      <TextComponent IconName="soccer-field">
        Cadastrar uma partida
      </TextComponent>

      <View style={styles.form}>
        <Input
          Icon="user"
          placeholder="Time da casa"
          placeholderError="Por favor, Informe o Email corretamente"
          onChangeValue={(text) => setHomeTeamName(text)}
          value={homeTeamName}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="user"
          placeholder="Time visitante"
          placeholderError="Por favor, Informe a senha corretamente"
          onChangeValue={(text) => setVisitingTeamName(text)}
          value={visitingTeamName}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="map-pin"
          placeholder="Local da partida"
          placeholderError="Por favor, verifique se digitou a mesma senha nos dois campos"
          onChangeValue={(text) => setLocal(text)}
          value={local}
          secureTextEntry={false}
          checkField={false}
        />

        <CustomDatePicker 
          formattedDate={formattedDate}
          setFormattedDate={setFormattedDate}

        />

        <Button
          labelButton="Cadastrar"
          onPress={handleRegisterMatch}
          borderRadius={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 25,
  },
});
