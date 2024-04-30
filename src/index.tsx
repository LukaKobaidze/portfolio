import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewportContextProvider } from './context/viewport.context.tsx';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewportContextProvider>
      <App />
    </ViewportContextProvider>
  </React.StrictMode>
);
