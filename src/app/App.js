
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from 'config/theme';
import Layout from './Layout';
import Routes from './Routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
