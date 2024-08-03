import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { createStyles } from '../styles/styleSheet';

export default function ToggleButton() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      {isLightTheme ? (
        <MaterialIcons name="dark-mode" size={68} color={styles.iconsColor} />
      ) : (
        <MaterialIcons name="light-mode" size={68} color={styles.iconsColor} />
      )}
    </TouchableOpacity>
  );
}
