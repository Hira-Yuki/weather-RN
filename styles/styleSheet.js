import { Dimensions, StyleSheet } from 'react-native';
import { COLOR_SET } from '../constants/colorSet';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme
        ? COLOR_SET.light.backgroundColor
        : COLOR_SET.dark.backgroundColor,
    },
    statusbar: theme
      ? COLOR_SET.light.statusbarColor
      : COLOR_SET.dark.statusbarColor,

    city: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
    },
    cityName: {
      fontSize: 68,
      fontWeight: '500',
      color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
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
      color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
    },
    description: {
      marginTop: -10,
      fontSize: 30,
      color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
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
      color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
      fontWeight: '500',
    },
    date: {
      color: theme ? COLOR_SET.light.dateColor : COLOR_SET.dark.dateColor,
      fontWeight: '700',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    nonTodayDate: {
      color: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
    },
    buttonContainer: {
      marginRight: 40,
      flex: 0.3,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: SCREEN_WIDTH,
    },
    iconsColor: theme ? COLOR_SET.light.color : COLOR_SET.dark.color,
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

// export const iconsColor = theme ? COLOR_SET.light.color : COLOR_SET.dark.color;
