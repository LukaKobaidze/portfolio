import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ViewportContextProvider } from './context/viewport.context.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewportContextProvider>
      <App />
    </ViewportContextProvider>
  </React.StrictMode>
);
