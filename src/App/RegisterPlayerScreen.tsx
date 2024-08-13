import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Components/Button";
import Input from "../Components/Input";
import globalStyles from "../Styles/Global";
import ToBack from "../Components/ToBack";
import TextComponent from "../Components/TextComponent";
import { PlayerService } from "../Services/PlayerService";
import { PlayerCreateDto } from "../Interface/Dto/IPlayerDto";
import useAuthContext from "../Hook/UseAuthContext";


type RootStackParamList = {
  RegisterPlayer: { name: string };
  ControlPainel: { name: string }; // Defina a tela 'Home' no RootStackParamList
};

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RegisterPlayer"
>;

export default function RegisterPlayer({ navigation }: ProfileScreenProps) {
  const [namePlayer, setNamePlayer] = useState<string>("");
  const [agePlayer, setAgePlayer] = useState<string>("");
  const [teamId, setTeamPlayer] = useState<string>("");

  const { token } = useAuthContext(); // Usando o AuthContext

  const handleRegisterPlayer = async () => {
    try {

      if (!token) {
        return;
      }

      const playerData: PlayerCreateDto = {
        NamePlayer: namePlayer,
        Age: agePlayer !== "" ? Number(agePlayer) : undefined, // Convert to number
        TeamId: teamId
      };

      var response = await PlayerService.createPlayer(playerData, token);

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

      <TextComponent IconName="account-plus">
        Cadastrar um jogador
      </TextComponent>

      <View style={styles.form}>
        <Input
          Icon="user"
          placeholder="Nome do Jogador"
          placeholderError="Campo informado inválido"
          onChangeValue={(text) => setNamePlayer(text)}
          value={namePlayer}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="smile"
          placeholder="Idade"
          placeholderError="Campo informado inválido"
          onChangeValue={(age) => setAgePlayer(age)}
          value={agePlayer}
          secureTextEntry={false}
          checkField={false}
        />

        <Input
          Icon="users"
          placeholder="Time do jogador"
          placeholderError="Campo informado inválido"
          onChangeValue={(team) => setTeamPlayer(team)}
          value={teamId}
          secureTextEntry={false}
          checkField={false}
        />
        <Button labelButton="Enviar" onPress={handleRegisterPlayer} borderRadius={10} />
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
