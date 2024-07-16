import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 3, // for shadow on Android
        shadowColor: '#000000', // for shadow on iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    teamContainer: {
        alignItems: 'center',
    },

    teamImage: {
        width: 60,
        height: 60,
        marginRight: 25,
        marginLeft: 25,
        resizeMode: "contain"
    },

    goalsText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: COLORS.black,
    },
    
    vsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.black,
    },
});