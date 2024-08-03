import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { createStyles } from '../styles/styleSheet';

export default function LoadingIndicator() {
  const { isLightTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

  return (
    <View style={{ ...styles.day, alignItems: 'center' }}>
      <ActivityIndicator
        style={styles.loadingIndicator}
        color="white"
        size="large"
      />
    </View>
  );
}
