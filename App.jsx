import { ThemeProvider } from './contexts/ThemeContext';
import Home from './page/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
