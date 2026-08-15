/**
 * Ponto de entrada do React.
 *
 * Aqui o componente principal é montado no elemento HTML com id "root".
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
