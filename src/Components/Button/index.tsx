import { Text, TouchableOpacity } from "react-native";
import { IButton } from "../../Interface/Components/IButton";
import createStyles from "./styles";

export default function Button({
  labelButton,
  onPress,
  borderRadius,
  heightButton,
  widthButton,
  marginTop
}: IButton) {
  const styles = createStyles(widthButton ?? null, heightButton ?? null, borderRadius ?? 0, marginTop ?? 10);

  return (
    <TouchableOpacity style={{
      ...styles.container
    }} onPress={onPress}>
      {labelButton && <Text style={styles.text}>{labelButton}</Text>}
    </TouchableOpacity>
  );
}