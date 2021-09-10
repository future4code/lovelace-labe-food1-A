import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext'
{/* <React.StrictMode>

</React.StrictMode>, */}

ReactDOM.render(
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>,
  document.getElementById('root')
);
