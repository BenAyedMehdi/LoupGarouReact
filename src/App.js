import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import { GameProvider } from './contexts/GameContext';
// components

// ----------------------------------------------------------------------

export default function App() {
  return (
    
    <HelmetProvider>
      <BrowserRouter>
      <GameProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </GameProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
