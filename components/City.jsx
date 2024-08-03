import { Text, View } from 'react-native';
import { styles } from '../styles/styleSheet';

export default function City({ city }) {
  return (
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
  );
}
