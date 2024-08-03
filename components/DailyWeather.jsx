import { Fontisto } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { ICONS } from '../constants/icons';
import useStyles from '../hooks/useStyles';

export default function DailyWeather({ temp, main, description, index }) {
  const styles = useStyles();

  const getDate = index => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date.toLocaleDateString('ko-KR', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.day}>
      <View style={styles.dateContainer}>
        <Text style={[styles.date, index !== 0 && styles.nonTodayDate]}>
          {index === 0 ? 'TODAY' : getDate(index)}
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <Text style={styles.temp}>{parseFloat(temp).toFixed(1)}</Text>
        <Fontisto name={ICONS[main]} size={68} color={styles.iconsColor} />
      </View>
      <Text style={styles.description}>{main}</Text>
      <Text style={styles.tinyText}>{description}</Text>
    </View>
  );
}
