import React from 'react';

// ===== Styles ===== \\
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import Theme from './themes/dark.json';

// ==== Routes ==== \\
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
