import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';
import Button from '../Button';

export default function Filter() {

    return (
        <View style={styles.container} >
            <Text style={styles.text}>Jogos recentes</Text>
            <Button labelButton='Filtrar jogo  &#5121;' borderRadius={10} marginTop={0}></Button>
        </View>
    );
}
