import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    marginTop: 18,
  },

  buttonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    marginLeft: 26,
    color: COLORS.icon,
    fontWeight: "500",
    marginTop: 18,
    marginBottom: 18,
  },

  icon: {
    fontSize: 18,
    color: COLORS.icon,
  },
});

export default styles;
