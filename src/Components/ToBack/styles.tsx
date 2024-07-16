import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  titleBar: {
    justifyContent: "center", // Adicionado
    alignItems: "center", // Adicionado
    marginHorizontal: 8,
    marginTop: 8,
    borderWidth: 2,
    borderColor: COLORS.icon,
    width: 42,
    height: 42,
    borderRadius: 100,
  },

  icon: {
    fontSize: 16,
    borderColor: COLORS.icon,
    marginRight: 2,
  },
});

export default styles;
