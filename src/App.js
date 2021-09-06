import React from 'react';
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core'
import theme from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
