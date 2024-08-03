import { createContext, useState } from 'react';
import { COLOR_SET } from '../constants/colorSet';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const theme = {
    isLightTheme,
    colors: isLightTheme ? COLOR_SET.light.color : COLOR_SET.dark.color,
    backgroundColor: isLightTheme
      ? COLOR_SET.light.backgroundColor
      : COLOR_SET.dark.backgroundColor,
    statusbarColor: isLightTheme
      ? COLOR_SET.light.statusbarColor
      : COLOR_SET.dark.statusbarColor,
    dateColor: isLightTheme
      ? COLOR_SET.light.dateColor
      : COLOR_SET.dark.dateColor,
    iconsColor: isLightTheme ? COLOR_SET.light.color : COLOR_SET.dark.color,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
