import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 150,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    elevation: 3, // for shadow on Android
    shadowColor: "#000000", // for shadow on iOS
  },

  icon: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "600",
  },
});

export default styles;
