import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { createStyles } from '../styles/styleSheet';

export default function useStyles() {
  const { isLightTheme } = useContext(ThemeContext);
  const styles = createStyles(isLightTheme);

  return styles;
}
