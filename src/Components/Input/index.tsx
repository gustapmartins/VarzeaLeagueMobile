import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { IInput } from "../../Interface/Components/IInput";
import Icon from "react-native-vector-icons/Feather";

export default function Input(props: IInput) {
  return (
    <>
      <View style={styles.container}>
        {props.Icon != null && <Icon name={props.Icon} />}
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeValue}
          secureTextEntry={props.secureTextEntry}
          
        />
      </View>
      {
      props.checkField && 
        <Text style={styles.placeholderError}>{props.placeholderError}</Text>
      }
    </>
  );
}
