import { ScrollView } from 'react-native';
import useStyles from '../hooks/useStyles';

export default function ScrollableView({ children }) {
  const styles = useStyles();

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
