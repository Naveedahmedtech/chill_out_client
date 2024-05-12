import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import NetworkStatus from './pages/NetworkStatus.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <NetworkStatus>
          <App />
        </NetworkStatus>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
