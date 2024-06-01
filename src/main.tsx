import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import NetworkStatus from './pages/NetworkStatus';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LeiUu4pAAAAAKgNyLQ3dDMa_ZwJk-34ZJL36dDH">
      <Provider store={store}>
        <ThemeProvider>
          <NetworkStatus>
            <App />
          </NetworkStatus>
        </ThemeProvider>
      </Provider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
);
