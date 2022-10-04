import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)

