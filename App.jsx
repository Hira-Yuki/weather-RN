import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { City, DynamicView, NoPermission, ScrollableView } from './components';
import useWeather from './hooks/useWeather';
import { styles } from './styles/styleSheet';

export default function App() {
  const { ok, days, city } = useWeather();

  if (ok) {
    return (
      <View style={styles.container}>
        <City city={city} />
        <ScrollableView>
          <DynamicView days={days} />
        </ScrollableView>
        <StatusBar style={styles.statusbar} />
      </View>
    );
  } else {
    return <NoPermission />;
  }
}
