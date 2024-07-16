import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  buttonSocialMedia: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "#a9a9a9",
    borderWidth: 2.5,
    marginTop: 15,
  },

  icon: {
    fontSize: 20,
    paddingRight: 10,
    color: COLORS.button
  },
});


export default styles;