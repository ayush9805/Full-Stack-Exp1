// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Bootstrap MUST be first
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Your CSS MUST be second (so it can override Bootstrap)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)