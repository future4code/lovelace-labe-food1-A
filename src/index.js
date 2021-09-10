import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext'
import Splash from './Splash';

ReactDOM.render(
    <GlobalContextProvider>
      <Splash />
      {/* <App /> */}
    </GlobalContextProvider>,
  document.getElementById('root')
);
