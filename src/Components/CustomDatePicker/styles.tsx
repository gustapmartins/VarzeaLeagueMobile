import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderColor: COLORS.button,
      borderBottomWidth: 2,
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      width: "100%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 12,
      fontSize: 12,
    },
  });