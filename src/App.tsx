import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalRoutes } from '@routes/GlobalRoutes';

import GlobalStyles from '@styles/global';
import defaultTheme from '@styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles /> 

        <GlobalRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
