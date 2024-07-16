import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  container: {
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

  notification: {
    fontSize: 19,
    borderColor: COLORS.icon,
  },

  counter: {
    position: "absolute",
    top: -10,
    right: -8,
    backgroundColor: COLORS.button,
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "bold",
    width: 24,
    height: 24,
    borderRadius: 100,
    textAlign: "center",
    textAlignVertical: "center",
  }
})

export default styles;