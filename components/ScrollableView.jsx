import { ScrollView } from 'react-native';
import { styles } from '../styles/styleSheet';

export default function ScrollableView({ children }) {
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
