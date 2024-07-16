import { IButtonNew } from "../../Interface/Components/IButtonNew";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";

export default function ButtonNew({
    iconButton,
    size,
    color,
    onPress
}: IButtonNew) {
    return (
        <View style={{ ...styles.container}}>
           {iconButton && <Icon name={iconButton} style={styles.icon} size={size} color={color} />}
        </View>
    );
}