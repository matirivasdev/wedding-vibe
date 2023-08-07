
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from 'config/theme';
import Layout from './Layout';
import Routes from './Routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Layout>
        <Routes />
      </Layout>
    </HashRouter>
  </ThemeProvider>
);

export default App;
