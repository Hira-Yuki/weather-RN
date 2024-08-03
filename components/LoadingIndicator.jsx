import { ActivityIndicator, View } from 'react-native';
import useStyles from '../hooks/useStyles';

export default function LoadingIndicator() {
  const styles = useStyles();

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
