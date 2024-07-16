import { AnimatableNumericValue, DimensionValue, StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: COLORS.button,
        alignItems: "center",
        justifyContent: "center",
        
    },

    icon: {
        color: "#fff",
        fontWeight: "600",
    }
})

export default styles;