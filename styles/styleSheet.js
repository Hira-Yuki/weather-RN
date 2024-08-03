import { Dimensions, StyleSheet } from 'react-native';
import { COLOR_SET } from '../constants/colorSet';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 *  @Todo: 전역 상태로 관리
 */
const lightThem = false;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightThem
      ? COLOR_SET.light.backgroundColor
      : COLOR_SET.dark.backgroundColor,
  },
  statusbar: lightThem
    ? COLOR_SET.light.statusbarColor
    : COLOR_SET.dark.statusbarColor,
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: lightThem ? COLOR_SET.light.color : COLOR_SET.dark.color,
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500',
    color: lightThem ? COLOR_SET.light.color : COLOR_SET.dark.color,
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontSize: 100,
    color: lightThem ? COLOR_SET.light.color : COLOR_SET.dark.color,
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: lightThem ? COLOR_SET.light.color : COLOR_SET.dark.color,
    fontWeight: '500',
  },
  loadingIndicator: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: lightThem ? COLOR_SET.light.color : COLOR_SET.dark.color,
    fontWeight: '500',
  },
});

export const noPermissionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export const iconsColor = lightThem
  ? COLOR_SET.light.color
  : COLOR_SET.dark.color;
