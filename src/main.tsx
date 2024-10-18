import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ThemeProvider } from '@emotion/react';
import { Provider, useSelector } from 'react-redux';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import { store } from './rtk/store';

interface IState {
  theme: {
    darkMode: boolean;
  };
}

// Create a functional component to wrap the ThemeProvider
function ThemeWrapper(): JSX.Element {
  const darkMode = useSelector((state: IState) => state.theme.darkMode); // Access theme state from Redux
  const theme = darkMode ? darkTheme : lightTheme;


  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  </StrictMode>,
);
