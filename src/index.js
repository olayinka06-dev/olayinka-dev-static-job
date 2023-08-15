import React from 'react';
import ReactDOM from 'react-dom/client';
import  './App.css';
import App from './App';
import { AppProvider } from './components/provider/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>
);

