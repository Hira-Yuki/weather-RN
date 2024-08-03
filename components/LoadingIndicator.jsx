import { ActivityIndicator, View } from 'react-native';
import { styles } from '../styles/styleSheet';

export default function LoadingIndicator() {
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
