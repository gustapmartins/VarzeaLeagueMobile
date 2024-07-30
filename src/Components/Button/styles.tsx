import { AnimatableNumericValue, DimensionValue, StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = (width: DimensionValue, height: DimensionValue, borderRadius: AnimatableNumericValue, marginTop: number) => StyleSheet.create({
    container: {
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: COLORS.button,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: marginTop
    },

    text: {
        color: "#fff",
        fontWeight: "600"
    }
})

export default styles;