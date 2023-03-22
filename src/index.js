import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App' 
import TicTactoe from './Tic-Tac-toe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
    <TicTactoe />
  </React.StrictMode>
);
