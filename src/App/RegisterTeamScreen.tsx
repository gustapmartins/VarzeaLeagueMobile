import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";
import globalStyles from "../Styles/Global";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import { TeamService } from "../Services/TeamService";
import { ITeamCreateDto } from "../Interface/Dto/ITeamDto";
import useAuthContext from "../Hook/UseAuthContext";

type RootStackParamList = {
  RegisterTeam: { name: string };
  ControlPainel: { name: string }; // Defina a tela 'Home' no RootStackParamList
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RegisterTeam"
>;

export default function RegisterTeam({ navigation }: ProfileScreenProps) {
  const [nameTeam, setNameTeam] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { token } = useAuthContext(); 

  const handleRegisterTeam = async () => {
    try {

      if (!token) {
        return;
      }

      const teamData: ITeamCreateDto = {
        NameTeam: nameTeam,
        State: state,
        City: city
      };

      return await TeamService.createTeam(teamData, token);
    } catch (error) {
      console.error('Error created team:', error);
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

      <TextComponent IconName="account-group">
        Cadastrar um time
      </TextComponent>

      <View style={styles.form}>
        <Input
          Icon="users"
          placeholder="Nome do Time"
          placeholderError="Campo informado inválido"
          onChangeValue={(nameTeam) => setNameTeam(nameTeam)}
          value={nameTeam}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="map-pin"
          placeholder="Estado do Time"
          placeholderError="Campo informado inválido"
          onChangeValue={(state) => setState(state)}
          value={state}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="map"
          placeholder="Cidade do Time"
          placeholderError="Campo informado inválido"
          onChangeValue={(city) => setCity(city)}
          value={city}
          secureTextEntry={false}
          checkField={false}
        />

        <Button
          labelButton="Cadastrar Time"
          onPress={handleRegisterTeam}
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
    gap: 35,
  },
});
