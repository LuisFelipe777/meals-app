import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextReceitaProvider } from './contexts/ContextReceita/ContextReceita'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextReceitaProvider>
      <App />
    </ContextReceitaProvider>
  </React.StrictMode>
)
