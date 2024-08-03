import { Fontisto } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { ICONS } from '../constants/icons';
import { iconsColor, styles } from '../styles/styleSheet';

export default function DailyWeather({ temp, main, description }) {
  return (
    <View style={styles.day}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.temp}>{parseFloat(temp).toFixed(1)}</Text>
        <Fontisto name={ICONS[main]} size={68} color={iconsColor} />
      </View>
      <Text style={styles.description}>{main}</Text>
      <Text style={styles.tinyText}>{description}</Text>
    </View>
  );
}
