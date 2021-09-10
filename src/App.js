import React from 'react';
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core'
import theme from './constants/theme'
import * as S from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <S.GlobalStyles>
          <Router />
        </S.GlobalStyles>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
