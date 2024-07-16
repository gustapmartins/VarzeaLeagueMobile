import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
    card: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.button,
        borderRadius: 5,
        padding: 8,
        shadowColor: '#000000', // for shadow on iOS
    },

    icon: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },

    input: {
        flex: 1,
        height: 20,
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        backgroundColor: COLORS.button,
        borderWidth: 0, // Remove as bordas
        borderColor: 'transparent', // Define a cor da borda como transparente,
        
    },

    modalContainer: {
        flex: 1,
        width: "100%",
        top: 55,
        right: 10,
        position: "absolute",
        alignItems: 'center',
        backgroundColor: COLORS.button,
        borderRadius: 5,
        zIndex: 1
    },

    modalContent: {
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    teamContent: {
        alignItems: 'center',
    },

    img: {
        width: 32,
        height: 32,
        marginRight: 25,
        marginLeft: 25,
        resizeMode: "contain"
    },

    goals: {
        color: "#FFF",
        marginTop: 5,
        fontSize: 18,
        fontWeight: "600"
    },

    vsText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default styles;