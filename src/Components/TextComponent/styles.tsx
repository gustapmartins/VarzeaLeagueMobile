import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  container: {

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
    marginBottom: 42,
  },

  icon: {
    fontSize: 72,
    paddingRight: 12,
  },

  h1: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 18,
  },
});


export default styles;