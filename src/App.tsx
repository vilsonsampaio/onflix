import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { GlobalRoutes } from '@routes/GlobalRoutes';

import defaultTheme from '@styles/themes/default';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '@styles/global';
import { ScrollToTop } from '@utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer />

        <GlobalStyles /> 

        <GlobalRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
