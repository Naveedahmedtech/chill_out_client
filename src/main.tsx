import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import NetworkStatus from './pages/NetworkStatus.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
    <NetworkStatus>
        <App />
    </NetworkStatus>
      </ThemeProvider>
  </React.StrictMode>,
)
