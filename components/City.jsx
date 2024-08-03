import { Text, View } from 'react-native';
import useStyles from '../hooks/useStyles';
import ToggleButton from './ToggleButton';

export default function City({ city }) {
  const styles = useStyles();

  return (
    <View style={styles.city}>
      <View style={styles.buttonContainer}>
        <ToggleButton />
      </View>
      <Text style={styles.cityName}>{city}</Text>
    </View>
  );
}
