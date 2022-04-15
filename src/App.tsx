import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { GlobalRoutes } from '@routes/GlobalRoutes';

import defaultTheme from '@styles/themes/default';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '@styles/global';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer />

        <GlobalStyles /> 

        <GlobalRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
