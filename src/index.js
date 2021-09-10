import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext'
import Splash from './Splash';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Splash />
      {/* <App /> */}
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
