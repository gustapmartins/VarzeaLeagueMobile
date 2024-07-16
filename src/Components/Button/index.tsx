import { Text, TouchableOpacity } from "react-native";
import { IButton } from "../../Interface/Components/IButton";
import createStyles from "./styles";

export default function Button({
  labelButton,
  onPress,
  borderRadius,
  heightButton,
  widthButton,
}: IButton) {
  const styles = createStyles(widthButton ?? null, heightButton ?? null, borderRadius ?? 0);

  return (
    <TouchableOpacity style={{ ...styles.container, width: widthButton, height: heightButton }} onPress={onPress}>
      {labelButton && <Text style={styles.text}>{labelButton}</Text>}
    </TouchableOpacity>
  );
}