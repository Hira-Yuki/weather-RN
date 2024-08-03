import { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { createStyles } from '../styles/styleSheet';
import ToggleButton from './ToggleButton';

export default function City({ city }) {
  const { isLightTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

  return (
    <View style={styles.city}>
      <View style={styles.buttonContainer}>
        <ToggleButton />
      </View>
      <Text style={styles.cityName}>{city}</Text>
    </View>
  );
}
