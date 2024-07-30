import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: COLORS.button,
        margin: 10,
        marginVertical: 25,
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal"
    }
});