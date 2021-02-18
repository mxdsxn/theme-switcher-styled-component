import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import GlobalStyle from './styles/global';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import usePersistedTheme from './utils/usePersistedTheme';

function App() {
  const [theme, setTheme] = usePersistedTheme<String>('theme', 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'black' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      {/* {console.log(theme)} */}
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ ThemeProvider >
  );
}

export default App;
