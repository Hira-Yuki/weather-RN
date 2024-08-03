import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { View } from 'react-native';
import { City, DynamicView, NoPermission, ScrollableView } from '../components';
import { ThemeContext } from '../contexts/ThemeContext';
import useWeather from '../hooks/useWeather';
import { createStyles } from '../styles/styleSheet';

export default function Home() {
  const { ok, days, city } = useWeather();
  const { isLightTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

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
