import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { AppRouter } from './pages/AppRouter';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

