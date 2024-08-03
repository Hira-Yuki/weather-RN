import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { createStyles } from '../styles/styleSheet';

export default function ScrollableView({ children }) {
  const { isLightTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}
    >
      {children}
    </ScrollView>
  );
}
