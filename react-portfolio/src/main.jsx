import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
